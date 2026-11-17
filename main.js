const imgs={
 luciana:['https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=85','https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&w=900&q=85','https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=900&q=85','https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=900&q=85','https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=900&q=85','https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=900&q=85'],
 quince:['https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85','https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?auto=format&fit=crop&w=900&q=85','https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=85','https://images.unsplash.com/photo-1507504031003-b417219a0nand?auto=format&fit=crop&w=900&q=85','https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=85','https://images.unsplash.com/photo-1530023367847-a683933f4172?auto=format&fit=crop&w=900&q=85'],
 boda:['https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1200&q=85','https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=85','https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=85','https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?auto=format&fit=crop&w=900&q=85','https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=85','https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=900&q=85']
};
const cats={bautizos:{title:'Bautizos & cumpleaños',desc:'Celebraciones familiares llenas de ternura, alegría y momentos que merecen conservarse.',kicker:'CELEBRACIONES FAMILIARES'},quince:{title:'15 años',desc:'Retratos, detalles y emociones de una noche que marca una nueva etapa.',kicker:'UNA NOCHE INOLVIDABLE'},bodas:{title:'Matrimonios',desc:'Historias de amor narradas con sensibilidad, fotografía editorial y mirada cinematográfica.',kicker:'HISTORIAS DE AMOR'}};
const events=[
{id:'luciana',cat:'bautizos',title:'Primera comunión de Luciana',client:'Luciana',date:'Noviembre 2026',type:'Primera comunión',cover:imgs.luciana[0],desc:'Una celebración íntima y especial. Una historia de fe, familia y sonrisas, contada a través de pequeños detalles y grandes emociones.',photos:imgs.luciana,private:false},
{id:'leah',cat:'bautizos',title:'Cumpleaños de Leah Fernanda',client:'Familia de Leah',date:'Octubre 2026',type:'Cumpleaños',cover:imgs.luciana[2],desc:'Un día lleno de color, juegos y alegría para celebrar el primer año de Leah Fernanda.',photos:imgs.luciana.slice().reverse(),private:true},
{id:'bautizo-demo',cat:'bautizos',title:'Un día para recordar',client:'Galería de muestra',date:'2026',type:'Bautizo',cover:imgs.luciana[1],desc:'Una selección de instantes familiares y detalles de una celebración especial.',photos:imgs.luciana,private:false},
{id:'quince-demo',cat:'quince',title:'Una noche de ensueño',client:'Galería de muestra',date:'2026',type:'15 años',cover:imgs.quince[0],desc:'Una noche especial entre luces, retratos, emoción y celebración.',photos:imgs.quince,private:false},
{id:'quince-val',cat:'quince',title:'Retratos de Valeria',client:'Valeria',date:'2026',type:'Sesión de 15 años',cover:imgs.quince[1],desc:'Retratos editoriales para celebrar una etapa inolvidable.',photos:imgs.quince.slice().reverse(),private:true},
{id:'boda-demo',cat:'bodas',title:'Juan & Ana',client:'Galería de muestra',date:'2026',type:'Matrimonio',cover:imgs.boda[0],desc:'Desde los preparativos hasta el último abrazo: una historia de amor contada en imágenes.',photos:imgs.boda,private:false},
{id:'boda-sofia',cat:'bodas',title:'Sofía & Carlos',client:'Sofía y Carlos',date:'2026',type:'Matrimonio',cover:imgs.boda[2],desc:'Una celebración elegante, cercana y llena de momentos espontáneos.',photos:imgs.boda.slice().reverse(),private:true}
];
let pending=null,activeCat='bautizos',pendingCategory=null;
const categoryCodes={bautizos:'BAU2026',quince:'15ANOS26',bodas:'BODA2026'};
const unlockedCategories=new Set();
function show(id){document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));document.getElementById(id).classList.add('active');window.scrollTo({top:0,behavior:'smooth'});document.getElementById('mobileNav').style.display='none'}
function home(){show('home')}
function category(c){
  if(!cats[c])return;
  if(!unlockedCategories.has(c)){
    pendingCategory=c;
    document.getElementById('categoryLockTitle').textContent='Acceso a '+cats[c].title+'.';
    document.getElementById('categoryLockText').textContent='Esta carpeta de Leahjim Prods está protegida. Ingresa el código que recibiste con tu paquete.';
    document.getElementById('categoryCode').value='';
    document.getElementById('categoryError').style.display='none';
    document.getElementById('categoryModal').style.display='grid';
    setTimeout(()=>document.getElementById('categoryCode').focus(),100);
    return;
  }
  renderCategory(c);
}
function closeCategory(){document.getElementById('categoryModal').style.display='none';pendingCategory=null}
function unlockCategory(){
  if(pendingCategory && document.getElementById('categoryCode').value.trim().toUpperCase()===categoryCodes[pendingCategory]){
    const c=pendingCategory;unlockedCategories.add(c);closeCategory();renderCategory(c);
  }else document.getElementById('categoryError').style.display='block';
}
function renderCategory(c){activeCat=c;let d=cats[c];catKicker.textContent=d.kicker;catTitle.textContent=d.title;catDesc.textContent=d.desc;let list=events.filter(e=>e.cat===c);eventCount.textContent=String(list.length).padStart(2,'0')+' HISTORIAS';eventGrid.innerHTML=list.map(e=>`<article class="event-card" onclick="openEvent('${e.id}')"><div class="event-photo"><img src="${e.cover}" alt=""><span class="event-type">${e.type}</span></div><div class="event-info"><h3 class="serif">${e.title}</h3><p>${e.client} &nbsp;·&nbsp; ${e.date}</p></div></article>`).join('');show('category')}
function backCategory(){category(activeCat)}
function openEvent(id){let e=events.find(x=>x.id===id);if(e.private){pending=e;document.getElementById('privateCode').value='';document.getElementById('privateError').style.display='none';document.getElementById('privateModal').style.display='grid';return}renderEvent(e)}
function closePrivate(){document.getElementById('privateModal').style.display='none';pending=null}
function unlock(){if(document.getElementById('privateCode').value==='1234'){let e=pending;closePrivate();renderEvent(e)}else document.getElementById('privateError').style.display='block'}
function renderEvent(e){detailCover.src=e.cover;detailTitle.textContent=e.title;detailSub.textContent=e.client+' · '+e.date+' · '+e.type;detailKicker.textContent=cats[e.cat].kicker;detailDesc.textContent=e.desc;photoGrid.innerHTML=e.photos.map((src,i)=>`<img src="${src}" loading="lazy" alt="Fotografía ${i+1} de ${e.title}">`).join('');videoPoster.style.backgroundImage=`linear-gradient(#0b111855,#0b111855),url('${e.cover}')`;show('detail')}
function videoNotice(){alert('Este espacio está preparado para insertar el video real de cada evento. En la versión final podremos usar videos MP4 o reproductores privados.')}
