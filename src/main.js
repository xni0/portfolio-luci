// src/main.js
import './style.css' // Importamos el CSS aquí si usas Vite estándar

// 1. BOOT SEQUENCE
const bootScreen = document.getElementById('boot-screen');
const bootText = document.getElementById('boot-text');
const lines = [
    "Initializing BIOS...",
    "Checking RAM... 16384KB OK",
    "Loading Kernel... OK",
    "Mounting Volume C: ... OK",
    "Starting LuciOS Environment..."
];

let i = 0;
function typeLine() {
    if (i < lines.length) {
        const p = document.createElement('div');
        p.textContent = lines[i];
        bootText.appendChild(p);
        i++;
        setTimeout(typeLine, 500);
    } else {
        setTimeout(() => {
            bootScreen.style.opacity = '0';
            setTimeout(() => bootScreen.style.display = 'none', 500);
        }, 800);
    }
}

// 2. CLOCK
function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; 
    const clockEl = document.getElementById('clock');
    if (clockEl) clockEl.textContent = `${hours}:${minutes} ${ampm}`;
}

// 3. FUNCIONES GLOBALES (Para que funcionen los onclick del HTML)

window.openTab = function(tabName) {
    document.querySelectorAll('[id^="tab-"]').forEach(tab => {
        tab.classList.remove('active-tab');
        tab.classList.add('hidden-tab');
    });
    const selected = document.getElementById(`tab-${tabName}`);
    if(selected) {
        selected.classList.remove('hidden-tab');
        selected.classList.add('active-tab');
    }
}

window.toggleStart = function() {
    const menu = document.getElementById('start-menu');
    menu.classList.toggle('hidden');
    menu.classList.toggle('flex');
}

window.showAlert = function(message) {
    const alertBox = document.getElementById('custom-alert');
    const alertText = document.getElementById('alert-message');
    alertText.innerHTML = message;
    alertBox.classList.remove('hidden');
    alertBox.classList.add('flex');
}

window.closeAlert = function() {
    const alertBox = document.getElementById('custom-alert');
    alertBox.classList.add('hidden');
    alertBox.classList.remove('flex');
}

window.closeWindow = function() {
     const win = document.getElementById('main-window');
     win.style.transform = 'scale(0.98)';
     setTimeout(() => win.style.transform = 'scale(1)', 100);
     setTimeout(() => {
         window.showAlert("CRITICAL ERROR:<br>You cannot close this portfolio until you send a job offer! 😉");
     }, 200);
}

// INICIALIZACIÓN
document.addEventListener('DOMContentLoaded', () => {
    typeLine();
    setInterval(updateClock, 1000);
    updateClock();

    // Cerrar menú inicio al hacer clic fuera
    document.addEventListener('click', function(event) {
        const menu = document.getElementById('start-menu');
        const btn = document.querySelector('button[onclick="toggleStart()"]');
        if (menu && !menu.classList.contains('hidden')) {
            if (btn && !menu.contains(event.target) && !btn.contains(event.target)) {
                menu.classList.add('hidden');
                menu.classList.remove('flex');
            }
        }
    });
});