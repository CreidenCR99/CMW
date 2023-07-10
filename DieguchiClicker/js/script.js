var u = 0; // Unidad (m, km)
var ups = 0; // Unidad por tiempo (m/s, km/h)
function f_clic() {
    u += 0.1;
	f_ups();
}

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

function f_show(window) {
	if (window == 1) {
		$(".main").show();
		$(".shop").hide();
		$(".other").hide();
	} else if (window == 2) {
		$(".main").hide();
		$(".shop").show();
		$(".other").hide();
	} else if (window == 3) {
		$(".main").hide();
		$(".shop").hide();
		$(".other").show();
	}
}

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

setInterval(function() {
	f_ups();
}, 1000);