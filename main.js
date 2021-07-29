// TOGGLE
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for(const element of toggle){
    element.addEventListener('click', ()=>{
        nav.classList.toggle('show')
    })
}

// MENU
const links = document.querySelectorAll('nav ul li a')

for(const link of links){
    link.addEventListener('click', ()=>{
        nav.classList.remove('show')
    })
}

// INSERIR BOXSHADOWN NA HEADER SE A BARRA DE ROLAGEM FOR ACIONADA
function changeHeaderWhenScroll(){
    const header = document.querySelector("#header")
    const navHeight = header.offsetHeight

    if(window.scrollY >= navHeight){
        header.classList.add('scroll')
    }else{
        header.classList.remove('scroll')
    }
}

// slider swiper
const swiper = new Swiper('.swiper-container', {
    slidesPerView:1,
    pagination:{
        el: '.swiper-pagination'
    },
    mousewheel:true,
    keyboard:true,
});

// scroll reveal: mostrar elementos quando der scroll na página
const scrollReveal = ScrollReveal({
    origin:'top',
    distance:'30px',
    duration:700,
    reset:true
})

scrollReveal.reveal(
    `#home .image, #home .text,
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials,
    #contact .text, #contact .links,
    footer .brand, footer .social
    `, {interval:100})


// back to top button
function backToTop(){
    const backToTopButton = document.querySelector(".back-to-top")

    if(window.scrollY >=560){
        backToTopButton.classList.add('show')
    }else{
        backToTopButton.classList.remove('show')
    }
}

// when scroll
window.addEventListener('scroll', ()=>{
    changeHeaderWhenScroll()
    backToTop()
})