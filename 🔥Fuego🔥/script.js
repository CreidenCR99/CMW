
var now = new Date().getTime();

setInterval(function() {
now =+ new Date().getTime();
}, 1000);

var SaltoNombres = ["(...)"]

function SaltoApodos() {
    document.getElementById("SaltoApodos").innerHTML = "(Salto; Saltitos; Salsa; Chachi; ChuperChadich; Calcio Potasico,CaK; Shadiscoteca; Vector Squalo III; Ricostes_Maricortes; Ñadick; Shadick; Xavi; Chino2)"
    document.getElementById("SaltoApodos").className = ""
}

function SaltoTodo() {
    SaltoNombres = ["(Salto; Saltitos; Salsa; Chachi; ChuperChadich; Calcio Potasico,CaK; Shadiscoteca; Vector Squalo III; Ricostes_Maricortes; Ñadick; Shadick; Xavi; Chino2)"]
    document.getElementById("Salto(...)").title = ""
    document.getElementById("Salto(...)").className = ""
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

	document.getElementById("Salto").innerHTML = `Víctor <a id="Salto(...)" class="a" title="Click para ver más" onclick="SaltoTodo();">${SaltoNombres}</a><br>${Saltodays}d ${Saltohours}h ${Saltominutes}m ${Saltoseconds}s`;

	if (Saltodistance < 0) {
		clearInterval(Salto);
		document.getElementById("Salto").innerHTML = "¡Hoy!";
	}
}, 1000);

// ----- Cilindro ----- \\

var CilindroCumple = new Date("Aug 15, 2022 00:00:00").getTime();

var Cilindro = setInterval(function() {

	var Cilindrodistance = CilindroCumple - now;

	var Cilindrodays = Math.floor(Cilindrodistance / (1000 * 60 * 60 * 24));
	var Cilindrohours = Math.floor((Cilindrodistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var Cilindrominutes = Math.floor((Cilindrodistance % (1000 * 60 * 60)) / (1000 * 60));
	var Cilindroseconds = Math.floor((Cilindrodistance % (1000 * 60)) / 1000);

	document.getElementById("Cilindro").innerHTML = `Sergio (Chikito Heladero Cilindro)<br>${Cilindrodays}d ${Cilindrohours}h ${Cilindrominutes}m ${Cilindroseconds}s`;

	if (Cilindrodistance < 0) {
		clearInterval(Cilindro);
		document.getElementById("Cilindro").innerHTML = "¡Hoy!";
	}
}, 1000);

// ----- Paula ----- \\

var PaulaCumple = new Date("Nov 27, 2021 00:00:00").getTime();

var Paula = setInterval(function() {

	var Pauladistance = PaulaCumple - now;

	var Pauladays = Math.floor(Pauladistance / (1000 * 60 * 60 * 24));
	var Paulahours = Math.floor((Pauladistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var Paulaminutes = Math.floor((Pauladistance % (1000 * 60 * 60)) / (1000 * 60));
	var Paulaseconds = Math.floor((Pauladistance % (1000 * 60)) / 1000);

	document.getElementById("Paula").innerHTML = `Paula<br>${Pauladays}d ${Paulahours}h ${Paulaminutes}m ${Paulaseconds}s`;

	if (Pauladistance < 0) {
		clearInterval(Paula);
		document.getElementById("Paula").innerHTML = "¡Hoy!";
	}
}, 1000);

// ----- Valeria ----- \\

var ValeriaCumple = new Date("Jul 14, 2022 00:00:00").getTime();

var Valeria = setInterval(function() {

	var Valeriadistance = ValeriaCumple - now;

	var Valeriadays = Math.floor(Valeriadistance / (1000 * 60 * 60 * 24));
	var Valeriahours = Math.floor((Valeriadistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var Valeriaminutes = Math.floor((Valeriadistance % (1000 * 60 * 60)) / (1000 * 60));
	var Valeriaseconds = Math.floor((Valeriadistance % (1000 * 60)) / 1000);

	document.getElementById("Valeria").innerHTML = `Valeria<br>${Valeriadays}d ${Valeriahours}h ${Valeriaminutes}m ${Valeriaseconds}s`;

	if (Valeriadistance < 0) {
		clearInterval(Valeria);
		document.getElementById("Valeria").innerHTML = "¡Hoy!";
	}
}, 1000);

// ----- Almudena ----- \\

var AlmudenaCumple = new Date("Feb 12, 2022 00:00:00").getTime();

var Almudena = setInterval(function() {

	var Almudenadistance = AlmudenaCumple - now;

	var Almudenadays = Math.floor(Almudenadistance / (1000 * 60 * 60 * 24));
	var Almudenahours = Math.floor((Almudenadistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var Almudenaminutes = Math.floor((Almudenadistance % (1000 * 60 * 60)) / (1000 * 60));
	var Almudenaseconds = Math.floor((Almudenadistance % (1000 * 60)) / 1000);

	document.getElementById("Almudena").innerHTML = `Almudena<br>${Almudenadays}d ${Almudenahours}h ${Almudenaminutes}m ${Almudenaseconds}s`;

	if (Almudenadistance < 0) {
		clearInterval(Almudena);
		document.getElementById("Almudena").innerHTML = "¡Hoy!";
	}
}, 1000);