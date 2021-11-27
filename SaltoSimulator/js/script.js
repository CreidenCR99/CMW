var Saltos = 0;
var SPS = 0;

function ClickCabeza() {
  Saltos += Click;
}

function render60() {
  document.getElementById("Saltos").innerHTML = `${Math.floor(Saltos)} Saltos`;
  document.getElementById("SPS").innerHTML = `${SPS*10} por segundo`;
  TiendaDatos();
};

function render10() {
  SPS =+ ((TorchicInv / 10) + (CramorantInv * CramorantSPS) + (KabutopsInv * KabutopsSPS)) / 10;
  Saltos += SPS;
}

function render1() {
  document.getElementById("title").innerHTML = `Salto Simulator - ${Math.floor(Saltos)} Saltos`;
  Achievements();
};

setInterval(function () {
  render1();
}, 1000);

setInterval(function () {
  render10();
}, 1000 / 10);

setInterval(function () {
  render60();
}, 1000 / 60);