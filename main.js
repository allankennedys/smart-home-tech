function closeModal() {
  const modal = document.getElementById('modal');
  modal.remove();
}

function openModal() {
  const page = document.querySelector('body');
  const modal = document.createElement('div');
  modal.setAttribute('id', 'modal');
  modal.innerHTML = `
    <div id="modalForm">
      <h3>Solicite um Orçamento</h3>
      <p>Preencha o formulário abaixo e entraremos em contato o mais breve possível.</p>
      <form action="https://formsubmit.co/lkevynpa@gmail.com" method="POST">
        <input type="text" name="name" placeholder="Nome" required style="width:100%; margin-bottom:10px;"><br>
        <input type="email" name="email" placeholder="Email" required style="width:100%; margin-bottom:10px;"><br>
        <input type="tel" name="phone" placeholder="Telefone" required style="width:100%; margin-bottom:10px;"><br>
        <textarea name="message" placeholder="Digite sua mensagem (Opcional)" style="width:100%; margin-bottom:10px;"></textarea><br>
        <input type="hidden" name="_captcha" value="false">
        <div id="submitArea" style="display:flex; justify-content:space-between;">
          <button type="submit" class="btn btn-dark">Solicitar</button>
          <button type="button" onclick="closeModal()">Fechar</button>
        </div>
      </form>
    </div>
  `;

  page.appendChild(modal);

  const form = document.querySelector('#modalForm form');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    fetch('https://formsubmit.co/lkevynpa@gmail.com', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    
    .then(response => {
      if (response.ok) {
        modal.innerHTML = `
         <div id="modalForm">
          <h3>Orçamento Solicitado</h3>
          <p>Obrigado, ${data.name}! Seu orçamento foi solicitado  e entraremos em contato o mais breve possível.</p>
          <button type="button" onclick="closeModal()">Fechar</button>
         </div>
        `;
      } else {
        modal.innerHTML = `
         <div id="modalForm">
         <h3>Erro ao Solicitar Orçamento :(</h3>
          <p>Tivemos um problema ao solicitar seu orçamento. Por favor, tente novamente mais tarde.</p>
          <button type="button" onclick="closeModal()">Fechar</button>
         </div> `;
      }
    })
    .catch(error => {
      console.error('Erro:', error);
      modal.innerHTML = `
         <div id="modalForm">
         <h3>Erro ao Solicitar Orçamento :(</h3>
          <p>Tivemos um problema ao solicitar seu orçamento. Por favor, tente novamente mais tarde.</p>
          <button type="button" onclick="closeModal()">Fechar</button>
         </div> `;
    })})};
