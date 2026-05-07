const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });
document.addEventListener('DOMContentLoaded', () => {
    // Faz a página aparecer ao carregar
    document.body.classList.add('page-loaded');

    // Captura todos os links para animar a saída
    const links = document.querySelectorAll('a');
    
    links.forEach(link => {
        link.addEventListener('click', e => {
            const href = link.getAttribute('href');

            // Verifica se o link é interno (não começa com # e não é link externo)
            if (href && !href.startsWith('#') && !link.target) {
                e.preventDefault(); // Impede a mudança imediata
                
                document.body.classList.add('fade-out'); // Roda a animação de saída

                // Espera o tempo da transição (500ms) para mudar de página
                setTimeout(() => {
                    window.location.href = href;
                }, 500);
            }
        });
    });
    
    // ... manter suas funções de digitação e scroll reveal abaixo ...
});
