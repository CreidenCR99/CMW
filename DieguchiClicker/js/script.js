var u = 0; // Unidad (m, km)
var ups = 0; // Unidad por tiempo (m/s, km/h)

var c1p = 10, // Precio de los coches
	c2p = 50,
	c3p = 200,
	c4p = 3000,
	c5p = 8300,
	c6p = 27125,
	c7p = 66000,
	c8p = 140000,
	c9p = 900000,
	c10p = 10300000,
	c11p = 50350000,
	c12p = 800000000,
	c13p = 4480000000,
	c14p = 8900000000,
	c15p = 61890000000;

function f_clic() {
	u += 0.1;
	f_values();
}

function f_cshop(car) {
	if (car == 1 && u >= c1p) {

	}
}

function f_values() {
	if (u <= 999) {
		document.getElementById("id_u").innerHTML =
			`${u.toFixedDown(1)} m`;
	} else if (u >= 1000) {
		document.getElementById("id_u").innerHTML =
			`${(u/1000).toFixedDown(1)} km`
	} else if ((u / 1000) >= 10) {
		document.getElementById("id_u").innerHTML =
			`${(u/1000).toFixedDown(0)} km`
	}
	if (ups <= 999) {
		document.getElementById("id_ups").innerHTML =
			`${ups.toFixedDown(1)} m/s`;
	} else if (ups >= 1000) {
		document.getElementById("id_ups").innerHTML =
			`${(ups/1000).toFixedDown(1)} km/s`
	} else if ((ups / 1000) >= 10) {
		document.getElementById("id_ups").innerHTML =
			`${(ups/1000).toFixedDown(0)} km/s`
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

function f_onload() {
	console.log("Page loaded")
	f_loadCookies();
}

Number.prototype.toFixedDown = function(digits) {
	var re = new RegExp("(\\d+\\.\\d{" + digits + "})(\\d)"),
		m = this.toString().match(re);
	return m ? parseFloat(m[1]) : this.valueOf();
};

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

setInterval(function() {
	f_values();
}, 1000);