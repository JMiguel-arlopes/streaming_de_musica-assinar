var botao = document.querySelector(".botao-header");

var exit = document.querySelector(".exit");

botao.addEventListener("click", function (){

    var pacotesAssinatura = document.querySelector(".container__pacotes");

    pacotesAssinatura.classList.toggle("hide");
    
})

exit.addEventListener("click", function (){

    var pacotesAssinatura = document.querySelector(".container__pacotes");

    pacotesAssinatura.classList.toggle("hide");
    
})

