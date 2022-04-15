const btnDark = document.querySelector('.btn-dark');
const rootDark = document.querySelector('html');
const imgPrincipal = document.querySelector('.foto-principal')
let darkOn = false;
btnDark.addEventListener('click',()=>{
    if (darkOn === false){
        btnDark.classList.add('ativo');
        rootDark.classList.add('dark-mode');
        imgPrincipal.classList.add('imgDarkMode');
        darkOn = true
    }else{
        btnDark.classList.remove('ativo');
        rootDark.classList.remove('dark-mode');
        imgPrincipal.classList.remove('imgDarkMode');
        darkOn = false
    }
})

//está função é exatamente igual a do botão burger, adiciona classes ao botão para que possa mudar de lugar e para o :root para que possa usar outro esquema de cores.