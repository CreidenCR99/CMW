var Saltos = 0;
var SPS = 0;

function ClickCabeza() {
  Saltos += Click;
}

function render60() {
  Saltos += SPS
  document.getElementById("Saltos").innerHTML = `${Math.floor(Saltos)} Saltos`;
  document.getElementById("SPS").innerHTML = `${SPS*30} por segundo`;
  TiendaDatos();
};

function render30() {
  SPS =+ ((TorchicInv / 10) + (CramorantInv * CramorantSPS) + (KabutopsInv * KabutopsSPS)) / 30
}

function render1() {
  document.getElementById("title").innerHTML = `Salto Simulator - ${Math.floor(Saltos)} Saltos`;
  Achievements();
};

setInterval(function () {
  render1();
}, 1000);

setInterval(function () {
  render30();
}, 1000 / 30);

setInterval(function () {
  render60();
}, 1000 / 60);