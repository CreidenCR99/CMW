var u = 0; // Unidad (m, km)
var ups = 0; // Unidad por tiempo (m/s, km/h)
function f_clic() {
    u++;
	f_ups();
};

function f_ups() {
	if (u <= 999) {
		document.getElementById("id_u").innerHTML =
		`${u.toFixed(1)} m`;
	} else if (u >= 1000) {
		document.getElementById("id_u").innerHTML =
		`${(u/1000).toFixed(1)} km`
	}
	if (ups <= 999) {
		document.getElementById("id_ups").innerHTML =
		`${ups.toFixed(1)} m/s`;
	} else if (ups >= 1000) {
		document.getElementById("id_ups").innerHTML =
		`${(ups/1000).toFixed(1)} km/s`
	}
}

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

setInterval(function() {
	f_ups();
}, 1000*10);