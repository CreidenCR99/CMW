var u = 0; // Unidad (m, km)
var ups = 0; // Unidad por tiempo (m/s, km/h)
function f_clic() {
    u++;
};

function f_ups() {
	if (u <= 999) {
		document.getElementById("id_u").innerHTML =
		`${u} m`;
	} else if (u >= 1000) {
		document.getElementById("id_u").innerHTML =
		`${u/1000} km`
	}
	if (ups <= 999) {
		document.getElementById("id_ups").innerHTML =
		`${ups} m/s`;
	} else if (u >= 1000) {
		document.getElementById("id_ups").innerHTML =
		`${ups/1000} km/s`
	}
}

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

setInterval(function() {
	f_ups();
}, 1000 / 60);