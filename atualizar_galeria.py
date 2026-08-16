# -*- coding: utf-8 -*-
"""
Script de Extracao e Sincronizacao de Midias do Google Drive para galeria.json.
Suporta execucao manual via CLI com argparse e variaveis de ambiente do GitHub Actions.
"""

import os
import re
import json
import argparse
import requests

PASTA_PADRAO_INFO = "1wyh_XDZRirOJomxZG8ecJZj5Y1CNRx5r"

def extrair_dados_pasta(folder_id: str) -> list:
    url = f"https://drive.google.com/drive/folders/{folder_id}"
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36"
    }
    
    try:
        response = requests.get(url, headers=headers, timeout=20)
        if response.status_code != 200:
            print(f"Erro ao acessar pasta {folder_id}: HTTP {response.status_code}")
            return []
            
        html = response.text
        items = []
        
        # Regex para localizar IDs e tipos MIME na serializacao do Google Drive
        pattern = r'\[(?:null|"[^"]*"),"([A-Za-z0-9_-]{28,40})"\],null,null,null,"([^"]+)"'
        matches = re.finditer(pattern, html)
        
        for m in matches:
            file_id = m.group(1)
            mime_type = m.group(2)
            
            pos = m.start()
            chunk = html[pos:pos+2000]
            name_match = re.search(r'\["([^"]+)",\s*null,\s*1\]', chunk)
            name = name_match.group(1) if name_match else "Arquivo sem titulo"
            
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
    parser = argparse.ArgumentParser(description="Sincronizador manual de galeria do Google Drive")
    parser.add_argument("--folder-id", default=os.getenv("DRIVE_FOLDER_ID", PASTA_PADRAO_INFO), help="ID da pasta do Google Drive")
    parser.add_argument("--output", default="galeria.json", help="Arquivo JSON de destino")
    args = parser.parse_args()

    folder_id = args.folder_id or PASTA_PADRAO_INFO
    output_path = args.output

    print(f"Iniciando varredura da pasta Google Drive: {folder_id}")
    conteudo = extrair_dados_pasta(folder_id)
    print(f"Total de itens localizados na pasta raiz: {len(conteudo)}")

    itens_galeria = []

    for item in conteudo:
        if item["tipo"] == "folder":
            print(f"Explorando subpasta: {item['nome']} (ID: {item['id']})")
            sub_itens = extrair_dados_pasta(item["id"])
            for sub in sub_itens:
                if sub["tipo"] in ["imagem", "video"]:
                    itens_galeria.append({
                        "id": sub["id"],
                        "titulo": sub["nome"],
                        "tipo": sub["tipo"],
                        "categoria": item["nome"],
                        "url_drive": f"https://drive.google.com/file/d/{sub['id']}/view?usp=sharing",
                        "url_imagem": f"https://lh3.googleusercontent.com/d/{sub['id']}",
                        "url_video": f"https://drive.google.com/file/d/{sub['id']}/preview" if sub["tipo"] == "video" else ""
                    })
        elif item["tipo"] in ["imagem", "video"]:
            itens_galeria.append({
                "id": item["id"],
                "titulo": item["nome"],
                "tipo": item["tipo"],
                "categoria": "Geral",
                "url_drive": f"https://drive.google.com/file/d/{item['id']}/view?usp=sharing",
                "url_imagem": f"https://lh3.googleusercontent.com/d/{item['id']}",
                "url_video": f"https://drive.google.com/file/d/{item['id']}/preview" if item["tipo"] == "video" else ""
            })

    # Caso nao haja itens dinamicos extraidos via scraping, manter estrutura base preservando o json
    if itens_galeria:
        with open(output_path, "w", encoding="utf-8") as f:
            json.dump({"itens": itens_galeria}, f, indent=2, ensure_ascii=False)
        print(f"Arquivo {output_path} atualizado com sucesso contendo {len(itens_galeria)} itens.")
    else:
        print("Nenhum item novo encontrado ou pasta vazia/restrita. Mantendo estado atual.")

if __name__ == "__main__":
    main()
