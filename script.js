document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navLinks = document.getElementById('nav-links');
    const navItems = document.querySelectorAll('.nav-links a');

    // Menu Hamburguer
    hamburgerMenu.addEventListener('click', function () {
        navLinks.classList.toggle('active');
        hamburgerMenu.classList.toggle('active');
    });

    // Fechar menu ao clicar em um link
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburgerMenu.classList.remove('active');
        });
    });

    // Smooth scroll para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Botão voltar ao topo
    const backToTop = document.querySelector('.back-to-top');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTop.style.opacity = '1';
            backToTop.style.visibility = 'visible';
        } else {
            backToTop.style.opacity = '0';
            backToTop.style.visibility = 'hidden';
        }
    });
});

document.getElementById('current-year').textContent = new Date().getFullYear();

// Efeito de digitação no Hero 
document.addEventListener('DOMContentLoaded', function () {
    new TypeIt('#hero-title', {
        speed: 80,
        waitUntilVisible: true,
    }).go();
    new TypeIt('#hero-subtitle', {
        strings: ["Desenvolvedor Fullstack | Desenvolvedor Front End | Software Engineer"],
        speed: 100,
        breakLines: false,
        loop: false,
        waitUntilVisible: true
    }).go();
})


// Adiciona efeito de digitação no texto de contato (opcional)
if (document.querySelector('.contact-text')) {
    new TypeIt('.contact-text', {
        strings: [
            "Se você tem uma ideia para um projeto ou quer conversar sobre oportunidades, sinta-se à vontade para me enviar um email!",
            "Vamos criar algo incrível juntos!"
        ],
        speed: 50,
        breakLines: false,
        waitUntilVisible: true,
        loop: true
    }).go();
}


// =============================TERMO DE USO=============================

// Gerenciamento do Modal de Termos
const termsModal = document.getElementById('termsModal');
const termsFrame = document.getElementById('termsFrame');
const agreeCheckbox = document.getElementById('agreeCheckbox');
const acceptTermsBtn = document.getElementById('acceptTerms');
const closeModalBtn = document.querySelector('.close-modal');

// Mostrar modal se termos não foram aceitos
if (!localStorage.getItem('termsAccepted')) {
    termsModal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Bloqueia scroll
}

// Habilitar/desabilitar botão de aceite
agreeCheckbox.addEventListener('change', function () {
    acceptTermsBtn.disabled = !this.checked;
});

// Aceitar termos
acceptTermsBtn.addEventListener('click', function () {
    localStorage.setItem('termsAccepted', 'true');
    termsModal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Fechar modal
closeModalBtn.addEventListener('click', function () {
    termsModal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Fechar ao clicar fora do modal
window.addEventListener('click', function (event) {
    if (event.target === termsModal) {
        termsModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Link para abrir termos novamente (adicione isso onde quiser no seu site)
document.getElementById('openTermsLink').addEventListener('click', function (e) {
    e.preventDefault();
    termsModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
});



// =============================POLITICA DE PRIVACIDADE=============================

// Gerenciamento da Política de Privacidade
function initPrivacyPolicy() {
    // Verifica se precisa mostrar o aviso de cookies
    if (!localStorage.getItem('privacyPolicyAccepted')) {
        showPrivacyBanner();
    }

    // Configura o botão de aceite
    document.getElementById('acceptPrivacyBtn')?.addEventListener('click', acceptPrivacyPolicy);
}

function showPrivacyBanner() {
    const banner = document.createElement('div');
    banner.id = 'privacy-banner';
    banner.innerHTML = `
        <div class="privacy-banner-content">
            <p>Nós valorizamos sua privacidade. Este site usa apenas cookies essenciais. 
            <a href="politica-privacidade.html" target="_blank">Saiba mais</a></p>
            <div>
                <button id="acceptPrivacyBtn">Aceitar</button>
            </div>
        </div>
    `;

    document.body.appendChild(banner);
}

function acceptPrivacyPolicy() {
    localStorage.setItem('privacyPolicyAccepted', 'true');
    document.getElementById('privacy-banner').remove();
}

document.head.appendChild(privacyBannerStyle);

// Inicializa quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', initPrivacyPolicy);
