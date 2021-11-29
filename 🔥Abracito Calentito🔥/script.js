// ---------- Divs ---------- \\

function Himno() {
  document.getElementById("Himno").style= "display: block;"
  document.getElementById("h2Himno").style = "cursor: default;"
  document.getElementById("h2Himno").title = "Nuestro himno"
}

function Logo() {
  document.getElementById("Logo").style= "display: block;"
  document.getElementById("h2Logo").style = "cursor: default;"
  document.getElementById("h2Logo").title = "Nuestra imagen del grupo"
}

function Frases() {
  document.getElementById("Frases").style = "display: block;"
  document.getElementById("h2Frases").style = "cursor: default;"
  document.getElementById("h2Frases").title = "Frases random"
}

function Cumples() {
  document.getElementById("Cumples").style = "display: block;"
  document.getElementById("h2Cumples").style = "cursor: default;"
  document.getElementById("h2Cumples").title = "Calendario de cumpleaños"
}

// ---------- Frases ---------- \\

function SaltoApodos() {
  document.getElementById("SaltoApodos").innerHTML = "(Salto; Saltitos; SuperSalsa; Chachi; ChuperChadich; Calcio Potasico,CaK; Shadiscoteca; Vector Squalo III; Ricostes_Maricortes; Ñadik; Shadick; Xavi; Chino2; ViceTHOR; Vitrocerámica; Shadisco; SuperLopez; Viti; El pibe de los 100 subs)"
  document.getElementById("SaltoApodos").className = ""
  document.getElementById("SaltoApodos").title = ""
}

function CilindroApodos() {
  document.getElementById("CilindroApodos").innerHTML = "(Chikito; Heladero; Cilindro; b·h; Psicologo de <del>poca</del> confianza)"
  document.getElementById("CilindroApodos").className = ""
  document.getElementById("CilindroApodos").title = ""
}

function DiegoApodos() {
  document.getElementById("DiegoApodos").innerHTML = "(Amigo capullo de Adri; Mismógino, transfóbico, homófobo y racista)"
  document.getElementById("DiegoApodos").className = ""
  document.getElementById("DiegoApodos").title = ""
}

function IoApodos() {
  document.getElementById("IoApodos").innerHTML = "(Pirómano; Suicida; Credenciales; Pato; Io)"
  document.getElementById("IoApodos").className = ""
  document.getElementById("IoApodos").title = ""
}

// ---------- Cumples ---------- \\

// ------- General ------- \\

var Hours = 0;
var Minutes = 0;
var Seconds = 0;
var distance = 0;

var now = new Date().getTime();

setInterval(function () {
  now = +new Date().getTime();
}, 1000);

var HMS = new Date("Jan 1, 3000 00:00:00").getTime();

var HMSFunction = setInterval(function () {

  var distance = HMS - now;

  Hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  Minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  Seconds = Math.floor((distance % (1000 * 60)) / 1000);

}, 1000);

// ------- Apodos ------- \\

var SaltoCumpleChangeApodos = ["(...)"]
var SaltoCumpleClassChange = ["a"]
var SaltoCumpleTitleChange = ["Click para ver más"]

function SaltoCumpleApodos() {
  SaltoCumpleChangeApodos = ["(Salto; Saltitos; SuperSalsa; Chachi; ChuperChadich; Calcio Potasico,CaK; Shadiscoteca; Vector Squalo III; Ricostes_Maricortes; Ñadik; Shadick; Xavi; Chino2; ViceTHOR; Vitrocerámica; Shadisco; SuperLopez; Viti; El pibe de los 100 subs)"]
  SaltoCumpleClassChange = [""]
  SaltoCumpleTitleChange = [""]
}

var CilindroCumpleChangeApodos = ["(...)"]
var CilindroCumpleClassChange = ["a"]
var CilindroCumpleTitleChange = ["Click para ver más"]

function CilindroCumpleApodos() {
  CilindroCumpleChangeApodos = ["(Chikito; Heladero; Cilindro; b·h; Psicologo de <del>poca</del> confianza)"]
  CilindroCumpleClassChange = [""]
  CilindroCumpleTitleChange = [""]
}

var IoCumpleChangeApodos = ["(...)"]
var IoCumpleClassChange = ["a"]
var IoCumpleTitleChange = ["Click para ver más"]

function IoCumpleApodos() {
  IoCumpleChangeApodos = ["(Pirómano; Suicida; Credenciales; Pato; Io)"]
  IoCumpleClassChange = [""]
  IoCumpleTitleChange = [""]
}

// ----- Grupo ----- \\

var GrupoCumple = new Date("Oct 6, 2022 00:00:00").getTime();

var Grupo = setInterval(function () {

  var Grupodistance = GrupoCumple - now;

  var Iodays = Math.floor(Grupodistance / (1000 * 60 * 60 * 24));

  document.getElementById("Grupo").innerHTML = `Grupo (Japi jalogüin)<br>${Iodays}d ${Hours}h ${Minutes}m ${Seconds}s<br>6/10`;

  if (Grupodistance < 0) {
    clearInterval(Grupo);
    document.getElementById("Grupo").innerHTML = "¡Hoy!";
  }
}, 1000);

// ----- Io ----- \\

var IoCumple = new Date("Sep 26, 2022 00:00:00").getTime();

var Io = setInterval(function () {

  var Iodistance = IoCumple - now;

  var Iodays = Math.floor(Iodistance / (1000 * 60 * 60 * 24));

  document.getElementById("Io").innerHTML = `Adrián <a class="${IoCumpleClassChange}" title="${IoCumpleTitleChange}" onclick="IoCumpleApodos();">${IoCumpleChangeApodos}</a><br>${Iodays}d ${Hours}h ${Minutes}m ${Seconds}s<br>26/9`;

  if (Iodistance < 0) {
    clearInterval(Io);
    document.getElementById("Io").innerHTML = "¡Hoy!";
  }
}, 1000);

// ----- Salto ----- \\

var SaltoCumple = new Date("Dec 12, 2021 00:00:00").getTime();

var Salto = setInterval(function () {

  var Saltodistance = SaltoCumple - now;

  var Saltodays = Math.floor(Saltodistance / (1000 * 60 * 60 * 24));

  document.getElementById("Salto").innerHTML = `Víctor <a class="${SaltoCumpleClassChange}" title="${SaltoCumpleTitleChange}" onclick="SaltoCumpleApodos();">${SaltoCumpleChangeApodos}</a><br>${Saltodays}d ${Hours}h ${Minutes}m ${Seconds}s<br>11/12`;

  if (Saltodistance < 0) {
    clearInterval(Salto);
    document.getElementById("SaltoFecha").innerHTML = "¡Hoy!";
  }
}, 1000);

// ----- Cilindro ----- \\

var CilindroCumple = new Date("Aug 12, 2022 00:00:00").getTime();

var Cilindro = setInterval(function () {

  var Cilindrodistance = CilindroCumple - now;

  var Cilindrodays = Math.floor(Cilindrodistance / (1000 * 60 * 60 * 24));

  document.getElementById("Cilindro").innerHTML = `Sergio <a class="${CilindroCumpleClassChange}" title="${CilindroCumpleTitleChange}" onclick="CilindroCumpleApodos();">${CilindroCumpleChangeApodos}</a><br><b class="h3" id="CilindroFecha">${Cilindrodays}d ${Hours}h ${Minutes}m ${Seconds}s<br>12/8</b>`;

  if (Cilindrodistance < 0) {
    clearInterval(Cilindro);
    document.getElementById("CilindroFecha").innerHTML = "¡Hoy!";
  }
}, 1000);

// ----- Paula ----- \\

var PaulaCumple = new Date("Nov 27, 2022 00:00:00").getTime();

var Paula = setInterval(function () {

  var Pauladistance = PaulaCumple - now;

  var Pauladays = Math.floor(Pauladistance / (1000 * 60 * 60 * 24));

  document.getElementById("Paula").innerHTML = `Paula (Capitana del ship)<br><b class="h3" id="PaulaFecha">${Pauladays}d ${Hours}h ${Minutes}m ${Seconds}s<br>27/11</b>`;

  if (Pauladistance < 0) {
    clearInterval(Paula);
    document.getElementById("PaulaFecha").innerHTML = "¡Hoy!";
  }
}, 1000);

// ----- Valeria ----- \\

var ValeriaCumple = new Date("Jul 14, 2022 00:00:00").getTime();

var Valeria = setInterval(function () {

  var Valeriadistance = ValeriaCumple - now;

  var Valeriadays = Math.floor(Valeriadistance / (1000 * 60 * 60 * 24));

  document.getElementById("Valeria").innerHTML = `Valeria<br>${Valeriadays}d ${Hours}h ${Minutes}m ${Seconds}s<br>14/7`;

  if (Valeriadistance < 0) {
    clearInterval(Valeria);
    document.getElementById("ValeriaFecha").innerHTML = "¡Hoy!";
  }
}, 1000);

// ----- Almudena ----- \\

var AlmudenaCumple = new Date("Feb 12, 2022 00:00:00").getTime();

var Almudena = setInterval(function () {

  var Almudenadistance = AlmudenaCumple - now;

  var Almudenadays = Math.floor(Almudenadistance / (1000 * 60 * 60 * 24));

  document.getElementById("Almudena").innerHTML = `Almudena<br>${Almudenadays}d ${Hours}h ${Minutes}m ${Seconds}s<br>12/2`;

  if (Almudenadistance < 0) {
    clearInterval(Almudena);
    document.getElementById("AlmudenaFecha").innerHTML = "¡Hoy!";
  }
}, 1000);

// ----- Sergio ----- \\

var SergioCumple = new Date("Feb 10, 2022 00:00:00").getTime();

var Almudena = setInterval(function () {

  var Sergiodistance = SergioCumple - now;

  var Sergiodays = Math.floor(Sergiodistance / (1000 * 60 * 60 * 24));

  document.getElementById("Sergio").innerHTML = `Sergio (Casquete; Papa)<br>${Sergiodays}d ${Hours}h ${Minutes}m ${Seconds}s<br>10/2`;

  if (Sergiodistance < 0) {
    clearInterval(Sergio);
    document.getElementById("SergioFecha").innerHTML = "¡Hoy!";
  }
}, 1000);

// ----- Nel ----- \\

var NelCumple = new Date("Dec 18, 2021 00:00:00").getTime();

var Nel = setInterval(function () {

  var Neldistance = NelCumple - now;

  var Neldays = Math.floor(Neldistance / (1000 * 60 * 60 * 24));

  document.getElementById("Nel").innerHTML = `Nel (Nelini; Pranket; Nel Caprichoso)<br>${Neldays}d ${Hours}h ${Minutes}m ${Seconds}s<br>18/12`;

  if (Neldistance < 0) {
    clearInterval(Nel);
    document.getElementById("NelFecha").innerHTML = "¡Hoy!";
  }
}, 1000);

// ----- Olaya ----- \\

var OlayaCumple = new Date("Sep 6, 2022 00:00:00").getTime();

var Olaya = setInterval(function () {

  var Olayadistance = OlayaCumple - now;

  var Olayadays = Math.floor(Olayadistance / (1000 * 60 * 60 * 24));

  document.getElementById("Olaya").innerHTML = `Olaya (La de los audios)<br><b class="h3" id="OlayaFecha">${Olayadays}d ${Hours}h ${Minutes}m ${Seconds}s<br>6/9</b>`;

  if (Olayadistance < 0) {
    clearInterval(Olaya);
    document.getElementById("OlayaFecha").innerHTML = "¡Hoy!";
  }
}, 1000);