const menuBtn = document.querySelector('.menu-btn');    //adicionado a class do botao para uma const
const nav = document.querySelector('.nav'); //adiciona a class do menu para uma const
let menuOpen = false;   // variavel para poder fechar o botão e retirar classes
menuBtn.addEventListener('click',()=>{  //cria um evento click para a const do botão, quando clicado, executa a função abaixo.

    if(menuOpen === false){
       menuBtn.classList.add('open');
       nav.classList.add('nav-expandida');
       menuOpen = true;
    }else{
        menuBtn.classList.remove('open');  
        nav.classList.remove('nav-expandida')
        menuOpen = false 
    }
})
//Função: o menuOpen inicia como 'false' e nosso botão burger está fechado. Quando clica no botão, ele verifica se a variavel menuOpen for false, ele adiciona a class open no botão e a class nav-expandida para o nav e adiciona um novo valor à variavel menuOpen, agora true.

