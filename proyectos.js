const misProyectos = [
    {
        titulo: "Estructuras y Maquetas",
        fecha: "Abril 2026",
        descripcion: "Pruebas de resistencia de puentes hechos con varillas de madera.",
        tipoMedia: "imagen",
        urlMedia: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600",
        tags: ["Estructuras", "1º Año"]
    },
    {
        titulo: "Circuitos Eléctricos Básicos",
        fecha: "Mayo 2026",
        descripcion: "Construcción de un circuito en serie y paralelo con interruptores caseros.",
        tipoMedia: "imagen",
        urlMedia: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=600",
        tags: ["Electricidad", "2º Año"]
    },
    {
        titulo: "Brazo Robótico Hidráulico",
        fecha: "Junio 2026",
        descripcion: "Brazo articulado impulsado por jeringas aplicando el principio de Pascal.",
        tipoMedia: "video",
        urlMedia: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        tags: ["Mecánica", "3º Año"]
    }
];

// Variable global para mantener el filtro seleccionado
let filtroActual = "todos";

// Función para renderizar los proyectos según el filtro
function cargarGaleria() {
    const contenedor = document.getElementById("galeria-grid");
    contenedor.innerHTML = "";

    // Filtrar la lista
    const proyectosFiltrados = misProyectos.filter(p => {
        if (filtroActual === "todos") return true;
        return p.tags.includes(filtroActual);
    });

    if (proyectosFiltrados.length === 0) {
        contenedor.innerHTML = `
            <div class="col-span-full text-center py-12 text-slate-400">
                <p class="text-lg">No hay proyectos subidos para este año todavía.</p>
            </div>`;
        return;
    }

    proyectosFiltrados.forEach(p => {
        let elementoMedia = "";

        if (p.tipoMedia === "imagen") {
            elementoMedia = `<img src="${p.urlMedia}" alt="${p.titulo}" class="w-full h-48 object-cover">`;
        } else if (p.tipoMedia === "video") {
            elementoMedia = `
                <div class="w-full h-48 bg-black">
                    <iframe class="w-full h-full" src="${p.urlMedia}" title="${p.titulo}" frameborder="0" allowfullscreen></iframe>
                </div>`;
        }

        const tagsHTML = p.tags.map(t => 
            `<span class="bg-indigo-950 text-indigo-300 text-xs px-2.5 py-1 rounded-full border border-indigo-800">${t}</span>`
        ).join(" ");

        const tarjeta = `
            <article class="bg-slate-800 rounded-xl overflow-hidden shadow-md hover:shadow-indigo-500/10 transition border border-slate-700 flex flex-col">
                ${elementoMedia}
                <div class="p-5 flex flex-col flex-grow">
                    <div class="flex justify-between items-start mb-2">
                        <h2 class="font-bold text-lg text-slate-100">${p.titulo}</h2>
                        <span class="text-xs text-slate-400 bg-slate-700/50 px-2 py-0.5 rounded">${p.fecha}</span>
                    </div>
                    <p class="text-slate-300 text-sm mb-4 flex-grow">${p.descripcion}</p>
                    <div class="flex flex-wrap gap-1.5 pt-2 border-t border-slate-700/60">
                        ${tagsHTML}
                    </div>
                </div>
            </article>
        `;

        contenedor.innerHTML += tarjeta;
    });
}

// Función que se ejecuta al hacer clic en los botones
function filtrarProyectos(categoria) {
    filtroActual = categoria;

    // Actualizar estilos visuales de los botones
    const botones = document.querySelectorAll(".btn-filtro");
    botones.forEach(btn => {
        btn.classList.remove("bg-indigo-600", "text-white");
        btn.classList.add("bg-slate-800", "text-slate-300");
    });

    // Destacar el botón activo
    event.currentTarget.classList.remove("bg-slate-800", "text-slate-300");
    event.currentTarget.classList.add("bg-indigo-600", "text-white");

    cargarGaleria();
}

document.addEventListener("DOMContentLoaded", cargarGaleria);
