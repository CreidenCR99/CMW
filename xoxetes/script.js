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
  document.getElementById("CilindroApodos").innerHTML = "(Chikito; Serdina🐟; Cilindro; b·h; Psicologo de <del>poca</del> confianza)"
  document.getElementById("CilindroApodos").className = ""
  document.getElementById("CilindroApodos").title = ""
}

function DiegoApodos() {
  document.getElementById("DiegoApodos").innerHTML = "(Amigo capullo de Adri; Mismógino, transfóbico, homófobo y racista)"
  document.getElementById("DiegoApodos").className = ""
  document.getElementById("DiegoApodos").title = ""
}

function IoApodos() {
  document.getElementById("IoApodos").innerHTML = "(Pirómano; Suicida; Credenciales; Pato 🦆; Io; Barbie)"
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
  CilindroCumpleChangeApodos = ["(Chikito; Serdina🐟; Cilindro; b·h; Psicologo de <del>poca</del> confianza)"]
  CilindroCumpleClassChange = [""]
  CilindroCumpleTitleChange = [""]
}

var IoCumpleChangeApodos = ["(...)"]
var IoCumpleClassChange = ["a"]
var IoCumpleTitleChange = ["Click para ver más"]

function IoCumpleApodos() {
  IoCumpleChangeApodos = ["(Pirómano; Suicida; Credenciales; Pato 🦆; Io; Barbie)"]
  IoCumpleClassChange = [""]
  IoCumpleTitleChange = [""]
}

// ----- Grupo ----- \\

var GrupoCumple = new Date("Oct 6, 2023 00:00:00").getTime();

var Grupo = setInterval(function () {

  var Grupodistance = GrupoCumple - now;

  var Iodays = Math.floor(Grupodistance / (1000 * 60 * 60 * 24));

  document.getElementById("Grupo").innerHTML = `Grupo (Japi jalogüin)<br><b class="h" id="GrupoFecha">${Iodays}d ${Hours}h ${Minutes}m ${Seconds}s<br>06/10/2021</b>`;

  if (Grupodistance < 0) {
    clearInterval(Grupo);
    document.getElementById("GrupoFecha").innerHTML = "¡Hoy!";
  }
}, 1000);

// ---- Danna ----- \\

var DannaCumple = new Date("Feb 5, 2024 00:00:00").getTime();

var Danna = setInterval(function () {

  var Dannadistance = DannaCumple - now;

  var Dannadays = Math.floor(Dannadistance / (1000 * 60 * 60 * 24));

  document.getElementById("Danna").innerHTML = `Danna (Danno)<br><b class="h" id="DannaFecha">${Dannadays}d ${Hours}h ${Minutes}m ${Seconds}s<br>12/12</b>`;

  if (Dannadistance < 0) {
    clearInterval(Danna);
    document.getElementById("DannaFecha").innerHTML = "¡Hoy!";
  }
}, 1000);

// ----- Almudena ----- \\

var AlmudenaCumple = new Date("Feb 12, 2024 00:00:00").getTime();

var Almudena = setInterval(function () {

  var Almudenadistance = AlmudenaCumple - now;

  var Almudenadays = Math.floor(Almudenadistance / (1000 * 60 * 60 * 24));

  document.getElementById("Almudena").innerHTML = `Almudena (Wructi)<br><b class="h" id="AlmudenaFecha">${Almudenadays}d ${Hours}h ${Minutes}m ${Seconds}s<br>12/02</b>`;

  if (Almudenadistance < 0) {
    clearInterval(Almudena);
    document.getElementById("AlmudenaFecha").innerHTML = "¡Hoy!";
  }
}, 1000);

// ----- Nerea ----- \\

var NereaCumple = new Date("mar 18, 2024 00:00:00").getTime();

var Nerea = setInterval(function () {

  var Nereadistance = NereaCumple - now;

  var Nereadays = Math.floor(Nereadistance / (1000 * 60 * 60 * 24));

  document.getElementById("Nerea").innerHTML = `Nerea (Nintendo)<br><b class="h" id="NereaFecha">${Nereadays}d ${Hours}h ${Minutes}m ${Seconds}s<br>18/03</b>`;

  if (Nereadistance < 0) {
    clearInterval(Nerea);
    document.getElementById("NereaFecha").innerHTML = "¡Hoy!";
  }
}, 1000);

// ----- Valeria ----- \\

var ValeriaCumple = new Date("Jul 14, 2023 00:00:00").getTime();

var Valeria = setInterval(function () {

  var Valeriadistance = ValeriaCumple - now;

  var Valeriadays = Math.floor(Valeriadistance / (1000 * 60 * 60 * 24));

  document.getElementById("Valeria").innerHTML = `Valeria (Minion)<br><b class="h" id="ValeriaFecha">${Valeriadays}d ${Hours}h ${Minutes}m ${Seconds}s<br>14/07</b>`;

  if (Valeriadistance < 0) {
    clearInterval(Valeria);
    document.getElementById("ValeriaFecha").innerHTML = "¡Hoy!";
  }
}, 1000);

// ----- Jairo ----- \\

var JairoCumple = new Date("Jul 14, 2023 00:00:00").getTime();

var Jairo = setInterval(function () {

  var Jairodistance = JairoCumple - now;

  var Jairodays = Math.floor(Jairodistance / (1000 * 60 * 60 * 24));

  document.getElementById("Jairo").innerHTML = `Jairo (Jairuchi-chan)<br><b class="h" id="JairoFecha">${Jairodays}d ${Hours}h ${Minutes}m ${Seconds}s<br>14/07</b>`;

  if (Jairodistance < 0) {
    clearInterval(Jairo);
    document.getElementById("JairoFecha").innerHTML = "¡Hoy!";
  }
}, 1000);

// ----- Deivid ----- \\

var DeividCumple = new Date("Jul 20, 2023 00:00:00").getTime();

var Deivid = setInterval(function () {

  var Deividdistance = DeividCumple - now;

  var Deividdays = Math.floor(Deividdistance / (1000 * 60 * 60 * 24));

  document.getElementById("Deivid").innerHTML = `David (Deivid)<br><b class="h" id="DeividFecha">${Deividdays}d ${Hours}h ${Minutes}m ${Seconds}s<br>20/07</b>`;

  if (Deividdistance < 0) {
    clearInterval(Deivid);
    document.getElementById("DeividFecha").innerHTML = "¡Hoy!";
  }
}, 1000);

// ----- Sofia ----- \\

var SofiaCumple = new Date("Aug 7, 2023 00:00:00").getTime();

var Sofia = setInterval(function () {

  var Sofiadistance = SofiaCumple - now;

  var Sofiadays = Math.floor(Sofiadistance / (1000 * 60 * 60 * 24));

  document.getElementById("Sofia").innerHTML = `Sofia<br><b class="h" id="SofiaFecha">${Sofiadays}d ${Hours}h ${Minutes}m ${Seconds}s<br>07/08</b>`;

  if (Sofiadistance < 0) {
    clearInterval(Olaya);
    document.getElementById("SofiaFecha").innerHTML = "¡Hoy!";
  }
}, 1000);

// ----- Cilindro ----- \\

var CilindroCumple = new Date("Aug 12, 2023 00:00:00").getTime();

var Cilindro = setInterval(function () {

  var Cilindrodistance = CilindroCumple - now;

  var Cilindrodays = Math.floor(Cilindrodistance / (1000 * 60 * 60 * 24));

  document.getElementById("Cilindro").innerHTML = `Sergio <a class="${CilindroCumpleClassChange}" title="${CilindroCumpleTitleChange}" onclick="CilindroCumpleApodos();">${CilindroCumpleChangeApodos}</a><br><b class="h" id="CilindroFecha">${Cilindrodays}d ${Hours}h ${Minutes}m ${Seconds}s<br>12/08</b>`;

  if (Cilindrodistance < 0) {
    clearInterval(Cilindro);
    document.getElementById("CilindroFecha").innerHTML = "¡Hoy!";
  }
}, 1000);

// ----- Leo ----- \\

var LeoCumple = new Date("Aug 17, 2023 00:00:00").getTime();

var Leo = setInterval(function () {

  var Leodistance = LeoCumple - now;

  var Leodays = Math.floor(Leodistance / (1000 * 60 * 60 * 24));

  document.getElementById("Leo").innerHTML = `Leo<br><b class="h" id="LeoFecha">${Leodays}d ${Hours}h ${Minutes}m ${Seconds}s<br>17/08</b>`;

  if (Leodistance < 0) {
    clearInterval(Leo);
    document.getElementById("LeoFecha").innerHTML = "¡Hoy!";
  }
}, 1000);

// ----- Davo ----- \\

var DavoCumple = new Date("Sep 3, 2023 00:00:00").getTime();

var Davo = setInterval(function () {

  var Davodistance = DavoCumple - now;

  var Davodays = Math.floor(Davodistance / (1000 * 60 * 60 * 24));

  document.getElementById("Davo").innerHTML = `David (Davo, Monteanes)<br><b class="h" id="DavoFecha">${Davodays}d ${Hours}h ${Minutes}m ${Seconds}s<br>03/09</b>`;

  if (Davodistance < 0) {
    clearInterval(Davo);
    document.getElementById("DavoFecha").innerHTML = "¡Hoy!";
  }
}, 1000);

// ----- Olaya ----- \\

var OlayaCumple = new Date("Sep 6, 2023 00:00:00").getTime();

var Olaya = setInterval(function () {

  var Olayadistance = OlayaCumple - now;

  var Olayadays = Math.floor(Olayadistance / (1000 * 60 * 60 * 24));

  document.getElementById("Olaya").innerHTML = `Olaya (Ciervo; Mamii :D)<br><b class="h" id="OlayaFecha">${Olayadays}d ${Hours}h ${Minutes}m ${Seconds}s<br>6/9</b>`;

  if (Olayadistance < 0) {
    clearInterval(Olaya);
    document.getElementById("OlayaFecha").innerHTML = "¡Hoy!";
  }
}, 1000);

// ----- Io ----- \\

var IoCumple = new Date("Sep 26, 2023 00:00:00").getTime();

var Io = setInterval(function () {

  var Iodistance = IoCumple - now;

  var Iodays = Math.floor(Iodistance / (1000 * 60 * 60 * 24));

  document.getElementById("Io").innerHTML = `Adrián <a class="${IoCumpleClassChange}" title="${IoCumpleTitleChange}" onclick="IoCumpleApodos();">${IoCumpleChangeApodos}</a><br><b class="h" id="IoFecha">${Iodays}d ${Hours}h ${Minutes}m ${Seconds}s<br>26/09</b>`;

  if (Iodistance < 0) {
    clearInterval(Io);
    document.getElementById("IoFecha").innerHTML = "¡Hoy!";
  }
}, 1000);

// ----- Sara ----- \\

var SaraCumple = new Date("Oct 9, 2023 00:00:00").getTime();

var Sara = setInterval(function () {

  var Saradistance = SaraCumple - now;

  var Saradays = Math.floor(Saradistance / (1000 * 60 * 60 * 24));

  document.getElementById("Sara").innerHTML = `Sara (Runa)<br><b class="h" id="SaraFecha">${Saradays}d ${Hours}h ${Minutes}m ${Seconds}s<br>09/10</b>`;

  if (Saradistance < 0) {
    clearInterval(Sara);
    document.getElementById("SaraFecha").innerHTML = "¡Hoy!";
  }
}, 1000);

// ----- Paula ----- \\

var PaulaCumple = new Date("Nov 27, 2023 00:00:00").getTime();

var Paula = setInterval(function () {

  var Pauladistance = PaulaCumple - now;

  var Pauladays = Math.floor(Pauladistance / (1000 * 60 * 60 * 24));

  document.getElementById("Paula").innerHTML = `Paula (Pau; Paucopata; Capitane del ship; 🐱)<br><b class="h" id="PaulaFecha">${Pauladays}d ${Hours}h ${Minutes}m ${Seconds}s<br>27/11</b>`;

  if (Pauladistance < 0) {
    clearInterval(Paula);
    document.getElementById("PaulaFecha").innerHTML = "¡Hoy!";
  }
}, 1000);

// ----- Salto ----- \\

var SaltoCumple = new Date("Dec 12, 2023 00:00:00").getTime();

var Salto = setInterval(function () {

  var Saltodistance = SaltoCumple - now;

  var Saltodays = Math.floor(Saltodistance / (1000 * 60 * 60 * 24));

  document.getElementById("Salto").innerHTML = `Víctor <a class="${SaltoCumpleClassChange}" title="${SaltoCumpleTitleChange}" onclick="SaltoCumpleApodos();">${SaltoCumpleChangeApodos}</a><br><b class="h" id="SaltoFecha">${Saltodays}d ${Hours}h ${Minutes}m ${Seconds}s<br>Todos los dias (11/12)</b>`;

  if (Saltodistance < 0) {
    clearInterval(Salto);
    document.getElementById("SaltoFecha").innerHTML = "¡Hoy!";
  }
}, 1000);

// ----- Diego ----- \\

var DiegoCumple = new Date("Dec 26, 2023 00:00:00").getTime();

var Diego = setInterval(function () {

  var Diegodistance = DiegoCumple - now;

  var Diegodays = Math.floor(Diegodistance / (1000 * 60 * 60 * 24));

  document.getElementById("Diego").innerHTML = `Diego (Juan)<br><b class="h" id="DiegoFecha">${Diegodays}d ${Hours}h ${Minutes}m ${Seconds}s<br>26/12</b>`;

  if (Diegodistance < 0) {
    clearInterval(Diego);
    document.getElementById("DiegoFecha").innerHTML = "¡Hoy!";
  }
}, 1000);

/////////////////////////////////////

// ----- Nadine ----- \\

var NadineCumple = new Date("Jul 14, 2023 00:00:00").getTime();

var Nadine = setInterval(function () {

  var Nadinedistance = NadineCumple - now;

  var Nadinedays = Math.floor(Nadinedistance / (1000 * 60 * 60 * 24));

  document.getElementById("Nadine").innerHTML = `Nadine<br><b class="h" id="NadineFecha">${Nadinedays}d ${Hours}h ${Minutes}m ${Seconds}s<br>NaN</b>`;

  if (Nadinedistance < 0) {
    clearInterval(Nadine);
    document.getElementById("NadineFecha").innerHTML = "¡Hoy!";
  }
}, 1000);

// ----- Guille ----- \\

var GuilleCumple = new Date("Jul 14, 2023 00:00:00").getTime();

var Guille = setInterval(function () {

  var Guilledistance = GuilleCumple - now;

  var Guilledays = Math.floor(Guilledistance / (1000 * 60 * 60 * 24));

  document.getElementById("Guille").innerHTML = `Guille<br><b class="h" id="GuilleFecha">${Guilledays}d ${Hours}h ${Minutes}m ${Seconds}s<br>NaN</b>`;

  if (Guilledistance < 0) {
    clearInterval(Guille);
    document.getElementById("GuilleFecha").innerHTML = "¡Hoy!";
  }
}, 1000);