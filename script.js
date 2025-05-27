const startButton = document.getElementById('startButton');
const heroSection = document.querySelector('.hero');
const videoSection = document.getElementById('videoSection');

startButton.addEventListener('click', () => {
    // Efeito de "explosão"
    startButton.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
    startButton.style.transform = 'scale(20)';
    startButton.style.opacity = '0';

    setTimeout(() => {
        heroSection.style.display = 'none';
        videoSection.style.display = 'flex';
    }, 600); // Tempo da animação
});
