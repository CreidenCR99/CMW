// --- Utilidad para mostrar pantallas y actualizar barra lateral ---
function mostrarPantalla(idPantalla) {
    // Oculta todas las pantallas principales
    document.getElementById('PantallaJugadores').style.display = 'none';
    document.getElementById('PantallaRuleta').style.display = 'none';
    document.getElementById('PantallaDados').style.display = 'none';
    // Muestra la pantalla seleccionada
    document.getElementById(idPantalla).style.display = idPantalla === 'PantallaRuleta' ? 'flex' : 'flex';
    // Botón añadir jugador solo en jugadores
    document.getElementById('botonAñadirJugador').style.display = (idPantalla === 'PantallaJugadores') ? 'block' : 'none';
    // Scroll lock solo en ruleta o dados
    if (idPantalla === 'PantallaRuleta' || idPantalla === 'PantallaDados') {
        document.body.classList.add('bloquear-scroll');
    } else {
        document.body.classList.remove('bloquear-scroll');
    }
    // Actualiza estado de los botones de la barra lateral
    const botones = [
        { id: 'botonInicio', pantalla: 'PantallaJugadores' },
        { id: 'botonRuleta', pantalla: 'PantallaRuleta' },
        { id: 'botonDados', pantalla: 'PantallaDados' }
    ];
    botones.forEach(btn => {
        const boton = document.getElementById(btn.id);
        if (boton) {
            if (btn.pantalla === idPantalla) {
                boton.disabled = true;
                boton.classList.add('disabled');
            } else {
                boton.disabled = false;
                boton.classList.remove('disabled');
            }
        }
    });
    // Renderiza contenido específico si aplica
    if (idPantalla === 'PantallaJugadores' && typeof renderizarJugadores === "function") renderizarJugadores();
    if (idPantalla === 'PantallaRuleta') {
        if (typeof renderizarControlSegmentos === "function") renderizarControlSegmentos();
        if (typeof dibujarRuleta === "function") dibujarRuleta();
    }
    if (idPantalla === 'PantallaDados') {
        // Si el resultado es null, '', o no válido, genera uno aleatorio
        let valor1 = window.ultimoResultadoDado;
        if (valor1 === null || valor1 === '' || isNaN(valor1) || valor1 < 1) {
            valor1 = Math.floor(Math.random() * (window.dadoActual || 6)) + 1;
            if (typeof mostrarResultadoDado === "function") mostrarResultadoDado(valor1);
        }
        if (typeof dibujarDado === "function") dibujarDado(valor1, false);
        if (typeof mostrarResultadoDado === "function") mostrarResultadoDado(valor1);

        // Segundo dado
        if (window.segundoDadoActivo && typeof dibujarDado2 === "function" && typeof mostrarResultadoDado2 === "function") {
            let valor2 = window.ultimoResultadoDado2;
            if (valor2 === null || valor2 === '' || isNaN(valor2) || valor2 < 1) {
                valor2 = Math.floor(Math.random() * (window.dadoActual2 || 6)) + 1;
                mostrarResultadoDado2(valor2);
            }
            dibujarDado2(valor2, false);
            mostrarResultadoDado2(valor2);
        }
    }
}

// --- Pantalla de inicio ---
function irAJugadores() {
    document.getElementById('pantallaInicio').style.display = 'none';
    document.getElementById('barraLateral').style.display = '';
    mostrarPantalla('PantallaJugadores');
}

// --- Barra lateral: navegación de pantallas ---
function volverInicio() {
    mostrarPantalla('PantallaJugadores');
}
function activarRuleta() {
    mostrarPantalla('PantallaRuleta');
    // Selecciona la ruleta genérica por defecto al entrar
    if (typeof seleccionarRuletaPredefinida === "function") {
        seleccionarRuletaPredefinida("ruletaGenericaBtn");
    }
}
function activarDados() {
    mostrarPantalla('PantallaDados');
}

window.addEventListener('DOMContentLoaded', () => {
    // Oculta todo menos la pantalla de inicio al cargar
    document.getElementById('pantallaInicio').style.display = 'flex';
    document.getElementById('barraLateral').style.display = 'none';
    document.getElementById('PantallaJugadores').style.display = 'none';
    document.getElementById('PantallaRuleta').style.display = 'none';
    document.getElementById('PantallaDados').style.display = 'none';

    // Inicializa botones de modo de color y claro/oscuro
    const modo1 = document.getElementById('modo1');
    const modo2 = document.getElementById('modo2');
    const modoClaro = document.getElementById('modoClaro');
    const modoOscuro = document.getElementById('modoOscuro');
    // Los botones de modo no hacen nada, solo quedan visibles
    if (modo1 && modo2 && modoClaro && modoOscuro) {
        modo1.onclick = () => {};
        modo2.onclick = () => {};
        modoClaro.onclick = () => {};
        modoOscuro.onclick = () => {};
    }
    // Siempre modo normal claro
});