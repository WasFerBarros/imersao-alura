
function pesquisar() {
    let section = document.getElementById("resultado-pesquisa");

    let resultados = '';
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    console.log(campoPesquisa);
    for (let dado of dados) {
        if (dado.titulo.includes(campoPesquisa)) {
            resultados += ` 
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p>
                    ${dado.descricao}
                </p>
                <a href="${dado.link}" target="_blank">Mais informações sobre a atleta.</a>
            </div>
            `
            
        }
        

    }
    section.innerHTML = resultados;


}


