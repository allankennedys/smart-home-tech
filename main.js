function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}
function openModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'block';
    const formArea = document.getElementById('modalForm');

    formArea.innerHTML = `
      <form action="https://formsubmit.co/lkevynpa@gmail.com" method="POST">
        <input type="text" name="name" placeholder="Nome" required><br>
        <input type="email" name="email" placeholder="Email" required><br>
        <input type="tel" name="phone" placeholder="Telefone" required><br>
        <textarea name="message" placeholder="Digite sua mensagem" required></textarea><br>
        <input type="hidden" name="_next" value="http://127.0.0.1:5500/obrigado.html" required>
        <button type="submit">Send</button>
      </form>
  `; 
  //dentro das aspas você vai montar o formulário de acordo com o tutorial/documentação do formSubmit      
//Não precisa se preocupar com estilização, o importante é o formulário funcionar
// O usuário precisa preencher o nome, e-mail e telefone e deve ter um botão de envio
}