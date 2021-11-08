
var now = new Date().getTime();

setInterval(function() {
now =+ new Date().getTime();
document.getElementById("Titulo").innerHTML = "🔥Fuego🔥"
}, 1000);

var SaltoNombres = ["Víctor (...)"]

function SaltoTodo() {
    SaltoNombres = ["Victor (Salto; Saltitos; Salsa; Chachi; ChuperChadich; Calcio Potasico,CaK; Shadiscoteca; Vector Squalo III; Ricostes_Maricortes; Ñadick; Shadick; Xavi; Chino2)"]
    document.getElementById("Salto").title = ""
    document.getElementById("Salto").className = ""
}

// ---------- Cumples ---------- \\

// ----- Io ----- \\

var IoCumple = new Date("Sep 26, 2022 00:00:00").getTime();

var Io = setInterval(function() {

	var Iodistance = IoCumple - now;

	var Iodays = Math.floor(Iodistance / (1000 * 60 * 60 * 24));
	var Iohours = Math.floor((Iodistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var Iominutes = Math.floor((Iodistance % (1000 * 60 * 60)) / (1000 * 60));
	var Ioseconds = Math.floor((Iodistance % (1000 * 60)) / 1000);

	document.getElementById("Io").innerHTML = `Adrián (Pirómano Suicida)<br>${Iodays}d ${Iohours}h ${Iominutes}m ${Ioseconds}s`;

	if (Iodistance < 0) {
		clearInterval(Io);
		document.getElementById("Io").innerHTML = "¡Hoy!";
	}
}, 1000);

// ----- Salto ----- \\

var SaltoCumple = new Date("Dec 12, 2021 00:00:00").getTime();

var Salto = setInterval(function() {

	var Saltodistance = SaltoCumple - now;

	var Saltodays = Math.floor(Saltodistance / (1000 * 60 * 60 * 24));
	var Saltohours = Math.floor((Saltodistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var Saltominutes = Math.floor((Saltodistance % (1000 * 60 * 60)) / (1000 * 60));
	var Saltoseconds = Math.floor((Saltodistance % (1000 * 60)) / 1000);

	document.getElementById("Salto").innerHTML = `${SaltoNombres}<br>${Saltodays}d ${Saltohours}h ${Saltominutes}m ${Saltoseconds}s`;

	if (Saltodistance < 0) {
		clearInterval(Salto);
		document.getElementById("Salto").innerHTML = "¡Hoy!";
	}
}, 1000);

// ----- Cilindro ----- \\

var CilindroCumple = new Date("Ago 12, 2022 00:00:00").getTime();

var Cilindro = setInterval(function() {

	var Cilindrodistance = CilindroCumple - now;

	var Cilindrodays = Math.floor(Cilindrodistance / (1000 * 60 * 60 * 24));
	var Cilindrohours = Math.floor((Cilindrodistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var Cilindrominutes = Math.floor((Cilindrodistance % (1000 * 60 * 60)) / (1000 * 60));
	var Cilindroseconds = Math.floor((Cilindrodistance % (1000 * 60)) / 1000);

	document.getElementById("Cilindro").innerHTML = `${Cilindrodays}d ${Cilindrohours}h ${Cilindrominutes}m ${Cilindroseconds}s`;

	if (Cilindrodistance < 0) {
		clearInterval(Cilindro);
		document.getElementById("Cilindro").innerHTML = "¡Hoy!";
	}
}, 1000);