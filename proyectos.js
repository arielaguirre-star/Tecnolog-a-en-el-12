// Base de datos de proyectos del aula
const misProyectos = [
    {
        titulo: "Brazo Robótico Hidráulico",
        fecha: "Mayo 2026",
        descripcion: "Construcción de un brazo articulado utilizando jeringas y principio de Pascal.",
        tipoMedia: "imagen", // "imagen" o "video"
        urlMedia: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600",
        tags: ["Robótica", "Física", "3º Año"]
    },
    {
        titulo: "Demostración Impresión 3D",
        fecha: "Junio 2026",
        descripcion: "Pruebas de calibración e impresión de piezas mecánicas en PLA.",
        tipoMedia: "video",
        // Poner el link de inserción (embed) de YouTube
        urlMedia: "https://www.youtube.com/embed/dQw4w9WgXcQ", 
        tags: ["Diseño 3D", "4º Año"]
    }
];

// Función para renderizar los proyectos en el HTML
function cargarGaleria() {
    const contenedor = document.getElementById("galeria-grid");
    contenedor.innerHTML = "";

    misProyectos.forEach(p => {
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

document.addEventListener("DOMContentLoaded", cargarGaleria);
