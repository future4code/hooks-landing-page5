const btnFaq1 = document.querySelector('.btn-faq1');
const faqRes1 = document.querySelector('.resp-faq1')
let btnFaqOn1 = false;
btnFaq1.addEventListener('click',()=>{
    if (btnFaqOn1 === false){
        btnFaq1.classList.add('faq-on');
        faqRes1.classList.add('open-resposta');
        btnFaqOn1 = true
    }else{
        btnFaq1.classList.remove('faq-on');
        faqRes1.classList.remove('open-resposta');
        btnFaqOn1 = false
    }
})

const btnFaq2 = document.querySelector('.btn-faq2');
const faqRes2 = document.querySelector('.resp-faq2')
let btnFaqOn2 = false;
btnFaq2.addEventListener('click',()=>{
    if (btnFaqOn2 === false){
        btnFaq2.classList.add('faq-on');
        faqRes2.classList.add('open-resposta');
        btnFaqOn2 = true
    }else{
        btnFaq2.classList.remove('faq-on');
        faqRes2.classList.remove('open-resposta');
        btnFaqOn2 = false
    }
})