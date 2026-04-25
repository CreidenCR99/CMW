// --- Datos y utilidades de la ruleta ---
let segmentosRuleta = [
    { nombre: "Segmento 1", peso: 30, color: generarColorAleatorio() },
    { nombre: "Segmento 2", peso: 50, color: generarColorAleatorio() }
];

// Genera un color claro aleatorio en formato HEX
function generarColorAleatorio() {
    const min = 100, max = 255;
    const r = Math.floor(Math.random() * (max - min + 1)) + min;
    const g = Math.floor(Math.random() * (max - min + 1)) + min;
    const b = Math.floor(Math.random() * (max - min + 1)) + min;
    return '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');
}

// Calcula el ángulo de cada segmento según su peso
function calcularAngulos(segmentos) {
    const totalPeso = segmentos.reduce((sum, seg) => sum + seg.peso, 0);
    return segmentos.map(seg => ({
        ...seg,
        angulo: (seg.peso / totalPeso) * 2 * Math.PI
    }));
}

// --- Variables de estado global ---
let rotation = 0;
let puedeGirar = true;
let personajes = []; // Array de personajes

// --- Ruleta: Pantalla y animación ---
function activarRuleta() {
    document.getElementById("PantallaPersonajes").style.display = 'none';
    document.getElementById("PantallaRuleta").style.display = 'flex';
    document.getElementById('botonAñadirPersonaje').style.display = 'none';
    document.body.classList.add('bloquear-scroll');
    renderizarControlSegmentos();
    dibujarRuleta();
}

function girarRuleta() {
    if (!puedeGirar) return;
    puedeGirar = false;
    const listaSegmentos = document.getElementById('listaSegmentos');
    if (listaSegmentos) listaSegmentos.classList.add('bloqueado');

    const totalPeso = segmentosRuleta.reduce((sum, seg) => sum + seg.peso, 0);
    const targetValue = Math.random() * totalPeso;
    let acumulado = 0, resultado = null, anguloObjetivo = 0;

    // Determina el segmento ganador según el peso
    for (const seg of segmentosRuleta) {
        acumulado += seg.peso;
        if (targetValue <= acumulado) {
            resultado = seg;
            break;
        }
    }

    // Calcula el ángulo objetivo dentro del segmento ganador
    const segmentosConAngulos = calcularAngulos(segmentosRuleta);
    let anguloInicio = 0, anguloFinal = 0;
    for (const seg of segmentosConAngulos) {
        anguloFinal = anguloInicio + seg.angulo;
        if (seg.nombre === resultado.nombre) {
            const randomFactor = Math.random();
            anguloObjetivo = anguloInicio + (seg.angulo * randomFactor);
            break;
        }
        anguloInicio = anguloFinal;
    }

    // Calcula la rotación total para que la ruleta se detenga en el ángulo objetivo
    const vueltas = Math.floor(Math.random() * 4) + 4;
    const destino = (vueltas * 2 * Math.PI) + (2 * Math.PI - anguloObjetivo);
    const duracion = Math.random() * 4000 + 4000;
    const inicio = performance.now();

    function animar(tiempoActual) {
        const progreso = Math.min((tiempoActual - inicio) / duracion, 1);
        const easeOut = 1 - Math.pow(1 - progreso, 3);
        rotation = destino * easeOut;
        dibujarRuleta();
        if (progreso < 1) {
            requestAnimationFrame(animar);
        } else {
            rotation = destino;
            dibujarRuleta();
            const probabilidad = ((resultado.peso / totalPeso) * 100).toFixed(2);
            mostrarResultadoRuleta(resultado.nombre, probabilidad);
            setTimeout(() => {
                puedeGirar = true;
                if (listaSegmentos) listaSegmentos.classList.remove('bloqueado');
            }, 1000);
        }
    }
    requestAnimationFrame(animar);
}

// Dibuja la ruleta y sus elementos visuales
function dibujarRuleta() {
    const canvas = document.getElementById("canvasRuleta");
    const ctx = canvas.getContext("2d");
    const centerX = canvas.width / 2, centerY = canvas.height / 2, radius = 200;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate(rotation);

    const segmentosConAngulos = calcularAngulos(segmentosRuleta);
    let anguloInicio = 0;

    // Dibuja los segmentos y sus nombres
    for (const seg of segmentosConAngulos) {
        const anguloFinal = anguloInicio + seg.angulo;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.arc(0, 0, radius, anguloInicio, anguloFinal);
        ctx.closePath();
        ctx.fillStyle = seg.color;
        ctx.fill();
        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.save();
        ctx.rotate(anguloInicio + seg.angulo / 2);
        ctx.textAlign = "right";
        // Ajuste dinámico de tamaño de fuente para el nombre del segmento
        let fontSize = 22;
        const maxWidth = radius - 30;
        ctx.font = `bold ${fontSize}px Arial`;
        while (ctx.measureText(seg.nombre).width > maxWidth && fontSize > 12) {
            fontSize -= 1;
            ctx.font = `bold ${fontSize}px Arial`;
        }
        ctx.lineWidth = 4;
        ctx.strokeStyle = "#000";
        ctx.strokeText(seg.nombre, radius - 10, 8);
        ctx.fillStyle = "#fff";
        ctx.fillText(seg.nombre, radius - 10, 8);
        ctx.restore();

        anguloInicio = anguloFinal;
    }
    ctx.restore();

    // Dibuja el borde de la ruleta
    ctx.strokeStyle = "black";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.stroke();

    // Dibuja las bolas pequeñas en cada división de segmento
    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate(rotation);
    anguloInicio = 0;
    for (const seg of segmentosConAngulos) {
        const anguloFinal = anguloInicio + seg.angulo;
        const bolaRadio = 7, bolaDist = radius - bolaRadio + 2;
        const x = Math.cos(anguloFinal) * bolaDist, y = Math.sin(anguloFinal) * bolaDist;
        ctx.beginPath();
        ctx.arc(x, y, bolaRadio, 0, 2 * Math.PI);
        ctx.fillStyle = "#fff";
        ctx.shadowColor = "#000";
        ctx.shadowBlur = 2;
        ctx.fill();
        ctx.lineWidth = 1.5;
        ctx.strokeStyle = "#222";
        ctx.shadowBlur = 0;
        ctx.stroke();
        anguloInicio = anguloFinal;
    }
    ctx.restore();

    // Bola blanca en el centro
    ctx.save();
    ctx.beginPath();
    ctx.arc(centerX, centerY, 18, 0, 2 * Math.PI);
    ctx.fillStyle = "#fff";
    ctx.shadowColor = "#000";
    ctx.shadowBlur = 2;
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#222";
    ctx.shadowBlur = 0;
    ctx.stroke();
    ctx.restore();

    // Dibuja el puntero (flecha)
    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate(0);
    ctx.beginPath();
    ctx.moveTo(radius + 10, 0);
    ctx.lineTo(radius + 30, -12);
    ctx.lineTo(radius + 30, 12);
    ctx.closePath();
    ctx.fillStyle = "#fff";
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 3;
    ctx.fill();
    ctx.stroke();
    ctx.restore();
}

// --- Control de segmentos de la ruleta ---
function renderizarControlSegmentos() {
    const contenedor = document.getElementById("listaSegmentos");
    if (!contenedor) return;
    contenedor.innerHTML = `
        <div id="tituloSegmentos">Segmentos de la ruleta</div>
        <div id="contenedorSegmentos"></div>
        <button id="botonAñadirSegmentoFlotante" onclick="añadirSegmento()">➕ Añadir segmento</button>
    `;
    const puedeEliminar = segmentosRuleta.length > 2;
    const contenedorSegmentos = document.getElementById("contenedorSegmentos");
    segmentosRuleta.forEach((segmento, index) => {
        const div = document.createElement("div");
        div.className = "segmentoControl";
        div.innerHTML = `
            <label>Nombre:</label><br>
            <input type="text" maxlength="32" value="${segmento.nombre}" onchange="cambiarNombreSegmento(${index}, this.value)"><br>
            <label>Peso:</label><br>
            <input type="number" min="1" value="${segmento.peso}" onchange="cambiarPesoSegmento(${index}, this.value)"><br>
            <div class="fila-color-eliminar">
                <input type="color" value="${segmento.color}" onchange="cambiarColorSegmento(${index}, this.value)">
                ${puedeEliminar ? `<button onclick="eliminarSegmento(${index})">❌ Eliminar</button>` : ""}
            </div>
        `;
        contenedorSegmentos.appendChild(div);
    });
    dibujarRuleta();
}

function cambiarNombreSegmento(index, nuevoNombre) {
    segmentosRuleta[index].nombre = nuevoNombre.slice(0, 32);
    dibujarRuleta();
}
function cambiarPesoSegmento(index, nuevoPeso) {
    const peso = parseInt(nuevoPeso);
    if (!isNaN(peso) && peso > 0) {
        segmentosRuleta[index].peso = peso;
        dibujarRuleta();
    }
}
function cambiarColorSegmento(index, nuevoColor) {
    segmentosRuleta[index].color = nuevoColor;
    dibujarRuleta();
}
function eliminarSegmento(index) {
    if (segmentosRuleta.length > 2) {
        segmentosRuleta.splice(index, 1);
        renderizarControlSegmentos();
    }
}
function añadirSegmento() {
    const nuevoNumero = segmentosRuleta.length + 1;
    const pesoAleatorio = Math.floor(Math.random() * 41) + 10;
    segmentosRuleta.push({
        nombre: `Segmento ${nuevoNumero}`,
        peso: pesoAleatorio,
        color: generarColorAleatorio()
    });
    renderizarControlSegmentos();
}

// --- Pantalla de personajes ---
function volverInicio() {
    document.getElementById("PantallaRuleta").style.display = 'none';
    document.getElementById("PantallaPersonajes").style.display = 'flex';
    document.body.classList.remove('bloquear-scroll');
    renderizarPersonajes();
    dibujarRuleta();
}

function añadirPersonaje() {
    if (personajes.length < 6) {
        personajes.push({ nombre: '', poder: 5, oro: 0, imagen: 'img/default.png' });
        renderizarPersonajes();
    } else {
        alert("¡Solo se pueden añadir 6 personajes!");
    }
}

// Renderiza las tarjetas de personajes en pantalla
function renderizarPersonajes() {
    const tarjetaColores = [
        "#ff595e", "#ffca3a", "#8ac926", "#1982c4", "#6a4c93", "#ff85cb"
    ];
    const xColores = [
        "#fff", "#222", "#fff", "#fff", "#fff", "#222"
    ];
    for (let i = 1; i <= 6; i++) {
        document.getElementById('cuadrante' + i).innerHTML = '';
    }
    personajes.forEach((p, i) => {
        const cuadrante = document.getElementById('cuadrante' + (i + 1));
        const personajeDiv = document.createElement('div');
        personajeDiv.className = 'personaje';
        // Colores en modo colorido
        if (document.body.classList.contains('modo-colorido')) {
            personajeDiv.style.background = tarjetaColores[i % tarjetaColores.length];
            personajeDiv.style.border = `2px solid ${tarjetaColores[(i + 1) % tarjetaColores.length]}`;
            personajeDiv.style.boxShadow = `0 2px 16px ${tarjetaColores[i % tarjetaColores.length]}55`;
        } else {
            personajeDiv.style.background = "";
            personajeDiv.style.border = "";
            personajeDiv.style.boxShadow = "";
        }
        // Imagen y botón eliminar
        const imagenWrapper = document.createElement('div');
        imagenWrapper.style.position = 'relative';
        const imagen = document.createElement('img');
        imagen.className = 'imagenPersonaje';
        imagen.src = p.imagen;
        imagen.alt = 'Imagen del personaje';
        imagen.onclick = () => cambiarImagen(imagen, p);
        const botonEliminar = document.createElement('button');
        botonEliminar.className = 'eliminarPersonaje';
        botonEliminar.textContent = '✖';
        botonEliminar.onclick = () => {
            personajes.splice(i, 1);
            renderizarPersonajes();
        };
        if (document.body.classList.contains('modo-colorido')) {
            botonEliminar.style.background = tarjetaColores[(i + 1) % tarjetaColores.length];
            botonEliminar.style.color = xColores[i % xColores.length];
            botonEliminar.style.border = `2px solid ${tarjetaColores[i % tarjetaColores.length]}`;
        } else {
            botonEliminar.style.background = "";
            botonEliminar.style.color = "";
            botonEliminar.style.border = "";
        }
        imagenWrapper.appendChild(imagen);
        imagenWrapper.appendChild(botonEliminar);

        // Datos del personaje
        const datos = document.createElement('div');
        datos.className = 'datosPersonaje';
        // Nombre
        const inputNombre = document.createElement('input');
        inputNombre.type = 'text';
        inputNombre.placeholder = 'Nombre';
        inputNombre.value = p.nombre;
        inputNombre.oninput = () => p.nombre = inputNombre.value;
        datos.appendChild(inputNombre);
        // Poder
        const filaPoder = document.createElement('div');
        filaPoder.className = 'fila-dato';
        const labelPoder = document.createElement('label');
        labelPoder.textContent = 'Poder:';
        const inputPoder = document.createElement('input');
        inputPoder.type = 'number';
        inputPoder.placeholder = 'Poder';
        inputPoder.min = 1;
        inputPoder.max = 999;
        inputPoder.value = p.poder;
        inputPoder.oninput = () => p.poder = Math.min(999, Math.max(1, +inputPoder.value));
        filaPoder.appendChild(labelPoder);
        filaPoder.appendChild(inputPoder);
        datos.appendChild(filaPoder);
        // Oro
        const filaOro = document.createElement('div');
        filaOro.className = 'fila-dato';
        const labelOro = document.createElement('label');
        labelOro.textContent = 'Oro:';
        const inputOro = document.createElement('input');
        inputOro.type = 'number';
        inputOro.placeholder = 'Oro';
        inputOro.min = 0;
        inputOro.max = 999;
        inputOro.value = p.oro;
        inputOro.oninput = () => p.oro = Math.min(999, Math.max(0, +inputOro.value));
        filaOro.appendChild(labelOro);
        filaOro.appendChild(inputOro);
        datos.appendChild(filaOro);

        personajeDiv.appendChild(imagenWrapper);
        personajeDiv.appendChild(datos);
        cuadrante.appendChild(personajeDiv);
    });

    // Botón añadir personaje
    const boton = document.getElementById('botonAñadirPersonaje');
    if (
        document.getElementById("PantallaPersonajes").style.display !== 'none' &&
        personajes.length < 6
    ) {
        boton.style.display = 'block';
    } else {
        boton.style.display = 'none';
    }
}

// Cambia la imagen de un personaje
function cambiarImagen(imgElement, personaje) {
    const inputFile = document.getElementById('seleccionadorImagen');
    inputFile.onchange = () => mostrarImagen(inputFile, imgElement, personaje);
    inputFile.click();
}
function mostrarImagen(inputFile, imgElement, personaje) {
    const file = inputFile.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
        imgElement.src = e.target.result;
        personaje.imagen = e.target.result;
    };
    if (file) reader.readAsDataURL(file);
}

// --- Modo de color y claro/oscuro ---
function setColorMode(colorMode, lightMode) {
    document.body.classList.remove('modo-colorido', 'modo-oscuro');
    document.getElementById('modo1').classList.remove('selected');
    document.getElementById('modo2').classList.remove('selected');
    document.getElementById('modoClaro').classList.remove('selected');
    document.getElementById('modoOscuro').classList.remove('selected');
    if (colorMode === 2) {
        document.body.classList.add('modo-colorido');
        document.getElementById('modo2').classList.add('selected');
    } else {
        document.getElementById('modo1').classList.add('selected');
    }
    if (lightMode === 'oscuro') {
        document.body.classList.add('modo-oscuro');
        document.getElementById('modoOscuro').classList.add('selected');
    } else {
        document.getElementById('modoClaro').classList.add('selected');
    }
    renderizarPersonajes();
    renderizarControlSegmentos();
}

// --- Resultado de la ruleta ---
function mostrarResultadoRuleta(nombre, probabilidad) {
    let resultadoDiv = document.getElementById('resultadoRuleta');
    if (!resultadoDiv) return;
    // Ajusta el tamaño de fuente según la longitud del nombre
    let fontSize = 2.1;
    if (nombre.length > 32) fontSize = 1.7;
    if (nombre.length > 48) fontSize = 1.3;
    if (nombre.length > 64) fontSize = 1.1;
    resultadoDiv.innerHTML = `
        <div class="resultado-titulo" style="font-size:${fontSize}em" title="${nombre.replace(/"/g, '&quot;')}">${nombre}</div>
        <div class="resultado-probabilidad">${probabilidad}% de probabilidad</div>
    `;
    resultadoDiv.style.opacity = '1';
}

// --- Animación de click en la ruleta ---
function animacionClickRuleta() {
    if (!puedeGirar) return;
    const canvas = document.getElementById("canvasRuleta");
    canvas.classList.remove("ruleta-anim-click");
    void canvas.offsetWidth;
    canvas.classList.add("ruleta-anim-click");
}

// --- Ruletas predefinidas ---
const RUEDAS_PREDEFINIDAS = [
    {
        id: "ruletaGenericaBtn",
        nombre: "Ruleta Genérica",
        segmentos: [
            { nombre: "Segmento 1", peso: 30, color: "#fbbf24" },
            { nombre: "Segmento 2", peso: 50, color: "#60a5fa" }
        ]
    },
    {
        id: "ruletaGoodBtn",
        nombre: "Good Wheel",
        segmentos: [
            { nombre: "¡Premio!", peso: 40, color: "#4ade80" },
            { nombre: "¡Suerte!", peso: 30, color: "#facc15" },
            { nombre: "¡Extra!", peso: 20, color: "#38bdf8" },
            { nombre: "¡Bonus!", peso: 10, color: "#f472b6" }
        ]
    },
    {
        id: "ruletaMisteriousBtn",
        nombre: "Misterious Wheel",
        segmentos: [
            { nombre: "???", peso: 25, color: "#6366f1" },
            { nombre: "???", peso: 25, color: "#a21caf" },
            { nombre: "???", peso: 25, color: "#f59e42" },
            { nombre: "???", peso: 25, color: "#fbbf24" }
        ]
    },
    {
        id: "ruletaBadBtn",
        nombre: "Bad Wheel",
        segmentos: [
            { nombre: "Perder", peso: 40, color: "#f87171" },
            { nombre: "Castigo", peso: 30, color: "#fbbf24" },
            { nombre: "Nada", peso: 20, color: "#a3a3a3" },
            { nombre: "¡Ups!", peso: 10, color: "#f472b6" }
        ]
    }
];

// Cambia la ruleta activa al hacer click en los círculos
function seleccionarRuletaPredefinida(id) {
    // Quita selección visual
    document.querySelectorAll('.ruleta-circulo').forEach(btn => btn.classList.remove('selected'));
    // Busca la ruleta y la activa
    const rueda = RUEDAS_PREDEFINIDAS.find(r => r.id === id);
    if (rueda) {
        segmentosRuleta = rueda.segmentos.map(s => ({ ...s })); // Copia para edición independiente
        document.getElementById(id).classList.add('selected');
        renderizarControlSegmentos();
        dibujarRuleta();
        mostrarResultadoRuleta("", ""); // Limpia resultado
    }
}

// Inicialización de eventos para los botones de ruleta predefinida
window.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('listaSegmentos')) {
        renderizarControlSegmentos();
    }
    // Inicializa botones de modo de color y claro/oscuro
    const modo1 = document.getElementById('modo1');
    const modo2 = document.getElementById('modo2');
    const modoClaro = document.getElementById('modoClaro');
    const modoOscuro = document.getElementById('modoOscuro');
    if (modo1 && modo2 && modoClaro && modoOscuro) {
        modo1.onclick = () => setColorMode(1, modoOscuro.classList.contains('selected') ? 'oscuro' : 'claro');
        modo2.onclick = () => setColorMode(2, modoOscuro.classList.contains('selected') ? 'oscuro' : 'claro');
        modoClaro.onclick = () => setColorMode(modo2.classList.contains('selected') ? 2 : 1, 'claro');
        modoOscuro.onclick = () => setColorMode(modo2.classList.contains('selected') ? 2 : 1, 'oscuro');
    }
    setColorMode(1, 'claro');

    // Click en la ruleta: animación y giro
    const canvas = document.getElementById('canvasRuleta');
    if (canvas) {
        canvas.onclick = function() {
            if (!puedeGirar) return;
            animacionClickRuleta();
            girarRuleta();
        };
    }

    // Añade eventos a los botones de ruleta predefinida
    RUEDAS_PREDEFINIDAS.forEach(r => {
        const btn = document.getElementById(r.id);
        if (btn) {
            btn.onclick = () => seleccionarRuletaPredefinida(r.id);
        }
    });
});