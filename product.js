import { getFirestore, collection, getDocs, getDoc, doc } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";


const firebaseConfig = {
  apiKey: "AIzaSyCp0-YjWKzvfMo2TPVEtoJG0RaIXo3qQcM",
  authDomain: "smarthometech-7f245.firebaseapp.com",
  projectId: "smarthometech-7f245",
  storageBucket: "smarthometech-7f245.appspot.com",
  messagingSenderId: "234754136199",
  appId: "1:234754136199:web:1fedca3a9a1dea07334022",
  measurementId: "G-VNLJ8SRFSG"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function carregarProdutos() {
    carregandoIcon();
  const snapshot = await getDocs(collection(db, "produtos"));
  const produtos = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    if (id) {
      await carregarProdutoIndividual(id);
    } else {
const path = window.location.pathname;

    const isIndex =
      path.endsWith("index.html")

    let produtosListados = produtos;
    if (isIndex) {
      produtosListados = produtos.slice(0, 4);
    }
      await listarTodosProdutos(produtosListados);
    }
      removeCarregandoIcon()
  };

function listarTodosProdutos(produtos) {
  const container = document.getElementById('produto-area');
  container.innerHTML = '';

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
async function carregarProdutoIndividual(id) {


  const docRef = doc(db, "produtos", id);
  const docSnapshot = await getDoc(docRef);

  if (docSnapshot.exists()) {
    const produto = {id: docSnapshot.id, ...docSnapshot.data()};
    mostrarProdutoIndividual(produto);
  }


  else{
      const container = document.getElementById('produto-area');
    container.innerHTML = '<p>Produto não encontrado.</p>';
    return;
  }
  }

function mostrarProdutoIndividual(produto) {
      const container = document.getElementById('produto-area');
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
  <button class="navbar-text orcamentoBtn bg-dark text-white" onclick="openModal()">Solicitar Orçamento</button>
    </div>
  </div>
        <button onclick="history.back()" class="btn btn-secondary" style="width: 150px; margin-top:50px;">Voltar</button>


`;


  document.title = produto.nome + ' | Smart Home Tech';
}

function carregandoIcon(){
  const container = document.getElementById('produto-area');
  container.innerHTML = 
  `<div id="loading" class="d-flex justify-content-center align-items-center flex-wrap" style="height: 100vh; gap: 20px;">
  <div class="spinner-grow text-secondary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-secondary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-secondary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-secondary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-secondary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
</div>`
const area = document.getElementById('loading');
  area.style.display = 'block';
const path = window.location.pathname;

    const isIndex =
      path.endsWith("index.html")
  if(isIndex){
  area.style.height = 'fit-content';
  }
}
function removeCarregandoIcon(){
  const area = document.getElementById('loading');
  area.style.display = 'none';
  }


await carregarProdutos();
