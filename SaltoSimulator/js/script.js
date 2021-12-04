var Saltos = 0;
var SPS = 0;

function ClickCabeza() {
  Saltos += Click;
  SaltosSiempre += Click;
  ClickCabezaTotal++;
};

function render60() {
  if (Math.floor(Saltos) == 1) {
    document.getElementById("Saltos").innerHTML = `1 Salto`;
  } else {
    document.getElementById("Saltos").innerHTML = `${Math.floor(Saltos)} Saltos`;
  };
  if (SPS == 0) {
    document.getElementById("SPS").innerHTML = `0 por segundo`;
  } else {
    document.getElementById("SPS").innerHTML = `${(SPS)} por segundo`;
  };
  TiendaDatos();
};

function render10() {
  SPS = +((TorchicInv * TorchicSPS) + (CramorantInv * CramorantSPS) + (KabutopsInv * KabutopsSPS) + (CrobatInv * CrobatSPS)).toFixed(1);
  Saltos += (SPS / 10);
  SaltosSiempre += (SPS / 10);
  Achievements();
};

function render1() {
  if (Math.floor(Saltos) == 1) {
    document.getElementById("title").innerHTML = `Salto Simulator - 1 Salto`;
  } else {
    document.getElementById("title").innerHTML = `Salto Simulator - ${Math.floor(Saltos)} Saltos`;
  }
};

function render025() {
  Estadisticas();
}

setInterval(function () {
  render025();
}, 1000 * 0.25);

setInterval(function () {
  render1();
}, 1000);

setInterval(function () {
  render10();
}, 1000 / 10);

setInterval(function () {
  render60();
}, 1000 / 60);