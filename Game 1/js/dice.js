// Archivo de dados limpiado para reinicio desde cero

// --- Estado global ---
let dadoActual = 6;
let animandoDado = false;
let bloqueoInteraccion = false;

// --- NUEVO: Estado para segundo dado ---
let segundoDadoActivo = false;
let dadoActual2 = 6;
let animandoDado2 = false;

// --- NUEVO: Guardar último resultado mostrado ---
let ultimoResultadoDado = null;
let ultimoResultadoDado2 = null;

// --- NUEVO: Guardar si ya se inicializó el resultado por primera vez ---
let inicializadoDado1 = false;
let inicializadoDado2 = false;

// --- Selección de dado ---
function seleccionarDado(lados, cual = 1, refrescarSolo = false) {
    if (!refrescarSolo && (animandoDado || bloqueoInteraccion || (cual === 2 && animandoDado2))) return;
    if (cual === 2) {
        // Solo cambia dadoActual2 si realmente cambia el tipo de dado
        if (dadoActual2 !== lados) {
            dadoActual2 = lados;
            if (!inicializadoDado2) {
                ultimoResultadoDado2 = Math.floor(Math.random() * dadoActual2) + 1;
            }
        }
        document.querySelectorAll('.dice-circulo.dado2').forEach(btn => btn.classList.remove('selected'));
        const btn = document.getElementById('dice' + lados + 'Btn2');
        if (btn) btn.classList.add('selected');
        dibujarDado2(ultimoResultadoDado2, false);
        if (ultimoResultadoDado2 !== null && ultimoResultadoDado2 !== undefined && ultimoResultadoDado2 !== '') {
            mostrarResultadoDado2(ultimoResultadoDado2);
        }
    } else {
        // Copia exacta de la lógica de dado2 para dado1
        if (dadoActual !== lados) {
            dadoActual = lados;
            if (!inicializadoDado1) {
                ultimoResultadoDado = Math.floor(Math.random() * dadoActual) + 1;
            }
        }
        document.querySelectorAll('.dice-circulo.dado1').forEach(btn => btn.classList.remove('selected'));
        const btn = document.getElementById('dice' + lados + 'Btn');
        if (btn) btn.classList.add('selected');
        dibujarDado(ultimoResultadoDado, false);
        if (ultimoResultadoDado !== null && ultimoResultadoDado !== undefined && ultimoResultadoDado !== '') {
            mostrarResultadoDado(ultimoResultadoDado);
        }
    }
}

// --- Tirar dado con animación (más lenta y con movimiento, caída de la mesa para D6) ---
function tirarDado() {
    if (animandoDado || bloqueoInteraccion) return;
    animandoDado = true;
    setBloqueoBotones(true);

    // --- NUEVO: Si hay dos dados, animar ambos en paralelo ---
    if (segundoDadoActivo) {
        animandoDado2 = true;
        let terminado1 = false, terminado2 = false;

        const duracion1 = Math.random() * 2000 + 2000;
        const duracion2 = Math.random() * 2000 + 2000;
        const start1 = performance.now();
        const start2 = performance.now();
        let resultadoFinal1 = null, resultadoFinal2 = null;
        let seCae1 = false, seCae2 = false;
        if (dadoActual === 6 && Math.random() < 0.10) seCae1 = true;
        if (dadoActual2 === 6 && Math.random() < 0.10) seCae2 = true;

        function checkFin() {
            if (terminado1 && terminado2) {
                setTimeout(() => setBloqueoBotones(false), 1000);
            }
        }

        function animar1(ts) {
            const elapsed = ts - start1;
            const progress = Math.min(elapsed / duracion1, 1);
            const rot = Math.sin(progress * Math.PI * 4) * Math.PI * 0.25 * (1 - progress);
            const scale = 1 + Math.abs(Math.sin(progress * Math.PI * 3)) * 0.18 * (1 - progress);

            if (elapsed < duracion1) {
                let valor = Math.floor(Math.random() * dadoActual) + 1;
                if (seCae1) valor = null;
                mostrarResultadoDado('');
                dibujarDado(valor, false, rot, scale, false);
                requestAnimationFrame(animar1);
            } else {
                if (seCae1) {
                    mostrarResultadoDado('¡El dado se ha caído de la mesa!');
                    dibujarDado(null, false, 0, 1, true);
                    ultimoResultadoDado = '¡El dado se ha caído de la mesa!';
                } else {
                    resultadoFinal1 = Math.floor(Math.random() * dadoActual) + 1;
                    mostrarResultadoDado(resultadoFinal1);
                    dibujarDado(resultadoFinal1, false, 0, 1, true);
                    ultimoResultadoDado = resultadoFinal1;
                }
                animandoDado = false;
                terminado1 = true;
                checkFin();
            }
        }

        function animar2(ts) {
            const elapsed = ts - start2;
            const progress = Math.min(elapsed / duracion2, 1);
            const rot = Math.sin(progress * Math.PI * 4) * Math.PI * 0.25 * (1 - progress);
            const scale = 1 + Math.abs(Math.sin(progress * Math.PI * 3)) * 0.18 * (1 - progress);

            if (elapsed < duracion2) {
                let valor = Math.floor(Math.random() * dadoActual2) + 1;
                if (seCae2) valor = null;
                mostrarResultadoDado2('');
                dibujarDado2(valor, false, rot, scale, false);
                requestAnimationFrame(animar2);
            } else {
                if (seCae2) {
                    mostrarResultadoDado2('¡El dado se ha caído de la mesa!');
                    dibujarDado2(null, false, 0, 1, true);
                    ultimoResultadoDado2 = '¡El dado se ha caído de la mesa!';
                } else {
                    resultadoFinal2 = Math.floor(Math.random() * dadoActual2) + 1;
                    mostrarResultadoDado2(resultadoFinal2);
                    dibujarDado2(resultadoFinal2, false, 0, 1, true);
                    ultimoResultadoDado2 = resultadoFinal2;
                }
                animandoDado2 = false;
                terminado2 = true;
                checkFin();
            }
        }

        requestAnimationFrame(animar1);
        requestAnimationFrame(animar2);
        return;
    }

    // --- Caso de solo un dado ---
    const duracion = Math.random() * 2000 + 2000;
    const start = performance.now();
    let resultadoFinal = null;
    let seCae = false;
    if (dadoActual === 6 && Math.random() < 0.10) seCae = true;

    function animar(ts) {
        const elapsed = ts - start;
        const progress = Math.min(elapsed / duracion, 1);
        const rot = Math.sin(progress * Math.PI * 4) * Math.PI * 0.25 * (1 - progress);
        const scale = 1 + Math.abs(Math.sin(progress * Math.PI * 3)) * 0.18 * (1 - progress);

        if (elapsed < duracion) {
            let valor = Math.floor(Math.random() * dadoActual) + 1;
            if (seCae) valor = null;
            mostrarResultadoDado('');
            dibujarDado(valor, false, rot, scale, false);
            requestAnimationFrame(animar);
        } else {
            if (seCae) {
                mostrarResultadoDado('¡El dado se ha caído de la mesa!');
                dibujarDado(null, false, 0, 1, true);
                ultimoResultadoDado = '¡El dado se ha caído de la mesa!';
            } else {
                resultadoFinal = Math.floor(Math.random() * dadoActual) + 1;
                mostrarResultadoDado(resultadoFinal);
                dibujarDado(resultadoFinal, false, 0, 1, true);
                ultimoResultadoDado = resultadoFinal;
            }
            animandoDado = false;
            setTimeout(() => setBloqueoBotones(false), 1000);
        }
    }
    requestAnimationFrame(animar);
}

// --- NUEVO: Tirar segundo dado ---
function tirarDado2() {
    if (animandoDado2) return;
    animandoDado2 = true;
    const duracion = Math.random() * 2000 + 2000;
    const start = performance.now();
    let resultadoFinal = null;
    let seCae = false;
    if (dadoActual2 === 6 && Math.random() < 0.10) seCae = true;

    function animar(ts) {
        const elapsed = ts - start;
        const progress = Math.min(elapsed / duracion, 1);
        const rot = Math.sin(progress * Math.PI * 4) * Math.PI * 0.25 * (1 - progress);
        const scale = 1 + Math.abs(Math.sin(progress * Math.PI * 3)) * 0.18 * (1 - progress);

        if (elapsed < duracion) {
            let valor = Math.floor(Math.random() * dadoActual2) + 1;
            if (seCae) valor = null;
            mostrarResultadoDado2('');
            dibujarDado2(valor, false, rot, scale, false);
            requestAnimationFrame(animar);
        } else {
            if (seCae) {
                mostrarResultadoDado2('¡El dado se ha caído de la mesa!');
                dibujarDado2(null, false, 0, 1, true);
                ultimoResultadoDado2 = '¡El dado se ha caído de la mesa!';
            } else {
                resultadoFinal = Math.floor(Math.random() * dadoActual2) + 1;
                mostrarResultadoDado2(resultadoFinal);
                dibujarDado2(resultadoFinal, false, 0, 1, true);
                ultimoResultadoDado2 = resultadoFinal;
            }
            animandoDado2 = false;
            setTimeout(() => setBloqueoBotones(false), 1000);
        }
    }
    requestAnimationFrame(animar);
}

// --- Bloqueo de botones de dado y tirar ---
function setBloqueoBotones(bloquear) {
    bloqueoInteraccion = bloquear;
    document.querySelectorAll('.dice-circulo').forEach(btn => {
        btn.disabled = bloquear;
        if (bloquear) btn.classList.add('disabled');
        else btn.classList.remove('disabled');
    });
    const tirarBtn = document.getElementById('botonTirarDado');
    if (tirarBtn) {
        tirarBtn.disabled = bloquear;
        if (bloquear) tirarBtn.classList.add('disabled');
        else tirarBtn.classList.remove('disabled');
    }
    const plusBtn = document.getElementById('plusDadoBtn');
    if (plusBtn) plusBtn.disabled = bloquear;
}

// --- Mostrar resultado ---
function mostrarResultadoDado(valor) {
    ultimoResultadoDado = valor;
    window.ultimoResultadoDado = valor; // <-- Mantén sincronizado con window
    const div = document.getElementById('resultadoDado');
    if (!div) return;
    if (valor === '' || valor == null) {
        div.textContent = '';
        div.classList.remove('visible');
    } else if (typeof valor === 'string' && valor.includes('caído')) {
        div.textContent = valor;
        div.classList.add('visible');
        div.style.fontSize = "1.2em";
        div.style.color = "#e57373";
    } else {
        div.textContent = valor;
        div.classList.add('visible');
        div.style.fontSize = "";
        div.style.color = "";
    }
}

// --- NUEVO: Mostrar resultado segundo dado ---
function mostrarResultadoDado2(valor) {
    ultimoResultadoDado2 = valor;
    window.ultimoResultadoDado2 = valor; // <-- Mantén sincronizado con window
    const div = document.getElementById('resultadoDado2');
    if (!div) return;
    if (valor === '' || valor == null) {
        div.textContent = '';
        div.classList.remove('visible');
    } else if (typeof valor === 'string' && valor.includes('caído')) {
        div.textContent = valor;
        div.classList.add('visible');
        div.style.fontSize = "1.2em";
        div.style.color = "#e57373";
    } else {
        div.textContent = valor;
        div.classList.add('visible');
        div.style.fontSize = "";
        div.style.color = "";
    }
}

// --- Dibujo del dado (ahora acepta rotación y escala, y puntos para D6) ---
function dibujarDado(valor, highlight, rot = 0, scale = 1, mostrarNumero = false) {
    const canvas = document.getElementById('canvasDado');
    if (!canvas) return;
    dibujarDadoGenerico(canvas, dadoActual, valor, highlight, rot, scale, mostrarNumero);
}

// --- NUEVO: Dibujo del segundo dado ---
function dibujarDado2(valor, highlight, rot = 0, scale = 1, mostrarNumero = false) {
    const canvas = document.getElementById('canvasDado2');
    if (!canvas) return;
    dibujarDadoGenerico(canvas, dadoActual2, valor, highlight, rot, scale, mostrarNumero);
}

// --- Factoriza el dibujo de cualquier dado ---
function dibujarDadoGenerico(canvas, lados, valor, highlight, rot, scale, mostrarNumero) {
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const cx = canvas.width / 2, cy = canvas.height / 2, size = Math.min(canvas.width, canvas.height) * 0.36;
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(rot || 0);
    ctx.scale(scale || 1, scale || 1);

    if (lados === 6) {
        dibujarD6(ctx, 0, 0, size, highlight);
        if (valor >= 1 && valor <= 6) {
            dibujarPuntosD6(ctx, valor);
        }
        ctx.restore();
        // Número arriba solo al final
        if (mostrarNumero && valor >= 1 && valor <= 6) {
            ctx.save();
            ctx.font = "bold 2.2em Segoe UI, Arial, sans-serif";
            ctx.fillStyle = "#6366f1";
            ctx.textAlign = "center";
            ctx.textBaseline = "bottom";
            ctx.shadowColor = "#fff";
            ctx.shadowBlur = 0;
            ctx.fillText(valor, 0, -size - 18);
            ctx.restore();
        }
        return;
    }

    switch (lados) {
        case 4: dibujarD4(ctx, 0, 0, size, highlight); break;
        case 8: dibujarD8(ctx, 0, 0, size, highlight); break;
        case 12: dibujarD12(ctx, 0, 0, size, highlight); break;
        case 20: dibujarD20(ctx, 0, 0, size, highlight); break;
        default: dibujarD6(ctx, 0, 0, size, highlight); break;
    }

    ctx.font = highlight ? "bold 4em Segoe UI, Arial, sans-serif" : "bold 5em Segoe UI, Arial, sans-serif";
    ctx.fillStyle = highlight ? "#fff" : "#6366f1";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.shadowColor = highlight ? "#6366f1" : "transparent";
    ctx.shadowBlur = highlight ? 18 : 0;
    ctx.fillText(valor != null && valor !== '' ? valor : '', 0, 0);
    ctx.restore();
}

// --- Dibuja los puntos del dado de 6 caras ---
function dibujarPuntosD6(ctx, valor) {
    // Coordenadas relativas para los puntos
    const r = 35;
    const puntos = [
        [0, 0], // 1
        [-r, -r], [r, r], // 2
        [-r, -r], [0, 0], [r, r], // 3
        [-r, -r], [r, -r], [-r, r], [r, r], // 4
        [-r, -r], [r, -r], [0, 0], [-r, r], [r, r], // 5
        [-r, -r], [r, -r], [-r, 0], [r, 0], [-r, r], [r, r] // 6
    ];
    ctx.save();
    ctx.fillStyle = "#6366f1";
    ctx.shadowColor = "#6366f1";
    ctx.shadowBlur = 6;
    ctx.beginPath();
    switch (valor) {
        case 1:
            dibujarPunto(ctx, 0, 0);
            break;
        case 2:
            dibujarPunto(ctx, -r, -r);
            dibujarPunto(ctx, r, r);
            break;
        case 3:
            dibujarPunto(ctx, -r, -r);
            dibujarPunto(ctx, 0, 0);
            dibujarPunto(ctx, r, r);
            break;
        case 4:
            dibujarPunto(ctx, -r, -r);
            dibujarPunto(ctx, r, -r);
            dibujarPunto(ctx, -r, r);
            dibujarPunto(ctx, r, r);
            break;
        case 5:
            dibujarPunto(ctx, -r, -r);
            dibujarPunto(ctx, r, -r);
            dibujarPunto(ctx, 0, 0);
            dibujarPunto(ctx, -r, r);
            dibujarPunto(ctx, r, r);
            break;
        case 6:
            dibujarPunto(ctx, -r, -r);
            dibujarPunto(ctx, r, -r);
            dibujarPunto(ctx, -r, 0);
            dibujarPunto(ctx, r, 0);
            dibujarPunto(ctx, -r, r);
            dibujarPunto(ctx, r, r);
            break;
    }
    ctx.restore();
}

function dibujarPunto(ctx, x, y) {
    ctx.beginPath();
    ctx.arc(x, y, 13, 0, 2 * Math.PI);
    ctx.fill();
}

// --- Formas de dados ---
function dibujarD4(ctx, x, y, r, highlight) {
    ctx.save();
    ctx.beginPath();
    for (let i = 0; i < 3; i++) {
        const angle = Math.PI / 2 + i * (2 * Math.PI / 3);
        ctx.lineTo(x + Math.cos(angle) * r, y + Math.sin(angle) * r);
    }
    ctx.closePath();
    ctx.fillStyle = highlight ? "#6366f1" : "#fff";
    ctx.strokeStyle = "#6366f1";
    ctx.lineWidth = highlight ? 8 : 6;
    ctx.shadowColor = highlight ? "#6366f1" : "#6366f1";
    ctx.shadowBlur = highlight ? 18 : 10;
    ctx.fill();
    ctx.shadowBlur = 0;
    ctx.stroke();
    ctx.restore();
}

function dibujarD6(ctx, x, y, r, highlight) {
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(x - r, y - r);
    ctx.lineTo(x + r, y - r);
    ctx.lineTo(x + r, y + r);
    ctx.lineTo(x - r, y + r);
    ctx.closePath();
    ctx.fillStyle = highlight ? "#6366f1" : "#fff";
    ctx.strokeStyle = "#6366f1";
    ctx.lineWidth = highlight ? 8 : 6;
    ctx.shadowColor = highlight ? "#6366f1" : "#6366f1";
    ctx.shadowBlur = highlight ? 18 : 10;
    ctx.fill();
    ctx.shadowBlur = 0;
    ctx.stroke();
    ctx.restore();
}

function dibujarD8(ctx, x, y, r, highlight) {
    ctx.save();
    ctx.beginPath();
    for (let i = 0; i < 8; i++) {
        const angle = Math.PI / 8 + i * (2 * Math.PI / 8);
        ctx.lineTo(x + Math.cos(angle) * r, y + Math.sin(angle) * r);
    }
    ctx.closePath();
    ctx.fillStyle = highlight ? "#6366f1" : "#fff";
    ctx.strokeStyle = "#6366f1";
    ctx.lineWidth = highlight ? 8 : 6;
    ctx.shadowColor = highlight ? "#6366f1" : "#6366f1";
    ctx.shadowBlur = highlight ? 18 : 10;
    ctx.fill();
    ctx.shadowBlur = 0;
    ctx.stroke();
    ctx.restore();
}

function dibujarD12(ctx, x, y, r, highlight) {
    ctx.save();
    ctx.beginPath();
    for (let i = 0; i < 12; i++) {
        const angle = Math.PI / 12 + i * (2 * Math.PI / 12);
        ctx.lineTo(x + Math.cos(angle) * r, y + Math.sin(angle) * r);
    }
    ctx.closePath();
    ctx.fillStyle = highlight ? "#6366f1" : "#fff";
    ctx.strokeStyle = "#6366f1";
    ctx.lineWidth = highlight ? 8 : 6;
    ctx.shadowColor = highlight ? "#6366f1" : "#6366f1";
    ctx.shadowBlur = highlight ? 18 : 10;
    ctx.fill();
    ctx.shadowBlur = 0;
    ctx.stroke();
    ctx.restore();
}

function dibujarD20(ctx, x, y, r, highlight) {
    ctx.save();
    ctx.beginPath();
    for (let i = 0; i < 20; i++) {
        const angle = Math.PI / 20 + i * (2 * Math.PI / 20);
        ctx.lineTo(x + Math.cos(angle) * r, y + Math.sin(angle) * r);
    }
    ctx.closePath();
    ctx.fillStyle = highlight ? "#6366f1" : "#fff";
    ctx.strokeStyle = "#6366f1";
    ctx.lineWidth = highlight ? 8 : 6;
    ctx.shadowColor = highlight ? "#6366f1" : "#6366f1";
    ctx.shadowBlur = highlight ? 18 : 10;
    ctx.fill();
    ctx.shadowBlur = 0;
    ctx.stroke();
    ctx.restore();
}

// --- NUEVO: Mostrar/ocultar segunda línea de dados ---
function toggleSegundoDado() {
    if (bloqueoInteraccion || animandoDado || animandoDado2) return;
    segundoDadoActivo = !segundoDadoActivo;
    const plusBtn = document.getElementById('plusDadoBtn');
    const dado2Row = document.getElementById('diceSelector2');
    const dado2Area = document.getElementById('dado2Area');
    if (segundoDadoActivo) {
        plusBtn.textContent = '-';
        dado2Row.style.display = 'flex';
        dado2Area.style.display = 'flex';
        // --- Solo inicializa si nunca se ha inicializado o el valor es inválido ---
        if (
            ultimoResultadoDado2 === null ||
            ultimoResultadoDado2 === '' ||
            (typeof ultimoResultadoDado2 === 'number' && (isNaN(ultimoResultadoDado2) || ultimoResultadoDado2 < 1 || ultimoResultadoDado2 > dadoActual2))
        ) {
            ultimoResultadoDado2 = Math.floor(Math.random() * dadoActual2) + 1;
            inicializadoDado2 = true;
            window.ultimoResultadoDado2 = ultimoResultadoDado2;
        }
        // Refresca visualmente el dado2 con el último resultado
        dibujarDado2(ultimoResultadoDado2, false);
        mostrarResultadoDado2(ultimoResultadoDado2);
        // Selecciona el botón correcto visualmente
        document.querySelectorAll('.dice-circulo.dado2').forEach(btn => btn.classList.remove('selected'));
        const btn = document.getElementById('dice' + dadoActual2 + 'Btn2');
        if (btn) btn.classList.add('selected');
    } else {
        plusBtn.textContent = '+';
        dado2Row.style.display = 'none';
        dado2Area.style.display = 'none';
        mostrarResultadoDado2('');
        dibujarDado2(null, true);
    }
}

// --- Inicialización ---
window.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('PantallaDados')) {
        [4,6,8,12,20].forEach(lados => {
            const btn = document.getElementById('dice' + lados + 'Btn');
            if (btn) {
                btn.onclick = () => seleccionarDado(lados, 1);
                btn.classList.add('dado1');
            }
            const btn2 = document.getElementById('dice' + lados + 'Btn2');
            if (btn2) {
                btn2.onclick = () => seleccionarDado(lados, 2);
                btn2.classList.add('dado2');
            }
        });

        // --- Inicialización visual y lógica de los dados solo la primera vez ---
        // Solo inicializa si no se ha inicializado antes
        if (!inicializadoDado1) {
            ultimoResultadoDado = Math.floor(Math.random() * dadoActual) + 1;
            inicializadoDado1 = true;
        }
        if (!inicializadoDado2) {
            ultimoResultadoDado2 = Math.floor(Math.random() * dadoActual2) + 1;
            inicializadoDado2 = true;
        }
        // Sincroniza con window
        window.ultimoResultadoDado = ultimoResultadoDado;
        window.ultimoResultadoDado2 = ultimoResultadoDado2;
        window.segundoDadoActivo = segundoDadoActivo;

        // Refresca visual pero NO cambia dadoActual ni dadoActual2 ni reinicia resultados
        seleccionarDado(dadoActual, 1, true);
        seleccionarDado(dadoActual2, 2, true);

        document.getElementById('diceSelector2').style.display = segundoDadoActivo ? 'flex' : 'none';
        document.getElementById('dado2Area').style.display = segundoDadoActivo ? 'flex' : 'none';
        const plusBtn = document.getElementById('plusDadoBtn');
        if (plusBtn) plusBtn.onclick = toggleSegundoDado;
    }
    // Elimina el botón de tirar dado y usa click en canvas
    const tirarBtn = document.getElementById('botonTirarDado');
    if (tirarBtn) tirarBtn.remove();

    // Click en canvas para tirar dado(s)
    const canvas1 = document.getElementById('canvasDado');
    if (canvas1) {
        canvas1.style.cursor = "pointer";
        canvas1.onclick = () => {
            if (segundoDadoActivo) {
                if (!animandoDado && !animandoDado2 && !bloqueoInteraccion) tirarDado();
            } else {
                if (!animandoDado && !bloqueoInteraccion) tirarDado();
            }
        };
    }
    const canvas2 = document.getElementById('canvasDado2');
    if (canvas2) {
        canvas2.style.cursor = "pointer";
        canvas2.onclick = () => {
            if (segundoDadoActivo) {
                if (!animandoDado && !animandoDado2 && !bloqueoInteraccion) tirarDado();
            }
        };
    }
    setBloqueoBotones(false);
});