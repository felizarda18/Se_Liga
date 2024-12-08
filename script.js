// Função simples para alertar o usuário ao clicar em links de referência
document.querySelectorAll('footer a').forEach(link => {
    link.addEventListener('click', () => {
        alert('Você está saindo do site. Obrigado por visitar!');
    });
});
