const cardsSection = document.getElementById("card-container");
const formulario = document.getElementById("form");

let nome = document.querySelector('.cadNomeInput');
let codigo = document.querySelector('.cadCodigoInput');
let setor = document.querySelector('.cadSetorSelect');
let admissao = document.querySelector('.cadAdmissaoInput');
let nasc = document.querySelector('.cadNascInput');
let imagem = document.querySelector('.cadUrlInput');
let descricao = document.querySelector('#cadDescricaoInput');


//se tiver valores no localStorage ele pega esses valores, se não tiver, ele seta um array vazio.
let listaNivers = JSON.parse(localStorage.getItem("listaNiver") || '[]');

//Função que vai funcionar quando clicar no botão de Adicionar
formulario.addEventListener("submit", (event) => {
    //Tira o comportamento padrão do botão submit de atualizar a página
    event.preventDefault();
    //Array de valores dos cards
    listaNivers.push(
        {
            nome: nome.value,
            codigo: codigo.value,
            setor: setor.value,
            admissao: admissao.value,
            nasc: nasc.value,
            imagem: imagem.value,
            descricao: descricao.value
        }
    );

    //cria o card com os valores passado no formulário
    criarCard(nome.value, codigo.value, setor.value, admissao.value, nasc.value, imagem.value, descricao.value);

    //Seta os valores do listaAniversariantes no localStorage
    localStorage.setItem("listaNiver", JSON.stringify(listaNivers));

    //Resetando os valores dentro do formulário
    formulario.reset();

});
 
// Dia aniversário
let dataAni = nasc; 
function aniversario(){
    let dateControl = document.querySelector('input[type="date"]');
        dateControl.value
}


//função para criar os cartões
function criarCard(nome, codigo, setor, admissao, nasc, imagem, descricao) {
    cardsSection.innerHTML += `
    <article class="card">
        <img src="${imagem}"
            alt="">
        <div class="card-div">
            <h3>${nome}</h3>
            <span>Setor: ${setor}</span>
            <span>Aniverário: ${nasc}</span>
        </div>
        <div class="div-btn-circle">
            <button class="btn-circle">+</button>
        </div>
        <div class="modal">
            <div class="modal-content">
                <span class="close">&times;</span>
                <img src="${imagem}"
                alt="">
                <h3>${nome}</h3>
                <p>Código: ${codigo}</p>
                <p>Setor: ${setor}</p>
                <p>Admissao: ${admissao}
                <p>Nascimento: ${nasc}</p>
                <p class ="descricao">Descrição: ${descricao}</p>
                <button class="btn-deletar">Deletar Card</button>
            </div>
        </div>
    </article>
`;
    modalsFunctions();

}


//Função para chamar os cards armazenados no localStorage, quando o usuário der f5 ou fechar e abrir a página
window.onload = function () {
    //Percorre todos os itens e valores do objeto e cria os cartões com ele
    listaNivers.map(value => {
        criarCard(value.nome, value.codigo, value.setor, value.admissao, value.nasc, value.imagem, value.descricao);
    });
};

// Função do modal
function modalsFunctions() {

    //Variáveis criadas para receberem toods os modais e seus valores

    let modals = document.querySelectorAll(".modal");
    let btnsCircle = document.querySelectorAll(".btn-circle");
    let spans = document.querySelectorAll(".close");
    let btnsDeletar = document.querySelectorAll(".btn-deletar");
    let cards = document.querySelectorAll(".card");


    //Looping para poder pegar todos os nós dos modais criados

    for (let i = 0;i < cards.length;i++) {

        let btnCircle = btnsCircle[i];
        let btnDeleter = btnsDeletar[i];
        let modal = modals[i];
        let span = spans[i];
        let card = cards[i];

        //função para abrir o modal
        btnCircle.addEventListener('click', () => {
            modal.style.display = "block";
        });

        //função para deletar o card 
        btnDeleter.addEventListener('click', () => {
            card.remove();
            listaNivers.splice(i, 1);
            localStorage.setItem("listaNiver", JSON.stringify(listaNivers));
        });

        //função para fechar o modal
        span.addEventListener('click', () => {
            modal.style.display = "none";
        });

        window.addEventListener("click", function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        });
    }
}
