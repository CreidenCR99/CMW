// --- Variables de estado global ---
let jugadores = []; // Array de jugadores

// --- Pantalla de personajes ---
function añadirJugador() {
    if (jugadores.length < 6) {
        jugadores.push({ nombre: '', poder: 5, oro: 0, imagen: 'img/default.png' });
        renderizarJugadores();
    } else {
        alert("¡Solo se pueden añadir 6 jugadores!");
    }
}

// Renderiza las tarjetas de jugadores en pantalla
function renderizarJugadores() {
    const tarjetaColores = [
        "#ff595e", "#ffca3a", "#8ac926", "#1982c4", "#6a4c93", "#ff85cb"
    ];
    const xColores = [
        "#fff", "#222", "#fff", "#fff", "#fff", "#222"
    ];
    for (let i = 1; i <= 6; i++) {
        document.getElementById('cuadrante' + i).innerHTML = '';
    }
    jugadores.forEach((p, i) => {
        const cuadrante = document.getElementById('cuadrante' + (i + 1));
        const jugadorDiv = document.createElement('div');
        jugadorDiv.className = 'personaje';
        // Colores en modo colorido
        if (document.body.classList.contains('modo-colorido')) {
            jugadorDiv.style.background = tarjetaColores[i % tarjetaColores.length];
            jugadorDiv.style.border = `2px solid ${tarjetaColores[(i + 1) % tarjetaColores.length]}`;
            jugadorDiv.style.boxShadow = `0 2px 16px ${tarjetaColores[i % tarjetaColores.length]}55`;
        } else {
            jugadorDiv.style.background = "";
            jugadorDiv.style.border = "";
            jugadorDiv.style.boxShadow = "";
        }
        // Imagen y botón eliminar
        const imagenWrapper = document.createElement('div');
        imagenWrapper.style.position = 'relative';
        const imagen = document.createElement('img');
        imagen.className = 'imagenPersonaje';
        imagen.src = p.imagen;
        imagen.alt = 'Imagen del jugador';
        imagen.onclick = () => cambiarImagen(imagen, p);
        const botonEliminar = document.createElement('button');
        botonEliminar.className = 'eliminarPersonaje';
        botonEliminar.textContent = '✖';
        botonEliminar.onclick = () => {
            jugadores.splice(i, 1);
            renderizarJugadores();
        };
        imagenWrapper.appendChild(imagen);
        imagenWrapper.appendChild(botonEliminar);

        // Datos del jugador
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

        jugadorDiv.appendChild(imagenWrapper);
        jugadorDiv.appendChild(datos);
        cuadrante.appendChild(jugadorDiv);
    });

    // Botón añadir jugador
    const boton = document.getElementById('botonAñadirJugador');
    if (
        document.getElementById("PantallaJugadores").style.display !== 'none' &&
        jugadores.length < 6
    ) {
        boton.style.display = 'block';
    } else {
        boton.style.display = 'none';
    }
}

// Cambia la imagen de un jugador
function cambiarImagen(imgElement, jugador) {
    const inputFile = document.getElementById('seleccionadorImagen');
    inputFile.onchange = () => mostrarImagen(inputFile, imgElement, jugador);
    inputFile.click();
}
function mostrarImagen(inputFile, imgElement, jugador) {
    const file = inputFile.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
        imgElement.src = e.target.result;
        jugador.imagen = e.target.result;
    };
    if (file) reader.readAsDataURL(file);
}