/* EN DESUSO POR EL MOMENTO

saveCookies();
var Money = 0;

function save() {console.log
	(window.btoa(
	`Money = ${Money};
	`));
};

// Cookies

var expiresDate = new Date(2100, 1, 01, 00, 00);
var deleteDate = new Date(1970, 1, 01, 00, 00);

async function saveCookies() {
	document.cookie = "cookie.Money=" + Money + "; expires=" + expiresDate.toUTCString();
	if (document.cookie != "") {
		document.getElementById("Saving").style.opacity = "1";
		await sleep(3500);
		document.getElementById("Saving").style.opacity = "0";
	};
};

if (document.cookie == "") {
	saveCookies();
}

function leerCookieMoney() {
	var lista = document.cookie.split(";");
	for (i in lista) {
		if (lista[i].search("cookie.Money") > -1) var micookie = lista[i];
	};
	var igual = micookie.indexOf("="),
        valor = micookie.substring(igual + 1);
	return Number(valor) >= 1 ? Number(Money = valor) : Number(Money = 0);

function leerCookies() {
	leerCookieMoney();
}

leerCookies();

function Restart() {
	document.cookie = "cookie.Money=" + (-1) + "; expires=" + deleteDate.toUTCString();
	window.location.reload();
}

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
} */

const expiresDate = new Date(2100, 1, 01, 00, 00);
const deleteDate = new Date(1970, 1, 01, 00, 00);

function saveCookies(ingresosArray) {
	try {
		// guardar objeto completo (ingresos + selección) para restaurar todo el estado
		const payload = { ingresos: ingresosArray, selectedIndex };
		const serialized = btoa(JSON.stringify(payload));
		document.cookie = "cookie.ledger=" + encodeURIComponent(serialized) + "; expires=" + expiresDate.toUTCString() + "; path=/";
	} catch (e) {
		console.error('Error saving cookie', e);
	}
}

function loadCookies() {
	const lista = document.cookie.split(";");
	let micookie = null;
	for (let i in lista) {
		if (lista[i].indexOf("cookie.ledger") > -1) micookie = lista[i];
	}
	if (!micookie) return null;
	const igual = micookie.indexOf("=");
	const valor = micookie.substring(igual + 1).trim();
	if (!valor) return null;
	try {
		const decoded = decodeURIComponent(valor);
		const parsed = JSON.parse(atob(decoded));
		// soportar forma anterior (array) y nueva (objeto)
		if (Array.isArray(parsed)) return { ingresos: parsed, selectedIndex: 0 };
		return parsed && typeof parsed === 'object' ? parsed : null;
	} catch (e) {
		console.warn('No se pudo parsear cookie ledger', e);
		return null;
	}
}

function deleteLedgerCookie() {
	document.cookie = "cookie.ledger=; expires=" + deleteDate.toUTCString() + "; path=/";
}

document.addEventListener('DOMContentLoaded', () => {
	const btnNuevoIngreso = document.getElementById('btnNuevoIngreso');
	const btnNuevoGasto = document.getElementById('btnNuevoGasto');
	const ingresoPanel = document.getElementById('ingresoPanel');
	const ingresoNombre = document.getElementById('ingresoNombre');
	const confirmIngreso = document.getElementById('confirmIngreso');
	const tablaContainer = document.getElementById('tablaContainer');
	const ingresoPreview = document.getElementById('ingresoPreview');
	const previewList = document.getElementById('previewList');
	const ledgerList = document.getElementById('ledgerList');
	const bigAmount = document.getElementById('bigAmount');

	// denominaciones (key = string for counts)
	const denominaciones = [
		{key: "0.5", label: "0,50€",  value: 0.5, img: "img/cent50.png"},
		{key: "1",   label: "1€",     value: 1,   img: "img/euro1.png"},
		{key: "2",   label: "2€",     value: 2,   img: "img/euro2.png"},
		{key: "5",   label: "5€",     value: 5,   img: "img/euro5.png"},
		{key: "10",  label: "10€",    value: 10,  img: "img/euro10.png"},
		{key: "20",  label: "20€",    value: 20,  img: "img/euro20.png"},
		{key: "50",  label: "50€",    value: 50,  img: "img/euro50.png"},
		{key: "100", label: "100€",   value: 100, img: "img/euro100.png"},
	];

	// estado: ingresos con counts
	let ingresos = []; // { name, counts: {key:count}, amount, date, type }
	let selectedIndex = -1;
	let currentMode = 'ingreso';
	// nuevo: creación temporal
	let isCreating = false;
	let tempCounts = null;
	let tempAmount = 0;

	// cargar desde cookie (mantener compatibilidad)
	const loaded = loadCookies();
	if (loaded && typeof loaded === 'object') {
		const arr = Array.isArray(loaded.ingresos) ? loaded.ingresos : [];
		ingresos = arr.map(it => {
			const counts = {};
			denominaciones.forEach(d => { counts[d.key] = (it.counts && Number(it.counts[d.key])) ? Number(it.counts[d.key]) : 0; });
			const amount = computeAmountFromCounts(counts);
			return {
				name: it.name || 'Sin nombre',
				counts,
				amount,
				date: it.date || new Date().toLocaleString(),
				type: it.type || 'ingreso'
			};
		});
		selectedIndex = typeof loaded.selectedIndex === 'number' ? loaded.selectedIndex : (ingresos.length ? 0 : -1);
	}

	// construir contenedores dentro de tablaContainer:
	// - denomGrid: botones para agregar (visible solo cuando isCreating)
	// - countsGrid: vista de counts (visible cuando no se está creando)
	const denomGrid = document.createElement('div');
	denomGrid.id = 'denomGrid';
	const countsGrid = document.createElement('div');
	countsGrid.id = 'countsGrid';
	countsGrid.className = 'counts-grid';

	// inicializar denomGrid con botones (cada click añade 1 moneda/billete)
	denominaciones.forEach(d => {
		const btn = document.createElement('button');
		btn.className = 'denom';
		btn.type = 'button';
		btn.dataset.key = d.key;
		btn.dataset.value = String(d.value);
		btn.innerHTML = `<img src="${d.img}" alt="${d.label}" class="denom-img"><small class="multLabel">Agregar</small>`;
		btn.addEventListener('click', () => {
			// clic izquierdo: sumar 1
			if (isCreating) addCountToTemp(d.key, Number(d.value), 1);
			else addCountToSelected(d.key, Number(d.value), 1);
		});
		// clic derecho: restar 1 (permite contadores negativos)
		btn.addEventListener('contextmenu', (e) => {
			e.preventDefault();
			if (isCreating) addCountToTemp(d.key, Number(d.value), -1);
			else addCountToSelected(d.key, Number(d.value), -1);
		});
		denomGrid.appendChild(btn);
	});
	// countsGrid será usado para mostrar imagen + cantidad (no botones)
	denominaciones.forEach(d => {
		const item = document.createElement('div');
		item.className = 'denom-count';
		item.dataset.key = d.key;
		item.innerHTML = `<img src="${d.img}" alt="${d.label}" class="denom-img"><div class="countVal">0x</div>`;
		countsGrid.appendChild(item);
	});

	// añadir ambos al contenedor y controlar visibilidad
	tablaContainer.appendChild(denomGrid);
	tablaContainer.appendChild(countsGrid);

	// helpers para mostrar/ocultar grids
	function showDenomGrid() {
		denomGrid.classList.remove('hidden');
		countsGrid.classList.add('hidden');
	}
	function showCountsGrid() {
		denomGrid.classList.add('hidden');
		countsGrid.classList.remove('hidden');
		updateCountsGrid(); // refrescar valores
	}

	// cuando se abre crear, inicializar tempCounts y mostrar denomGrid
	function openIngresoPanelAs(mode) {
		currentMode = mode;
		isCreating = true;
		tempCounts = {};
		denominaciones.forEach(d => tempCounts[d.key] = 0);
		tempAmount = 0;
		ingresoNombre.value = '';
		ingresoPanel.classList.remove('hidden');
		ingresoPanel.setAttribute('aria-hidden', 'false');
		tablaContainer.classList.remove('hidden');
		showDenomGrid();
		updatePreview();
		updateConfirmState();
	}

	// cerrar panel de creación
	function closeIngresoPanel() {
		isCreating = false;
		tempCounts = null;
		tempAmount = 0;
		ingresoPanel.classList.add('hidden');
		ingresoPanel.setAttribute('aria-hidden', 'true');
		// mostrar counts del seleccionado (si lo hay)
		if (selectedIndex >= 0) {
			tablaContainer.classList.remove('hidden');
			showCountsGrid();
		} else {
			tablaContainer.classList.add('hidden');
		}
		updatePreview();
	}

	// listeners para abrir en modo ingreso/gasto
	btnNuevoIngreso.addEventListener('click', () => openIngresoPanelAs('ingreso'));
	btnNuevoGasto.addEventListener('click', () => openIngresoPanelAs('gasto'));

	// validar nombre único y amount>0 antes de confirmar
	function updateConfirmState() {
		const nombre = (ingresoNombre.value || '').trim();
		let unique = true;
		if (nombre) {
			unique = !ingresos.some(it => it.name.toLowerCase() === nombre.toLowerCase());
		} else unique = false;
		const amountOk = (isCreating ? tempAmount : 0) > 0;
		confirmIngreso.disabled = !(unique && amountOk);
	}

	ingresoNombre.addEventListener('input', updateConfirmState);

	// confirmar crear nuevo ingreso/gasto (ya sin editar)
	confirmIngreso.addEventListener('click', () => {
		const nombre = (ingresoNombre.value || '').trim();
		if (!nombre) { ingresoNombre.focus(); return; }
		// validar único
		if (ingresos.some(it => it.name.toLowerCase() === nombre.toLowerCase())) {
			alert('El nombre ya existe. Usa otro nombre.');
			return;
		}
		// validar amount > 0
		if (tempAmount <= 0) {
			alert('Añade al menos una moneda/billete antes de crear.');
			return;
		}
		// crear entrada con tempCounts
		const nuevo = { name: nombre, counts: Object.assign({}, tempCounts), amount: tempAmount, date: new Date().toLocaleString(), type: currentMode };
		ingresos.push(nuevo);
		selectedIndex = ingresos.length - 1;
		saveCookies(ingresos);

		// cerrar panel y mostrar countsGrid
		closeIngresoPanel();
		renderLedger();
		showCountsGrid();
		updateBigAmount();
	});

	// añadir a tempCounts durante creación
	function addCountToTemp(key, value, mult) {
		if (!isCreating || !tempCounts) return;
		tempCounts[key] = (tempCounts[key] || 0) + mult;
		tempAmount = computeAmountFromCounts(tempCounts);
		updatePreview();
		updateConfirmState();
		updateDenomButtons();
	}

	// añadir a entrada seleccionada (cuando no se está creando)
	function addCountToSelected(key, value, mult) {
		if (selectedIndex < 0 || !ingresos[selectedIndex]) {
			alert('Selecciona primero un ingreso/gasto en el panel izquierdo o crea uno nuevo.');
			return;
		}
		const target = ingresos[selectedIndex];
		target.counts[key] = (target.counts[key] || 0) + mult;
		target.amount = computeAmountFromCounts(target.counts);
		target.date = new Date().toLocaleString();
		renderLedger();
		updateCountsGrid();
		updatePreview();
		saveCookies(ingresos);
		updateDenomButtons();
		updateBigAmount();
	}

	// recalcula amount desde counts (ya existe)
	function computeAmountFromCounts(counts) {
		let sum = 0;
		denominaciones.forEach(d => {
			const c = Number(counts[d.key] || 0);
			sum += c * d.value;
		});
		return Number(sum.toFixed(2));
	}

	// render ledger: eliminar botón de editar (mecánica removida), mantener eliminar
	function renderLedger() {
		ledgerList.innerHTML = '';
		if (ingresos.length === 0) {
			ledgerList.innerHTML = '<p style="color:#666;">No hay entradas. Crea una con "Nuevo ingreso" o "Nuevo gasto".</p>';
			return;
		}
		ingresos.forEach((item, idx) => {
			const row = document.createElement('div');
			row.className = 'ledger-row' + (idx === selectedIndex ? ' selected' : '');
			row.dataset.index = String(idx);

			const left = document.createElement('div');
			left.innerHTML = `<div class="name">${item.name}</div><div class="meta">${item.date || ''}</div>`;

			const right = document.createElement('div');
			const displayAmount = item.type === 'gasto' ? `-€${item.amount.toFixed(2)}` : `€${item.amount.toFixed(2)}`;
			right.innerHTML = `<div class="amount">${displayAmount}</div>`;

			const actions = document.createElement('div');
			// solo eliminar
			const btnDelete = document.createElement('button');
			btnDelete.className = 'action-btn';
			btnDelete.title = 'Eliminar';
			btnDelete.innerHTML = '🗑️';
			btnDelete.addEventListener('click', (e) => { e.stopPropagation(); deleteIngreso(idx); });
			actions.appendChild(btnDelete);

			row.appendChild(left);
			row.appendChild(right);
			row.appendChild(actions);

			row.addEventListener('click', () => {
				selectedIndex = idx;
				renderLedger();
				// cuando se selecciona y no se está creando, mostrar countsGrid
				if (!isCreating) {
					tablaContainer.classList.remove('hidden');
					showCountsGrid();
				}
				updatePreview();
			});

			ledgerList.appendChild(row);
		});
	}

	function deleteIngreso(index) {
		if (!ingresos[index]) return;
		ingresos.splice(index, 1);
		if (selectedIndex === index) selectedIndex = -1;
		else if (selectedIndex > index) selectedIndex--;
		renderLedger();
		updatePreview();
		saveCookies(ingresos);
		updateCountsGrid();
		updateBigAmount();
	}

	// preview: mostrar temp cuando isCreating, sino mostrar selected
	function updatePreview() {
		const totalEl = ingresoPreview.querySelector('.preview-total');
		previewList.innerHTML = '';
		if (isCreating && tempCounts) {
			const sign = currentMode === 'gasto' ? '-' : '';
			if (totalEl) totalEl.textContent = `Total: ${sign}€${tempAmount.toFixed(2)}`;
			denominaciones.forEach(d => {
				const cnt = tempCounts[d.key] || 0;
				if (cnt) {
					const div = document.createElement('div');
					div.className = 'item';
					div.innerHTML = `<span>${d.label}</span><span>${cnt}x</span>`;
					previewList.appendChild(div);
				}
			});
			if (!previewList.children.length) previewList.innerHTML = '<div style="color:#666;">No hay monedas/billetes</div>';
		} else if (selectedIndex >= 0 && ingresos[selectedIndex]) {
			const it = ingresos[selectedIndex];
			const sign = it.type === 'gasto' ? '-' : '';
			if (totalEl) totalEl.textContent = `Total: ${sign}€${it.amount.toFixed(2)}`;
			denominaciones.forEach(d => {
				const cnt = it.counts[d.key] || 0;
				if (cnt) {
					const div = document.createElement('div');
					div.className = 'item';
					div.innerHTML = `<span>${d.label}</span><span>${cnt}x</span>`;
					previewList.appendChild(div);
				}
			});
			if (!previewList.children.length) previewList.innerHTML = '<div style="color:#666;">No hay monedas/billetes</div>';
		} else {
			if (totalEl) totalEl.textContent = `Total: €0.00`;
			previewList.innerHTML = '<div style="color:#666;">Selecciona una entrada para ver sus monedas/billetes</div>';
		}
	}

	// actualizar countsGrid con valores de la entrada seleccionada o temp cuando isCreating
	function updateCountsGrid() {
		denominaciones.forEach(d => {
			const el = countsGrid.querySelector(`[data-key="${d.key}"]`);
			const valEl = el && el.querySelector('.countVal');
			let cnt = 0;
			if (isCreating && tempCounts) cnt = tempCounts[d.key] || 0;
			else if (selectedIndex >= 0 && ingresos[selectedIndex]) cnt = ingresos[selectedIndex].counts[d.key] || 0;
			if (valEl) valEl.textContent = `${cnt}x`;
		});
		// también actualizar etiquetas de los botones (para mostrar la misma información)
		updateDenomButtons();
		// actualizar bigAmount al refrescar contadores
		updateBigAmount();
	}

	// actualiza el <small> de cada botón de denominación para mostrar el contador actual
	function updateDenomButtons() {
		const buttons = denomGrid.querySelectorAll('.denom');
		buttons.forEach(btn => {
			const key = btn.dataset.key;
			const small = btn.querySelector('.multLabel');
			let cnt = 0;
			if (isCreating && tempCounts) cnt = tempCounts[key] || 0;
			else if (selectedIndex >= 0 && ingresos[selectedIndex]) cnt = ingresos[selectedIndex].counts[key] || 0;
			if (small) small.textContent = `${cnt}x`;
		});
	}

	// actualizar la cantidad grande (suma neta de todos los ingresos/gastos)
	function updateBigAmount() {
		let total = 0;
		ingresos.forEach(it => {
			const sign = it.type === 'gasto' ? -1 : 1;
			total += sign * (it.amount || 0);
		});
		// mostrar con formato simple
		bigAmount.textContent = `€${total.toFixed(2)}`;
	}

	// inicial render: si hay entradas, mostrar countsGrid para la seleccionada
	renderLedger();
	// mostrar el panel de counts al iniciar (muestra 0 si no hay entradas)
	tablaContainer.classList.remove('hidden');
	showCountsGrid();
	// actualizar etiquetas de botones para reflejar contadores iniciales
	updateDenomButtons();
	updatePreview();
	// calcular y mostrar total neto inicial
	updateBigAmount();
});