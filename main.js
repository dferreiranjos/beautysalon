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
const header = document.querySelector("#header")
const navHeight = header.offsetHeight

function changeHeaderWhenScroll(){

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
    breakpoints:{
        767:{
            slidesPerView:2,
            setWrapperSize:true
        }
    }
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
const backToTopButton = document.querySelector(".back-to-top")
function backToTop(){

    if(window.scrollY >=560){
        backToTopButton.classList.add('show')
    }else{
        backToTopButton.classList.remove('show')
    }
}

// torna os menu selecionado ativo
const sections = document.querySelectorAll("main section[id]")
function activateMenuAtCurrentSection(){

    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

    for( section of sections){
        const sectionTop = section.offsetTop
        const sectonHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')

        const checkpointStart = checkpoint >= sectionTop
        const checkpointEnd = checkpoint <= sectionTop + sectonHeight

        if(checkpointStart && checkpointEnd){
            document.querySelector('nav ul li a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('nav ul li a[href*=' + sectionId + ']').classList.remove('active')
        }

    }

}

// when scroll
window.addEventListener('scroll', ()=>{
    changeHeaderWhenScroll()
    backToTop()
    activateMenuAtCurrentSection()
})

