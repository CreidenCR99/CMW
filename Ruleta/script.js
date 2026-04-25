function estanTocandoPorcentaje(elemento1, elemento2, porcentaje) {
	const rect1 = elemento1 ? elemento1.getBoundingClientRect() : null;
	const rect2 = elemento2 ? elemento2.getBoundingClientRect() : null;

	if (rect1 && rect2) {
		// Calcula el área de intersección
		const interseccion = {
			x: Math.max(rect1.left, rect2.left),
			y: Math.max(rect1.top, rect2.top),
			width: Math.min(rect1.right, rect2.right) - Math.max(rect1.left, rect2.left),
			height: Math.min(rect1.bottom, rect2.bottom) - Math.max(rect1.top, rect2.top)
		};

		// Calcula el área de cada elemento
		const area1 = (rect1.width * rect1.height);
		const area2 = (rect2.width * rect2.height);

		// Calcula el área de intersección
		const areaInterseccion = interseccion.width * interseccion.height;

		// Calcula el porcentaje de intersección respecto al área más pequeña de los dos elementos
		const porcentajeInterseccion = (areaInterseccion / Math.min(area1, area2)) * 100;

		// Verifica si el porcentaje de intersección es mayor al porcentaje deseado
		return porcentajeInterseccion > porcentaje;
	}

	return false; // Si alguno de los elementos no es válido, no hay intersección
}

document.addEventListener('DOMContentLoaded', function() {
	let value = Math.ceil(Math.random() * (3601) + 360);
	let isRotating = false; // Variable de estado para rastrear si la ruleta está girando
	const spinBtn = document.querySelector('.spinBtn');
	const wheel = document.querySelector('.wheel');
	const selector = document.querySelector('.selector');
	const numbers = document.querySelectorAll('.number');

	// Uso en tu código
	const porcentajeDeseado = 99; // Porcentaje deseado de intersección

	spinBtn.onclick = function() {
		// Verifica si la ruleta está girando antes de iniciar una nueva rotación
		if (!isRotating) {
			// Marca que la ruleta está girando
			isRotating = true;

			// Gira la ruleta
			wheel.style.transform = "rotate(" + value + "deg)";
			value += Math.ceil(Math.random() * (3601) + 360);

			// Espera 5 segundos antes de realizar la detección de colisiones
			setTimeout(function() {
				// Asegúrate de que el elemento selector haya sido encontrado
				if (selector) {
					// Verifica si selector está tocando algún número con el porcentaje deseado
					numbers.forEach(number => {
						const estanTocando = estanTocandoPorcentaje(selector, number, porcentajeDeseado);
						if (estanTocando) {
							const id = number.id;
							console.log(`El elemento selector está tocando más del ${porcentajeDeseado}% del número con ID: ${id}`);
						}
					});

					// Resto de tu lógica después de la detección...

					// Marca que la ruleta ha dejado de girar
					isRotating = false;
				}
			}, 5000); // 5000 milisegundos (5 segundos)
		}
	};
});