
/* ==========================================
   1. FOTOGRAFÍAS DE LAS GALERÍAS
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


/* ==========================================
   2. FOTOGRAFÍAS REALES DE LEAH FERNANDA
========================================== */

const fotosLeah = [
    'fotografias/01/1.jpg',
    'fotografias/01/2.jpg',
    'fotografias/01/3.jpg',
    'fotografias/01/4.jpg',
    'fotografias/01/5.jpg',
    'fotografias/01/6.jpg',
    'fotografias/01/7.jpg',
    'fotografias/01/8.jpg',
    'fotografias/01/9.jpg',
    'fotografias/01/10.jpg',
    'fotografias/01/11.jpg'
];


/* ==========================================
   3. FOTOGRAFÍAS REALES DE JEFFRY Y MARICRUZ
========================================== */

/*
   IMPORTANTE:
   La ruta corresponde a la carpeta:
   Boda/Jeffry y maricruz/

   La foto 1 será la portada de esta galería.
*/

const fotosJeffryMaricruz = [
    'Boda/Jeffry%20y%20maricruz/1.jpg',
    'Boda/Jeffry%20y%20maricruz/2.jpg',
    'Boda/Jeffry%20y%20maricruz/3.jpg',
    'Boda/Jeffry%20y%20maricruz/4.jpg',
    'Boda/Jeffry%20y%20maricruz/5.jpg',
    'Boda/Jeffry%20y%20maricruz/6.jpg',
    'Boda/Jeffry%20y%20maricruz/7.jpg',
    'Boda/Jeffry%20y%20maricruz/8.jpg',
    'Boda/Jeffry%20y%20maricruz/9.jpg',
    'Boda/Jeffry%20y%20maricruz/10.jpg'
];


/* ==========================================
   4. INFORMACIÓN DE LAS CATEGORÍAS
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
   5. INFORMACIÓN DE LOS EVENTOS
========================================== */

const events = [

    /* BAUTIZOS Y CUMPLEAÑOS */

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

        // FOTO 4 COMO PORTADA DE LEAH
        cover: fotosLeah[3],

        desc: 'Un día lleno de color, juegos y alegría para celebrar el primer año de Leah Fernanda.',
        photos: fotosLeah,
        private: false
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


    /* QUINCE AÑOS */

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
        private: false
    },


    /* MATRIMONIOS */

    {
        id: 'boda-demo',
        cat: 'bodas',
        title: 'Jeffry & Maricruz',
        client: 'Jeffry y Maricruz',
        date: '2026',
        type: 'Matrimonio',

        // FOTO 1: PORTADA EXCLUSIVA DE ESTA GALERÍA
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
        private: false
    }

];


/* ==========================================
   6. VARIABLES Y REFERENCIAS DEL HTML
========================================== */

let activeCat = 'bautizos';

const get = id => document.getElementById(id);


/* ==========================================
   7. NAVEGACIÓN ENTRE PÁGINAS
========================================== */

function show(id) {

    document.querySelectorAll('.view').forEach(view => {
        view.classList.remove('active');
    });

    const target = get(id);

    if (!target) return;

    target.classList.add('active');

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    const mobileNav = get('mobileNav');

    if (mobileNav) {
        mobileNav.style.display = 'none';
    }

}


function home() {
    show('home');
}


/* ==========================================
   8. ACCESO A LAS CATEGORÍAS
   TODAS LAS CATEGORÍAS SON PÚBLICAS
========================================== */

function category(c) {

    if (!cats[c]) return;

    renderCategory(c);

}


/* ==========================================
   9. FUNCIONES DE CIERRE DE MODALES
========================================== */

function closeCategory() {

    const modal = get('categoryModal');

    if (modal) {
        modal.style.display = 'none';
    }

}


function unlockCategory() {

    closeCategory();

    renderCategory(activeCat);

}


function closePrivate() {

    const modal = get('privateModal');

    if (modal) {
        modal.style.display = 'none';
    }

}


function unlock() {

    closePrivate();

}


/* ==========================================
   10. MOSTRAR EVENTOS DE UNA CATEGORÍA
========================================== */

function renderCategory(c) {

    activeCat = c;

    const data = cats[c];

    if (!data) return;

    const kicker = get('catKicker');
    const title = get('catTitle');
    const desc = get('catDesc');
    const count = get('eventCount');
    const grid = get('eventGrid');

    if (kicker) {
        kicker.textContent = data.kicker;
    }

    if (title) {
        title.textContent = data.title;
    }

    if (desc) {
        desc.textContent = data.desc;
    }

    const list = events.filter(event => event.cat === c);

    if (count) {
        count.textContent =
            String(list.length).padStart(2, '0') + ' HISTORIAS';
    }

    if (grid) {

        grid.innerHTML = list.map(event => `

            <article
                class="event-card"
                onclick="openEvent('${event.id}')">

                <div class="event-photo">

                    <img
                        src="${event.cover}"
                        alt="${event.title}"
                        loading="lazy">

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

    }

    show('category');

}


/* ==========================================
   11. VOLVER A LA CATEGORÍA
========================================== */

function backCategory() {

    category(activeCat);

}


/* ==========================================
   12. ABRIR UNA GALERÍA SIN CONTRASEÑA
========================================== */

function openEvent(id) {

    const event = events.find(item => item.id === id);

    if (!event) return;

    renderEvent(event);

}


/* ==========================================
   13. MOSTRAR FOTOGRAFÍAS Y DETALLES
========================================== */

function renderEvent(event) {

    const cover = get('detailCover');
    const title = get('detailTitle');
    const sub = get('detailSub');
    const kicker = get('detailKicker');
    const desc = get('detailDesc');
    const grid = get('photoGrid');
    const videoPoster = get('videoPoster');


    /* PORTADA DEL EVENTO */

    if (cover) {

        cover.src = event.cover;
        cover.alt = event.title;

    }


    /* INFORMACIÓN DEL EVENTO */

    if (title) {
        title.textContent = event.title;
    }

    if (sub) {

        sub.textContent =
            `${event.client} · ${event.date} · ${event.type}`;

    }

    if (kicker) {
        kicker.textContent = cats[event.cat].kicker;
    }

    if (desc) {
        desc.textContent = event.desc;
    }


    /* GALERÍA FOTOGRÁFICA */

    if (grid) {

        grid.innerHTML = event.photos.map((src, index) => `

            <img
                src="${src}"
                loading="lazy"
                alt="Fotografía ${index + 1} de ${event.title}"
                onerror="this.style.display='none'">

        `).join('');

    }


    /* PORTADA DE VIDEO */

    if (videoPoster) {

        videoPoster.style.backgroundImage = `

            linear-gradient(#0b111855, #0b111855),

            url('${event.cover}')

        `;

    }

    show('detail');

}


/* ==========================================
   14. AVISO DE VIDEO
========================================== */

function videoNotice() {

    alert(
        'Este espacio está preparado para insertar el video real de cada evento. En la versión final podremos usar videos MP4 o reproductores privados.'
    );

}
