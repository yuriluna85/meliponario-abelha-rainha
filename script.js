/**
 * MELIPONÁRIO ABELHA RAINHA - COMPORTAMENTOS DINÂMICOS (JS MODERN)
 * Localização: Petecaba, Candeias, BA (-12.677947, -38.448682)
 */

// Configuração para vinculação da galeria com o Google Drive
const CONFIG_GALERIA = {
  // Origem das mídias da galeria:
  // - 'local': Lê os itens diretamente do HTML (convertendo links do Drive se fornecidos lá)
  // - 'json': Lê a partir de um arquivo JSON local configurado
  // - 'api': Lê a partir de uma API externa (como Web App do Google Apps Script)
  origem: 'json', 
  url: 'galeria.json' // Caminho do arquivo JSON ou URL da API
};

document.addEventListener('DOMContentLoaded', () => {
  inicializarMenuMobile();
  inicializarAcessibilidade();
  inicializarMapa();
  carregarGaleria(); // Inicializa e carrega a galeria de fotos/vídeos
  inicializarFormularioContato();
  inicializarModalEspecies();
});

/**
 * 📱 1. CONTROLE DO MENU MOBILE (HAMBÚRGUER)
 */
function inicializarMenuMobile() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-item a');

  if (!menuToggle || !navMenu) return;

  const toggleMenu = () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', !isExpanded);
    navMenu.classList.toggle('active');
    
    // Animação das barras
    const spans = menuToggle.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
      spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
    } else {
      spans[0].style.transform = 'none';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'none';
    }
  };

  menuToggle.addEventListener('click', toggleMenu);

  // Fecha o menu ao clicar em qualquer link (para navegação em âncoras)
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('active')) {
        toggleMenu();
      }
    });
  });
}

/**
 * 🔤 2. WIDGET E FLUXO DE ACESSIBILIDADE (A+/A- & Alto Contraste)
 */
function inicializarAcessibilidade() {
  let fontScale = 100;
  const btnAumentar = document.getElementById('btn-aumentar-fonte');
  const btnDiminuir = document.getElementById('btn-diminuir-fonte');
  const btnContraste = document.getElementById('btn-alto-contraste');

  // Recupera estado anterior de contraste do LocalStorage
  if (localStorage.getItem('highContrast') === 'true') {
    document.body.classList.add('high-contrast');
    if (btnContraste) btnContraste.setAttribute('aria-pressed', 'true');
  }

  // Ajuste de Fonte
  const ajustarFonte = (delta) => {
    fontScale = Math.min(140, Math.max(90, fontScale + delta));
    document.documentElement.style.fontSize = `${fontScale}%`;
  };

  if (btnAumentar) {
    btnAumentar.addEventListener('click', () => ajustarFonte(10));
  }
  if (btnDiminuir) {
    btnDiminuir.addEventListener('click', () => ajustarFonte(-10));
  }

  // Alternar Alto Contraste
  if (btnContraste) {
    btnContraste.addEventListener('click', () => {
      const isHigh = document.body.classList.toggle('high-contrast');
      localStorage.setItem('highContrast', isHigh);
      btnContraste.setAttribute('aria-pressed', isHigh);
    });
  }
}

/**
 * 🗺️ 3. INICIALIZAÇÃO DO MAPA INTERATIVO (LEAFLET.JS)
 * Coordenadas: -12.677947, -38.448682
 */
function inicializarMapa() {
  const mapContainer = document.getElementById('map');
  if (!mapContainer) return;

  const lat = -12.677947;
  const lon = -38.448682;

  try {
    // Remove o placeholder do mapa uma vez que carregue
    const placeholder = mapContainer.querySelector('.map-placeholder');
    if (placeholder) placeholder.remove();

    // Inicializa o mapa com Leaflet
    const map = L.map('map', {
      center: [lat, lon],
      zoom: 15,
      scrollWheelZoom: false // Evita zoom acidental ao rolar a página
    });

    // Adiciona camada de mapa (tiles) usando OpenStreetMap (HTTPS)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Ícone personalizado de Abelha/Mel para o Pin do Mapa
    const beeIcon = L.divIcon({
      html: `<div style="background-color: #F2B705; width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 2px solid #261C14; box-shadow: 0 4px 8px rgba(0,0,0,0.3); font-size: 1.2rem; transform: translate(-8px, -8px);">🐝</div>`,
      className: 'custom-map-icon',
      iconSize: [36, 36],
      iconAnchor: [18, 18]
    });

    // Adiciona o marcador principal
    const marker = L.marker([lat, lon], { icon: beeIcon }).addTo(map);
    marker.bindPopup(`
      <div style="font-family: 'Outfit', sans-serif; padding: 6px;">
        <h4 style="margin: 0 0 4px 0; color: #262626;">Meliponário Abelha Rainha</h4>
        <p style="margin: 0; font-size: 0.85rem; color: #595959;">Petecaba, Candeias - BA</p>
        <a href="https://maps.google.com/?q=${lat},${lon}" target="_blank" rel="noopener noreferrer" style="display: inline-block; margin-top: 8px; font-size: 0.8rem; font-weight: 700; color: #3E9A2D; text-decoration: none;">Ver no Google Maps →</a>
      </div>
    `).openPopup();

  } catch (error) {
    console.error('Erro ao carregar o Leaflet Map:', error);
    mapContainer.innerHTML = `
      <div class="map-placeholder" style="flex-direction: column; padding: 20px; text-align: center;">
        <p style="font-weight: 700; margin-bottom: 8px;">Não foi possível carregar o mapa interativo.</p>
        <p style="font-size: 0.85rem; color: var(--text-muted);">Verifique sua conexão com a internet ou acesse o link de localização abaixo.</p>
        <a href="https://maps.google.com/?q=${lat},${lon}" target="_blank" rel="noopener" class="btn btn-secondary" style="margin-top: 16px;">Ver Localização no Mapa</a>
      </div>
    `;
  }
}

/**
 * 🔍 EXTRAÇÃO E CONVERSÃO DE LINKS DO GOOGLE DRIVE
 */
function obterIdGoogleDrive(url) {
  if (!url) return null;
  // Regex para capturar IDs padrão do Google Drive (fotos, vídeos, compartilhamentos)
  const regex = /(?:https?:\/\/)?(?:drive\.google\.com\/(?:file\/d\/|open\?id=|uc\?id=)|lh3\.googleusercontent\.com\/d\/)([a-zA-Z0-9_-]{25,})/;
  const match = url.match(regex);
  return match ? match[1] : null;
}

function formatarLinkGoogleDrive(url, tipo) {
  const id = obterIdGoogleDrive(url);
  if (!id) return url;

  if (tipo === 'video') {
    // Retorna o link de preview adequado para ser embutido em iframe
    return `https://drive.google.com/file/d/${id}/preview`;
  } else {
    // Retorna link direto para imagem no Google Drive (ideal para tags <img>)
    return `https://lh3.googleusercontent.com/d/${id}`;
  }
}

/**
 * 📸 CARREGAMENTO, FILTRAGEM E CONVERSÃO DINÂMICA DA GALERIA
 */
function carregarGaleria() {
  const galleryGrid = document.querySelector('.gallery-grid');
  if (!galleryGrid) return;

  if (CONFIG_GALERIA.origem === 'local') {
    // Processa os itens estáticos que estão no HTML convertendo links do Drive
    const items = galleryGrid.querySelectorAll('.gallery-item');
    const categorias = new Set();

    items.forEach(item => {
      const img = item.querySelector('img');
      const videoSrc = item.getAttribute('data-video');
      
      // Define a categoria do item (lê data-categoria ou assume padrão)
      let categoria = item.getAttribute('data-categoria');
      if (!categoria) {
        categoria = videoSrc ? 'Vídeos' : 'Fotos';
        item.setAttribute('data-categoria', categoria);
      }
      categorias.add(categoria);

      if (img && img.src && (img.src.includes('drive.google.com') || img.src.includes('googleusercontent.com'))) {
        img.src = formatarLinkGoogleDrive(img.src, 'imagem');
      }

      if (videoSrc && (videoSrc.includes('drive.google.com') || videoSrc.includes('googleusercontent.com'))) {
        item.setAttribute('data-video', formatarLinkGoogleDrive(videoSrc, 'video'));
      }
    });

    inicializarFiltros(Array.from(categorias));
    inicializarGaleriaLightbox();
  } else if (CONFIG_GALERIA.origem === 'json' || CONFIG_GALERIA.origem === 'api') {
    // Busca dados dinâmicos da API ou do JSON local
    fetch(CONFIG_GALERIA.url)
      .then(response => {
        if (!response.ok) throw new Error('Falha ao obter dados da galeria');
        return response.json();
      })
      .then(data => {
        renderizarGaleriaDinamica(data);
      })
      .catch(error => {
        console.error('Erro ao carregar galeria dinâmica:', error);
        // Fallback: se der erro, lê as mídias locais do HTML
        const items = galleryGrid.querySelectorAll('.gallery-item');
        const categorias = new Set();
        items.forEach(item => {
          let cat = item.getAttribute('data-categoria') || (item.getAttribute('data-video') ? 'Vídeos' : 'Fotos');
          item.setAttribute('data-categoria', cat);
          categorias.add(cat);
        });
        inicializarFiltros(Array.from(categorias));
        inicializarGaleriaLightbox();
      });
  }
}

function renderizarGaleriaDinamica(itens) {
  const galleryGrid = document.querySelector('.gallery-grid');
  if (!galleryGrid || !Array.isArray(itens)) return;

  // Limpa galeria padrão local
  galleryGrid.innerHTML = '';
  const categorias = new Set();

  itens.forEach(item => {
    const isVideo = item.tipo === 'video' || !!item.videoUrl;
    const mediaUrl = isVideo ? (item.videoUrl || item.url) : item.url;
    const capImgUrl = item.capaUrl || item.url;
    
    // Define a categoria (subpasta do Drive, ex: "Fotos", "Vídeos", "Região da Petecaba")
    const categoria = item.categoria || (isVideo ? 'Vídeos' : 'Fotos');
    categorias.add(categoria);

    // Formata links do Google Drive
    const finalImgUrl = formatarLinkGoogleDrive(capImgUrl, 'imagem');
    const finalVideoUrl = isVideo ? formatarLinkGoogleDrive(mediaUrl, 'video') : null;

    const galleryItem = document.createElement('div');
    galleryItem.className = isVideo ? 'gallery-item gallery-item-video' : 'gallery-item';
    galleryItem.setAttribute('role', 'button');
    galleryItem.setAttribute('tabindex', '0');
    galleryItem.setAttribute('data-categoria', categoria);
    galleryItem.setAttribute('aria-label', `Visualizar ${isVideo ? 'Vídeo' : 'Imagem'} - ${item.titulo || ''}`);
    
    if (isVideo && finalVideoUrl) {
      galleryItem.setAttribute('data-video', finalVideoUrl);
    }

    let innerHTML = `<img src="${finalImgUrl}" alt="${item.alt || item.titulo || ''}">`;

    if (isVideo) {
      innerHTML += `
        <div class="video-play-indicator" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path d="M8 5v14l11-7z" fill="currentColor"/>
          </svg>
        </div>
      `;
    }

    innerHTML += `
      <div class="gallery-overlay">
        <h3 class="gallery-title">${item.titulo || ''}</h3>
        <p class="gallery-desc">${item.descricao || ''}</p>
      </div>
    `;

    galleryItem.innerHTML = innerHTML;
    galleryGrid.appendChild(galleryItem);
  });

  // Inicializa botões de filtro e lightbox
  inicializarFiltros(Array.from(categorias));
  inicializarGaleriaLightbox();
}

/**
 * 🏷️ INICIALIZAÇÃO DOS FILTROS DA GALERIA
 */
function inicializarFiltros(categorias) {
  const filterContainer = document.querySelector('.gallery-filters');
  const galleryItems = document.querySelectorAll('.gallery-item');
  if (!filterContainer || !galleryItems.length) return;

  // Limpa botões, mantendo apenas o botão "Todas"
  filterContainer.innerHTML = '<button class="filter-btn active" data-filter="all" role="tab" aria-selected="true">Todas</button>';

  // Cria dinamicamente botões para cada categoria encontrada
  categorias.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'filter-btn';
    btn.setAttribute('data-filter', cat);
    btn.setAttribute('role', 'tab');
    btn.setAttribute('aria-selected', 'false');
    btn.textContent = cat;
    filterContainer.appendChild(btn);
  });

  const filterButtons = filterContainer.querySelectorAll('.filter-btn');
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove classe active e aria-selected dos demais
      filterButtons.forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
      });

      // Adiciona active no botão clicado
      button.classList.add('active');
      button.setAttribute('aria-selected', 'true');

      const filterValue = button.getAttribute('data-filter');

      // Filtra os itens da galeria aplicando classe hidden
      galleryItems.forEach(item => {
        const itemCategory = item.getAttribute('data-categoria');
        if (filterValue === 'all' || itemCategory === filterValue) {
          item.classList.remove('hidden');
          // Reinicia animação para efeito de surgimento (fade-in)
          item.style.animation = 'none';
          item.offsetHeight; // Truque para forçar reflow do browser
          item.style.animation = 'galleryFadeIn 0.5s ease forwards';
        } else {
          item.classList.add('hidden');
        }
      });
    });
  });
}

/**
 * 🖼️ 4. GALERIA LIGHTBOX (VISUALIZADOR DE FOTOS COM SUPORTE A FILTROS)
 */
function inicializarGaleriaLightbox() {
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxVideo = document.getElementById('lightbox-video');
  const lightboxIframe = document.getElementById('lightbox-iframe');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxClose = document.getElementById('lightbox-close');
  const btnPrev = document.getElementById('lightbox-prev');
  const btnNext = document.getElementById('lightbox-next');

  if (!galleryItems.length || !lightbox) return;

  let currentMediaIndex = 0;
  const itemsArray = Array.from(galleryItems);

  const exibirMidia = (index) => {
    // Filtra itens ativos (não ocultados pelo filtro de categorias) para paginação correta
    const itensVisiveis = itemsArray.filter(item => !item.classList.contains('hidden'));
    
    if (itensVisiveis.length === 0) return;

    if (index < 0) index = itensVisiveis.length - 1;
    if (index >= itensVisiveis.length) index = 0;
    currentMediaIndex = index;

    const item = itensVisiveis[currentMediaIndex];
    const img = item.querySelector('img');
    const videoSrc = item.getAttribute('data-video');
    const title = item.querySelector('.gallery-title');
    const desc = item.querySelector('.gallery-desc');

    // Para qualquer reprodução de vídeo ativa
    if (lightboxVideo) {
      lightboxVideo.pause();
      lightboxVideo.src = '';
      lightboxVideo.style.display = 'none';
    }
    if (lightboxImg) {
      lightboxImg.style.display = 'none';
      lightboxImg.src = '';
    }
    if (lightboxIframe) {
      lightboxIframe.src = '';
      lightboxIframe.style.display = 'none';
    }

    if (videoSrc) {
      const isIframeVideo = videoSrc.includes('drive.google.com') || videoSrc.includes('googleusercontent.com') || videoSrc.includes('/preview');
      if (isIframeVideo) {
        if (lightboxIframe) {
          lightboxIframe.src = videoSrc;
          lightboxIframe.style.display = 'block';
        }
      } else {
        if (lightboxVideo) {
          lightboxVideo.src = decodeURIComponent(videoSrc);
          lightboxVideo.style.display = 'block';
          lightboxVideo.load();
          // Tenta reproduzir automaticamente (silencioso se necessário)
          lightboxVideo.play().catch(err => console.log('Autoplay prevent:', err));
        }
      }
    } else if (img) {
      if (lightboxImg) {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt || 'Imagem do Meliponário';
        lightboxImg.style.display = 'block';
      }
    }

    // Configura a legenda
    let captionText = img ? (img.alt || '') : '';
    if (title) {
      captionText = `<strong>${title.textContent}</strong>`;
      if (desc) captionText += ` — ${desc.textContent}`;
    }
    if (lightboxCaption) {
      lightboxCaption.innerHTML = captionText;
    }
  };

  // Abre Lightbox
  itemsArray.forEach((item) => {
    const abrirItem = () => {
      // Descobre o índice correto na lista de itens visíveis
      const itensVisiveis = itemsArray.filter(i => !i.classList.contains('hidden'));
      const indexNoFiltro = itensVisiveis.indexOf(item);
      if (indexNoFiltro !== -1) {
        lightbox.style.display = 'flex';
        exibirMidia(indexNoFiltro);
        lightboxClose.focus();
      }
    };

    item.addEventListener('click', abrirItem);

    // Suporte para teclado (Enter) abrir a galeria
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        abrirItem();
      }
    });
  });

  // Fecha Lightbox
  const fecharLightbox = () => {
    lightbox.style.display = 'none';
    if (lightboxVideo) {
      lightboxVideo.pause();
      lightboxVideo.src = '';
    }
    if (lightboxIframe) {
      lightboxIframe.src = '';
    }
  };

  if (lightboxClose) {
    lightboxClose.addEventListener('click', fecharLightbox);
  }
  
  // Fecha ao clicar fora do contêiner de conteúdo
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target.classList.contains('lightbox-content') || e.target.classList.contains('lightbox-media-container')) {
      fecharLightbox();
    }
  });

  // Navegação
  if (btnPrev) {
    btnPrev.addEventListener('click', (e) => {
      e.stopPropagation();
      exibirMidia(currentMediaIndex - 1);
    });
  }

  if (btnNext) {
    btnNext.addEventListener('click', (e) => {
      e.stopPropagation();
      exibirMidia(currentMediaIndex + 1);
    });
  }

  // Atalhos de teclado (ESC e Setas)
  document.addEventListener('keydown', (e) => {
    if (lightbox.style.display === 'flex') {
      if (e.key === 'Escape') {
        fecharLightbox();
      } else if (e.key === 'ArrowLeft') {
        exibirMidia(currentMediaIndex - 1);
      } else if (e.key === 'ArrowRight') {
        exibirMidia(currentMediaIndex + 1);
      }
    }
  });
}

/**
 * ✉️ 5. TRATAMENTO DO FORMULÁRIO DE CONTATO
 */
function inicializarFormularioContato() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Obtenção dos dados do formulário
    const nome = document.getElementById('form-name').value.trim();
    const email = document.getElementById('form-email').value.trim();
    const mensagem = document.getElementById('form-message').value.trim();

    if (!nome || !email || !mensagem) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    // Simulando o envio de dados com feedback visual acessível
    const btnSubmit = form.querySelector('button[type="submit"]');
    const originalText = btnSubmit.innerHTML;
    btnSubmit.disabled = true;
    btnSubmit.innerHTML = 'Enviando...';

    setTimeout(() => {
      // Feedback de Sucesso
      alert(`Obrigado pelo contato, ${nome}! Sua mensagem foi registrada com sucesso.`);
      form.reset();
      btnSubmit.disabled = false;
      btnSubmit.innerHTML = originalText;
    }, 1200);
  });
}

/**
 * 🐝 6. MODAL INTERATIVO DE DETALHES DAS ESPÉCIES DE ABELHAS (ASF)
 */
function inicializarModalEspecies() {
  const triggers = document.querySelectorAll('.species-trigger');
  const modal = document.getElementById('species-modal');
  const closeBtn = document.getElementById('species-modal-close');
  const backdrop = modal ? modal.querySelector('.species-modal-backdrop') : null;
  const container = document.getElementById('species-details-container');

  if (!triggers.length || !modal || !container) return;

  const dadosEspecies = {
    urucu: {
      nome: 'Uruçu Nordestina',
      cientifico: 'Melipona scutellaris',
      foto: 'WhatsApp Image 2026-07-12 at 15.54.01.jpeg',
      tag: 'Nativa da Mata Atlântica',
      descricao: 'Uma das abelhas sem ferrão mais emblemáticas e queridas do Nordeste brasileiro. Destaca-se pelo seu tamanho robusto, corpo escuro e pelos acinzentados no tórax. Seu nome deriva do tupi "uru-çú", que significa "abelha grande".',
      bioma: 'Mata Atlântica (Regiões úmidas do litoral nordestino)',
      comportamento: 'Extremamente dócil e mansa. Permite um manejo muito tranquilo, sendo excelente para meliponicultura educacional, preservação e meliponários escolares.',
      mel: 'O mel de Uruçu é levemente ácido, de coloração clara, consistência mais fluida e sabor fresco com deliciosas notas florais e cítricas. É mundialmente apreciado na gastronomia de alto padrão e muito utilizado na medicina tradicional.',
      produtividade: 'Alta. É uma excelente produtora de mel, podendo render de 2 a 4 litros por colmeia ao ano sob condições favoráveis em Petecaba.',
      manejo: 'Gabriel Ulisses Barbosa realiza o manejo racional utilizando caixas modelo INPA de tamanhos adequados, facilitando a termorregulação do ninho e garantindo divisões sustentáveis das colônias em Candeias.'
    },
    mandacaia: {
      nome: 'Mandaçaia',
      cientifico: 'Melipona quadrifasciata',
      foto: 'WhatsApp Image 2026-07-12 at 15.53.49.jpeg',
      tag: 'Conservação e Beleza',
      descricao: 'Abelha de médio porte de cor escura com quatro faixas amarelas brilhantes e interrompidas sobre o abdômen. O nome indígena "Mandaçaia" significa "vigia bonita", devido ao curioso hábito de uma abelha sentinela ficar de guarda na entrada estreita da colmeia.',
      bioma: 'Mata Atlântica, florestas de transição e fragmentos do interior da Bahia',
      comportamento: 'Calma e de manejo amigável. Quando perturbada, pode fazer voos circulares de defesa ao redor, mas não ferroa (como todas as ASFs).',
      mel: 'Seu mel é mais espesso e denso do que o da Uruçu, apresentando uma doçura marcante e aroma floral muito encorpado. É muito procurado para harmonização culinária fina e fortalecimento imunológico.',
      produtividade: 'Média a Alta. Produz entre 1,5 e 3 litros de mel por ano em colmeias bem estruturadas.',
      manejo: 'Constrói células de cria em formato de favos horizontais e utiliza muito barro misturado com própolis (chamado geoprópolis) para vedar e proteger a colmeia.'
    },
    jatai: {
      nome: 'Jataí',
      cientifico: 'Tetragonisca angustula',
      foto: 'WhatsApp Image 2026-07-12 at 15.57.24.jpeg',
      tag: 'Pequena Guardiã',
      descricao: 'Uma abelha pequena (cerca de 4 a 5 mm), com cor dourada reluzente e olhos esverdeados. É extremamente comum e adaptável, podendo ser criada tanto em zonas rurais quanto em áreas urbanas. Constrói uma entrada típica em forma de canudinho de cera clara.',
      bioma: 'Ampla distribuição em todo o Brasil (Mata Atlântica, Cerrado, etc.)',
      comportamento: 'Bastante ativa e rápida. Possui guardas dedicadas que voam ao redor para proteger a colmeia, mas sem causar qualquer dano.',
      mel: 'O mel de Jataí é amplamente conhecido por sua acidez marcante e sabor agridoce inconfundível. É um dos méis mais estudados no mundo devido às suas comprovadas propriedades antibacterianas, anti-inflamatórias e cicatrizantes.',
      produtividade: 'Média/Baixa devido ao seu tamanho corporal (cerca de 500g a 1,5 kg por ano), mas de altíssimo valor de mercado.',
      manejo: 'Gabriel Ulisses Barbosa realiza divisões anuais de Jataí utilizando caixas modelo vertical de fácil manutenção. Suas colmeias em Petecaba ajudam na polinização de dezenas de árvores frutíferas e flores silvestres.'
    }
  };

  const abrirModal = (speciesKey, triggerElement) => {
    const dados = dadosEspecies[speciesKey];
    if (!dados) return;

    triggerElement.setAttribute('aria-expanded', 'true');

    container.innerHTML = `
      <div class="species-modal-grid">
        <div class="species-modal-image-wrapper">
          <img src="${encodeURIComponent(dados.foto)}" alt="${dados.nome} em detalhe" class="species-modal-img">
          <span class="species-modal-badge">${dados.tag}</span>
        </div>
        <div class="species-modal-info">
          <span class="species-modal-subtitle">${dados.cientifico}</span>
          <h3 class="species-modal-title">${dados.nome}</h3>
          
          <div class="species-specs-grid">
            <div class="spec-item">
              <span class="spec-label">📍 Bioma Principal</span>
              <span class="spec-val">${dados.bioma}</span>
            </div>
            <div class="spec-item">
              <span class="spec-label">🐝 Comportamento</span>
              <span class="spec-val">${dados.comportamento}</span>
            </div>
            <div class="spec-item">
              <span class="spec-label">🍯 Tipo de Mel</span>
              <span class="spec-val">${dados.mel}</span>
            </div>
            <div class="spec-item">
              <span class="spec-label">📈 Produtividade</span>
              <span class="spec-val">${dados.produtividade}</span>
            </div>
          </div>
          
          <div class="species-modal-text">
            <h4>Sobre a Espécie</h4>
            <p>${dados.descricao}</p>
            <h4>Manejo no Meliponário</h4>
            <p>${dados.manejo}</p>
          </div>
          
          <div class="species-modal-actions">
            <a href="https://wa.me/5571992724330?text=Ol%C3%A1%20Gabriel!%20Gostaria%20de%20saber%20mais%20sobre%20a%20abelha%20${encodeURIComponent(dados.nome)}%20e%20a%20disponibilidade%20de%20mel%20ou%20enxames." 
               target="_blank" 
               rel="noopener noreferrer" 
               class="btn btn-primary species-whatsapp-btn">
              Solicitar Mel ou Enxame de ${dados.nome}
            </a>
          </div>
        </div>
      </div>
    `;

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    closeBtn.focus();

    modal.setAttribute('data-trigger-id', triggerElement.getAttribute('data-species'));
  };

  const fecharModal = () => {
    modal.style.display = 'none';
    document.body.style.overflow = '';
    
    const triggerId = modal.getAttribute('data-trigger-id');
    if (triggerId) {
      const activeTrigger = document.querySelector(`.species-trigger[data-species="${triggerId}"]`);
      if (activeTrigger) {
        activeTrigger.setAttribute('aria-expanded', 'false');
        activeTrigger.focus();
      }
    }
  };

  triggers.forEach(trigger => {
    trigger.addEventListener('click', () => abrirModal(trigger.getAttribute('data-species'), trigger));
  });

  if (closeBtn) closeBtn.addEventListener('click', fecharModal);
  if (backdrop) backdrop.addEventListener('click', fecharModal);
  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'flex') {
      fecharModal();
    }
  });
}
