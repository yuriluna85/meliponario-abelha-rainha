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

### 📅 16/07/2026 - Carrossel de Mídias, Detalhes das Espécies, Citação do Sr. Ulisses e Configuração de Domínio
- 🌐 **Domínio Personalizado (Registro.br & GitHub Pages)**: Criado o arquivo `CNAME` na raiz para apontar o domínio `meliponario-abelha-rainha.com.br` e revisada toda a estrutura de caminhos relativos de mídias para compatibilidade imediata.
- ✍️ **Citação Senhor Ulisses**: Criado um banner decorativo de citação (`.quote-banner`) com gradiente e trama de colmeia no fluxo da página, contendo a citação tradicional do Sr. Ulisses sobre o dever ecológico do plantio.
- 🖼️ **Galeria & Lightbox**: Integrado o vídeo de manejo na galeria com indicador visual de play. Adicionado suporte a carrossel (botões anterior/próximo e navegação por teclado com setas esquerda/direita) e reprodução de vídeo nativo no lightbox.
- 🐝 **Abelhas Sem Ferrão (ASF)**: Implementado modal de detalhes para as espécies (Uruçu, Mandaçaia e Jataí) contendo informações biológicas estruturadas e botão de contato personalizado via WhatsApp direto para Gabriel Ulisses.
- 🔤 **Revisão Ortográfica & Acessibilidade**: Corrigido o termo "active" para "ativa" (card Jataí), capitalizada a grafia de "Mata Atlântica" e garantida a acessibilidade de foco e alto contraste em todos os novos elementos.
- 📱 **Validação de Grid & Sintaxe**: Auditada a integridade sintática e responsividade das colunas em smartphones, tablets e desktops (evitando sobreposições ou quebras).

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
