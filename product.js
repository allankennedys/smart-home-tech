fetch('./produtos.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('produto-area'); 
    data.forEach(produto => {
      const card = document.createElement('div');
      card.classList.add('card', 'headline', 'produto-card');
      card.style.width = '17rem';
      

      const img = document.createElement('img');
      img.classList.add('card-img-top', 'produto-img');
      img.src = produto.img; 
      img.alt = produto.alt;

      const cardBody = document.createElement('div');
      cardBody.classList.add('card-body', 'd-flex', 'flex-column', 'justify-content-between');

      const p = document.createElement('p');
      p.classList.add('card-text');

      const strong = document.createElement('strong');
      strong.classList.add('produto-titulo');
      strong.textContent = produto.nome;
      const span = document.createElement('p');
      span.classList.add('produto-descricao');
        span.textContent = produto.descrição;

    const saibaMaisBtn = document.createElement('a');
      saibaMaisBtn.classList.add('btn', 'btn-dark', 'saiba-mais-btn');
      saibaMaisBtn.href = produto.link;
      saibaMaisBtn.textContent = 'Saiba mais';

      p.appendChild(strong);
      p.appendChild(document.createElement('br'));
      p.appendChild(span);

      cardBody.appendChild(p);
      card.appendChild(img);
      card.appendChild(cardBody);
      cardBody.appendChild(saibaMaisBtn);

      container.appendChild(card);

      ScrollReveal().reveal('.card', {
        delay: 100,
        distance: '20px',
        origin: 'bottom',
        duration: 600,
        reset: false
      });

    });
    
  });
  
