# Meliponário Abelha Rainha

Portal institucional do Meliponário Abelha Rainha, propriedade de **Gabriel Ulisses de Queiroz Barbosa**, em Petecaba, Candeias, Bahia. O site apresenta a história do meliponário, o catálogo das espécies de abelhas nativas sem ferrão criadas, a manufatura artesanal de casas e utensílios, e a galeria multimídia do sítio.

**Domínio publicado**: `meliponario-abelha-rainha.com.br`
**Contexto de marca**: Pessoal/Misto (propriedade de Gabriel Ulisses de Queiroz Barbosa; desenvolvimento técnico sob o selo YLuna85 LABs)
**Monetização**: Este portal não utiliza Google AdSense.

---

## Estrutura de Páginas

- `index.html` — Página inicial: hero, apresentação, catálogo sensorial de espécies, guia de conservação ambiental, prévia da galeria, mapa de localização e contato via WhatsApp.
- `historia.html` — A jornada de Gabriel Ulisses de Queiroz Barbosa e a origem do meliponário.
- `abelhas.html` — Catálogo detalhado das espécies de abelhas sem ferrão criadas (Uruçu Nordestina, Mandaçaia, Jataí).
- `manufatura.html` — O trabalho artesanal de marcenaria e cutelaria de Luis Sergio.
- `galeria.html` — Galeria multimídia completa (fotos e vídeos), sincronizada com o Google Drive via `galeria.json`.
- `brindes.html` — Simulador de identidade visual de brindes. **Página intencionalmente fora do menu principal e do `sitemap.xml`** (decisão de escopo comercial tomada em 16/08/2026).
- `privacidade.html` e `termos.html` — Páginas institucionais de conformidade legal (LGPD).

---

## Sistema de Design

A paleta e a tipografia seguem o Manual de Marca oficial (`Manual de Marca/Manual da Marca - Meliponário Abelha Rainha.md`), implementadas em `style.css`:

| Token CSS | Cor / Fonte | Papel |
| :--- | :--- | :--- |
| `--primary-color` | `#D4A574` (Mel Orgânico) | Assinatura dourada quente |
| `--secondary-color` | `#2D2416` (Café Orgânico) | Base escura de própolis |
| `--accent-color` | `#6B8E5F` (Verde Floresta) | Preservação e ecologia |
| `--accent-light` | `#8FA876` (Verde Oliva Suave) | Destaques sutis |
| `--bg-light` | `#FDFBF7` (Marfim Quente) | Fundo claro de cera |

Tipografia: **Playfair Display** (títulos principais e logotipo), **Outfit** (títulos de seção) e **Montserrat** (corpo de texto).

O documento de referência arquitetural (`_System_Designs/SYSTEM_DESIGN_MELIPONARIO_ABELHA_RAINHA.md`) foi sincronizado em 27/09/2026 para refletir exatamente estes tokens reais, após identificado desalinhamento com uma versão anterior em HSL.

---

## Acessibilidade e Conformidade Legal

- Barra de acessibilidade global (`A-`/`A+`/Alto Contraste) presente em todas as páginas, com persistência em `localStorage`.
- Banner de consentimento de cookies (LGPD/GDPR) em todas as páginas, informando o uso de `localStorage` para preferências e a incorporação de conteúdo de terceiros (Google Drive, mapa OpenStreetMap/Leaflet), sem rastreamento ou publicidade personalizada.
- Zero emojis em qualquer página, comentário de código ou documentação, conforme a Diretriz 30 do laboratório.

---

## Pipeline de Galeria (Google Drive)

`atualizar_galeria.py` sincroniza os itens de uma pasta pública do Google Drive para `galeria.json`, consumido dinamicamente por `galeria.html` e pela prévia em `index.html`. A automação roda via `.github/workflows/atualizar_galeria.yml`, disparada manualmente (`workflow_dispatch`), não em cronograma automático. Consulte `COMO_CONFIGURAR_GOOGLE_DRIVE.md` para o passo a passo de configuração da pasta pública.

---

## Execução Local

- Atalho: `EXECUTAR_MELIPONÁRIO_ABELHA_RAINHA.bat` (Windows).
- Suíte de autoteste: `python harness.py`.

---

## Changelog

### 27/09/2026
- Corrigido HTML quebrado e duplicado no card de contato do WhatsApp em `index.html` (botão "Iniciar Conversa Direta" aparecia duas vezes, a segunda sem tag de abertura).
- Corrigido `og:image` de `index.html` e `galeria.html`, que apontava para um arquivo inexistente; substituído por uma imagem real já hospedada no Google Drive.
- Substituído o favicon (placeholder de emoji embutido em SVG) pelo `favicon.png` real da marca, em todas as seis páginas.
- Substituídos todos os emojis decorativos usados como ícone de UI (localização, coordenadas, bioma, horário de atendimento, contato) por ícones SVG inline, em `index.html`, `brindes.html` e `script.js` (incluindo o marcador do mapa Leaflet e os rótulos do modal de espécies).
- Removidos emojis de comentários de código em `script.js`.
- Criadas as páginas `privacidade.html` e `termos.html`, linkadas no rodapé de todas as páginas.
- Implementado banner de consentimento de cookies (LGPD/GDPR) em todas as páginas, com persistência em `localStorage` (chave `cookieConsentMeliponario`).
- Movidos `style.css.bak` e o arquivo `.zip` de código-fonte de 23/07/2026 para `_backup_local/2026-09-27/` (fora da raiz publicada).
- Sincronizado `_System_Designs/SYSTEM_DESIGN_MELIPONARIO_ABELHA_RAINHA.md` com os tokens de cor reais de `style.css`.
- Reescrito integralmente este `README.md`, que estava corrompido (acentuação removida em toda a extensão do arquivo).
