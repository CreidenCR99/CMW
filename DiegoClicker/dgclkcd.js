var Diego = 0;
var DiegoRedondeo = Math.round(Diego);

var DPS = 0;
var DPSRedondeo = Math.round(DPS);

var Total = 0;
var clicktotal = 0;
var gastadototal = 0;


var TyranitarInv = 0;
var GarchompInv = 0;
var SylveonInv = 0;
var LuvdiscInv = 0;

var TyranitarProduce = 1;
var GarchompProduce = 2.25
var SylveonProduce = 3.5
var LuvdiscProduce = 4.75

var TyranitarPrecio = 100;
var GarchompPrecio = 200;
var SylveonPrecio = 300;
var LuvdiscPrecio = 400;

var TyranitarPrecioMultiplicador = 1;
var GarchompPrecioMultiplicador = 1;
var SylveonPrecioMultiplicador = 1;
var LuvdiscPrecioMultiplicador = 1;

var precioclick1 = 600;
var precioclick2 = 1200;
var click = 1;
var precioinv1 = 1000;
var precioinv2 = 2000;
var invmejora = 1;

function clic() {
	Diego += click;
	Total += click;
}

function clickUpgrade() {
	if (click == 1) {
		if (Diego >= precioclick1) {
			click = +2;
			Diego -= precioclick1;
			gastadototal += precioclick1;
			document.getElementById("Mejora1").src = "img/CursorGold.png";
			document.getElementById("Mejora1").title = "Triplicador de clicks - 1200 Diegos";
		} else {
			console.log("No tienes diegos suficientes");
		}
	} else if (click == 2) {
		if (Diego >= precioclick2) {
			click = +3;
			Diego -= precioclick2;
			gastadototal += precioclick2;
			document.getElementById("Mejora1").src = "img/CursorDiamond.png";
			document.getElementById("Mejora1").title = "¡Comprado!";
		} else {
			console.log("No tienes diegos suficientes");
		}
	}
}

function invUpgrade() {

	if (invmejora == 1) {
		if (Diego >= precioinv1) {
			invmejora = +2;
			Diego -= precioinv1;
			gastadototal += precioinv1;
			DPS *= 2;
			document.getElementById("Mejora2").src = "img/Superball.png";
			document.getElementById("Mejora2").title = "Triplicador de producción - 2000 Diegos";
		} else {
			console.log("No tienes diegos suficientes");
		}
	} else if (invmejora == 2) {
		if (Diego >= precioinv2) {
			invmejora = +3;
			Diego -= precioinv2;
			gastadototal += precioinv2;
			DPS /= 2;
			DPS *= 3;
			document.getElementById("Mejora2").src = "img/Ultraball.png";
			document.getElementById("Mejora2").title = "¡Comprado!";
		} else {
			console.log("No tienes diegos suficientes");
		}
	}
}

function ComprarTyranitar() {
	if (Diego >= TyranitarPrecio) {
		TyranitarInv++;
		Diego -= TyranitarPrecio;
		gastadototal += TyranitarPrecio;
		DPS += TyranitarProduce * invmejora;
		document.getElementById("DPS").innerHTML = `DPS: ${DPS}`;
		if (TyranitarShiny >= 90) {
			TyranitarPrecioMultiplicador = Math.random() * (100 + 300);
			TyranitarPrecioMultiplicador = Math.round(TyranitarPrecioMultiplicador * 0.01) / 10 + 1;
			TyranitarPrecio *= TyranitarPrecioMultiplicador;
			TyranitarPrecio = Math.round(TyranitarPrecio);
			document.getElementById("TyranitarS").title = `Precio: ${TyranitarPrecio} Diegos`;
		}
		if (TyranitarShiny <= 89) {
			TyranitarPrecioMultiplicador = Math.random() * (100 + 500);
			TyranitarPrecioMultiplicador = Math.round(TyranitarPrecioMultiplicador * 0.01) / 10 + 1;
			TyranitarPrecio *= TyranitarPrecioMultiplicador;
			TyranitarPrecio = Math.round(TyranitarPrecio);
			document.getElementById("TyranitarS").title = `Precio: ${TyranitarPrecio} Diegos`;
		}
	} else {
		console.log(` No tienes diegos suficientes. \n Necesitas ${Math.round(TyranitarPrecio-Diego)}`);
	}

}

function ComprarGarchomp() {
	if (Diego >= GarchompPrecio) {
		GarchompInv++;
		Diego -= GarchompPrecio;
		gastadototal += GarchompPrecio;
		DPS += GarchompProduce * invmejora;
		document.getElementById("DPS").innerHTML = `DPS: ${DPS}`;
		if (GarchompShiny >= 90) {
			GarchompPrecioMultiplicador = Math.random() * (100 + 300);
			GarchompPrecioMultiplicador = Math.round(GarchompPrecioMultiplicador * 0.01) / 10 + 1;
			GarchompPrecio *= GarchompPrecioMultiplicador;
			GarchompPrecio = Math.round(GarchompPrecio);
			document.getElementById("GarchompS").title = `Precio: ${GarchompPrecio} Diegos`;
		}
		if (GarchompShiny <= 89) {
			GarchompPrecioMultiplicador = Math.random() * (100 + 500);
			GarchompPrecioMultiplicador = Math.round(GarchompPrecioMultiplicador * 0.01) / 10 + 1;
			GarchompPrecio *= GarchompPrecioMultiplicador;
			GarchompPrecio = Math.round(GarchompPrecio);
			document.getElementById("GarchompS").title = `Precio: ${GarchompPrecio} Diegos`;
		}
	} else {
		console.log(` No tienes diegos suficientes. \n Necesitas ${Math.round(GarchompPrecio-Diego)}`);
	}

}

function ComprarSylveon() {
	if (Diego >= SylveonPrecio) {
		SylveonInv++;
		Diego -= SylveonPrecio;
		gastadototal += SylveonPrecio;
		DPS += SylveonProduce * invmejora;
		document.getElementById("DPS").innerHTML = `DPS: ${DPS}`;
		if (SylveonShiny >= 90) {
			SylveonPrecioMultiplicador = Math.random() * (100 + 300);
			SylveonPrecioMultiplicador = Math.round(SylveonPrecioMultiplicador * 0.01) / 10 + 1;
			SylveonPrecio *= SylveonPrecioMultiplicador;
			SylveonPrecio = Math.round(SylveonPrecio);
			document.getElementById("SylveonS").title = `Precio: ${SylveonPrecio} Diegos`;
		}
		if (SylveonShiny <= 89) {
			SylveonPrecioMultiplicador = Math.random() * (100 + 500);
			SylveonPrecioMultiplicador = Math.round(SylveonPrecioMultiplicador * 0.01) / 10 + 1;
			SylveonPrecio *= SylveonPrecioMultiplicador;
			SylveonPrecio = Math.round(SylveonPrecio);
			document.getElementById("SylveonS").title = `Precio: ${SylveonPrecio} Diegos`;
		}
	} else {
		console.log(` No tienes diegos suficientes. \n Necesitas ${Math.round(SylveonPrecio-Diego)}`);
	}

}

function ComprarLuvdisc() {
	if (Diego >= LuvdiscPrecio) {
		LuvdiscInv++;
		Diego -= LuvdiscPrecio;
		gastadototal += LuvdiscPrecio;
		DPS += LuvdiscProduce * invmejora;
		document.getElementById("DPS").innerHTML = `DPS: ${DPS}`;
		if (LuvdiscShiny >= 90) {
			LuvdiscPrecioMultiplicador = Math.random() * (100 + 300);
			LuvdiscPrecioMultiplicador = Math.round(LuvdiscPrecioMultiplicador * 0.01) / 10 + 1;
			LuvdiscPrecio *= LuvdiscPrecioMultiplicador;
			LuvdiscPrecio = Math.round(LuvdiscPrecio);
			document.getElementById("LuvdiscS").title = `Precio: ${LuvdiscPrecio} Diegos`;
		}
		if (LuvdiscShiny <= 89) {
			LuvdiscPrecioMultiplicador = Math.random() * (100 + 500);
			LuvdiscPrecioMultiplicador = Math.round(GarchompPrecioMultiplicador * 0.01) / 10 + 1;
			LuvdiscPrecio *= LuvdiscPrecioMultiplicador;
			LuvdiscPrecio = Math.round(LuvdiscPrecio);
			document.getElementById("LuvdiscS").title = `Precio: ${LuvdiscPrecio} Diegos`;
		}
	} else {
		console.log(` No tienes diegos suficientes. \n Necesitas ${Math.round(LuvdiscPrecio-Diego)}`);
	}

}

function producir() {
	Diego += DPS;
	Total += DPS;
}

function render() {
	document.getElementById("numbers").innerHTML =
	  `Diegos: ${DiegoRedondeo} | DPS: ${DPS}`;
	if (click == 2) {
	  document.getElementById("Mejora1").src = "img/CursorGold.png";
	  document.getElementById("Mejora1").title = "Triplicador de clicks - 1200 Diegos";
	} else if (click == 3) {
	  document.getElementById("Mejora1").src = "img/CursorDiamond.png";
	  document.getElementById("Mejora1").title = "¡Comprado!";
	}
	if (invmejora == 2) {
	  document.getElementById("Mejora2").src = "img/Superball.png";
	  document.getElementById("Mejora2").title = "Triplicador de producción - 2000 Diegos";
	} else if (invmejora == 3) {
	  document.getElementById("Mejora2").src = "img/Ultraball.png";
	  document.getElementById("Mejora2").title = "¡Comprado!";
	}
  }

function title() {
	document.getElementById("title").innerHTML =
		`Diego Clicker - ${DiegoRedondeo} Diegos`;
}

function round() {
	DiegoRedondeo = Math.round(Diego);
	DPSRedondeo = Math.round(DPS);
}

function pokemon() {
	document.getElementById("TyranitarInv").innerHTML =
		`Tyranitar: ${TyranitarInv}`;
	document.getElementById("GarchompInv").innerHTML =
		`Garchomp: ${GarchompInv}`;
	document.getElementById("SylveonInv").innerHTML =
		`Sylveon: ${SylveonInv}`;
	document.getElementById("LuvdiscInv").innerHTML =
		`Luvdisc: ${LuvdiscInv}`;

}

var countDownDate = new Date("Dec 31, 2021 23:59:59").getTime();

var x = setInterval(function() {

	var now = new Date().getTime();

	var distance = countDownDate - now;

	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s<br>Para la v-1.9`;

	if (distance < 0) {
		clearInterval(x);
		document.getElementById("countdown").innerHTML = "v-1.9!!!";
	}
}, 1000);

function close() {
	window.open('', '_parent', '');
	window.close();
}

function commands() {
	var save = prompt(` ---- Diego Clicker (v-1.9) ---- \n\n Pagina 1: Estadísticas (Escribe 'P1') \n Pagina 2: Precios (Escribe 'P2') \n Pagina 3: Producción (Escribe 'P3') \n Pagina 4: Funciones (Escribe 'P4') \n Pagina 5: Shiny/Inverted (Escribe 'P5') \n\n ---- Diego Clicker (v-1.9) ---- `, ``);
	if (save == "P1" || save == "p1" || save == "1")
		alert(` ---- Pagina 1: Estadísticas ---- \n\n Diego = 0; \n DiegoRedondeo = Math.round(Diego); \n DPS = 0; \n DPSRedondeo = Math.round(DPS) \n Total = 0; \n clicktotal = 0; \n gastadototal = 0; `);
	if (save == "P2" || save == "p2" || save == "2")
		alert(` ---- Pagina 2: Precios ---- \n\n TyranitarPrecio = 100; \n GarchompPrecio = 200; \n SylveonPrecio = 300; \n LuvdiscPrecio = 400; \n precioclick1 = 600; \n precioclick2 = 1200; \n precioinv1 = 1000; \n precioinv = 2000;`);
	if (save == "P3" || save == "p3" || save == "3")
		alert(` ---- Pagina 3: Producción ---- \n\n TyranitarProduce = 1; \n GarchompProduce = 2.25; \n SylveonProduce = 3.5; \n LuvdiscProduce = 4.75; \n invmejora = 1; \n click = 1; `);
	if (save == "P4" || save == "p4" || save == "4")
		alert(` ---- Pagina 4: Funciones ---- \n\n onload(); \n clic(); \n producir(); \n win(); \n rngnumber(); \n titlealert(); \n commands(); \n stats();`);
	if (save == "P5" || save == "p5" || save == "5")
		alert(` ---- Pagina 5: Shiny/Inverted ---- \n\n DiegoInverted = Math.random() * (0+ 100); \n TyranitarShiny = Math.random() * (0 + 100); \n GarchompShiny = Math.random() * (0 + 100); \n SylveonShiny = Math.random() * (0 + 100); \n LuvdiscShiny = Math.random() * (0 + 100); `);
}

function stats() {
	var varstats = prompt(` Tiempo: ${cd}d ${ch}h ${cm}m ${cs}s \n Clicks totales: ${clicktotal+1} \n Diegos totales: ${Total} \n Diegos gastados: ${gastadototal}  \n Diegos: ${Diego} \n Tyranitar: ${TyranitarInv} \n Garchomp: ${GarchompInv} \n Sylveon: ${SylveonInv} \n Luvdisc: ${LuvdiscInv} \n Escribe "Guardar" para obtener tu código de guardado`, ``);
	if (varstats == "guardar" || varstats == "GUARDAR" || varstats == "Guardar" || varstats == "gUARDAR" || varstats == "1") {
		save();
	}
}

function save() {
	prompt(`Para cargar tu partida pega este código en la consola [F12]:`, `clicktotal = ${clicktotal}; Total = ${Total}; gastadototal = ${gastadototal}; Diego = ${Diego}; TyranitarInv = ${TyranitarInv}; GarchompInv = ${GarchompInv}; SylveonInv = ${SylveonInv}; LuvdiscInv = ${LuvdiscInv}; TyranitarPrecio = ${TyranitarPrecio}; GarchompPrecio = ${GarchompPrecio}; SylveonPrecio = ${SylveonPrecio}; LuvdiscPrecio = ${LuvdiscPrecio}; click = ${click}; invmejora = ${invmejora}; DiegoInverted = ${DiegoInverted}; TyranitarShiny = ${TyranitarShiny}; GarchompShiny = ${GarchompShiny}; SylveonShiny = ${SylveonShiny}; LuvdiscShiny = ${LuvdiscShiny}; cs = ${cs}; cm = ${cm}; ch = ${ch}; cd = ${cd}; DPS = ${DPS}; onload(); title(); cronometro(); win(); pokemon(); render(); clear(); rngnumber();`);
}

function titlealert() {
	var selection = prompt(` ---- Diego Clicker (v-1.9) ---- \n\n Escribe 'Stats' para ver tus estadísticas \n Escribe 'Commands' para ver la lista de comandos \n\n ---- Diego Clicker (v-1.9) ---- `, ``);
	if (selection == "Stats" || selection == "stats" || selection == "STATS" || selection == "sTATS" || selection == "1") {
		stats();
	}
	if (selection == "Commands" || selection == "commands" || selection == "COMMANDS" || selection == "cOMMANDS" || selection == "2") {
		commands();
	}
}

function win() {
	if (Diego >= 3500 && TyranitarInv >= 5 && GarchompInv >= 5 && SylveonInv >= 5 && LuvdiscInv >= 5 && click >= 3 && invmejora >= 3) {
		document.getElementById("win").innerHTML =
			`¡Diego Clicker!`;
		document.getElementById("win").className =
			`rainbow`;
	}
}

var cs = 0;
var cm = 0;
var ch = 0;
var cd = 0;

function cronometro() {
	cs++;
	if (cs == 60) {
		cs -= 60;
		cm++;
	}
	if (cm == 60) {
		cm -= 60;
		ch++;
	}
	if (ch == 24) {
		ch -= 24;
		cd++;
	}
}

setInterval(function() {
	cronometro();
	win();
	producir();
	title();
}, 1000);

setInterval(function() {
	pokemon();
	render();
	round();
}, 1000 / 60);

function instawin() {
	Diego = 3500; DPS = 172.5;TyranitarInv = 5; GarchompInv = 5; SylveonInv = 5; LuvdiscInv = 5; click = 3; invmejora = 3;
}