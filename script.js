
const $ = (s, p = document) => p.querySelector(s);
const $$ = (s, p = document) => [...p.querySelectorAll(s)];
const state = { slide: 0, search: '', brand: 'all', fuel: 'all', transmission: 'all' };

function formatPrice(value){return new Intl.NumberFormat('tr-TR').format(value)}

function renderHero(){
  const slide = HERO_SLIDES[state.slide];
  $('#heroEyebrow').textContent = slide.eyebrow;
  $('#heroTitle').textContent = slide.title;
  $('#heroDesc').textContent = slide.description;
  $('#heroImage').src = 'assets/images/' + slide.image;
  $('#heroImage').alt = slide.title;
  $$('.dot').forEach((el, i) => el.classList.toggle('active', i === state.slide));
}

function populateFilters(){
  const fill = (id, values, first) => {
    const select = $(id); select.innerHTML='';
    const opts = [first, ...values];
    opts.forEach((v, idx) => {
      const o = document.createElement('option');
      o.value = idx === 0 ? 'all' : v;
      o.textContent = idx === 0 ? first : v;
      select.appendChild(o);
    });
  };
  fill('#brandFilter', [...new Set(VEHICLES.map(v=>v.brand))], 'Tüm Markalar');
  fill('#fuelFilter', [...new Set(VEHICLES.map(v=>v.fuel))], 'Tüm Yakıt Tipleri');
  fill('#transmissionFilter', [...new Set(VEHICLES.map(v=>v.transmission))], 'Tüm Vites Türleri');
}

function vehicleCard(v){
  return `
  <article class="car-card">
    <div class="car-media">
      <img src="assets/images/${v.image}" alt="${v.brand} ${v.model}">
      <div class="overlay"></div>
      <span class="type-badge">${v.type}</span>
    </div>
    <div class="car-body">
      <div class="car-top">
        <div>
          <div class="subtle">${v.brand}</div>
          <div class="car-title">${v.model}</div>
        </div>
        <div class="price"><small>Günlük</small><strong class="gold-text">₺${formatPrice(v.price)}</strong></div>
      </div>
      <div class="specs">
        <div class="spec"><label>Yıl</label><span>${v.year}</span></div>
        <div class="spec"><label>Yakıt</label><span>${v.fuel}</span></div>
        <div class="spec"><label>Vites</label><span>${v.transmission}</span></div>
        <div class="spec"><label>Model</label><span>${v.model}</span></div>
      </div>
      <div class="card-actions">
        <a href="tel:05016874234" class="btn btn-primary">Hemen Ara</a>
        <a href="https://wa.me/905016874234" target="_blank" class="btn btn-outline">WhatsApp</a>
      </div>
    </div>
  </article>`;
}

function renderFleet(){
  const q = state.search.trim().toLowerCase();
  const list = VEHICLES.filter(v => {
    const text = `${v.brand} ${v.model} ${v.type}`.toLowerCase();
    return (!q || text.includes(q))
      && (state.brand === 'all' || v.brand === state.brand)
      && (state.fuel === 'all' || v.fuel === state.fuel)
      && (state.transmission === 'all' || v.transmission === state.transmission);
  });
  $('#fleetCount').textContent = `${list.length} araç listeleniyor`;
  $('#fleetGrid').innerHTML = list.map(vehicleCard).join('');
}

function renderCampaigns(){
  const items = [...CAMPAIGNS, ...CAMPAIGNS].map(t => `<div class="track-item">✦ <span>${t}</span></div>`).join('');
  $('#campaignTrack').innerHTML = items;
}

function initCursor(){
  const cursor = $('#cursorCar');
  if (!cursor) return;
  window.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });
}

function initSlider(){
  renderHero();
  setInterval(() => { state.slide = (state.slide + 1) % HERO_SLIDES.length; renderHero(); }, 4500);
  $('#prevHero').addEventListener('click', ()=>{ state.slide = (state.slide - 1 + HERO_SLIDES.length) % HERO_SLIDES.length; renderHero(); });
  $('#nextHero').addEventListener('click', ()=>{ state.slide = (state.slide + 1) % HERO_SLIDES.length; renderHero(); });
  $$('.dot').forEach((dot, i)=> dot.addEventListener('click', ()=>{ state.slide = i; renderHero(); }));
}

function initMenu(){
  $('#menuToggle').addEventListener('click', ()=> $('#mobileMenu').classList.toggle('open'));
}

function initFilters(){
  populateFilters();
  $('#searchInput').addEventListener('input', e=>{ state.search = e.target.value; renderFleet(); });
  $('#brandFilter').addEventListener('change', e=>{ state.brand = e.target.value; renderFleet(); });
  $('#fuelFilter').addEventListener('change', e=>{ state.fuel = e.target.value; renderFleet(); });
  $('#transmissionFilter').addEventListener('change', e=>{ state.transmission = e.target.value; renderFleet(); });
}

document.addEventListener('DOMContentLoaded', ()=>{
  renderCampaigns();
  initSlider();
  initMenu();
  initFilters();
  renderFleet();
  initCursor();
});
