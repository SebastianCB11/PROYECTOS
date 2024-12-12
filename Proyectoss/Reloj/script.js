// Función para actualizar la hora
function updateClock() {
    const clockTimeElement = document.getElementById("clock-time");
    const clockPeriodElement = document.getElementById("clock-period");

    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    // Definir AM/PM
    const period = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Convertir hora de 24h a 12h

    clockTimeElement.textContent = `${hours}:${minutes}:${seconds}`;
    clockPeriodElement.textContent = period;
}

// Función para obtener y mostrar la hora mundial según la zona horaria seleccionada
function updateWorldTime() {
    const citySelector = document.getElementById("city-selector");
    const city = citySelector.value;
    const worldTimeElement = document.getElementById("world-time");

    const now = new Date().toLocaleString("en-US", { timeZone: city });
    const localDate = new Date(now);
    
    const hours = String(localDate.getHours()).padStart(2, "0");
    const minutes = String(localDate.getMinutes()).padStart(2, "0");
    const seconds = String(localDate.getSeconds()).padStart(2, "0");

    worldTimeElement.textContent = `${hours}:${minutes}:${seconds}`;
}

// Actualizar el reloj y la hora mundial cada segundo
setInterval(updateClock, 1000);
setInterval(updateWorldTime, 1000);

// Inicializar el reloj al cargar la página
window.onload = function() {
    updateClock();
    updateWorldTime();
};
