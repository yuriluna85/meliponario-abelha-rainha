import requests
import re
import json
import os

def extrair_dados_pasta(folder_id):
    url = f"https://drive.google.com/drive/folders/{folder_id}"
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    }
    
    try:
        response = requests.get(url, headers=headers)
        if response.status_code != 200:
            print(f"Erro ao acessar pasta {folder_id}: {response.status_code}")
            return []
            
        html = response.text
        items = []
        
        # Regex para achar arquivos e pastas com base na serialização do Google Drive
        pattern = r'\[(?:null|"[^"]*"),"([A-Za-z0-9_-]{28,40})"\],null,null,null,"([^"]+)"'
        matches = re.finditer(pattern, html)
        
        for m in matches:
            file_id = m.group(1)
            mime_type = m.group(2)
            
            # Localiza o nome correspondente nos 2000 caracteres seguintes
            pos = m.start()
            chunk = html[pos:pos+2000]
            name_match = re.search(r'\["([^"]+)",\s*null,\s*1\]', chunk)
            name = name_match.group(1) if name_match else "Sem título"
            
            if mime_type == "application/vnd.google-apps.folder":
                items.append({
                    "id": file_id,
                    "nome": name,
                    "tipo": "folder",
                    "mime": mime_type
                })
            elif mime_type.startswith("image/") or mime_type.startswith("video/"):
                items.append({
                    "id": file_id,
                    "nome": name,
                    "tipo": "video" if mime_type.startswith("video/") else "imagem",
                    "mime": mime_type
                })
                
        unique_items = []
        seen = set()
        for item in items:
            if item["id"] not in seen:
                seen.add(item["id"])
                unique_items.append(item)
                
        return unique_items
    except Exception as e:
        print(f"Erro no scraping da pasta {folder_id}: {str(e)}")
        return []

def main():
    raiz_id = "13_gxXff5FsT2J2Dx0vzWUCNunA7WuPrV"
    print("Iniciando varredura da pasta raiz do Google Drive...")
    subpastas = extrair_dados_pasta(raiz_id)
    
    if not subpastas:
        print("Nenhuma pasta ou arquivo encontrado na raiz.")
        return
        
    galeria_itens = []
    
    # Varre cada subpasta encontrada
    for sub in subpastas:
        if sub["tipo"] == "folder":
            print(f"Lendo subpasta '{sub['nome']}' ({sub['id']})...")
            arquivos = extrair_dados_pasta(sub["id"])
            print(f"-> Encontrados {len(arquivos)} arquivos.")
            
            for arq in arquivos:
                if arq["tipo"] != "folder":
                    nome_arquivo = arq["nome"]
                    # Oculta nomes de arquivos genéricos contendo "whatsapp"
                    if "whatsapp" in nome_arquivo.lower():
                        titulo_limpo = ""
                    else:
                        titulo_limpo = nome_arquivo.rsplit(".", 1)[0]
                        titulo_limpo = titulo_limpo.replace("-", " ").replace("_", " ").title()
                    
                    galeria_itens.append({
                        "titulo": titulo_limpo,
                        "descricao": "",
                        "url": f"https://drive.google.com/file/d/{arq['id']}/view?usp=sharing",
                        "tipo": arq["tipo"],
                        "alt": nome_arquivo,
                        "categoria": sub["nome"]
                    })
                    
    if galeria_itens:
        # Salva o arquivo galeria.json na pasta do projeto
        caminho_saida = os.path.join(os.path.dirname(os.path.abspath(__file__)), "galeria.json")
        with open(caminho_saida, "w", encoding="utf-8") as f:
            json.dump(galeria_itens, f, indent=2, ensure_ascii=False)
        print(f"Galeria atualizada com sucesso em '{caminho_saida}'. total de mídias: {len(galeria_itens)}.")
    else:
        print("Nenhum item de mídia foi encontrado nas subpastas.")

if __name__ == "__main__":
    main()
