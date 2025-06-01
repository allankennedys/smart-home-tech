

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
        <p id="statusMsg"></p>
      </form>
    </div>
  `;

  page.appendChild(modal);

        //LOcal Storage:


const campos = modal.querySelectorAll('input, textarea');

campos.forEach((campo) => {

  const dadoSalvo = localStorage.getItem(campo.name);
  if (dadoSalvo){
    campo.value = dadoSalvo;
  }



  campo.addEventListener('input', (event) => {
    localStorage.setItem(event.target.name, event.target.value);
   
  }
  );});



      // Impedir que seja abera uma nova aba ao enviar o formulário:

  const form = modal.querySelector('form');
  const statusMsg = modal.querySelector('#statusMsg');

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
        localStorage.setItem('formSubmitted', 'true');
        campos.forEach((campo)=>{
          localStorage.removeItem(campo.name);
        campo.value = '';
        })
      } else {
        statusMsg.innerHTML = "Tivemos um problema ao solicitar seu orçamento. Por favor, tente novamente mais tarde.";
      }
    })
    .catch(error => {
      console.error('Erro:', error);
      statusMsg.innerHTML = "Tivemos um problema ao solicitar seu orçamento. Por favor, tente novamente mais tarde.";
    })})
    
   
  };





