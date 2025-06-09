fetch('./produtos.json')
  .then(response => response.json())
  .then(produtos => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    if (id) {
      mostrarProdutoIndividual(produtos, id);
    } else {
      listarTodosProdutos(produtos);
    }
  });

function listarTodosProdutos(produtos) {
  const container = document.getElementById('produto-area');

  produtos.forEach(produto => {
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
    saibaMaisBtn.href = `produto.html?id=${produto.id}`; 

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
}

function mostrarProdutoIndividual(produtos, id) {
  const produto = produtos.find(p => p.id === id);
  const container = document.getElementById('produto-area');

  if (!produto) {
    container.innerHTML = '<p>Produto não encontrado.</p>';
    return;
  }

  container.innerHTML = `
  <div class="row align-items-center" id="div-detalhe">
    <div class="col-md-6">
      <img src="${produto.img}" alt="${produto.alt}" class="produto-img-detalhe" />
    </div>
    <div class="col-md-6 produto-infos">
      <h1>${produto.nome}</h1>
      <p>${produto.descrição}</p>
      <p>${produto.detalhes || ''}</p>
      <p>${produto.opções || ''}</p>
  <button class="navbar-text orcamentoBtn">Solicitar Orçamento</button>
    </div>
  </div>
        <a href="index.html#produtos" class="btn btn-secondary" style="width: 150px; margin-top:50px;">← Voltar</a>

`;


  document.title = produto.nome + ' | Smart Home Tech';
}
