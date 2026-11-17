'use strict';
const icons = {
  arrow:'<path d="M5 12h14m-5-5 5 5-5 5"/>', bookmark:'<path d="M6 4h12v17l-6-4-6 4Z"/>',
  search:'<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',
  pin:'<path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z"/><circle cx="12" cy="10" r="2.5"/>',
  shield:'<path d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6Z"/><path d="m8 12 3 3 5-6"/>',
  book:'<path d="M12 6c-3-3-8-2-9-1v15c2-2 6-2 9 0 3-2 7-2 9 0V5c-2-1-6-2-9 1v14"/>',
  wrench:'<path d="M14 4a6 6 0 0 0-7 8L3 17a3 3 0 0 0 4 4l5-5a6 6 0 0 0 8-7l-4 3-4-4Z"/>',
  check:'<path d="m5 12 4 4L19 6"/>'
};
const icon = name => `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">${icons[name] || icons.book}</svg>`;
const art = {
  suspension:'<path d="m37 13 26 10-26 11 26 11-26 11 26 11-26 11 26 10M50 6v12m0 65v12M38 6h24M38 95h24"/><path d="M26 22v57m48-57v57" stroke-dasharray="3 5"/>',
  wheels:'<circle cx="50" cy="50" r="38" stroke-width="7"/><circle cx="50" cy="50" r="27"/><circle cx="50" cy="50" r="8"/><path d="m50 23 4 19m21-1-18 7m9 25L54 57M34 73l12-16M25 41l18 7" stroke-width="6"/>',
  paint:'<path d="m32 18 15-6 6 16-15 6ZM34 38l26-10 20 49-26 11Z"/><path d="m44 62 26-10M17 29l10-4M15 42l12-4M23 15l4 3"/><circle cx="61" cy="67" r="6"/>',
  engine:'<path d="M20 39h13l8-12h29l9 12h8v36H23V52H13V39ZM43 18h23M54 18v9M7 43v21M87 45h7v24h-7"/><path d="m56 39-10 15h12l-7 15"/>',
  light:'<path d="M58 23c-48 0-48 54 0 54V23ZM68 30l24-8M68 44l24-3M68 58l24 3M68 72l24 8"/><path d="M42 28v44M30 34v32"/>',
  body:'<path d="m12 61 7-18 19-5 12-15h22l14 24 5 2v22H12ZM38 38h43M52 23v15"/><circle cx="30" cy="69" r="9"/><circle cx="74" cy="69" r="9"/><path d="M14 53h11m56 0h8"/>'
};
const guides = window.GaragemDados.guias;
const workshops = window.GaragemDados.oficinas;
const main = document.querySelector('main');
const dialog = document.querySelector('#detail');
const legalLabels = {
  permitida: 'Permitida',
  'exige-regularizacao': 'Exige regularização',
  'restricao-relevante': 'Restrição relevante'
};
// Só favoritos e checklists são persistidos. Cadastro demonstrativo não usa este caminho.
function readStore(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; }
}
const loadedSaved = readStore('garagem.saved', []);
let saved = Array.isArray(loadedSaved) ? [...new Set(loadedSaved.filter(id => guides.some(g => g.id === id)))] : [];
let checks = readStore('garagem.checks', {});
if (!checks || typeof checks !== 'object' || Array.isArray(checks)) checks = {};
let category = 'Todos', query = '', legal = '', demo = false, city = '', service = '', toastTimer;
const escapeHTML = value => String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const normalize = value => String(value).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
function toast(message) {
  const el = document.querySelector('#toast');
  el.textContent = message;
  el.classList.add('visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('visible'), 3200);
}
function persist(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); return true; }
  catch { toast('O navegador não permitiu salvar. As alterações valem nesta visita.'); return false; }
}
function updateSaved() {
  document.querySelector('#saved-count').textContent = saved.length;
  document.querySelectorAll('[data-save]').forEach(button => {
    const on = saved.includes(button.dataset.save);
    const guide = guides.find(g => g.id === button.dataset.save);
    button.setAttribute('aria-pressed', String(on));
    button.setAttribute('aria-label', `${on ? 'Remover dos' : 'Adicionar aos'} meus guias: ${guide.titulo}`);
    if (button.classList.contains('dialog-save')) button.innerHTML = icon('bookmark') + (on ? 'Guia salvo' : 'Salvar guia');
  });
}
function saveGuide(id) {
  if (!guides.some(g => g.id === id)) return;
  saved = saved.includes(id) ? saved.filter(value => value !== id) : [...saved, id];
  persist('garagem.saved', saved);
  updateSaved();
  if (location.hash === '#salvos') renderSaved();
}
function legalBadge(guide) {
  return `<span class="legal-badge ${guide.situacaoLegal}">${legalLabels[guide.situacaoLegal]} <small>· a validar</small></span>`;
}
function listHTML(items) { return `<ul>${items.map(item => `<li>${escapeHTML(item)}</li>`).join('')}</ul>`; }
function options(values, allLabel) {
  return `<option value="">${allLabel}</option>` + [...new Set(values)].sort((a,b) => a.localeCompare(b,'pt-BR')).map(value => `<option value="${escapeHTML(value)}">${escapeHTML(value)}</option>`).join('');
}
function guideCard(guide) {
  return `<article class="guide-card">
    <div class="card-art ${guide.color}"><svg viewBox="0 0 100 100" aria-hidden="true">${art[guide.art]}</svg></div>
    <button class="save" data-save="${guide.id}" aria-pressed="${saved.includes(guide.id)}" aria-label="Salvar ${escapeHTML(guide.titulo)}">${icon('bookmark')}</button>
    <div class="card-content"><div class="card-meta">${escapeHTML(guide.categoria)}</div>
      <h3><a href="#guia/${guide.id}">${escapeHTML(guide.titulo)}</a></h3>${legalBadge(guide)}
      <p>${escapeHTML(guide.descricao)}</p>
      <p class="cost"><strong>${escapeHTML(guide.custoEstimado)}</strong><small>Faixa fictícia de exemplo · a validar</small></p>
      <div class="card-bottom"><small>Conteúdo a validar</small><a class="plain-button" href="#guia/${guide.id}">Explorar ${icon('arrow')}</a></div>
    </div></article>`;
}
function renderGuides() {
  category = 'Todos'; query = ''; legal = '';
  main.innerHTML = `<div class="container">${pageHeader('Toda mudança começa com um plano.', 'Roteiros editoriais para consultar o órgão de trânsito. Classificações e faixas ainda precisam de validação.')}
    <div class="page-content"><div class="toolbar">
      <label class="search">${icon('search')}<input id="guide-search" type="search" aria-label="Buscar guias" placeholder="Busque uma modificação"></label>
      <label class="field">Situação legal<select id="legal-filter">${options(Object.keys(legalLabels),'Todas as situações').replace(/>(permitida|exige-regularizacao|restricao-relevante)</g, (_,key)=>`>${legalLabels[key]}<`)}</select></label>
    </div><div class="chips" aria-label="Categorias">${['Todos', ...new Set(guides.map(g => g.categoria))].map(value => `<button class="chip" data-category="${escapeHTML(value)}" aria-pressed="${value === 'Todos'}">${escapeHTML(value)}</button>`).join('')}</div>
    <div class="result-count" id="guide-count" aria-live="polite"></div><div id="guide-results" class="guide-grid"></div></div></div>`;
  filterGuides();
}
function filterGuides() {
  const result = guides.filter(g => (category === 'Todos' || g.categoria === category) && (!legal || g.situacaoLegal === legal) && normalize(`${g.titulo} ${g.descricao} ${g.categoria} ${legalLabels[g.situacaoLegal]}`).includes(normalize(query)));
  document.querySelector('#guide-count').textContent = `${result.length} guia(s) encontrado(s)`;
  document.querySelector('#guide-results').innerHTML = result.length ? result.map(guideCard).join('') : `<div class="empty full-width"><h3>Nenhum guia com essa busca</h3><p>Tente outra palavra ou remova os filtros.</p><button class="button light" data-reset-guides>Limpar filtros</button></div>`;
  updateSaved();
}
function renderSaved() {
  main.innerHTML = `<div class="container">${pageHeader('Seus próximos projetos.', 'Favoritos e checklists ficam somente neste navegador.')}<div class="page-content">${saved.length ? `<div class="guide-grid">${guides.filter(g => saved.includes(g.id)).map(guideCard).join('')}</div>` : '<div class="empty"><h3>Seu primeiro projeto começa com uma ideia.</h3><p>Salve um guia para encontrá-lo aqui depois.</p><a class="button" href="#guias">Explorar guias</a></div>'}</div></div>`;
  updateSaved();
}
// Chaves v2 não reaproveitam marcações do checklist genérico antigo.
// Cada chave inclui o texto: se um requisito mudar, ele precisará ser revisado de novo.
function guideChecklist(guide) {
  return guide.legalizacao.etapas.flatMap(step => [
    {key:`v2:${guide.id}:etapa:${step.numero}:${step.titulo}`, text:`Revisar a etapa ${step.numero}: ${step.titulo}`},
    ...step.documentosNecessarios.map(doc => ({key:`v2:${guide.id}:doc:${step.numero}:${doc}`,text:`Separar ou confirmar: ${doc}`}))
  ]);
}
function renderGuide(id) {
  const guide = guides.find(g => g.id === id);
  if (!guide) return renderNotFound('Guia');
  main.innerHTML = `<article class="container detail-page">
    ${pageHeader(escapeHTML(guide.titulo), escapeHTML(guide.descricao))}
    <div class="page-content"><a class="text-link" href="#guias">Voltar aos guias</a>
      <div class="detail-meta">${legalBadge(guide)}<span>${escapeHTML(guide.categoria)}</span></div>
      <div class="notice"><strong>Conteúdo a validar</strong><p>Este roteiro editorial não determina se uma modificação é permitida e não substitui o órgão de trânsito. Consulte a viabilidade antes de comprar ou instalar.</p><p>${escapeHTML(guide.enquadramento)}</p></div>
      <div class="detail-grid"><div class="reading">
        <section><h2>O que é</h2><p>${escapeHTML(guide.oQueE)}</p></section>
        <section><h2>Benefícios</h2>${listHTML(guide.beneficios)}</section>
        <section><h2>Pontos de atenção</h2>${listHTML(guide.pontosAtencao)}</section>
      </div><aside class="about-panel"><h2>Planeje o projeto</h2><p class="cost"><strong>${escapeHTML(guide.custoEstimado)}</strong><small>${escapeHTML(guide.custoObservacao)}</small></p>
        <div class="actions"><button class="button" data-legalize>Ver como legalizar</button><button class="button light dialog-save" data-save="${guide.id}">Salvar guia</button></div>
      </aside></div>
      <section class="reading legal-section" id="legalizacao" tabindex="-1"><h2>Etapas do processo</h2>
        <p>Roteiro de consulta, não instrução oficial. Etapas e documentos: a validar. Confirme autorização prévia, ordem e exigências para o seu caso. Valores não são taxas oficiais.</p>
        <ol class="legal-steps">${guide.legalizacao.etapas.map(step => `<li><h3>${step.numero}. ${escapeHTML(step.titulo)}</h3><p>${escapeHTML(step.descricao)}</p><h4>Documentos para separar ou confirmar</h4>${listHTML(step.documentosNecessarios)}<p><strong>Valor estimado:</strong> ${escapeHTML(step.valor)}</p></li>`).join('')}</ol>
        <p>Verificação do roteiro: ${escapeHTML(guide.legalizacao.dataAtualizacao)}</p>
      </section>
      <section class="source-card reading"><h2>Fonte oficial</h2><p><strong>${escapeHTML(guide.fonte.orgao)}</strong> · ${escapeHTML(guide.fonte.nome)}</p>
        <a class="text-link" href="${escapeHTML(guide.fonte.referencia)}" target="_blank" rel="noopener noreferrer">Consultar referência oficial ↗</a>
        <p>Data de verificação: ${escapeHTML(guide.fonte.dataConsulta)}. A existência desta referência não valida o roteiro. Confira alterações posteriores e regras específicas.</p>
      </section>
      <section class="reading"><h2>Seu checklist de preparação</h2><p>Marcar um item registra sua preparação, não comprova regularização.</p><p class="progress" id="progress" aria-live="polite"></p>
        <div class="checklist">${guideChecklist(guide).map(item => `<label><input type="checkbox" data-check="${escapeHTML(item.key)}" ${checks[item.key] === true ? 'checked' : ''}><span>${escapeHTML(item.text)}</span></label>`).join('')}</div>
      </section><div class="actions section"><a class="button dark" href="#oficinas">Explorar oficinas</a><a class="text-link" href="#guias">Voltar aos guias</a></div>
    </div></article>`;
  document.title = `${guide.titulo} | Garagem`;
  updateSaved(); updateProgress();
}
function updateProgress() {
  const inputs = [...main.querySelectorAll('[data-check]')];
  const progress = document.querySelector('#progress');
  if (progress) progress.textContent = `${inputs.filter(input => input.checked).length} de ${inputs.length} itens marcados · Neste navegador`;
}
function renderNotFound(type) {
  main.innerHTML = `<div class="container section empty"><h1>${type} não encontrado</h1><p>O endereço não corresponde ao catálogo atual.</p><a class="button" href="#inicio">Ir ao início</a></div>`;
}
const mapArt=`<div class="map-art" aria-label="Ilustração de mapa"><svg viewBox="0 0 500 320" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><rect width="500" height="320" fill="#dce5eb"/><path d="M0 80 500 250M50 0 200 320M280 0 390 320M0 270 500 70" stroke="#f9fbfd" stroke-width="23"/><path d="M0 80 500 250M50 0 200 320M280 0 390 320M0 270 500 70" stroke="#c5d2dd" stroke-width="2"/><path d="M420 0C300 100 520 200 440 320" fill="none" stroke="#b5ccdf" stroke-width="30"/><path d="m35 130 65 22 21 63-64-22Z" fill="#bdd2c9"/><path d="m205 35 48 14 19 53-46-17Z" fill="#bdd2c9"/><g fill="#f0804b" stroke="white" stroke-width="4"><circle cx="130" cy="70" r="10"/><circle cx="370" cy="230" r="10"/><circle cx="230" cy="260" r="8"/></g></svg><div class="map-badge">${icon('pin')}<div><strong>O próximo passo é por perto.</strong><small>Explore serviços e especialidades</small></div></div></div>`;
function renderHome(){main.innerHTML=`<section class="hero"><img class="hero-image" src="assets/porsche.jpg" alt="Porsche escuro em uma estrada" fetchpriority="high"><div class="container"><div class="hero-copy"><div class="hero-label">Seu ponto de partida para modificar</div><h1>Seu carro.<br>Seu projeto.<br>O caminho começa aqui.</h1><p>Da primeira ideia à próxima modificação. Explore guias e encontre o caminho para tirar seu projeto do papel.</p><div class="actions"><a class="button" href="#guias">Explorar guias ${icon('arrow')}</a><a class="button secondary" href="#oficinas">Encontrar oficinas</a></div></div><div class="hero-caption">Paixão por carros. Informação para começar.</div></div></section><section class="benefits" aria-label="Sobre o Garagem"><div class="container"><div class="benefit">${icon('book')}<div><strong>Comece com informação</strong><small>Roteiros para planejar sua modificação</small></div></div><div class="benefit">${icon('pin')}<div><strong>Encontre sua especialidade</strong><small>Busca por região e tipo de serviço</small></div></div><div class="benefit">${icon('shield')}<div><strong>Consulte a fonte</strong><small>Referências oficiais para ir além</small></div></div></div></section><section class="container section"><div class="section-heading"><div><h2>Qual é o seu próximo projeto?</h2><p>Escolha uma modificação e descubra por onde começar.</p></div><a class="text-link" href="#guias">Ver todos os guias ${icon('arrow')}</a></div><div class="guide-grid">${guides.slice(0,3).map(guideCard).join('')}</div></section><section class="container section" style="padding-top:0"><div class="workshop-banner"><div class="banner-copy"><h2>Um bom projeto precisa da oficina certa.</h2><p>Encontre especialidades e compare serviços. O diretório está em formação; conheça a experiência com perfis de exemplo.</p><a href="#oficinas" class="button">Explorar oficinas ${icon('arrow')}</a></div>${mapArt}</div><div class="how"><h2>Da ideia ao próximo passo.</h2><div class="how-grid"><div class="step"><span class="step-number">01</span><div><h3>Escolha a modificação</h3><p>Encontre o tema do seu projeto e organize suas dúvidas.</p></div></div><div class="step"><span class="step-number">02</span><div><h3>Confira as exigências</h3><p>Use as fontes oficiais e confirme o procedimento no seu estado.</p></div></div><div class="step"><span class="step-number">03</span><div><h3>Converse com uma oficina</h3><p>Procure a especialidade certa antes de decidir o próximo passo.</p></div></div></div></div></section>`;}
function pageHeader(title,desc){return `<div class="page-heading"><a class="breadcrumb" href="#inicio">Início <span aria-hidden="true">/</span></a><h1>${title}</h1><p>${desc}</p></div>`;}

const specialties = ['Turbo','Motor','Suspensão','Freios','Áudio','Estética','Escapamento','Performance','Remap','Legalização'];
let workshopQuery = '';
const defaultFilters = () => ({order:'distance', specialties:[], rating:0, distance:''});
let workshopFilters = defaultFilters();
function renderWorkshops() {
  main.innerHTML = `<div class="container">${pageHeader('Encontre quem entende do seu projeto.','Compare especialidades e conheça a experiência do diretório em formação.')}
    <div class="page-content"><div class="notice"><strong>Nosso diretório está em formação.</strong><p>Não há oficinas verificadas publicadas. Nomes, endereços, horários, notas, avaliações e distâncias são exemplos fictícios. As cidades são referências de navegação; não representam estabelecimentos reais.</p></div>
    <label class="demo-switch"><input type="checkbox" id="demo" ${demo?'checked':''}> Mostrar oficinas de exemplo</label>
    <div class="toolbar"><label class="search">${icon('search')}<input id="workshop-search" type="search" aria-label="Buscar oficinas" placeholder="Nome, cidade ou serviço" value="${escapeHTML(workshopQuery)}"></label>
      <select id="city" aria-label="Filtrar por cidade">${options(workshops.map(w=>w.cidade),'Todas as cidades')}</select>
      <select id="service" aria-label="Filtrar por serviço">${options(workshops.flatMap(w=>w.servicos),'Todos os serviços')}</select>
      <button class="button light" id="filters-toggle" aria-expanded="false" aria-controls="workshop-filters">Filtros</button>
    </div>
    <form id="workshop-filters" class="filters-panel" hidden>
      <h2>Refine sua busca</h2><p>As especialidades selecionadas são alternativas entre si. Cidade, serviço, nota e distância são combinados.</p>
      <div class="form-grid">
        <label class="field">Ordenar por<select name="order"><option value="distance">Mais próximas</option><option value="rating">Melhor avaliadas</option><option value="reviews">Mais avaliadas</option></select></label>
        <label class="field">Avaliação mínima<select name="rating"><option value="0">Todas</option>${[1,2,3,4,5].map(n=>`<option value="${n}">${n} ou mais</option>`).join('')}</select></label>
        <label class="field">Distância de exemplo<select name="distance"><option value="">Todas</option>${[1,2,3,4,5,10,15].map(n=>`<option value="${n}">Até ${n} km</option>`).join('')}<option value="20+">20 km ou mais</option></select></label>
      </div><fieldset><legend>Especialidades</legend><div class="chips">${specialties.map(value=>`<label class="choice-chip"><input type="checkbox" name="specialty" value="${escapeHTML(value)}"><span>${escapeHTML(value)}</span></label>`).join('')}</div></fieldset>
      <p class="help">Distâncias simuladas, sem geolocalização. Use “Todas” para incluir também a faixa entre 15 e 20 km.</p>
      <div class="actions"><button class="button" type="submit">Ver resultados</button><button class="button light" type="button" data-reset-workshops>Limpar</button></div>
    </form>
    <p class="result-count" id="filter-summary"></p><div class="result-count" id="workshop-count" aria-live="polite"></div><div id="workshop-results" tabindex="-1"></div>
    </div></div>`;
  document.querySelector('#city').value = city;
  document.querySelector('#service').value = service;
  syncWorkshopFilters(); filterWorkshops();
}
function syncWorkshopFilters() {
  const form = document.querySelector('#workshop-filters');
  if (!form) return;
  form.elements.order.value = workshopFilters.order;
  form.elements.rating.value = workshopFilters.rating;
  form.elements.distance.value = workshopFilters.distance;
  form.querySelectorAll('[name="specialty"]').forEach(input => { input.checked = workshopFilters.specialties.includes(input.value); });
}
// Função pura: a mesma combinação é aplicada a busca, cidade e filtros avançados.
function matchingWorkshops() {
  const filters = workshopFilters;
  return workshops.filter(w =>
    (!city || w.cidade === city) && (!service || w.servicos.includes(service)) &&
    normalize(`${w.nomeFantasia} ${w.cidade} ${w.uf} ${w.especialidade} ${w.servicos.join(' ')}`).includes(normalize(workshopQuery)) &&
    (!filters.specialties.length || filters.specialties.some(value => w.servicos.includes(value))) &&
    w.notaMedia >= filters.rating &&
    (!filters.distance || (filters.distance === '20+' ? w.distanciaKm >= 20 : w.distanciaKm <= Number(filters.distance)))
  ).sort((a,b) => {
    const difference = filters.order === 'rating' ? b.notaMedia-a.notaMedia : filters.order === 'reviews' ? b.totalAvaliacoes-a.totalAvaliacoes : a.distanciaKm-b.distanciaKm;
    return difference || a.nomeFantasia.localeCompare(b.nomeFantasia,'pt-BR');
  });
}
function ratingText(w) { return `${w.notaMedia.toFixed(1).replace('.',',')} / 5 · ${w.totalAvaliacoes} avaliações de exemplo`; }
function workshopCard(w) {
  return `<article class="workshop-card"><div class="workshop-top"><div class="workshop-avatar">${icon('wrench')}</div><div><h3><a href="#oficina/${w.id}">${escapeHTML(w.nomeFantasia)}</a></h3><small>${escapeHTML(w.cidade)} / ${w.uf}</small></div></div>
    <span class="tag">Perfil fictício</span><span class="tag">${escapeHTML(w.especialidade)}</span><p>${escapeHTML(w.descricao)}</p>
    <p><strong>${ratingText(w)}</strong><br>${w.distanciaKm.toLocaleString('pt-BR')} km · distância simulada</p>
    <a class="plain-button" href="#oficina/${w.id}">Ver perfil ${icon('arrow')}</a></article>`;
}
function filterWorkshops() {
  const result = demo ? matchingWorkshops() : [];
  const orderLabel = {distance:'Mais próximas',rating:'Melhor avaliadas',reviews:'Mais avaliadas'}[workshopFilters.order];
  document.querySelector('#filter-summary').textContent = `${orderLabel} · Nota: ${workshopFilters.rating || 'todas'} · Distância: ${workshopFilters.distance ? (workshopFilters.distance === '20+' ? '20 km ou mais' : 'até '+workshopFilters.distance+' km') : 'todas'} · Especialidades: ${workshopFilters.specialties.join(', ') || 'todas'}`;
  document.querySelector('#workshop-count').textContent = demo ? `${result.length} perfil(is) de exemplo` : 'Nenhuma oficina publicada';
  document.querySelector('#workshop-results').innerHTML = result.length ? `<div class="workshop-grid">${result.map(workshopCard).join('')}</div>` : `<div class="empty">${icon('pin')}<h3>${demo?'Nenhum resultado para esses filtros':'Estamos preparando os primeiros encontros.'}</h3><p>${demo?'Tente outra combinação de filtros ou limpe a busca.':'Explore os guias ou ative os perfis fictícios para conhecer o diretório.'}</p><button class="button light" ${demo?'data-reset-workshops':'data-show-demo'}>${demo?'Limpar filtros':'Conhecer os perfis de exemplo'}</button></div>`;
}
function resetWorkshops() {
  city = ''; service = ''; workshopQuery = ''; workshopFilters = defaultFilters();
  renderWorkshops(); document.querySelector('#workshop-search').focus();
}
function renderWorkshopReviews(w) {
  main.innerHTML = `<div class="container detail-page">${pageHeader('Avaliações completas',escapeHTML(w.nomeFantasia))}<div class="page-content reading"><div class="notice"><strong>Fase 2 · Demonstração</strong><p>Todos os relatos e notas são fictícios. Não é possível publicar avaliações nesta versão.</p></div><a class="text-link" href="#oficina/${w.id}">Voltar ao perfil</a><p class="detail-meta">${ratingText(w)}</p>${w.avaliacoes.map(reviewCard).join('')}</div></div>`;
  document.title = 'Avaliações de exemplo | Garagem';
}
function reviewCard(review) {
  return `<article class="review-card"><h3>${escapeHTML(review.autor)}</h3><p><strong>${review.estrelas} / 5</strong> · Avaliação fictícia · Sem data real</p><p>${escapeHTML(review.descricao)}</p></article>`;
}
function renderWorkshop(id, allReviews = false) {
  const w = workshops.find(item => String(item.id) === id);
  if (!w) return renderNotFound('Oficina');
  if (allReviews) return renderWorkshopReviews(w);
  main.innerHTML = `<article class="container detail-page">${pageHeader(escapeHTML(w.nomeFantasia), `${escapeHTML(w.cidade)} / ${w.uf} · ${escapeHTML(w.especialidade)}`)}
    <div class="page-content"><div class="notice"><strong>Perfil fictício · Demonstração</strong><p>Este estabelecimento não existe no diretório real. Endereço, horários, serviços, distância, notas e relatos abaixo são exemplos. Não há contratação ou contato.</p></div>
      <a class="text-link" href="#oficinas">Voltar à busca</a><p class="detail-meta"><strong>${ratingText(w)}</strong><span>${w.distanciaKm.toLocaleString('pt-BR')} km · distância simulada</span></p>
      <div class="detail-grid"><div class="reading"><h2>Sobre a oficina de exemplo</h2><p>${escapeHTML(w.descricao)}</p><h2>Serviços oferecidos</h2><div class="chips">${w.servicos.map(value=>`<span class="tag">${escapeHTML(value)}</span>`).join('')}</div>
        <h2>Endereço fictício</h2><address>${escapeHTML(w.logradouro)}, ${w.numero}<br>${escapeHTML(w.bairro)} · ${escapeHTML(w.cidade)} / ${w.uf}<br>CEP ${w.cep} (exemplo, não utilizar para deslocamento)</address>
      </div><aside class="about-panel"><h2>Horário de exemplo</h2><p>${escapeHTML(w.horarios)}</p><button class="button dark" disabled aria-describedby="contact-unavailable">WhatsApp</button><p id="contact-unavailable" class="help">Contato indisponível: perfil de exemplo</p></aside></div>
      <section class="reading"><h2>Avaliações de exemplo</h2><p>Relatos inventados para demonstrar a interface. Não representam clientes reais.</p>${w.avaliacoes.slice(0,3).map(reviewCard).join('')}<a class="button light" href="#oficina/${w.id}/avaliacoes">Ver todas as avaliações · demonstração</a></section>
    </div></article>`;
  document.title = `${w.nomeFantasia} (exemplo) | Garagem`;
}
document.addEventListener('click', event => {
  if (event.target.closest('#filters-toggle')) {
    const button = document.querySelector('#filters-toggle');
    const form = document.querySelector('#workshop-filters');
    form.hidden = !form.hidden;
    button.setAttribute('aria-expanded', String(!form.hidden));
    // Reabrir descarta alterações ainda não aplicadas, preservando os resultados exibidos.
    if (!form.hidden) syncWorkshopFilters();
  }
});
document.addEventListener('submit', event => {
  if (event.target.id !== 'workshop-filters') return;
  event.preventDefault();
  const form = event.target;
  workshopFilters = {order:form.elements.order.value,rating:Number(form.elements.rating.value),distance:form.elements.distance.value,specialties:[...form.querySelectorAll('[name="specialty"]:checked')].map(input=>input.value)};
  form.hidden = true;
  document.querySelector('#filters-toggle').setAttribute('aria-expanded','false');
  filterWorkshops(); document.querySelector('#workshop-results').focus();
});

function renderAbout(){main.innerHTML=`<div class="container">${pageHeader('Paixão por carros. Um lugar para começar.','O Garagem nasceu para aproximar quem quer modificar o carro da informação e dos serviços de que precisa.')}<div class="page-content about-grid"><div class="prose"><h2>Mais clareza antes de modificar.</h2><p>Escolher uma peça é só uma parte do projeto. Também é preciso entender o que consultar, como se preparar e quem pode ajudar. A proposta do Garagem é reunir esses primeiros passos em uma experiência simples e gratuita.</p><h2>Um projeto em construção.</h2><p>Esta é a primeira versão do site, baseada no escopo público do projeto. Os guias são roteiros de consulta e não uma certificação de que determinada alteração é permitida. A orientação específica deve ser confirmada nas fontes oficiais e no órgão de trânsito do seu estado.</p><p>O catálogo de oficinas ainda precisa ser validado. Os perfis disponíveis no modo de exemplos são fictícios. Avaliações e cadastro aparecem apenas como demonstrações de uma fase futura, sem salvar dados ou criar contas. Contratação e administração não estão disponíveis.</p><a class="button dark" href="https://github.com/SalixJs/Projeto_garagem" target="_blank" rel="noopener">Acompanhar no GitHub ↗</a></div><aside class="about-panel"><a class="button light" href="#cadastro">Criar conta · demonstração</a><h3>O que você encontra aqui</h3><ul><li>Temas de modificações organizados por categoria.</li><li>Checklists para preparar suas consultas.</li><li>Links para fontes oficiais.</li><li>Favoritos salvos neste navegador.</li><li>Uma prévia da busca de oficinas.</li></ul><p style="font-size:12px;margin:20px 0 0">Sem conta, sem cobrança. Seus favoritos e marcações são armazenados localmente no seu dispositivo.</p></aside></div></div>`;}

// Fase 2: demonstração. Os valores existem apenas nos controles do formulário.
// Não há senha, armazenamento, requisição, upload, criação de conta ou login.
let registrationStep = 0;
let registrationRole = 'usuario';
const ownerSteps = ['Responsável','Dados da oficina','Endereço','Serviços e horários','Logo e fotos'];
function validCNPJ(value) {
  const clean = value.toUpperCase().replace(/[.\/\-\s]/g,'');
  if (!/^[A-Z0-9]{12}\d{2}$/.test(clean) || /^(\d)\1{13}$/.test(clean)) return false;
  // Módulo 11, incluindo CNPJ alfanumérico: valor de cada caractere = ASCII - 48.
  // Referência: Receita Federal, Manual de Cálculo do DV do CNPJ (ver LEIA-ME).
  const digit = base => {
    let sum = 0, weight = 2;
    for (let i = base.length-1; i >= 0; i--) {
      sum += (base.charCodeAt(i)-48)*weight;
      weight = weight === 9 ? 2 : weight+1;
    }
    const remainder = sum % 11;
    return remainder < 2 ? '0' : String(11-remainder);
  };
  const base = clean.slice(0,12), first = digit(base);
  return clean.slice(-2) === first + digit(base+first);
}
function renderRegistration() {
  registrationStep = 0; registrationRole = 'usuario';
  main.innerHTML = `<div class="container detail-page">${pageHeader('Criar conta · Demonstração','Conheça o fluxo previsto para uma próxima fase do Garagem.')}
    <div class="page-content"><div class="notice"><strong>Nenhuma conta será criada.</strong><p>Use somente dados de teste. Nada deste formulário é salvo ou enviado pelo site. Não há campo de senha nem login. Ao concluir, cancelar ou sair da página, os campos são descartados.</p></div>
      <fieldset id="role-picker"><legend>Qual experiência deseja conhecer?</legend><div class="chips"><label class="choice-chip"><input type="radio" name="demo-role" value="usuario" checked> Usuário</label><label class="choice-chip"><input type="radio" name="demo-role" value="oficina"> Dono de oficina</label></div></fieldset>
      <p id="registration-progress" role="status"></p><ol class="wizard-steps" id="wizard-steps"></ol>
      <form id="registration-form" autocomplete="off" novalidate>
        <fieldset data-registration-step="0"><legend>Responsável</legend><div class="form-grid">
          <label class="field">Nome de teste<input id="demo-name" required minlength="2" maxlength="150" autocomplete="off"></label>
          <label class="field">E-mail de teste<input id="demo-email" type="email" required maxlength="150" autocomplete="off" placeholder="pessoa@example.com"></label>
        </div><p class="help">O e-mail serve apenas para demonstrar a validação de formato. Não será gravado nem usado para enviar mensagens.</p></fieldset>
        <fieldset data-registration-step="1" hidden disabled><legend>Dados da oficina</legend><div class="form-grid">
          <label class="field">Nome fantasia de teste<input required minlength="2" maxlength="150"></label>
          <label class="field">Razão social de teste<input required minlength="2" maxlength="150"></label>
          <label class="field">CNPJ de teste<input id="demo-cnpj" required maxlength="18" placeholder="12.ABC.345/01DE-35" aria-describedby="cnpj-help"></label>
          <label class="field">Descrição de teste<textarea required minlength="10" maxlength="600" rows="3"></textarea></label>
        </div><p class="help" id="cnpj-help">Validação de formato e dígitos verificadores, sem consulta à Receita e sem comprovar existência. Exemplo técnico para teste: 12.ABC.345/01DE-35.</p></fieldset>
        <fieldset data-registration-step="2" hidden disabled><legend>Endereço</legend><div class="form-grid">
          <label class="field">CEP de teste<input id="demo-cep" inputmode="numeric" required maxlength="9" placeholder="00000-000"></label>
          <label class="field">Logradouro de teste<input required maxlength="150"></label>
          <label class="field">Número de teste<input required maxlength="10"></label>
          <label class="field">Bairro de teste<input required maxlength="100"></label>
          <label class="field">Cidade de teste<input required maxlength="100"></label>
          <label class="field">UF<select required><option value="">Selecione</option>${'AC AL AP AM BA CE DF ES GO MA MT MS MG PA PB PR PE PI RJ RN RS RO RR SC SP SE TO'.split(' ').map(uf=>`<option>${uf}</option>`).join('')}</select></label>
        </div><p class="help">O CEP é verificado apenas pelo formato de oito dígitos. Não há busca de endereço.</p></fieldset>
        <fieldset data-registration-step="3" hidden disabled><legend>Serviços e horários</legend><p>Selecione ao menos um serviço de exemplo.</p><div class="chips">${specialties.map(value=>`<label class="choice-chip"><input type="checkbox" name="demo-service" value="${escapeHTML(value)}">${escapeHTML(value)}</label>`).join('')}</div>
          <label class="field">Horários de teste<textarea required minlength="5" maxlength="255" rows="3" placeholder="Segunda a sexta, 8h às 18h; fim de semana fechado"></textarea></label>
        </fieldset>
        <fieldset data-registration-step="4" hidden disabled><legend>Logo e fotos</legend><div class="form-grid">
          <label class="field">Logo opcional<input id="demo-logo" type="file" accept="image/png,image/jpeg,image/webp"></label>
          <label class="field">Fotos opcionais<input id="demo-photos" type="file" accept="image/png,image/jpeg,image/webp" multiple></label>
        </div><p class="help">Use arquivos de teste: PNG, JPEG ou WebP, até 5 MB por arquivo e até 6 fotos. Apenas tipo, quantidade e tamanho são conferidos no navegador. Não há leitura do conteúdo nem upload.</p></fieldset>
        <p id="registration-error" class="form-error" role="alert"></p>
        <div class="actions"><button type="button" class="button light" id="registration-back" hidden>Voltar</button><button type="submit" class="button" id="registration-next">Concluir demonstração</button><button type="button" class="button light" id="registration-cancel">Cancelar e descartar</button></div>
      </form>
    </div></div>`;
  showRegistrationStep();
}
function showRegistrationStep() {
  const count = registrationRole === 'oficina' ? 5 : 1;
  document.querySelectorAll('[data-registration-step]').forEach(fieldset => {
    const active = Number(fieldset.dataset.registrationStep) === registrationStep;
    fieldset.hidden = !active; fieldset.disabled = !active;
  });
  document.querySelector('#wizard-steps').innerHTML = (registrationRole === 'oficina' ? ownerSteps : ['Responsável']).map((name,index)=>`<li ${index === registrationStep?'aria-current="step"':''}>${index+1}. ${name}</li>`).join('');
  document.querySelector('#registration-progress').textContent = `Etapa ${registrationStep+1} de ${count} · ${ownerSteps[registrationStep]}`;
  document.querySelector('#registration-back').hidden = registrationStep === 0;
  document.querySelector('#registration-next').textContent = registrationStep === count-1 ? 'Concluir demonstração' : 'Continuar';
  document.querySelector('#registration-error').textContent = '';
}
function validateRegistrationStep() {
  const fieldset = document.querySelector(`[data-registration-step="${registrationStep}"]`);
  const fields = [...fieldset.querySelectorAll('input,select,textarea')];
  fields.forEach(field => field.setCustomValidity(''));
  fields.filter(field=>field.required && ['text','textarea'].includes(field.type)).forEach(field=>{
    if (!field.value.trim()) field.setCustomValidity('Preencha este campo com dados de teste.');
  });
  if (registrationStep === 0) {
    const email = document.querySelector('#demo-email');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) email.setCustomValidity('Digite um e-mail de teste, como pessoa@example.com.');
  }
  if (registrationStep === 1) {
    const cnpj = document.querySelector('#demo-cnpj');
    if (!validCNPJ(cnpj.value)) cnpj.setCustomValidity('Confira o formato e os dígitos verificadores do CNPJ de teste.');
  }
  if (registrationStep === 2) {
    const cep = document.querySelector('#demo-cep');
    if (!/^\d{5}-?\d{3}$/.test(cep.value)) cep.setCustomValidity('Digite oito dígitos, com ou sem hífen.');
  }
  if (registrationStep === 3 && !fieldset.querySelector('[name="demo-service"]:checked')) {
    fields.find(field=>field.name === 'demo-service').setCustomValidity('Selecione ao menos um serviço.');
  }
  if (registrationStep === 4) {
    fields.forEach(field=>{
      const files = [...field.files];
      if (files.length > (field.multiple ? 6 : 1) || files.some(file=>!['image/png','image/jpeg','image/webp'].includes(file.type) || file.size > 5*1024*1024)) field.setCustomValidity('Use PNG, JPEG ou WebP de até 5 MB; no máximo 6 fotos.');
    });
  }
  const invalid = fields.find(field=>!field.checkValidity());
  if (invalid) {
    document.querySelector('#registration-error').textContent = invalid.validationMessage;
    invalid.reportValidity(); invalid.focus(); return false;
  }
  return true;
}
function finishRegistration() {
  document.querySelector('#registration-form').reset();
  main.innerHTML = `<div class="container section"><div class="empty"><h1>Demonstração concluída</h1><p>Os campos foram descartados. Nenhuma conta foi criada e nenhum dado ou arquivo foi salvo ou enviado.</p><a class="button" href="#oficinas">Explorar oficinas</a><button class="button light" id="registration-restart">Recomeçar demonstração</button></div></div>`;
  main.focus();
}
document.addEventListener('change', event => {
  if (event.target.name !== 'demo-role') return;
  document.querySelector('#registration-form').reset();
  registrationRole = event.target.value; registrationStep = 0; showRegistrationStep();
});
document.addEventListener('input', event => {
  if (event.target.closest('#registration-form')) {
    event.target.setCustomValidity('');
    document.querySelector('#registration-error').textContent = '';
  }
});
document.addEventListener('submit', event => {
  if (event.target.id !== 'registration-form') return;
  event.preventDefault();
  if (!validateRegistrationStep()) return;
  if (registrationRole === 'usuario' || registrationStep === 4) finishRegistration();
  else {
    registrationStep++; showRegistrationStep();
    document.querySelector(`[data-registration-step="${registrationStep}"] input`).focus();
  }
});
document.addEventListener('click', event => {
  if (event.target.closest('#registration-back')) { registrationStep--; showRegistrationStep(); document.querySelector(`[data-registration-step="${registrationStep}"] input`).focus(); }
  if (event.target.closest('#registration-cancel')) { document.querySelector('#registration-form').reset(); location.hash = 'inicio'; }
  if (event.target.closest('#registration-restart')) renderRegistration();
});
// Também limpa controles se o navegador guardar a página no cache de navegação.
window.addEventListener('pagehide', () => document.querySelector('#registration-form')?.reset());
window.addEventListener('pageshow', event => { if (event.persisted && location.hash === '#cadastro') renderRegistration(); });

function route() {
  if (location.hash === '#main') { main.focus(); return; }
  document.querySelector('#registration-form')?.reset();
  const [view = 'inicio', id, child] = (location.hash.slice(1) || 'inicio').split('/');
  if (dialog.open) dialog.close();
  document.title = 'Garagem — Seu carro. Seu projeto.';
  if (view === 'guia') renderGuide(id);
  else if (view === 'oficina') renderWorkshop(id, child === 'avaliacoes');
  else if (view === 'cadastro') renderRegistration();
  else ({inicio:renderHome,guias:renderGuides,oficinas:renderWorkshops,salvos:renderSaved,sobre:renderAbout}[view] || (() => renderNotFound('Página')))();
  const section = view === 'guia' ? 'guias' : view === 'oficina' ? 'oficinas' : view;
  document.querySelectorAll('[data-nav]').forEach(link => {
    const active = link.dataset.nav === section;
    link.classList.toggle('active', active);
    if (active) link.setAttribute('aria-current', 'page'); else link.removeAttribute('aria-current');
  });
  updateSaved(); window.scrollTo(0,0);
}
// Delegação de eventos mantém os controles funcionando após trocar a página por hash.
document.addEventListener('click', event => {
  const button = event.target.closest('button');
  if (!button) return;
  if (button.dataset.save) saveGuide(button.dataset.save);
  if (button.dataset.category) {
    category = button.dataset.category;
    document.querySelectorAll('[data-category]').forEach(el => el.setAttribute('aria-pressed', String(el.dataset.category === category)));
    filterGuides();
  }
  if (button.hasAttribute('data-reset-guides')) renderGuides();
  if (button.hasAttribute('data-show-demo')) { demo = true; document.querySelector('#demo').checked = true; filterWorkshops(); }
  if (button.hasAttribute('data-reset-workshops')) resetWorkshops();
  if (button.hasAttribute('data-legalize')) {
    const section = document.querySelector('#legalizacao');
    section.focus({preventScroll:true}); section.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'});
  }
  if (button.hasAttribute('data-close') || button.classList.contains('dialog-close')) dialog.close();
});
document.addEventListener('input', event => {
  if (event.target.id === 'guide-search') { query = event.target.value; filterGuides(); }
  if (event.target.id === 'workshop-search') { workshopQuery = event.target.value; filterWorkshops(); }
});
document.addEventListener('change', event => {
  const target = event.target;
  if (target.id === 'legal-filter') { legal = target.value; filterGuides(); }
  if (target.id === 'demo') { demo = target.checked; filterWorkshops(); }
  if (target.id === 'city') { city = target.value; filterWorkshops(); }
  if (target.id === 'service') { service = target.value; filterWorkshops(); }
  if (target.dataset.check) { checks[target.dataset.check] = target.checked; persist('garagem.checks', checks); updateProgress(); }
});
document.querySelectorAll('[data-icon]').forEach(el => { el.innerHTML = icon(el.dataset.icon); });
window.addEventListener('hashchange', () => { route(); main.focus({preventScroll:true}); });
route();
