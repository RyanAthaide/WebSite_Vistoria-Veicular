// formulario via email

 emailjs.init("service_aghxpyl");

const form = document.querySelector("form[data-form]");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    const templateParams = {
        nome: nome,
        email: email,
        mensagem: mensagem
    };

    emailjs.send("SEU_SERVICE_ID", "SEU_TEMPLATE_ID", templateParams)
        .then(() => {
            alert("Mensagem enviada com sucesso!");
            form.reset(); // limpa o formulário
        })
        .catch((err) => {
            console.error("Erro ao enviar email:", err);
            alert("Ocorreu um erro ao enviar. Tente novamente!");
        });
});