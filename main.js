function closeModal() {
  const modal = document.getElementById('modal');
  modal.remove();
}

function openModal() {
  const page = document.querySelector('body');
  const modal = document.createElement('div');
  modal.setAttribute('id', 'modal');

  modal.innerHTML = `
    <div id="modalForm" style="background:white; padding:20px; border-radius:10px; width:90%; max-width:500px;">
      <h3>Solicite um Orçamento</h3>
      <p>Preencha o formulário abaixo e entraremos em contato o mais breve possível.</p>
      <form action="https://formsubmit.co/lkevynpa@gmail.com" method="POST">
        <input type="text" name="name" placeholder="Nome" required style="width:100%; margin-bottom:10px;"><br>
        <input type="email" name="email" placeholder="Email" required style="width:100%; margin-bottom:10px;"><br>
        <input type="tel" name="phone" placeholder="Telefone" required style="width:100%; margin-bottom:10px;"><br>
        <textarea name="message" placeholder="Digite sua mensagem (Opcional)" style="width:100%; margin-bottom:10px;"></textarea><br>
        <input type="hidden" name="_next" value="http://127.0.0.1:5500/obrigado.html">
        <input type="hidden" name="_captcha" value="false">
        <div id="submitArea" style="display:flex; justify-content:space-between;">
          <button type="submit" class="btn btn-dark">Solicitar</button>
          <button type="button" onclick="closeModal()">Fechar</button>
        </div>
      </form>
    </div>
  `;

  page.appendChild(modal);
}
