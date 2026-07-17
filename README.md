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

## 📜 Log de Atualizações (Changelog)

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
