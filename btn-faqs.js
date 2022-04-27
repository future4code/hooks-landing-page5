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
const btnFaq3 = document.querySelector('.btn-faq3');
const faqRes3 = document.querySelector('.resp-faq3')
let btnFaqOn3 = false;
btnFaq3.addEventListener('click',()=>{
    if (btnFaqOn3 === false){
        btnFaq3.classList.add('faq-on');
        faqRes3.classList.add('open-resposta');
        btnFaqOn3 = true
    }else{
        btnFaq3.classList.remove('faq-on');
        faqRes3.classList.remove('open-resposta');
        btnFaqOn3 = false
    }
})
const btnFaq4 = document.querySelector('.btn-faq4');
const faqRes4 = document.querySelector('.resp-faq4')
let btnFaqOn4 = false;
btnFaq4.addEventListener('click',()=>{
    if (btnFaqOn4 === false){
        btnFaq4.classList.add('faq-on');
        faqRes4.classList.add('open-resposta');
        btnFaqOn4 = true
    }else{
        btnFaq4.classList.remove('faq-on');
        faqRes4.classList.remove('open-resposta');
        btnFaqOn4 = false
    }
})
const btnFaq5 = document.querySelector('.btn-faq5');
const faqRes5 = document.querySelector('.resp-faq5')
let btnFaqOn5 = false;
btnFaq5.addEventListener('click',()=>{
    if (btnFaqOn5 === false){
        btnFaq5.classList.add('faq-on');
        faqRes5.classList.add('open-resposta');
        btnFaqOn5 = true
    }else{
        btnFaq5.classList.remove('faq-on');
        faqRes5.classList.remove('open-resposta');
        btnFaqOn5 = false
    }
})