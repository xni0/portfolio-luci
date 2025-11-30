import './style.css'

// Seleccionamos todas las tarjetas
const cards = document.querySelectorAll('.spotlight-card');

document.body.addEventListener('mousemove', (e) => {
  cards.forEach((card) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Pasamos las coordenadas al CSS
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  });
});