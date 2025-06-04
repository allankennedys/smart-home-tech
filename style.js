ScrollReveal().reveal('.headline', {
        delay: 200,
        distance: '20px',
        origin: 'bottom',
        duration: 600,
        reset: true
      });

const img = document.querySelector('.img-fluid');
const btn = document.querySelector('.orcamentoBtn');


window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;

    if(scrollPosition>100){
        img?.classList.add('rotate');
    }
    else{
            img?.classList.remove('rotate');
        
    }

    if(scrollPosition>200){
        btn.classList.remove('hidden');
    }
    else{
        btn.classList.add('hidden');
    }
});

