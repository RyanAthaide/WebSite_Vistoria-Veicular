import '.src/style.css';


// alteração do header após rolagem da tela.
window.addEventListener("scroll", function() {
    let header = document.querySelector("header");
    header.classList.toggle("rolagem", window.scrollY > 0);
})

// Elementos do menu
const menuBtn = document.getElementById("menuButton");
const menuHamburger = document.getElementById("menuHamburger");

// Ícones em variáveis (mais limpo e fácil de reutilizar)
const iconMenu = `
  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" 
       viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
          d="M4 6h16M4 12h16m-7 6h7"></path>
  </svg>
`;

const iconClose = `
  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" 
       viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
          d="M6 18L18 6M6 6l12 12"></path>
  </svg>
`;

// Evento para abrir/fechar menu
menuBtn.addEventListener("click", () => {
  menuHamburger.classList.toggle("hidden");
  menuBtn.classList.toggle("open");

  // Troca o ícone conforme o estado do botão
  menuBtn.innerHTML = menuBtn.classList.contains("open") ? iconClose : iconMenu;
});

// direcionamentos via click para o whatsapp
const buttons = document.querySelectorAll("[data-whatsapp]");
const number = "5511923083169";
const messageWpp = "Olá, gostaria de mais informações!"

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        window.open(`https://wa.me/${number}?text=${encodeURIComponent(messageWpp)}`, "_blank");
    });
});

// direcionamentos via click dos demais serviços para o whatsapp
const serviceButtons = document.querySelectorAll("[data-service-whatsapp]");
serviceButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const message = btn.getAttribute("data-service-whatsapp");
        window.open(`https://wa.me/${number}?text=${encodeURIComponent(message)}`, "_blank");
    });
});

// localização do escritório via link do Maps
const btnLocalization = document.querySelector("[data-localization]");
btnLocalization.addEventListener("click", () => {
    window.open("https://maps.app.goo.gl/A9WXNVPSPp7JCfmJ8", "_blank");
});

// direcionamento dos button do facebook e instagram
const btnFacebook = document.querySelector("[data-facebook]");
const btnInstagram = document.querySelector("[data-instagram]");

btnFacebook.addEventListener("click", () => {
    window.open("https://www.facebook.com/Technovacantareira", "_blank");
});

btnInstagram.addEventListener("click", () => {
    window.open("https://www.instagram.com/technovacantareira?utm_source=ig_web_button_share_sheet&igsh=MXhndnVvYnZhcmdh", "_blank");
});

// direcionamento do button email para contato direto pelo outlook
const btnEmail = document.querySelector("[data-email]");
btnEmail.addEventListener("click", () => {
    window.open("mailto:nsavistorias@outlook.com", "_blank");
});


document.addEventListener('DOMContentLoaded', function () {
    // Ajusta para garantir que o site comece no topo ao recarregar
    if (window.location.hash !== '#home') {
        window.location.hash = '#home';
    }

    const whatsappButton = document.getElementById('whatsappButton');

    // Função para exibir ou esconder os botões ao rolar a página
    function toggleButtons() {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 100) {
            whatsappButton.style.display = 'flex';
            setTimeout(() => {
                whatsappButton.style.opacity = '1';
            }, 10);
        } else {
            whatsappButton.style.opacity = '0';
            setTimeout(() => {
                whatsappButton.style.display = 'none';
            }, 500);
        }
    }

    // Adiciona o evento de scroll para exibir ou esconder os botões
    document.addEventListener('scroll', toggleButtons);
    
    // Ação ao clicar no botão do WhatsApp
    document.getElementById('whatsappButton').addEventListener('click', () => {

        const whatsappLink = `https://api.whatsapp.com/send?phone=${number}&text=${encodeURIComponent(messageWpp)}`;
        window.open(whatsappLink, '_blank');
    })
});