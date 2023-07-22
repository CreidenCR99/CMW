var x = 10;
var u = 0; // Unidad (m, km)
var ups = 0; // Unidad por tiempo (m/s, km/h)
// Coches
var c1p = 10,   		// Tesla (cualquier modelo)
	c1G = 0,
	c1ups = 0.5,
	c2p = 50,           // Fiat multipla
	c2G = 0,
	c2ups = 3.2,
	c3p = 200,          // Nissan micra
	c3G = 0,
	c3ups = 9.9,
	c4p = 3000,   		// Honda civic 1998
	c4G = 0,
	c4ups = 15.4,
	c5p = 8300, 		// Toyota rav 4
	c5G = 0,
	c5ups = 46.5,
	c6p = 27125, 		// Hyundai tucson 2022
	c6G = 0,
	c6ups = 0,
	c7p = 66000, 		// Mazda miata
	c7G = 0,
	c7ups = x,
	c8p = 140000,       // Corvette c7s
	c8G = 0,
	c8ups = x,
	c9p = 900000, 		// Lamborghini huracan
	c9G = 0,
	c9ups = x,
	c10p = 10300000,    // Lamborghini murcielago
	c10G = 0,
	c10ups = x,
	c11p = 50350000,    // Lexus lfa
	c11G = 0,
	c11ups = x,
	c12p = 800000000,   // Corvette c8
	c12G = 0,
	c12ups = x,
	c13p = 4480000000,  // Ferrari 448 pista
	c13G = 0,
	c13ups = x,
	c14p = 8900000000,  // Lamborghini aventador
	c14G = 0,
	c14ups = x,
	c15p = 61890000000, // Honda civic type r
	c15G = 0,
	c15ups = x;

function f_clic() {
	u += 0.1;
	f_values();
}

function f_cshop(car) {
	if (car >= 1 && car <= 15 && u >= this["c" + car + "p"]) {
		if (car == 1 && c1p == 10) {
			c1p += 4
		}
		u -= this["c" + car + "p"];
	  this["c" + car + "p"] += Math.floor(this["c" + car + "p"] / (313 / 50) ** 0.9071875 * 1.3); // Subida de precios, estaba haciendo pruebas con ello, mucha inflacion actualmente
	  this["c" + car + "G"]++;
	  f_values();
	}
  }

function f_carValues(value){
	if (value <= 999) {
		return value.toFixed(0);
	  } else if (value >= 1000 && value < 100000) {
		return (value / 1000).toFixedDown(2) + "k";
	  } else if (value >= 100000 && value < 1000000){
		return (value / 1000).toFixedDown(0) + "k";
	  } else if (value >= 1000000 && value < 10000000000) { // Hay mas texto arriba si no lo viste
		return (value / 1000000).toFixedDown(2) + "M"; // Hay que hacer a partir de 100 M o 10 M no aparezcan decimales
	  } else if (value >= 10000000000) { //					Tambien puedo hacer que a partir de 10 aparezca solo un decimal y luego ya no
		return (value / 10000000000).toFixedDown(2) + "B"; // Hay que hacer a partir de 100 B o 10 B no aparezcan decimales
	  }
}

function f_values() {
	if (u <= 999) {
		document.getElementById("id_u").innerHTML = `${u.toFixedDown(1)} m`;
	} else if (u >= 1000 && (u / 1000) < 10) {
		document.getElementById("id_u").innerHTML = `${(u/1000).toFixedDown(1)} km`;
	} else if ((u / 1000) >= 10 && (u / 1000) < 1000) {
		document.getElementById("id_u").innerHTML = `${(u/1000).toFixedDown(0)} km`;
	} else if ((u / 1000) >= 1000) {
		document.getElementById("id_u").innerHTML = `${(u/1000000).toFixed(3)} km`;
	};
	if (ups <= 999) {
		document.getElementById("id_ups").innerHTML = `${ups.toFixedDown(1)} m/s`;
	} else if (ups >= 1000 && (ups / 1000) < 10) {
		document.getElementById("id_ups").innerHTML = `${(ups/1000).toFixedDown(1)} km/s`;
	} else if ((ups / 1000) >= 10 && (ups / 1000) < 1000) {
		document.getElementById("id_ups").innerHTML = `${(ups/1000).toFixedDown(0)} km/s`;
	} else if ((ups / 1000) >= 1000) {
		document.getElementById("id_ups").innerHTML = `${(ups/1000000).toFixed(3)} km/s`;
	}
	for (let i = 1; i <= 15; i++) {
		let cValue = this["c" + i + "p"];
		let price = f_carValues(cValue);
		document.getElementById("id_c" + i + "p").innerHTML = `Precio: ${price}`;
		document.getElementById("id_c" + i + "G").innerHTML = `Tienes: ${this["c" + i + "G"]}`;
	}
}

function f_calculateU() {
	for (let i = 1; i <= 15; i++) {
		u += Number((window['c' + i + 'G'] * window['c' + i + 'ups']));
	}
	u = Number((u).toFixed(1));
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

var HTMLloaded = false;
function f_onload() {
	HTMLloaded = true
	console.log("HTML loaded: " + HTMLloaded)
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
	if(HTMLloaded == true) {
		f_calculateU();
	}
}, 1000);

setInterval(function() {
	if(HTMLloaded == true) {
		f_values();
	}
}, 1000 / 60)