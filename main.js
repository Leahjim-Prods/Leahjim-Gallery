
/* ==========================================
   1. IMÁGENES DE LAS GALERÍAS
========================================== */

const imgs = {

    luciana: [
        'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=85',
        'https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&w=900&q=85',
        'https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=900&q=85',
        'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=900&q=85',
        'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=900&q=85',
        'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=900&q=85'
    ],

    quince: [
        'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85',
        'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?auto=format&fit=crop&w=900&q=85',
        'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=85',
        'https://images.unsplash.com/photo-1507504031003-b417219a0nand?auto=format&fit=crop&w=900&q=85',
        'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=85',
        'https://images.unsplash.com/photo-1530023367847-a683933f4172?auto=format&fit=crop&w=900&q=85'
    ],

    boda: [
        'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1200&q=85',
        'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=85',
        'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=85',
        'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?auto=format&fit=crop&w=900&q=85',
        'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=85',
        'https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=900&q=85'
    ]

};

   // FOTOGRAFÍAS DE LEAH FERNANDA
   const fotosLeah = [
       "fotografias/01/1.jpg",
       "fotografias/01/2.jpg",
       "fotografias/01/3.jpg",
       "fotografias/01/4.jpg",
       "fotografias/01/5.jpg",
       "fotografias/01/6.jpg",
       "fotografias/01/7.jpg",
       "fotografias/01/8.jpg",
       "fotografias/01/9.jpg",
       "fotografias/01/10.jpg",
       "fotografias/01/11.jpg"
   ];


   const fotosJeffryMaricruz = [
       "Boda/Jeffry y maricruz/1.jpg",
       "Boda/Jeffry y maricruz/2.jpg",
       "Boda/Jeffry y maricruz/3.jpg",
       "Boda/Jeffry y maricruz/4.jpg",
       "Boda/Jeffry y maricruz/5.jpg",
       "Boda/Jeffry y maricruz/6.jpg",
       "Boda/Jeffry y maricruz/7.jpg",
       "Boda/Jeffry y maricruz/8.jpg",
       "Boda/Jeffry y maricruz/9.jpg",
       "Boda/Jeffry y maricruz/10.jpg"
   ];

/* ==========================================
   2. INFORMACIÓN DE LAS CATEGORÍAS
========================================== */

const cats = {

    bautizos: {
        title: 'Bautizos & cumpleaños',
        desc: 'Celebraciones familiares llenas de ternura, alegría y momentos que merecen conservarse.',
        kicker: 'CELEBRACIONES FAMILIARES'
    },

    quince: {
        title: '15 años',
        desc: 'Retratos, detalles y emociones de una noche que marca una nueva etapa.',
        kicker: 'UNA NOCHE INOLVIDABLE'
    },

    bodas: {
        title: 'Matrimonios',
        desc: 'Historias de amor narradas con sensibilidad, fotografía editorial y mirada cinematográfica.',
        kicker: 'HISTORIAS DE AMOR'
    }

};


/* ==========================================
   3. INFORMACIÓN DE LOS EVENTOS
========================================== */

const events = [

    {
        id: 'luciana',
        cat: 'bautizos',
        title: 'Primera comunión de Luciana',
        client: 'Luciana',
        date: 'Noviembre 2026',
        type: 'Primera comunión',
        cover: imgs.luciana[0],
        desc: 'Una celebración íntima y especial. Una historia de fe, familia y sonrisas, contada a través de pequeños detalles y grandes emociones.',
        photos: imgs.luciana,
        private: false
    },

    {
        id: 'leah',
        cat: 'bautizos',
        title: 'Cumpleaños de Leah Fernanda',
        client: 'Familia de Leah',
        date: 'Octubre 2026',
        type: 'Cumpleaños',
        cover: fotosLeah[3],
        desc: 'Un día lleno de color, juegos y alegría para celebrar el primer año de Leah Fernanda.',
        photos: fotosLeah,
        private: true
    },

    {
        id: 'bautizo-demo',
        cat: 'bautizos',
        title: 'Un día para recordar',
        client: 'Galería de muestra',
        date: '2026',
        type: 'Bautizo',
        cover: imgs.luciana[1],
        desc: 'Una selección de instantes familiares y detalles de una celebración especial.',
        photos: imgs.luciana,
        private: false
    },

    {
        id: 'quince-demo',
        cat: 'quince',
        title: 'Una noche de ensueño',
        client: 'Galería de muestra',
        date: '2026',
        type: '15 años',
        cover: imgs.quince[0],
        desc: 'Una noche especial entre luces, retratos, emoción y celebración.',
        photos: imgs.quince,
        private: false
    },

    {
        id: 'quince-val',
        cat: 'quince',
        title: 'Retratos de Valeria',
        client: 'Valeria',
        date: '2026',
        type: 'Sesión de 15 años',
        cover: imgs.quince[1],
        desc: 'Retratos editoriales para celebrar una etapa inolvidable.',
        photos: imgs.quince.slice().reverse(),
        private: true
    },

    
      {
          id: 'boda-demo',
          cat: 'bodas',
          title: 'Jeffry & Maricruz',
          client: 'Jeffry y Maricruz',
          date: '2026',
          type: 'Matrimonio',
      
          // FOTO 1: PORTADA EXCLUSIVA
          cover: fotosJeffryMaricruz[0],
      
          desc: 'Una historia de amor contada a través de imágenes.',
          photos: fotosJeffryMaricruz,
          private: false
      },


    {
        id: 'boda-sofia',
        cat: 'bodas',
        title: 'Sofía & Carlos',
        client: 'Sofía y Carlos',
        date: '2026',
        type: 'Matrimonio',
        cover: imgs.boda[2],
        desc: 'Una celebración elegante, cercana y llena de momentos espontáneos.',
        photos: imgs.boda.slice().reverse(),
        private: true
    }

];


/* ==========================================
   4. VARIABLES DE CONTROL
========================================== */

let pending = null;

let activeCat = 'bautizos';

let pendingCategory = null;


/* ==========================================
   5. CÓDIGOS DE ACCESO
========================================== */

const categoryCodes = {

    bautizos: 'BAU2026',

    quince: '15ANOS26',

    bodas: 'BODA2026'

};

const unlockedCategories = new Set();


/* ==========================================
   6. NAVEGACIÓN ENTRE PÁGINAS
========================================== */

function show(id) {

    document.querySelectorAll('.view').forEach(view => {
        view.classList.remove('active');
    });

    document.getElementById(id).classList.add('active');

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    document.getElementById('mobileNav').style.display = 'none';

}


function home() {

    show('home');

}


/* ==========================================
   7. ACCESO A LAS CATEGORÍAS
========================================== */

function category(c) {

    if (!cats[c]) return;

    if (!unlockedCategories.has(c)) {

        pendingCategory = c;

        document.getElementById('categoryLockTitle').textContent =
            'Acceso a ' + cats[c].title + '.';

        document.getElementById('categoryLockText').textContent =
            'Esta carpeta de Leahjim Prods está protegida. Ingresa el código que recibiste con tu paquete.';

        document.getElementById('categoryCode').value = '';

        document.getElementById('categoryError').style.display = 'none';

        document.getElementById('categoryModal').style.display = 'grid';

        setTimeout(() => {
            document.getElementById('categoryCode').focus();
        }, 100);

        return;

    }

    renderCategory(c);

}


/* ==========================================
   8. CERRAR VENTANA DE CATEGORÍA
========================================== */

function closeCategory() {

    document.getElementById('categoryModal').style.display = 'none';

    pendingCategory = null;

}


/* ==========================================
   9. VALIDAR CÓDIGO DE CATEGORÍA
========================================== */

function unlockCategory() {

    if (
        pendingCategory &&
        document.getElementById('categoryCode').value.trim().toUpperCase() ===
        categoryCodes[pendingCategory]
    ) {

        const c = pendingCategory;

        unlockedCategories.add(c);

        closeCategory();

        renderCategory(c);

    } else {

        document.getElementById('categoryError').style.display = 'block';

    }

}


/* ==========================================
   10. MOSTRAR EVENTOS DE UNA CATEGORÍA
========================================== */

function renderCategory(c) {

    activeCat = c;

    let d = cats[c];

    catKicker.textContent = d.kicker;

    catTitle.textContent = d.title;

    catDesc.textContent = d.desc;

    let list = events.filter(event => event.cat === c);

    eventCount.textContent =
        String(list.length).padStart(2, '0') + ' HISTORIAS';

    eventGrid.innerHTML = list.map(event => `

        <article
            class="event-card"
            onclick="openEvent('${event.id}')">

            <div class="event-photo">

                <img
                    src="${event.cover}"
                    alt="${event.title}">

                <span class="event-type">
                    ${event.type}
                </span>

            </div>

            <div class="event-info">

                <h3 class="serif">
                    ${event.title}
                </h3>

                <p>
                    ${event.client} &nbsp;·&nbsp; ${event.date}
                </p>

            </div>

        </article>

    `).join('');

    show('category');

}


/* ==========================================
   11. VOLVER A LA CATEGORÍA
========================================== */

function backCategory() {

    category(activeCat);

}


/* ==========================================
   12. ABRIR UNA GALERÍA
========================================== */

function openEvent(id) {

    let e = events.find(event => event.id === id);

    if (e.private) {

        pending = e;

        document.getElementById('privateCode').value = '';

        document.getElementById('privateError').style.display = 'none';

        document.getElementById('privateModal').style.display = 'grid';

        return;

    }

    renderEvent(e);

}


/* ==========================================
   13. CERRAR GALERÍA PRIVADA
========================================== */

function closePrivate() {

    document.getElementById('privateModal').style.display = 'none';

    pending = null;

}


/* ==========================================
   14. VALIDAR CÓDIGO DE GALERÍA PRIVADA
========================================== */

function unlock() {

    if (document.getElementById('privateCode').value === '1234') {

        let e = pending;

        closePrivate();

        renderEvent(e);

    } else {

        document.getElementById('privateError').style.display = 'block';

    }

}


/* ==========================================
   15. MOSTRAR FOTOGRAFÍAS Y DETALLES
========================================== */

function renderEvent(e) {

    detailCover.src = e.cover;

    detailTitle.textContent = e.title;

    detailSub.textContent =
        e.client + ' · ' + e.date + ' · ' + e.type;

    detailKicker.textContent = cats[e.cat].kicker;

    detailDesc.textContent = e.desc;


    /* Galería fotográfica */

    photoGrid.innerHTML = e.photos.map((src, i) => `

        <img
            src="${src}"
            loading="lazy"
            alt="Fotografía ${i + 1} de ${e.title}">

    `).join('');


    /* Portada del video */

    videoPoster.style.backgroundImage = `
        linear-gradient(#0b111855, #0b111855),
        url('${e.cover}')
    `;

    show('detail');

}


/* ==========================================
   16. AVISO DE VIDEO
========================================== */

function videoNotice() {

    alert(
        'Este espacio está preparado para insertar el video real de cada evento. En la versión final podremos usar videos MP4 o reproductores privados.'
    );

}
