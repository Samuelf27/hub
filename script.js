document.getElementById('year').textContent = new Date().getFullYear();

const GH = 'https://github.com/Samuelf27';
const PG = 'https://samuelf27.github.io';

const PROJECTS = [
  { icon: '📊', name: 'Admin Dashboard', cat: 'Corporativo', desc: 'Painel administrativo profissional: autenticação, CRUD, tabela de dados, gráficos e dark mode. React + TypeScript.', tags: ['React', 'TypeScript', 'Tailwind'], live: `${PG}/admin-dashboard/`, repo: `${GH}/admin-dashboard` },
  // Bibliotecas & ferramentas
  { icon: '🇧🇷', name: 'br-utils', cat: 'Biblioteca', desc: 'Biblioteca TypeScript de validação BR (CPF, CNPJ, CEP, PIS, cartão...). Testada com CI, zero deps.', tags: ['TypeScript', 'Vitest', 'npm'], live: `${PG}/br-utils/`, repo: `${GH}/br-utils` },
  { icon: '⌨️', name: 'br-gen', cat: 'CLI', desc: 'Ferramenta de terminal que gera dados brasileiros válidos para testes e seeds.', tags: ['Node.js', 'CLI', 'npm'], repo: `${GH}/br-gen` },
  { icon: '🧩', name: 'BR Toolkit', cat: 'Extensão', desc: 'Extensão de Chrome (Manifest V3) para gerar e validar documentos BR no navegador.', tags: ['Chrome', 'MV3', 'JS'], repo: `${GH}/br-toolkit-extension` },
  { icon: '🔌', name: 'br-validator-api', cat: 'API', desc: 'API REST em Express para validar/gerar documentos BR. Testes, Docker e serverless.', tags: ['Express', 'REST', 'Docker'], repo: `${GH}/br-validator-api` },
  { icon: '🧰', name: 'DevToolbox', cat: 'Ferramenta', desc: 'Suíte de 9 utilitários para devs: JSON, Base64, JWT, hash, UUID e mais.', tags: ['JavaScript', 'Web Crypto'], live: `${PG}/devtoolbox/`, repo: `${GH}/devtoolbox` },
  { icon: '📊', name: 'GitHub Analyzer', cat: 'Dashboard', desc: 'Analisa qualquer perfil do GitHub com gráficos de linguagens e estrelas.', tags: ['Chart.js', 'GitHub API'], live: `${PG}/github-analyzer/`, repo: `${GH}/github-analyzer` },

  // Web apps
  { icon: '🌟', name: 'Portfólio', cat: 'Web App', desc: 'Meu portfólio pessoal — dark, responsivo e animado.', tags: ['HTML', 'CSS', 'JS'], live: `${PG}/portfolio/`, repo: `${GH}/portfolio` },
  { icon: '✅', name: 'TaskFlow', cat: 'Web App', desc: 'Quadro Kanban (estilo Trello) com arrastar-e-soltar, persistência e PWA.', tags: ['PWA', 'Drag&Drop'], live: `${PG}/taskflow-kanban/`, repo: `${GH}/taskflow-kanban` },
  { icon: '🌤️', name: 'Weather App', cat: 'Web App', desc: 'Previsão do tempo em tempo real com a API Open-Meteo e geolocalização.', tags: ['API', 'Geolocation'], live: `${PG}/weather-app/`, repo: `${GH}/weather-app` },
  { icon: '◈', name: 'Fluxo', cat: 'Landing', desc: 'Landing page estilo SaaS para um app de finanças (produto fictício).', tags: ['Landing', 'UI'], live: `${PG}/fluxo-landing-page/`, repo: `${GH}/fluxo-landing-page` },
  { icon: '⏱️', name: 'Pomodoro Focus', cat: 'Web App', desc: 'Timer Pomodoro com anel de progresso, modos e estatísticas.', tags: ['SVG', 'localStorage'], live: `${PG}/pomodoro-focus/`, repo: `${GH}/pomodoro-focus` },
  { icon: '🧠', name: 'Jogo da Memória', cat: 'Jogo', desc: 'Jogo da memória com flip 3D, cronômetro e tela de vitória.', tags: ['Game', 'CSS 3D'], live: `${PG}/memory-game/`, repo: `${GH}/memory-game` },

  // Full-stack & dados
  { icon: '🍦', name: 'Doce Sabor', cat: 'Full-Stack', desc: 'Plataforma de pedidos online: catálogo, carrinho, checkout e painel admin.', tags: ['Node', 'Express', 'MySQL'], repo: `${GH}/doce_sabor_fullstack_food_ordering_platform` },
  { icon: '📈', name: 'Score de Clientes', cat: 'Machine Learning', desc: 'Modelos de classificação para prever score de crédito (até 82% de acurácia).', tags: ['Python', 'scikit-learn'], repo: `${GH}/Analise_de_Score_de_Clientes_com_Python_Pandas_Sklearn` },
  { icon: '🤖', name: 'Chatbot com IA', cat: 'IA', desc: 'Chat interativo em tempo real com a API da OpenAI.', tags: ['Python', 'Streamlit', 'OpenAI'], repo: `${GH}/Chatbot_Com_IA_Streamlit_OpenAI_Python` },
];

// Stats
const liveCount = PROJECTS.filter(p => p.live).length;
document.getElementById('stats').innerHTML = `
  <div class="stat"><b>${PROJECTS.length}</b><span>Projetos</span></div>
  <div class="stat"><b>${liveCount}</b><span>Ao vivo</span></div>
  <div class="stat"><b>34</b><span>Repositórios</span></div>`;

// Filtros
const cats = ['Todos', ...new Set(PROJECTS.map(p => p.cat))];
const filtersEl = document.getElementById('filters');
filtersEl.innerHTML = cats.map((c, i) => `<button class="${i === 0 ? 'active' : ''}" data-cat="${c}">${c}</button>`).join('');

const grid = document.getElementById('grid');
function render(filter = 'Todos') {
  const items = filter === 'Todos' ? PROJECTS : PROJECTS.filter(p => p.cat === filter);
  grid.innerHTML = items.map(p => `
    <article class="card">
      <div class="card__top">
        <div class="card__icon">${p.icon}</div>
        <div>
          <div class="card__name">${p.name}</div>
          <div class="card__cat">${p.cat}</div>
        </div>
      </div>
      <p class="card__desc">${p.desc}</p>
      <div class="card__tags">${p.tags.map(t => `<span>${t}</span>`).join('')}</div>
      <div class="card__links">
        ${p.live ? `<a class="live" href="${p.live}" target="_blank" rel="noopener">🔗 Ver ao vivo</a>` : ''}
        ${p.repo ? `<a class="repo" href="${p.repo}" target="_blank" rel="noopener">‹/› Código</a>` : ''}
      </div>
    </article>`).join('');
  requestAnimationFrame(() => grid.querySelectorAll('.card').forEach((c, i) => setTimeout(() => c.classList.add('show'), i * 40)));
}

filtersEl.addEventListener('click', (e) => {
  const b = e.target.closest('button');
  if (!b) return;
  filtersEl.querySelectorAll('button').forEach(x => x.classList.toggle('active', x === b));
  render(b.dataset.cat);
});

render();
