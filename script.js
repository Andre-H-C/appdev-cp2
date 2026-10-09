const gridAtores = document.getElementById("grid-atores");
const campoBusca = document.getElementById("campo-busca");

function formatarData(dataISO) {
    if (!dataISO) return "N/D";
    const [ano, mes, dia] = dataISO.split("-");
    return `${dia}/${mes}/${ano}`;
}

function renderizarAtores(lista) {
    gridAtores.innerHTML = "";

    if (lista.length === 0) {
        gridAtores.innerHTML = `<p style="grid-column: 1/-1; text-align: center; font-size: 18px;">Nenhum ator ou atriz encontrado.</p>`;
        return;
    }

    lista.forEach((ator) => {
        gridAtores.innerHTML += `
            <div class="card-ator">
                <img src="${ator.foto}" alt="${ator.nome}">
                <h2>${ator.nome}</h2>
                <p><strong>País:</strong> ${ator.pais || 'Não informado'}</p>
                <p><strong>Nascimento:</strong> ${formatarData(ator.nascimento)}</p>
            </div>
        `;
    });
}

function filtrarAtores() {
    const textoBusca = campoBusca.value.toLowerCase().trim();

  const atoresFiltrados = atores.filter((ator) =>
        ator.nome.toLowerCase().includes(textoBusca)
    );

    renderizarAtores(atoresFiltrados);
}
renderizarAtores(atores);
