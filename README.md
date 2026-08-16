# Meliponário Abelha Rainha

Este repositório contém a estrutura e os códigos do website institucional do **Meliponário Abelha Rainha**, um projeto voltado para a criação racional, conservação de espécies de abelhas nativas sem ferrão (ASF) e educação ambiental. O meliponário está localizado na exuberante região de **Petecaba**, na zona rural próxima ao município de **Candeias, Bahia**.

## 📍 Localização e Coordenadas
* **Região**: Petecaba, Candeias - Bahia
* **Coordenadas Geográficas**: [-12.677947, -38.448682](https://maps.google.com/?q=-12.677947,-38.448682)

---

## 🚀 Tecnologias Utilizadas
* **HTML5**: Estrutura semântica focada em SEO e acessibilidade.
* **CSS3 (Vanilla)**: Design premium responsivo (Mobile-First), sistema de variáveis nativas e suporte a alto contraste.
* **JavaScript (Moderno ES6+)**: Funcionalidades de acessibilidade, carrossel/lightbox de fotos e integração dinâmica com mapas.
* **Leaflet.js & OpenStreetMap**: Solução de código aberto, leve e de custo zero para renderização de mapas interativos sem dependência de chaves de API proprietárias.

---

## ♿ Recursos de Acessibilidade (WCAG / LBI)
O website foi projetado com foco em inclusão digital, dispondo de:
1. **Controles de Escala de Fonte**: Botões no cabeçalho superior para aumentar (`A+`) ou diminuir (`A-`) a tipografia dinamicamente.
2. **Modo de Alto Contraste**: Suporte completo a cores contrastantes para usuários com baixa visão ou fotofobia, ativado por meio do botão correspondente com persistência via `localStorage`.
3. **Semântica Estruturada**: Uso correto de tags como `header`, `nav`, `main`, `section`, `article`, `footer` e rótulos descritivos `aria-label` para leitores de tela.
4. **Navegação por Teclado**: Foco visual claro (`:focus-visible`) para navegação sequencial sem o uso de mouse.

---

## 📂 Estrutura do Projeto
```text
Meliponário Abelha Rainha/
├── assets/ (Opcional - mídia organizada)
├── index.html - Página principal do site com estrutura semântica
├── style.css  - Folha de estilos responsiva com tokens e alto contraste
├── script.js  - Lógica para menu mobile, acessibilidade, lightbox e mapa Leaflet
├── README.md  - Documentação do projeto e histórico de atualizações
└── [Arquivos originais de mídia do WhatsApp]
```

---

## Log de Atualizações (Changelog)

### 16/08/2026 - Módulo 10: Reestruturação Científica de Abelhas, Remapeamento de História e Saneamento da Página Inicial
- **Página Inicial (`index.html`)**:
  * Substituída a imagem no card de Jataí pelo logotipo oficial `LOGO.png`, eliminando a imagem trocada.
  * Ajustada a grade de prévia da galeria inicial para 3 registros essenciais representativos do sítio com link direto para o acervo completo em `galeria.html`.
- **Página Nossa História (`historia.html`)**:
  * `O Santuário das Abelhas Nativas`: Atualizado para `iframe` com ID `1X5n4clNCxGi0oDVr66qbdarkEmsWf6wh`.
  * `O Começo em 2018 (Homenagem a Fábio Barbosa)`: Atualizada a imagem de Fábio para a CDN oficial com ID `1BHCTEiyAi05cRWSLnnUpyt4Xraeqz38E`.
  * `Educação Socioambiental (Capacitação de Meliponicultores)`: Atualizado o vídeo para o `iframe` oficial com ID `1ctt-bMcDcSqxJcyqtl_n6zNUsL8UKokg`.
  * Cards de Navegação: Substituída a imagem do card de `Manufatura e Cutelaria` pela logo `LOGO.png`.
- **Página Nossas Abelhas (`abelhas.html`)**:
  * Removidas todas as fotos e reprodutores de vídeo.
  * Conteúdo integralmente reestruturado em blocos de design editorial/científico com foco em biologia da colônia, acomodação térmica, arquitetura de ninho, polinização especializada e método de extração a frio do mel.
  * Cards de rodapé padronizados com o logotipo `LOGO.png`.

### 16/08/2026 - Módulo 9: Diagnóstico e Correção de Streaming de Vídeos com Iframes e Remapeamento Factual
- **Diagnóstico Técnico de Reprodução de Vídeo**: Identificada a causa da não reprodução de vídeos nas tags `<video>` (ausência de suporte do Google Drive a requisições de intervalo *HTTP 206 Partial Content* e *Byte-Range Requests*).
- **Substituição por Iframes de Streaming Oficial**: Atualizados todos os blocos de vídeo de `manufatura.html`, `historia.html`, `abelhas.html` e `galeria.html` para contêineres responsivos `.video-wrapper` alimentados por `<iframe>` com `https://drive.google.com/file/d/[ID]/preview`, utilizando o player oficial do Google Drive com transcodificação e streaming contínuo.
- **Remapeamento Exato dos Vídeos de Manufatura**:
  * `Construção com Cumaru de Demolição`: Atualizado para ID `1ueqQZO3jolupJ6MWXLJvnFzUvTlGoBQm`.
  * `Ergonomia e Resistência Campesina`: Atualizado para ID `1fiQKxpspzuKa6CwVx0HmAyU27Sehc4z6`.
  * `Reciclagem PET: Mudas em Garrafas PET`: Atualizado para ID `1IEeZU8czUFTiMC5qykIhrxWZYCj451pY`.
  * `Viveiro Melípona: Produção de Mudas Nativas`: Atualizado para ID `1_9Ierko25xjMDhnJsIfq0Y9x6OMhCAaA`.
  * `Invento de Luís Sérgio: Descascador de Coco em Aço`: Atualizado para ID `1dKMaEvIhN4A3RxZ1OHkrU-v-e-myX193`.
- **Saneamento e Acessibilidade**: Removidos links residuais de brindes nos rodapés de todas as páginas e padronizada a pontuação formal e a acentuação em pt-BR.

### 16/08/2026 - Módulo 8: Refinamento Estrutural, Proteção de Imagens e Foco Institucional
- **Remoção do Hero Bento Grid**: Excluído o painel de quatro cards de estatísticas no banner inicial de `index.html` e descontinuada a rotina de animação de números associada em `script.js`.
- **Padronização Visual das Espécies**: Aplicadas as imagens oficiais em alta definição via CDN Google Drive para Uruçu Nordestina e Jataí, e o logotipo oficial `LOGO.png` para a Mandaçaia nos cards e no modal biológico interativo.
- **Remoção de Links Externos do Drive**: Removidos os botões direcionadores para pastas do Google Drive em `index.html` e `galeria.html`, centralizando a visualização de mídias nativamente dentro do portal.
- **Proteção do Acervo Visual contra Download**: Implementadas regras de bloqueio de arrasto de imagens no CSS (`user-drag: none; user-select: none;`) e bloqueio de menu de contexto (`contextmenu`) no JavaScript.
- **Desindexação da Página de Brindes**: Removidos os links de `brindes.html` nos menus de navegação de todas as páginas e do `sitemap.xml`, mantendo o arquivo no repositório para implementações futuras.
- **Readequação do Atendimento**: Removido o simulador de encomendas e ajustada a seção de contato para foco em atendimento direto, dúvidas biológicas, agendamento de visitas ecológicas em Petecaba e cursos de manejo.

### 16/08/2026 - Módulo 7: Resolução Definitiva de Carregamento de Mídias via CDN Google Drive
- **Mapeamento Automatizado de IDs**: Extração direta dos identificadores exclusivos de todos os 20 arquivos da pasta pública do Google Drive (`1wyh_XDZRirOJomxZG8ecJZj5Y1CNRx5r`).
- **Carregamento Direto por CDN Global**: Atualizados os atributos `src` e `poster` de `historia.html`, `abelhas.html`, `manufatura.html`, `galeria.html` e `index.html` para as URLs de alta velocidade do Google (`https://lh3.googleusercontent.com/d/[ID]`), garantindo exibição instantânea das fotos e vídeos em qualquer ambiente de hospedagem.
- **Engine de Resiliência em `script.js`**: Implementada a função `inicializarResilienciaMidias()` que monitora falhas de carregamento e chaveia dinamicamente entre a CDN do Google Drive e arquivos locais.

### 16/08/2026 - Módulo 6: Motor de Sincronização de Mídias em Regime Estritamente Manual
- **Workflow Manual Parametrizado (`.github/workflows/atualizar_galeria.yml`)**: Desativados todos os agendamentos automáticos por cron e gatilhos de push. A sincronização de imagens e vídeos do Google Drive passou a ser acionada exclusivamente sob demanda via `workflow_dispatch`.
- **Flexibilidade de Entradas**: Adicionados inputs configuráveis no GitHub Actions para definir o ID da pasta do Drive (`pasta_drive_id`, padrão `1wyh_XDZRirOJomxZG8ecJZj5Y1CNRx5r`) e opção de forçar recriação de `galeria.json`.
- **Refatoração com Argparse (`atualizar_galeria.py`)**: Script Python atualizado para processar parâmetros via linha de comando e variáveis de ambiente com suporte a UTF-8 puro.

### 📅 16/08/2026 - Módulo 5: Arquitetura Multi-Páginas (MPA) e Integração do Acervo Multimídia
- **Página Nossa História (`historia.html`)**: Narrativa biográfica completa de Gabriel Ulisses Barbosa, a homenagem pioneira a Fábio Barbosa (incentivador de 2018), as 2 primeiras caixas e a expansão para mais de 200 colônias, integrando os vídeos `info/O espaço.mp4` e `info/Curso de formação de novos criadores.mp4`.
- **Página Nossas Abelhas (`abelhas.html`)**: Catálogo detalhado das espécies Uruçu Nordestina (*Melipona scutellaris*), Jataí (*Tetragonisca angustula*) e Mandaçaia (*Melipona quadrifasciata*), com os vídeos `info/uruçu na flor de melaleuca.mp4` e `info/Mandaçaia.mp4`.
- **Página Manufatura & Cutelaria (`manufatura.html`)**: O ateliê ecológico de Luís Sérgio, transformando madeiras nobres de demolição (Cumaru, Pau-d'Arco, Pau-Rosa, Angelim) em caixas racionais térmicas e cercas do sítio, além de facas artesanais forjadas à mão (`info/Luis Sergio - facas artesanais.mp4`, `info/Luis Sergio - facas artesanais 02.mp4` e `info/Momento descontração - Removedor de casca de coco, criação de metalurgia de Luis Sergio.mp4`).
- **Página Galeria Multimídia (`galeria.html`)**: Mural interativo completo com fotos em alta definição e players integrados para todos os vídeos da pasta `info/`.
- **Navegação Global e SEO**: Atualizados `index.html`, `style.css` e `sitemap.xml` garantindo conformidade com WCAG 2.1 AAA.

### 📅 15/08/2026 - Módulo 4: Cockpit de Encomendas no WhatsApp e Síntese de Voz Web Speech API
- **Cockpit de Encomendas Sustentáveis**: Implementado seletor interativo de produtos artesanais (Méis puros de Uruçu/Jataí/Mandaçaia, Extrato de Própolis ASF, Caixas INPA e Visitas Ecológicas) com montagem e disparo automático de mensagem formatada para o WhatsApp de Gabriel Ulisses Barbosa (`71 99272-4330`).
- **Leitor de Voz Nativo (Web Speech API)**: Integrados botões "Ouvir Espécie" nos cards da Uruçu, Mandaçaia e Jataí utilizando a API nativa do navegador para leitura em áudio pt-BR.
- **Acessibilidade Universal**: Adicionados estilos responsivos e suporte completo ao modo de Alto Contraste AAA para o Cockpit de Encomendas.

### 📅 15/08/2026 - Módulo 3: Mapa com Rotas Waze/Google Maps e Calendário de Floração Melífera
- **Calendário Sazonal de Floração na Bahia**: Implementado o grid com as estações de pasto apícola em Petecaba (*Assa-peixe no Outono/Inverno*, *Aroeira-mansa na Primavera* e *Frutíferas Silvestres no Verão*).
- **Rotas Diretas e Geolocalização**: Adicionados botões diretos para abertura de rotas no **Google Maps** e **Waze** na seção de localização.
- **Camada Rica de Pontos no Leaflet.js**: Enriquecidos os popups com informações detalhadas e adicionado o marcador ecológico da *Trilha da Floração e Pasto Apícola*.

### 📅 15/08/2026 - Módulo 2: Catálogo Sensorial de Espécies ASF e Guia do Meliponicultor Iniciante
- **Catálogo Sensorial de Méis Artesanais**: Implementadas barras dinâmicas de perfil sensorial (Doçura, Acidez Floral, Fluidez e Compostos Bioativos) nos cards de cada espécie de abelha nativa sem ferrão (Uruçu Nordestina, Mandaçaia e Jataí).
- **Guia do Meliponicultor Iniciante**: Criada a seção interativa no portal recomendando a espécie adequada para cada perfil de espaço físico (Varandas/Jardins Urbanos, Quintais Sombreados e Chácaras/Sítios).
- **Estilização e Conformidade**: Adicionadas as classes `.sensorial-profile`, `.metric-bar`, `.metric-fill` e `.beginner-guide-grid` em `style.css` com total suporte a contraste acessível.

### 📅 15/08/2026 - Módulo 1: Atmosfera Biophilia, Hero Bento de Impacto e Tokens de Preservação
- **Hero Bento Grid de Impacto Ecológico**: Implantado o painel bento tátil no Hero (`.hero-bento-grid`) com 4 cartões de métricas ambientais (*100% Nativas*, *Mata Atlântica de Petecaba*, *+1.500 Flores/Plantas Visitadas* e *Caixas Modulares Racionais INPA*).
- **Estética Biophilia e Efeitos Orgânicos**: Refinados os tokens de cores no `style.css` com bordas translúcidas de mel âmbar, sombras suaves e efeito de vidro orgânico (*Organic Glassmorphism*).
- **Contadores Dinâmicos Suaves**: Integrada a rotina `inicializarHeroBento()` em `script.js` com `IntersectionObserver` e interpolação cúbica suave para contagem animada das métricas ecológicas ao entrar em tela.

### 📅 17/07/2026 - Geração de Mockups Reais Integrados via IA e Recompilação do Manual em PDF
- 🖼️ **Mockups Fotorrealistas por IA**: Substituídos todos os mockups anteriores feitos via Pillow (caneca/camiseta, boné/canetas, carro/celular, outdoor) por novas imagens fotorrealistas geradas do zero por IA, integrando organicamente o logotipo dourado oficial da abelha sem ferrão coroada e a tipografia nos itens de forma nativa e profissional.
- 📄 **Recompilação do PDF**: Executado o pipeline de compilação em Python para gerar a versão atualizada do [Manual da Marca - Meliponário Abelha Rainha.pdf](file:///G:/Meu%20Drive/APP/2.%20Projetos%20e%20Aplica%C3%A7%C3%B5es/2.2%20Aplica%C3%A7%C3%B5es%20e%20C%C3%B3digos%20(GitHub)/Melipon%C3%A1rio%20Abelha%20Rainha/Manual%20de%20Marca/Manual%20da%20Marca%20-%20Melipon%C3%A1rio%20Abelha%20Rainha.pdf) com as novas aplicações de alta fidelidade visual.
- 💳 **Cartão de Visitas Sincronizado**: Re-gerada a arte 2D oficial do cartão de visitas com os dados corretos do proprietário Ulisses Barbosa e seu WhatsApp de atendimento ativo do site.

### 📅 17/07/2026 - Vinculação com Google Drive na Galeria de Mídias, Filtro de Categorias, Script Python e GitHub Actions
- 💾 **Integração com Google Drive**: Implementada a extração e conversão automática de IDs de mídias a partir de links de compartilhamento público de leitura do Google Drive.
- 🏷️ **Filtro de Categorias por Subpasta**: Adicionado suporte para exibir botões de filtros na galeria dinamicamente com base nas subpastas da pasta principal do Drive (ex: "Fotos", "Vídeos", "Região da Petecaba"), com efeito fade-in animado premium na reordenação dos itens.
- 🖼️ **Iframe no Lightbox**: Adicionado suporte ao elemento `<iframe>` no modal lightbox do site para permitir a reprodução direta e fluida de vídeos compartilhados via Google Drive.
- 🐍 **Automação de Mídias (Python)**: Criado o script [atualizar_galeria.py](file:///G:/Meu%20Drive/APP/2.%20Projetos%20e%20Aplica%C3%A7%C3%B5es/2.2%20Aplica%C3%A7%C3%B5es%20e%20C%C3%B3digos%20(GitHub)/Melipon%C3%A1rio%20Abelha%20Rainha/atualizar_galeria.py) que faz o crawling anônimo da pasta do Drive do usuário, detecta subpastas como categorias e atualiza automaticamente o arquivo [galeria.json](file:///G:/Meu%20Drive/APP/2.%20Projetos%20e%20Aplica%C3%A7%C3%B5es/2.2%20Aplica%C3%A7%C3%B5es%20e%20C%C3%B3digos%20(GitHub)/Melipon%C3%A1rio%20Abelha%20Rainha/galeria.json) com as imagens e vídeos reais.
- 🐙 **Workflow GitHub Actions**: Criado o workflow [.github/workflows/atualizar_galeria.yml](file:///G:/Meu%20Drive/APP/2.%20Projetos%20e%20Aplica%C3%A7%C3%B5es/2.2%20Aplica%C3%A7%C3%B5es%20e%20C%C3%B3digos%20(GitHub)/Melipon%C3%A1rio%20Abelha%20Rainha/.github/workflows/atualizar_galeria.yml) para rodar o script Python periodicamente de forma gratuita na nuvem e atualizar o site sem intervenção manual.
- 🎨 **Identidade Visual Refinada (Manual de Marca)**: Aplicada a paleta de cores oficial refinada contendo tons de *Mel Orgânico* (`#D4A574`), *Café Orgânico* (`#2D2416`), *Verde Floresta* (`#6B8E5F`) e *Verde Oliva Suave* (`#8FA876`), melhorando a harmonia estética, o contraste e a coesão visual com a Mata Atlântica e a preservação ambiental.
- 📐 **Melhorias de Layout (UI/UX)**: Aumentados os paddings de seções (`120px` de respiro) para melhor respiro visual, ampliados os border-radius dos cards (`24px`), itens de galeria (`20px`) e mapa (`20px`), e refinado o gradiente do banner de citação e do overlay do Hero.
- 🏷️ **Logotipo Oficial**: Integrado o logotipo oficial `LOGO.png` no cabeçalho do portal, e criados novos mockups calibrados de alta fidelidade com a abelha sem ferrão e coroa dourada oficial.
- 💻 **Simulador de Brindes Interativo (Offline)**: Criada a página isolada [brindes.html](file:///G:/Meu%20Drive/APP/2.%20Projetos%20e%20Aplica%C3%A7%C3%B5es/2.2%20Aplica%C3%A7%C3%B5es%20e%20C%C3%B3digos%20(GitHub)/Melipon%C3%A1rio%20Abelha%20Rainha/brindes.html) contendo o simulador interativo de brindes e papelaria oficial 3D (caneca, camiseta personalizável, boné e cartão de visitas) com dados do proprietário Ulisses Barbosa, destinada à avaliação interna de e-commerce futuro.
- 🌳 **Conservação Ambiental e Guia de Plantio**: Adicionada a seção `#conservacao` (*Plantando para as Abelhas Nativas*) no portal principal com cards estruturados contendo as principais espécies vegetais de floração melífera da Mata Atlântica (Assa-peixe, Aroeira-mansa e Manjericão) para estimular o repovoamento de meliponíneos.
- 📄 **PDF do Manual de Marca**: Gerado por programação o documento PDF oficial unificado [Manual da Marca - Meliponário Abelha Rainha.pdf](file:///G:/Meu%20Drive/APP/2.%20Projetos%20e%20Aplica%C3%A7%C3%B5es/2.2%20Aplica%C3%A7%C3%B5es%20e%20C%C3%B3digos%20(GitHub)/Melipon%C3%A1rio%20Abelha%20Rainha/Manual%20de%20Marca/Manual%20da%20Marca%20-%20Melipon%C3%A1rio%20Abelha%20Rainha.pdf) na pasta do Drive do usuário, contendo a nova seção de *Diretriz Biológica de Design (Meliponíneos)*, a arte final 2D oficial do cartão de visitas com dados reais, as diretrizes técnicas de cores e as regras de coesão de marca para gráfica.
- 📞 **Contato Exclusivo via WhatsApp**: Removido o formulário de contato simulado e redesenhada toda a seção de contato (`#contato`) para focar exclusivamente no atendimento direto e premium via WhatsApp com Ulisses Barbosa.
- ⚙️ **Configuração de Origem Dinâmica**: Modificado o [script.js](file:///G:/Meu%20Drive/APP/2.%20Projetos%20e%20Aplica%C3%A7%C3%B5es/2.2%20Aplica%C3%A7%C3%B5es%20e%20C%C3%B3digos%20(GitHub)/Melipon%C3%A1rio%20Abelha%20Rainha/script.js) para carregar a galeria a partir do `galeria.json` local dinâmico gerado.
- 🔤 **Alinhamento Tipográfico**: Configurado o alinhamento justificado (`text-align: justify`) para todos os parágrafos de texto corrido principais, preservando o alinhamento estético original nos blocos do Hero, rodapé e banners de citações.
- 📝 **Guia de Integração**: Atualizado o documento explicativo [COMO_CONFIGURAR_GOOGLE_DRIVE.md](file:///G:/Meu%20Drive/APP/2.%20Projetos%20e%20Aplica%C3%A7%C3%B5es/2.2%20Aplica%C3%A7%C3%B5es%20e%20C%C3%B3digos%20(GitHub)/Melipon%C3%A1rio%20Abelha%20Rainha/COMO_CONFIGURAR_GOOGLE_DRIVE.md) com as novas instruções de categorização por subpastas e o código do Apps Script revisado.

### 📅 16/07/2026 - Carrossel de Mídias, Detalhes das Espécies, Citação do Sr. Ulisses e Configuração de Domínio
- 🌐 **Domínio Personalizado (Registro.br & GitHub Pages)**: Criado o arquivo `CNAME` na raiz para apontar o domínio `meliponario-abelha-rainha.com.br` e revisada toda a estrutura de caminhos relativos de mídias para compatibilidade imediata.
- ✍️ **Citação Senhor Ulisses**: Criado um banner decorativo de citação (`.quote-banner`) com gradiente e trama de colmeia no fluxo da página, contendo a citação tradicional do Sr. Ulisses sobre o dever ecológico do plantio.
- 🖼️ **Galeria & Lightbox**: Integrado o vídeo de manejo na galeria com indicador visual de play. Adicionado suporte a carrossel (botões anterior/próximo e navegação por teclado com setas esquerda/direita) e reprodução de vídeo nativo no lightbox.
- 🐝 **Abelhas Sem Ferrão (ASF)**: Implementado modal de detalhes para as espécies (Uruçu, Mandaçaia e Jataí) contendo informações biológicas estruturadas e botão de contato personalizado via WhatsApp direto para Gabriel Ulisses.
- 🔤 **Revisão Ortográfica & Acessibilidade**: Corrigido o termo "active" para "ativa" (card Jataí), capitalizada a grafia de "Mata Atlântica" e garantida a acessibilidade de foco e alto contraste em todos os novos elementos.
- 📱 **Validação de Grid & Sintaxe**: Auditada a integridade sintática e responsividade das colunas em smartphones, tablets e desktops (evitando sobreposições ou quebras).
- 📞 **Canais de Contato & WhatsApp**: Removido o e-mail de contato inexistente do painel e atualizados todos os links de WhatsApp (no formulário de atendimento, modais de espécies e no botão flutuante) para o número ativo de Ulisses (`71 99272-4330`) com a mensagem pré-escrita: *"Vim pelo Site, queria mais informações.."*.
- 🎨 **Marca & Identidade**: Alterada a exibição do nome da marca no cabeçalho e rodapé de *"Abelha Rainha"* para *"Meliponário Abelha Rainha"*, mantendo a assinatura visual *"Por Ulisses Barbosa"*.*

### 📅 16/07/2026 - Tipografia e Assinatura Visual 'Por Ulisses Barbosa'
- 🔤 **Tipografia / Logo**: Importada a fonte clássica *Playfair Display* e criado o layout tipográfico em destaque para a marca "Meliponário Abelha Rainha".
- ✍️ **Assinatura**: Adicionado o subtítulo "Por Ulisses Barbosa" logo abaixo do nome em destaque na barra de navegação, na seção Hero e no rodapé.

### 📅 16/07/2026 - Ajuste de Marca e Assinatura
- 🎨 **Cores / Branding**: Removida a paleta de cores institucional do IF Baiano e implementada a paleta própria do Meliponário Abelha Rainha (mel, própolis e terra).
- 🧑‍🌾 **Conteúdo**: Adicionado Gabriel Ulisses Barbosa como o proprietário oficial do meliponário.
- 🐕 **Mascote & Assinatura**: Adicionada a assinatura de desenvolvimento da YLuna85 LABs e a imagem/crédito da mascote Bolinho de Chuva no rodapé do site.

### 📅 16/07/2026 - Estruturação Inicial do Site
* 📂 **Estrutura / Inicialização**: Criado o escopo básico do site institucional para o Meliponário Abelha Rainha.
* 🌐 **HTML / Semântica**: Implementada a estrutura semântica de `index.html` com cabeçalho, hero banner, história, espécies nativas, galeria de mídias, mapa de localização e formulário de contato.
* 🎨 **CSS / UI**: Desenvolvido o sistema de design em `style.css` utilizando variáveis CSS, layout fluido (Mobile-First) e estilizações para o modo de Alto Contraste.
* ⚙️ **JS / Acessibilidade & Mapa**: Escrito o comportamento interativo em `script.js`, incluindo o redimensionamento de fonte global, alternador de contraste, menu hambúrguer responsivo, lightbox para mídias e inicialização do mapa com Leaflet.js.
