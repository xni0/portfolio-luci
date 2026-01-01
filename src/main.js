import './style.css'; 

//  BOOT SEQUENCE (Pantalla de carga)
const lines = [
    "Initializing BIOS...",
    "Checking RAM... 16384KB OK",
    "Loading Kernel... OK",
    "Mounting Volume C: ... OK",
    "Starting LuciOS Environment..."
];
let lineIndex = 0;

function typeLine() {
    const bootScreen = document.getElementById('boot-screen');
    const bootText = document.getElementById('boot-text');

    if (lineIndex < lines.length) {
        const p = document.createElement('div');
        p.textContent = lines[lineIndex];
        bootText.appendChild(p);
        lineIndex++;
        setTimeout(typeLine, 500);
    } else {
        setTimeout(() => {
            bootScreen.style.opacity = '0';
            setTimeout(() => bootScreen.style.display = 'none', 500);
        }, 800);
    }
}

// RELOJ DIGITAL
function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; 
    
    const clockElement = document.getElementById('clock');
    if (clockElement) {
        clockElement.textContent = `${hours}:${minutes} ${ampm}`;
    }
}

// FUNCIONES GLOBALES (Interactividad)
// Asignamos a window para que los onclick="..." del HTML puedan verlas

window.openTab = function(tabName) {
    // Ocultar todas las tabs
    document.querySelectorAll('[id^="tab-"]').forEach(tab => {
        tab.classList.remove('active-tab');
        tab.classList.add('hidden-tab');
    });
    // Mostrar la seleccionada
    const selected = document.getElementById(`tab-${tabName}`);
    if (selected) {
        selected.classList.remove('hidden-tab');
        selected.classList.add('active-tab');
    }
}

window.toggleStart = function() {
    const menu = document.getElementById('start-menu');
    menu.classList.toggle('hidden');
    menu.classList.toggle('flex');
}

window.closeWindow = function() {
     const win = document.getElementById('main-window');
     // Efecto de minimizado
     win.style.transform = 'scale(0)';
     setTimeout(() => {
         // Broma y restauración
         window.showAlert("CRITICAL ERROR:<br>You cannot close this portfolio until you send a job offer! 😉");
         win.style.transform = 'scale(1)';
     }, 500);
}

window.showAlert = function(message) {
    const alertBox = document.getElementById('custom-alert');
    const alertText = document.getElementById('alert-message');
    
    if (alertText && alertBox) {
        alertText.innerHTML = message;
        alertBox.classList.remove('hidden');
    }
}

window.closeAlert = function() {
    const alertBox = document.getElementById('custom-alert');
    if (alertBox) {
        alertBox.classList.add('hidden');
    }
}

// INICIALIZACIÓN 
document.addEventListener('DOMContentLoaded', () => {
    // Iniciar secuencia de arranque
    typeLine();
    
    // Iniciar reloj
    setInterval(updateClock, 1000);
    updateClock();

    // Cerrar menú inicio al hacer clic fuera
    document.addEventListener('click', function(event) {
        const menu = document.getElementById('start-menu');
        const btn = document.querySelector('button[onclick="toggleStart()"]');
        
        if (menu && btn && !menu.classList.contains('hidden')) {
            if (!menu.contains(event.target) && !btn.contains(event.target)) {
                menu.classList.add('hidden');
                menu.classList.remove('flex');
            }
        }
    });
});