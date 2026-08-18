# 🐝 Como Vincular a Galeria ao Google Drive (Meliponário Abelha Rainha)

Este guia ensina a alimentar a galeria de imagens e vídeos do site diretamente a partir de uma pasta pública do seu **Google Drive**.

Existem duas maneiras de fazer isso: **Modo Local (Recomendado pela simplicidade)** e **Modo Automático (Sincronização via API de Pasta)**.

---

## 🛠️ Método 1: Modo Local (HTML ou JSON) - Super Simples

O site possui um sistema que **converte automaticamente** links normais de compartilhamento do Google Drive em links prontos para o site.

### Passo 1: Pegar o link de compartilhamento no Google Drive
1. Clique com o botão direito na imagem ou vídeo dentro do seu Google Drive.
2. Vá em **Compartilhar** -> **Compartilhar**.
3. Em "Acesso geral", mude de *Restrito* para **Qualquer pessoa com o link**.
4. Defina a permissão como **Leitor**.
5. Clique em **Copiar link**. 
   * (O link será parecido com: `https://drive.google.com/file/d/1A2B3C4D5E6F.../view?usp=sharing`)

### Passo 2: Adicionar ao código
Você pode colocar esse link diretamente no seu `index.html` ou configurar no arquivo `galeria.json`.

#### Opção A: Direto no HTML (`index.html`)
Abra o arquivo [index.html](file:///G:/Meu%20Drive/APP/2.%20Projetos%20e%20Aplica%C3%A7%C3%B5es/2.2%20Aplica%C3%A7%C3%B5es%20e%20C%C3%B3digos%20(GitHub)/Meliponário%20Abelha%20Rainha/index.html) e substitua a imagem/vídeo local pelo link do drive:
* **Para fotos:**
  ```html
  <div class="gallery-item">
    <img src="COLE_O_LINK_DO_GOOGLE_DRIVE_AQUI">
    ...
  ```
* **Para vídeos:**
  ```html
  <div class="gallery-item gallery-item-video" data-video="COLE_O_LINK_DO_VIDEO_DO_DRIVE_AQUI">
    <img src="COLE_O_LINK_DA_FOTO_DE_CAPA_DO_DRIVE_AQUI">
    ...
  ```

#### Opção B: Via JSON (`galeria.json` e alteração no `script.js`)
1. Abra o arquivo [script.js](file:///G:/Meu%20Drive/APP/2.%20Projetos%20e%20Aplica%C3%A7%C3%B5es/2.2%20Aplica%C3%A7%C3%B5es%20e%20C%C3%B3digos%20(GitHub)/Meliponário%20Abelha%20Rainha/script.js).
2. Mude a linha `origem: 'local'` para `origem: 'json'`.
3. Configure as mídias no arquivo [galeria.json](file:///G:/Meu%20Drive/APP/2.%20Projetos%20e%20Aplica%C3%A7%C3%B5es/2.2%20Aplica%C3%A7%C3%B5es%20e%20C%C3%B3digos%20(GitHub)/Meliponário%20Abelha%20Rainha/galeria.json) inserindo os links de compartilhamento.

---

## ⚡ Método 2: Modo Automático (Sincronização por Pasta do Drive)

Neste método, **qualquer imagem ou vídeo que você colocar dentro de uma pasta específica do Google Drive aparecerá automaticamente no site**, sem que você precise alterar uma única linha de código do site no futuro!

Isso é feito usando o **Google Apps Script** (um serviço gratuito do próprio Google).

### Passo 1: Criar e Configurar a Pasta no Google Drive
1. Crie uma pasta principal no seu Google Drive (ex: `Galeria Abelha Rainha`).
2. Dentro dessa pasta principal, crie as subpastas que representarão as categorias no site (ex: `Fotos`, `Vídeos`, `Região da Petecaba`).
3. Compartilhe a pasta principal: clique com o botão direito nela, escolha **Compartilhar** -> **Compartilhar** e configure o acesso geral como **Qualquer pessoa com o link** em modo **Leitor** (isso tornará os arquivos e subpastas legíveis pelo site).
4. Copie o **ID da pasta principal** que aparece na URL do seu navegador ao abrir a pasta.
   * Exemplo: Para a pasta `https://drive.google.com/drive/folders/13_gxXff5FsT2J2Dx0vzWUCNunA7WuPrV`, o ID é `13_gxXff5FsT2J2Dx0vzWUCNunA7WuPrV`.

### Passo 2: Criar o Google Apps Script
1. Acesse o [Google Apps Script](https://script.google.com/) com a sua conta Google.
2. Clique em **Novo Projeto**.
3. Cole o código abaixo na janela do editor (substituindo todo o conteúdo original):

```javascript
function doGet() {
  // ⚠️ SUBSTITUA PELO ID DA SUA PASTA PRINCIPAL DO GOOGLE DRIVE
  const ID_DA_PASTA_RAIZ = 'SEU_ID_DE_PASTA_AQUI'; 
  
  try {
    const pastaRaiz = DriveApp.getFolderById(ID_DA_PASTA_RAIZ);
    const subpastas = pastaRaiz.getFolders();
    const resultado = [];
    
    // 1. Processa arquivos soltos na pasta raiz (sem subpasta) como categoria "Geral"
    const arquivosRaiz = pastaRaiz.getFiles();
    while (arquivosRaiz.hasNext()) {
      const arquivo = arquivosRaiz.next();
      adicionarArquivo(arquivo, 'Geral', resultado);
    }
    
    // 2. Processa os arquivos de cada subpasta. O nome da subpasta vira a categoria!
    while (subpastas.hasNext()) {
      const subpasta = subpastas.next();
      const categoria = subpasta.getName();
      const arquivosSub = subpasta.getFiles();
      
      while (arquivosSub.hasNext()) {
        const arquivo = arquivosSub.next();
        adicionarArquivo(arquivo, categoria, resultado);
      }
    }
    
    // Retorna a lista como JSON
    return ContentService.createTextOutput(JSON.stringify(resultado))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (erro) {
    return ContentService.createTextOutput(JSON.stringify({ erro: erro.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function adicionarArquivo(arquivo, categoria, resultado) {
  const nome = arquivo.getName();
  const mimeType = arquivo.getMimeType();
  const url = arquivo.getUrl();
  const descricao = arquivo.getDescription() || "";
  
  let tipo = 'imagem';
  if (mimeType.startsWith('video/')) {
    tipo = 'video';
  }
  
  resultado.push({
    titulo: nome.split('.')[0], // Remove a extensão do arquivo (ex: .png) do título
    descricao: descricao,
    url: url,
    tipo: tipo,
    alt: nome,
    categoria: categoria // Categoria automática baseada na subpasta!
  });
}
```

4. Substitua `'SEU_ID_DE_PASTA_AQUI'` pelo ID real da sua pasta principal do Google Drive.
5. Clique no ícone de disquete (Salvar).

### Passo 3: Publicar como Aplicativo Web
1. No topo superior direito, clique em **Implantar** -> **Nova implantação**.
2. Clique no ícone de engrenagem ao lado de "Selecionar tipo" e escolha **Aplicativo Web**.
3. Preencha as configurações:
   * **Descrição**: API da Galeria do Meliponário
   * **Executar como**: Eu (seu_email@gmail.com)
   * **Quem tem acesso**: Qualquer pessoa (ou *Anyone*, mesmo sem conta Google)
4. Clique em **Implantar**.
5. Se for solicitado, clique em **Autorizar acesso** e dê permissão para o script ler os arquivos do seu Drive.
6. Copie a **URL do Aplicativo Web** gerada.
   * (O link será parecido com: `https://script.google.com/macros/s/AKfycb.../exec`)

### Passo 4: Conectar ao Site
1. Abra o arquivo [script.js](file:///G:/Meu%20Drive/APP/2. Projetos e Aplicações/2.2 Aplicações e Códigos (GitHub)/Meliponário%20Abelha%20Rainha/script.js).
2. Configure o `CONFIG_GALERIA` assim:
```javascript
const CONFIG_GALERIA = {
  origem: 'api', 
  url: 'SUA_URL_DO_APLICATIVO_WEB_AQUI'
};
```
3. Salve o arquivo e publique o site.
4. **Pronto!** A partir de agora, qualquer subpasta que você criar (ex: `Fotos`, `Vídeos`, `Região da Petecaba`) virará um botão de filtro dinâmico na galeria do site, e todos os arquivos contidos nelas serão categorizados e exibidos automaticamente com efeito fade-in premium!
   * **Dica:** Você pode adicionar descrições personalizadas para cada mídia clicando com o botão direito nela no Google Drive, escolhendo **Informações do arquivo** -> **Detalhes** e escrevendo na caixa de descrição. O site lerá essa informação dinamicamente para usar na legenda do lightbox!
