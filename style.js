ScrollReveal().reveal('.headline', { delay: 500,reset:true});

window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const img = document.querySelector('.img-fluid');

    if(scrollPosition>100){
        img.classList.add('rotate');
    }
    else{
        img.classList.remove('rotate');
    }
});

window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const btn = document.querySelector('.orcamentoBtn');

    if(scrollPosition>500){
        btn.classList.remove('hidden');
    }
    else{
        btn.classList.add('hidden');
    }
});