function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}
function openModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'block';
    const formArea = document.getElementById('modalForm');

    formArea.innerHTML = `
      <h3>Solicite um Orçamento</h3>
      <p>Preencha o formulário abaixo e entraremos em contato o mais breve possível.</p>
      <form action="https://formsubmit.co/lkevynpa@gmail.com" method="POST">
        <input type="text" name="name" placeholder="Nome" required><br>
        <input type="email" name="email" placeholder="Email" required><br>
        <input type="tel" name="phone" placeholder="Telefone" required><br>
        <textarea name="message" placeholder="Digite sua mensagem (Opcional)"></textarea><br>
        <input type="hidden" name="_next" value="http://127.0.0.1:5500/obrigado.html" required>
        <input type="hidden" name="_captcha" value="false">
        <div id="submitArea">
        <button type="submit" id="submit" >Solicitar</button>
        <button type="button" onclick="closeModal()">Fechar</button>
        </div>
      </form>
  `;
}