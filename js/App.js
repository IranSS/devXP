let button = document.getElementById("buttonBuscar");
let campoPesquisar = document.getElementById("campo-pesquisa");
let section = document.getElementById("resultados-pesquisa");

function normalizarTexto(texto = "") {
    return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9\s]/g, " ")
        .replace(/\s+/g, " ")
        .trim();
}

function criarSinonimos(termo) {
    const base = normalizarTexto(termo);
    const sinonimos = new Set([base]);

    const mapa = {
        basico: ["basico", "basica", "basic", "iniciante", "beginner", "principiante"],
        iniciante: ["iniciante", "iniciantes", "basico", "basica", "basic", "beginner", "principiante"],
        intermediario: ["intermediario", "intermediaria", "intermediate", "medio", "media", "medio", "médio", "média"],
        avancado: ["avancado", "avancada", "advanced", "expert", "profissional"]
    };

    const aliases = mapa[base];
    if (aliases) {
        aliases.forEach((item) => sinonimos.add(item));
    }

    return sinonimos;
}

function correspondePesquisa(dado, termos) {
    const textoBuscavel = normalizarTexto(`${dado.titulo} ${dado.descricao} ${dado.tags} ${dado.nivel} ${dado.acesso}`);

    return termos.every((termo) => {
        const sinonimos = criarSinonimos(termo);
        return Array.from(sinonimos).some((alias) => textoBuscavel.includes(alias));
    });
}

function buscar() {
    let termo = campoPesquisar.value.trim();

    if (!termo) {
        section.innerHTML = `
            <div class="empty-state">
                <h2>Digite algo para começar</h2>
                <p>Use termos como React, Python, Docker, gratuito ou intermediário para encontrar recursos relevantes.</p>
            </div>`;
        return;
    }

    const termos = normalizarTexto(termo).split(/\s+/).filter(Boolean);
    let resultado = ``;

    for (let dado of dados) {
        if (correspondePesquisa(dado, termos)) {
            resultado += `
                <div class="itens-resultados">
                    <h2>${dado.titulo}</h2>
                    <p>${dado.descricao}</p>
                    <div class="meta-row">
                        <span class="chip">Nível: ${dado.nivel}</span>
                        <span class="chip">Acesso: ${dado.acesso}</span>
                    </div>
                    <a href="${dado.link}" target="_blank">Acesse o conteúdo agora</a>
                </div>`;
        }
    }

    if (!resultado) {
        section.innerHTML = `
            <div class="empty-state">
                <h2>Nenhum material encontrado</h2>
                <p>Tente outra palavra-chave, como JavaScript, IA, DevOps, básico ou gratuito.</p>
            </div>`;
    } else {
        section.innerHTML = resultado;
    }
}

button.addEventListener("click", buscar);
campoPesquisar.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        buscar();
    }
});