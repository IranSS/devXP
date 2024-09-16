let button = document.getElementById("buttonBuscar");

function buscar(){
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisar = document.getElementById("campo-pesquisa").value;
    if(!campoPesquisar){
        section.innerHTML = `<p id="item-invalido"><strong>digite algo válido</p>`;
        section.style.background = null;
        return;
    }

    campoPesquisar = campoPesquisar.toLowerCase();

    let resultado = ``;
    let titulo = ``;
    let tags = ``;
    let nivel = ``
    let acesso = ``;

    for(let dado of dados){
        titulo = dado.titulo.toLowerCase();
        tags = dado.tags.toLowerCase();
        nivel = dado.nivel.toLowerCase();
        acesso = dado.acesso.toLowerCase();

        if(titulo.includes(campoPesquisar) || 
        tags.includes(campoPesquisar) || nivel.includes(campoPesquisar)
         || acesso.includes(campoPesquisar)){
            resultado += `<div class="itens-resultados">
            <h2>${dado.titulo}</h2>
            <p>${dado.descricao}</p>
            <p>Nível: ${dado.nivel}</p>
            <p>Acesso: ${dado.acesso}</p>
            <a href=${dado.link} target="_blank">Acesse o conteúdo agora</a>
            </div>`;
        }
    }
    if(!resultado){
        resultado = `<p id="item-invalido"><strong>item não encontrado no 
        nosso banco de dados</p>`;
        section.style.background = null;
    }
    else{
        section.style.background = 'rgba(0, 0, 0, 0.322)';
    }
    section.innerHTML = resultado; 
}
function mouseEnter(){
    button.style.background = "rgb(14, 39, 77)";
}
function mouseExit(){
    button.style.background = "rgb(44, 68, 104)";
}