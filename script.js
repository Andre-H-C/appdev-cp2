document.addEventListener("DOMContentLoaded", () => {
    const gridAtores = document.getElementById("grid-atores");
    const campoBusca = document.getElementById("campo-busca");

    const listaOriginal = (typeof atores !== "undefined") ? atores : ((typeof dados !== "undefined") ? dados : []);

    function formatarData(dataISO) {
        if (!dataISO) return "N/D";
        const partes = dataISO.split("-");
        if (partes.length < 3) return dataISO;
        return `${partes[2]}/${partes[1]}/${partes[0]}`;
    }

    function renderizarAtores(lista) {
        gridAtores.innerHTML = "";

        if (!lista || lista.length === 0) {
            gridAtores.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #666; font-size: 15px; padding: 40px 0;">No actors found.</p>`;
            return;
        }

        lista.forEach((ator) => {
            gridAtores.innerHTML += `
                <div class="card-ator">
                    <div class="foto-container">
                        <img src="${ator.foto}" alt="${ator.nome}" loading="lazy">
                    </div>
                    <div class="card-info">
                        <h2>${ator.nome}</h2>
                        <div class="card-details">
                            <span>${ator.pais || 'N/A'}</span>
                            <span class="separator">•</span>
                            <span>${formatarData(ator.nascimento)}</span>
                        </div>
                    </div>
                </div>
            `;
        });
    }

    window.filtrarAtores = function() {
        const textoBusca = campoBusca.value.toLowerCase().trim();

        const atoresFiltrados = listaOriginal.filter((ator) =>
            ator.nome.toLowerCase().includes(textoBusca)
        );

        renderizarAtores(atoresFiltrados);
    };

    renderizarAtores(listaOriginal);
});
