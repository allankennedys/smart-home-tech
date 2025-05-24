function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}
function openModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'block';
    const formArea = document.getElementById('modalForm');

    modalForm.innerHTML = 'MONTE AQUI O FORMULÁRIO DO FORM SUBMIT'; 
  //dentro das aspas você vai montar o formulário de acordo com o tutorial/documentação do formSubmit      
//Não precisa se preocupar com estilização, o importante é o formulário funcionar
// O usuário precisa preencher o nome, e-mail e telefone e deve ter um botão de envio
}