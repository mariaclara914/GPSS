const botao = document.querySelector("#botao");
const mensagem = document.querySelector("#mensagem");

function mostrarMensagem() {

    mensagem.textContent =
        "🛰️ O GPS funciona por meio de sinais enviados por vários satélites que ficam ao redor da Terra. O celular recebe esses sinais e usa as informações para calcular a sua localização.";

}

botao.addEventListener("click", mostrarMensagem);