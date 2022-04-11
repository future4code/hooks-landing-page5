const btnDark = document.querySelector('.btn-dark');
const rootDark = document.querySelector('html');
let darkOn = false;
btnDark.addEventListener('click',()=>{
    if (darkOn === false){
        btnDark.classList.add('ativo');
        rootDark.classList.add('dark-mode');
        darkOn = true
    }else{
        btnDark.classList.remove('ativo');
        rootDark.classList.remove('dark-mode');
        darkOn = false
    }
})

//está função é exatamente igual a do botão burger, adiciona classes ao botão para que possa mudar de lugar e para o :root para que possa usar outro esquema de cores.