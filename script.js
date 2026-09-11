/* ---------- tab navigation ---------- */
const tabButtons = document.querySelectorAll('nav.tabs button');
const panels = document.querySelectorAll('section.panel');
function goTab(name){
  tabButtons.forEach(b=>b.classList.toggle('active', b.dataset.tab===name));
  panels.forEach(p=>p.classList.toggle('active', p.id===name));
  window.scrollTo({top:0, behavior:'smooth'});
}
tabButtons.forEach(b=>b.addEventListener('click',()=>goTab(b.dataset.tab)));

/* ---------- clickable glossary popovers ---------- */
document.querySelectorAll('.clue').forEach(el=>{
  el.addEventListener('click', (e)=>{
    e.stopPropagation();
    const wasOpen = el.classList.contains('open');
    document.querySelectorAll('.clue.open').forEach(o=>o.classList.remove('open'));
    if(!wasOpen) el.classList.add('open');
  });
});
document.addEventListener('click', ()=> document.querySelectorAll('.clue.open').forEach(o=>o.classList.remove('open')));

/* ---------- investigation data ---------- */
const routes = {
  1:{
    letra:'A',
    cena1Titulo:'A caderneta na mesa de som',
    cena1Texto:`Iraídes explora a mesa de áudio abandonada, repleta de cabos cortados. Encontra um caderno de couro com manchas de café, anotações apressadas e uma frase seca: <b>"03:00 AM — Armazém 4."</b>`,
    faixa:'Sangue Latino',
    interpretacao:'A letra fala de um impulso que arrasta para longe mesmo contra a própria vontade — talvez a mesma força que tirou Apolinário do teatro antes do fim do show.',
    mid1:[
      {label:'Seguir direto para o Armazém 4 antes que a maré vire', texto:'Iraídes não espera confirmação. Pega o casaco, sai pela porta dos fundos e desce a rua quase correndo, decidida a chegar ao cais antes do amanhecer.'},
      {label:'Procurar Cláudio para confirmar a rota', texto:'Iraídes encontra Cláudio ainda tremendo nos bastidores. Ele confirma, em voz baixa, que Apolinário repetiu a frase do "sangue que não deixa parar" pouco antes de sumir — a mesma da canção de abertura.'}
    ],
    conector1:'De um jeito ou de outro, o relógio corre e o Armazém 4 é o único endereço que ainda faz sentido.',
    mid2:[
      {label:'Esperar escondida até garantir que ninguém a seguiu', texto:'Iraídes se encosta numa pilha de caixotes molhados e observa o cais por longos minutos. Só quando tem certeza de que está sozinha, atravessa até o Armazém 4.'},
      {label:'Arriscar e entrar direto no armazém', texto:'Sem tempo a perder, Iraídes atravessa o pátio às pressas, os sapatos encharcados, torcendo para que nenhuma viatura do DOPS esteja de olho no cais àquela hora.'}
    ],
    conector2:'Chegando mais cedo ou mais tarde, o resultado é o mesmo: dentro do Armazém 4, algo — ou alguém — ainda espera.',
    decisaoLabel:'A decisão de Iraídes',
    decisaoTexto:'Decodificar os versos como uma mensagem em código sobre uma rota de fuga marítima.',
    caminhoTitulo:'A trilha do exílio',
    caminhoTexto:`Iraídes ruma até o <span class="clue">Cais do Porto de Santos<span class="popover">Principal porto do estado de São Paulo — em 1973, rota real de fuga de perseguidos políticos rumo ao exílio.</span></span> sob uma chuva densa. No Armazém 4, encontra um navio cargueiro prestes a partir e avista João Apolinário camuflado sob um sobretudo escuro.`,
    finalTitulo:'Final 1 — O exílio libertador',
    finalStamp:'EMBARCADO',
    finalTexto:`João Apolinário consegue embarcar rumo à Europa com uma identidade falsa antes da chegada da polícia. O álbum de 1973 é lançado semanas depois, tornando-se um estrondoso fenômeno nacional. Do exílio, o poeta acompanha seus versos reverberando na voz de milhões de brasileiros.`
  },
  2:{
    letra:'B',
    cena1Titulo:'O camarim destruído',
    cena1Texto:`O camarim está devastado: espelhos quebrados e potes de tinta facial virados. O performer Cláudio está encolhido no canto enquanto um gravador de rolo continua girando com uma gravação secreta.`,
    faixa:'Primavera nos Dentes',
    interpretacao:'A fome de que fala a canção soa, ali, como urgência de gritar algo represado por tempo demais — a mesma urgência que fez alguém gravar aquela fita escondida.',
    mid1:[
      {label:'Ouvir a gravação até o fim, mesmo com risco de ser flagrada', texto:'Iraídes trava o gravador entre as mãos e escuta cada segundo da fita, os passos de alguém se aproximando lá fora. No fim, uma voz sussurra um endereço na Rua Augusta antes do silêncio.'},
      {label:'Tirar Cláudio dali antes que alguém apareça', texto:'Iraídes ajuda Cláudio a se levantar e sair pela porta lateral. No caminho, é ele mesmo quem repete o endereço gravado — decorado de tanto ouvir a fita nos ensaios.'}
    ],
    conector1:'De um jeito ou de outro, o endereço aponta para o mesmo porão.',
    mid2:[
      {label:'Copiar o endereço à mão antes de sair, por garantia', texto:'Iraídes rabisca o endereço num pedaço de papel que esconde na meia. Se perder a memória ou a fita, ainda terá para onde voltar.'},
      {label:'Confiar só na memória e sair correndo', texto:'Sem tempo para papel e caneta, Iraídes repete o endereço baixinho, feito mantra, enquanto atravessa o teatro em direção à rua.'}
    ],
    conector2:'De caderno ou de memória, o mesmo porão na Rua Augusta espera por ela.',
    decisaoLabel:'A decisão de Iraídes',
    decisaoTexto:'Seguir o endereço registrado no áudio para encontrar a imprensa alternativa.',
    caminhoTitulo:'A prensa underground',
    caminhoTexto:`Iraídes segue até o porão de uma <span class="clue">livraria clandestina na Rua Augusta<span class="popover">Nos anos 70, a Rua Augusta abrigava pontos de encontro da contracultura paulistana — livrarias, editoras e bares frequentados por artistas e opositores do regime.</span></span>. O local está repleto de estudantes e intelectuais. O áudio do camarim é tocado nos alto-falantes, transformando o poema em manifesto.`,
    finalTitulo:'Final 2 — A canção de protesto',
    finalStamp:'PUBLICADO',
    finalTexto:`As letras são mimeografadas e distribuídas por toda a cidade. A repercussão nas rádios e festivais cria uma blindagem de popularidade tão grande sobre o Secos &amp; Molhados que a censura não consegue barrar o lançamento do álbum, transformando a obra num pilar da contracultura brasileira.`
  },
  3:{
    letra:'C',
    cena1Titulo:'A batida do DOPS nos bastidores',
    cena1Texto:`O som de coturnos militares ecoa no teatro. O Agente Valadares invade o prédio procurando os originais das canções censuradas. Iraídes se esconde com a pasta de arquivos confidenciais.`,
    faixa:'Rosa de Hiroshima',
    interpretacao:'O pedido para não esquecer o que foi calado ecoa como um aviso: se os originais forem destruídos essa noite, é como se a censura apagasse a própria memória do que aconteceu.',
    mid1:[
      {label:'Confrontar o Agente Valadares para ganhar tempo', texto:'Iraídes sai do esconderijo e encara Valadares, alegando ser apenas uma convidada perdida. Ganha minutos preciosos enquanto os homens revistam o teatro em outra direção.'},
      {label:'Esconder-se e proteger os arquivos em silêncio', texto:'Iraídes não arrisca contato. Prende a respiração atrás dos bastidores enquanto os passos de Valadares ecoam a poucos metros da pasta escondida sob o casaco.'}
    ],
    conector1:'De um jeito ou de outro, restam poucos minutos antes que todas as saídas sejam bloqueadas.',
    mid2:[
      {label:'Avisar os músicos da banda sobre o esconderijo', texto:'Iraídes sussurra o plano para dois integrantes do grupo, que se posicionam perto das capas de vinil para disfarçar o movimento diante dos homens de Valadares.'},
      {label:'Manter o plano em segredo, só para si', texto:'Iraídes decide não confiar em mais ninguém. Move-se sozinha entre os bastidores, com a pasta de manuscritos apertada contra o peito.'}
    ],
    conector2:'Com ajuda ou sozinha, o lote de capas continua sendo a única saída possível.',
    decisaoLabel:'A decisão de Iraídes',
    decisaoTexto:'Esconder os manuscritos originais no lote impresso das capas do vinil antes da apreensão.',
    caminhoTitulo:'O enigma da resistência',
    caminhoTexto:`Iraídes camufla os poemas inéditos dentro do lote de capas com a célebre fotografia das cabeças servidas em pratos. No entanto, o Agente Valadares e seus homens bloqueiam todas as saídas do teatro.`,
    finalTitulo:'Final 3 — A prisão e o enigma',
    finalStamp:'APREENDIDO',
    finalTexto:`Iraídes e a equipe são detidas e as matrizes, apreendidas. Contudo, o público presente no show já havia memorizado os versos ao ouvi-los na apresentação ao vivo. As palavras de Rosa de Hiroshima passam a ser cantadas de boca em boca nas ruas, provando que a arte não pode ser aprisionada.`
  }
};

let inv = {stage:'intro', route:null, trail:[], mid1Choice:null, mid2Choice:null};

function currentRoute(){ return routes[inv.route]; }

function stageLabel(s){
  return {intro:'ABERTURA', choose:'PONTO DE PARTIDA', cena1:'CENA 1', mid1:'ESCOLHA 1', cena2:'CENA 2', mid2:'ESCOLHA 2', decisao:'DECISÃO', path:'CAMINHO', final:'FINAL'}[s];
}
function renderStageTrack(){
  const order = ['intro','choose','cena1','mid1','cena2','mid2','decisao','path','final'];
  const idx = order.indexOf(inv.stage);
  document.getElementById('stageTrack').innerHTML = order.map((s,i)=>{
    const cls = i<idx ? 'done' : (i===idx ? 'now' : '');
    return `<span class="${cls}">${stageLabel(s)}</span>`;
  }).join('');
}
function renderTrail(){
  const bar = document.getElementById('trailBar');
  if(inv.trail.length===0){
    bar.innerHTML = 'Caminho percorrido: nenhum ainda — escolha um ponto de partida acima.';
  } else {
    bar.innerHTML = 'Caminho percorrido: ' + inv.trail.map(t=>`<b>${t}</b>`).join(' → ');
  }
}
function pushTrail(label){ inv.trail.push(label); renderTrail(); }

function bindClues(){
  document.querySelectorAll('#invContent .clue').forEach(el=>{
    el.addEventListener('click',(e)=>{
      e.stopPropagation();
      const wasOpen = el.classList.contains('open');
      document.querySelectorAll('.clue.open').forEach(o=>o.classList.remove('open'));
      if(!wasOpen) el.classList.add('open');
    });
  });
}

function resetInvestigation(){ inv = {stage:'intro', route:null, trail:[], mid1Choice:null, mid2Choice:null}; renderInv(); }

function goStage(stage){ inv.stage = stage; renderInv(); }

function chooseRoute(n){
  inv.route = n; inv.stage = 'cena1'; inv.mid1Choice = null; inv.mid2Choice = null;
  inv.trail = [`Partida ${n}: ${routes[n].cena1Titulo}`];
  renderInv();
}
function chooseMid1(i){
  const r = currentRoute();
  inv.mid1Choice = i; inv.stage = 'cena2';
  pushTrail(r.mid1[i].label);
  renderInv();
}
function chooseMid2(i){
  const r = currentRoute();
  inv.mid2Choice = i; inv.stage = 'decisao';
  pushTrail(r.mid2[i].label);
  renderInv();
}
function goFinal(){
  const r = currentRoute();
  inv.stage = 'final';
  pushTrail(r.finalTitulo);
  renderInv();
}
function exploreOther(){
  inv.stage = 'choose'; inv.trail = []; inv.route = null; inv.mid1Choice = null; inv.mid2Choice = null;
  renderInv();
}

function renderInv(){
  renderStageTrack();
  renderTrail();
  const c = document.getElementById('invContent');

  if(inv.stage==='intro'){
    c.innerHTML = `
      <p>A noite de 1973 no Teatro Ruth Escobar é sufocante. O público vibra com os rostos pintados e a performance andrógena do Secos &amp; Molhados, mas, no bis, João Apolinário desaparece. Viaturas do DOPS rondam o local.</p>
      <p>Iraídes precisa escolher por onde começar a busca. Cada pista abre uma rota própria, com duas decisões reais pelo caminho.</p>
      <div class="nav-actions"><button class="primary" onclick="goStage('choose')">COMEÇAR A INVESTIGAÇÃO ▸</button></div>
    `;
    return;
  }

  if(inv.stage==='choose'){
    c.innerHTML = `
      <p>Três pistas chegaram até Iraídes por caminhos diferentes. Escolha uma — as outras duas continuam esperando, caso queira recomeçar depois.</p>
      <div class="choice-grid">
        <div class="choice-card" onclick="chooseRoute(1)"><span class="num">1</span><h4>${routes[1].cena1Titulo}</h4><p>Pista musical: <i>${routes[1].faixa}</i></p></div>
        <div class="choice-card" onclick="chooseRoute(2)"><span class="num">2</span><h4>${routes[2].cena1Titulo}</h4><p>Pista musical: <i>${routes[2].faixa}</i></p></div>
        <div class="choice-card" onclick="chooseRoute(3)"><span class="num">3</span><h4>${routes[3].cena1Titulo}</h4><p>Pista musical: <i>${routes[3].faixa}</i></p></div>
      </div>
    `;
    return;
  }

  const r = currentRoute();
  if(!r){ goStage('choose'); return; }

  if(inv.stage==='cena1'){
    c.innerHTML = `
      <span class="stamp" style="transform:rotate(-4deg);">ROTA ${r.letra} · CENA 1</span>
      <h3 class="display" style="font-style:italic; margin:14px 0 8px;">${r.cena1Titulo}</h3>
      <p>${r.cena1Texto}</p>
      <div class="lyric-box">
        <span class="track">PISTA MUSICAL — "${r.faixa.toUpperCase()}"</span>
        <span class="interp">${r.interpretacao}</span>
        <span class="slot">[ cole aqui o trecho oficial da letra de "${r.faixa}" — vocês já têm o excerto no dossiê original ]</span>
      </div>
      <p style="margin-top:18px; font-weight:700; color:var(--ink);">Escolha 1 — O que Iraídes faz agora?</p>
      <div class="mid-grid">
        <div class="mid-card" onclick="chooseMid1(0)"><span class="arrow">▸</span><p>${r.mid1[0].label}</p></div>
        <div class="mid-card" onclick="chooseMid1(1)"><span class="arrow">▸</span><p>${r.mid1[1].label}</p></div>
      </div>
      <div class="nav-actions">
        <button class="ghost" onclick="goStage('choose')">◂ ESCOLHER OUTRO PONTO DE PARTIDA</button>
      </div>
    `;
    bindClues();
    return;
  }

  if(inv.stage==='cena2'){
    const choice = r.mid1[inv.mid1Choice];
    c.innerHTML = `
      <span class="stamp" style="transform:rotate(-4deg);">ROTA ${r.letra} · CENA 2</span>
      <p style="margin-top:14px;">${choice.texto}</p>
      <div class="connector">${r.conector1}</div>
      <p style="font-weight:700; color:var(--ink);">Escolha 2 — E agora?</p>
      <div class="mid-grid">
        <div class="mid-card" onclick="chooseMid2(0)"><span class="arrow">▸</span><p>${r.mid2[0].label}</p></div>
        <div class="mid-card" onclick="chooseMid2(1)"><span class="arrow">▸</span><p>${r.mid2[1].label}</p></div>
      </div>
      <div class="nav-actions">
        <button class="ghost" onclick="goStage('cena1')">◂ VOLTAR</button>
      </div>
    `;
    return;
  }

  if(inv.stage==='decisao'){
    const choice2 = r.mid2[inv.mid2Choice];
    c.innerHTML = `
      <span class="stamp" style="transform:rotate(-4deg);">ROTA ${r.letra} · CENA 3</span>
      <p style="margin-top:14px;">${choice2.texto}</p>
      <div class="connector">${r.conector2}</div>
      <div class="decision-box">
        <div class="label">${r.decisaoLabel}</div>
        <p style="margin:8px 0 0;">${r.decisaoTexto}</p>
      </div>
      <div class="nav-actions">
        <button class="ghost" onclick="goStage('cena2')">◂ VOLTAR</button>
        <button class="primary" onclick="goStage('path')">SEGUIR A PISTA ▸</button>
      </div>
    `;
    return;
  }

  if(inv.stage==='path'){
    c.innerHTML = `
      <span class="stamp" style="transform:rotate(3deg);">ROTA ${r.letra}</span>
      <h3 class="display" style="font-style:italic; margin:14px 0 8px;">${r.caminhoTitulo}</h3>
      <p>${r.caminhoTexto}</p>
      <div class="nav-actions">
        <button class="ghost" onclick="goStage('decisao')">◂ VOLTAR</button>
        <button class="primary" onclick="goFinal()">VER O DESFECHO ▸</button>
      </div>
    `;
    bindClues();
    return;
  }

  if(inv.stage==='final'){
    c.innerHTML = `
      <h3 class="display" style="font-style:italic; margin-bottom:8px;">${r.finalTitulo}</h3>
      <div class="final-stamp-wrap"><span class="final-badge">${r.finalStamp}</span></div>
      <p>${r.finalTexto}</p>
      <div class="nav-actions">
        <button class="ghost" onclick="resetInvestigation()">↺ RECOMEÇAR A INVESTIGAÇÃO</button>
        <button class="primary" onclick="exploreOther()">EXPLORAR OUTRO CAMINHO ▸</button>
      </div>
    `;
    return;
  }
}

renderInv();

/* ================================================================
   MYSTERY EFFECTS
   ================================================================ */



/* ----- 2. Access-denied flash on watermark click ----- */
(function(){
  const banner = document.getElementById('watermarkBanner');
  const denied = document.getElementById('accessDenied');
  if(!banner || !denied) return;
  let timer = null;
  banner.style.cursor = 'pointer';
  banner.addEventListener('click', () => {
    clearTimeout(timer);
    denied.classList.add('show');
    timer = setTimeout(() => denied.classList.remove('show'), 1200);
  });
})();

/* ----- 3. Title glitch effect (random intervals) ----- */
(function(){
  const h1 = document.querySelector('header.top h1');
  if(!h1) return;
  h1.setAttribute('data-text', h1.textContent);
  function triggerGlitch(){
    h1.classList.add('glitching');
    setTimeout(() => h1.classList.remove('glitching'), 500);
    setTimeout(triggerGlitch, 5000 + Math.random() * 13000);
  }
  setTimeout(triggerGlitch, 3000);
})();

/* ----- 4. Smoke particle system on canvas ----- */
(function(){
  const canvas = document.getElementById('smokeCanvas');
  if(!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H;
  const particles = [];

  function resize(){
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  class Particle {
    constructor(){ this.reset(); }
    reset(){
      this.x       = Math.random() * W;
      this.y       = H + 20;
      this.size    = 30 + Math.random() * 80;
      this.speedX  = (Math.random() - 0.5) * 0.4;
      this.speedY  = -(0.15 + Math.random() * 0.35);
      this.life    = 0;
      this.maxLife = 200 + Math.random() * 300;
      const r = Math.floor(160 + Math.random() * 40);
      const g = Math.floor(130 + Math.random() * 30);
      const b = Math.floor(95  + Math.random() * 25);
      this.color = `${r},${g},${b}`;
    }
    update(){
      this.life++;
      this.x += this.speedX;
      this.y += this.speedY;
      this.size += 0.2;
      if(this.life >= this.maxLife || this.y < -this.size) this.reset();
    }
    draw(){
      const alpha = Math.sin((this.life / this.maxLife) * Math.PI) * 0.18;
      const grad  = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size);
      grad.addColorStop(0, `rgba(${this.color},${alpha})`);
      grad.addColorStop(1, `rgba(${this.color},0)`);
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  for(let i = 0; i < 28; i++){
    const p = new Particle();
    p.life = Math.floor(Math.random() * p.maxLife);
    particles.push(p);
  }

  function loop(){
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(loop);
  }
  loop();
})();

/* ----- 5. Surveillance "●REC" dot ----- */
(function(){
  const dot = document.createElement('div');
  dot.className = 'surveillance-dot';
  document.body.appendChild(dot);
})();

/* ----- 6. Entrance Modal & Audio Autoplay Trigger ----- */
let spotifyController = null;
let shouldPlaySpotify = false;

window.onSpotifyIframeApiReady = (IFrameAPI) => {
  const frameContainer = document.querySelector('.spotify-frame');
  if(!frameContainer) return;
  IFrameAPI.createController(frameContainer, {
    uri: 'spotify:playlist:5FTaFHFt7FBnKUKLXCDjfo',
    width: '100%',
    height: '352'
  }, (EmbedController) => {
    spotifyController = EmbedController;
    if(shouldPlaySpotify) {
      try { spotifyController.play(); } catch(e){}
    }
  });
};

(function(){
  const introOverlay    = document.getElementById('introOverlay');
  const btnEnterAudio   = document.getElementById('btnEnterAudio');
  const btnEnterSilent  = document.getElementById('btnEnterSilent');
  const bgAudio         = document.getElementById('bgAudio');

  function closeIntro(){
    if(!introOverlay) return;
    introOverlay.classList.add('hidden');
    setTimeout(() => {
      introOverlay.style.display = 'none';
    }, 600);
  }

  if(btnEnterAudio){
    btnEnterAudio.addEventListener('click', () => {
      closeIntro();
      // 1. Play local audio if trilha.mp3 or musica.mp3 exists
      if(bgAudio){
        bgAudio.play().catch(()=>{});
      }
      // 2. Play Spotify if controller ready, or flag to play once ready
      shouldPlaySpotify = true;
      if(spotifyController){
        try { spotifyController.play(); } catch(e){}
      }
    });
  }

  if(btnEnterSilent){
    btnEnterSilent.addEventListener('click', () => {
      closeIntro();
    });
  }
})();

/* ----- 7. Ambient detective desk lamp movement ----- */
(function(){
  let ticking = false;
  window.addEventListener('mousemove', (e) => {
    if(!ticking){
      window.requestAnimationFrame(() => {
        document.documentElement.style.setProperty('--torch-x', `${e.clientX}px`);
        document.documentElement.style.setProperty('--torch-y', `${e.clientY}px`);
        ticking = false;
      });
      ticking = true;
    }
  }, {passive: true});
})();

/* ----- 8. Paperclip secret memo toggle ----- */
(function(){
  const clipWrap = document.getElementById('paperclipWrap');
  if(!clipWrap) return;
  clipWrap.addEventListener('click', (e) => {
    e.stopPropagation();
    clipWrap.classList.toggle('open');
  });
  document.addEventListener('click', (e) => {
    if(!clipWrap.contains(e.target)){
      clipWrap.classList.remove('open');
    }
  });
})();

/* ----- 9. Footer cipher decryption toggle ----- */
(function(){
  const cipherBox = document.getElementById('cipherBox');
  const cipherText = document.getElementById('cipherText');
  const cipherAction = document.getElementById('cipherAction');
  if(!cipherBox || !cipherText || !cipherAction) return;

  const rawCode = "20-15-4-1 / 3-5-14-19-21-18-1 / 5 / 21-13-1 / 6-12-15-18";
  const decodedMsg = "TODA CENSURA É UMA FLOR";
  let isDecoded = false;

  cipherBox.addEventListener('click', () => {
    isDecoded = !isDecoded;
    if(isDecoded){
      cipherText.textContent = "DECRIPTANDO...";
      cipherText.classList.add('decoded');
      cipherAction.textContent = "[OCULTAR]";
      setTimeout(() => {
        cipherText.textContent = decodedMsg;
      }, 250);
    } else {
      cipherText.classList.remove('decoded');
      cipherText.textContent = rawCode;
      cipherAction.textContent = "[DECIFRAR]";
    }
  });
})();