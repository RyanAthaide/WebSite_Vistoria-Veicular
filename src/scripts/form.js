

document.querySelector("[data-form]").addEventListener("submit", function(e) {
  console.log("Dados enviados:", {
    nome: this.nome.value,
    email: this.email.value,
    mensagem: this.mensagem.value
  });
  
  // Não preventDefault() - deixa o FormSubmit trabalhar
});