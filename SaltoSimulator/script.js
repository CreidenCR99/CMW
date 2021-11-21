var Saltos = 0;
var SaltosPantalla = Saltos;
var SPS = 0;
var Click = 1;
var ClickTotal = 0;
var ClickWeb = 0;

function ClickCabeza() {
    Saltos += Click;
}

var TorchicInv = 0;
var TorchicSPS = 1;
var TorchicPrecio = 15;

function ComprarTorchic() {
  if (Saltos >= TorchicPrecio) {
    Saltos -= TorchicPrecio;
    TorchicInv += 1;
    SPS += TorchicSPS;
    TorchicPrecio =+ Math.floor(TorchicPrecio + (TorchicPrecio / (20 / 3)));
  } else {
      console.log("no");
  };
};

var CramorantInv = 0;
var CramorantSPS = 3;
var CramorantPrecio = 100;

function ComprarCramorant() {
  if (Saltos >= CramorantPrecio) {
    Saltos -= CramorantPrecio;
    CramorantInv += 1;
    SPS += CramorantSPS;
    CramorantPrecio =+ Math.floor(CramorantPrecio + (CramorantPrecio / (20 / 3)));
  } else {
      console.log("no");
  };
};

var KabutopsInv = 0;
var KabutopsSPS = 8;
var KabutopsPrecio = 1100;

function ComprarKabutops() {
  if (Saltos >= KabutopsPrecio) {
    Saltos -= KabutopsPrecio;
    KabutopsInv += 1;
    SPS += KabutopsSPS;
    KabutopsPrecio =+ Math.floor(KabutopsPrecio + (KabutopsPrecio / (20 / 3)));
  } else {
      console.log("no");
  };
};

function render60() {
    SaltosPantalla = Math.floor(Saltos)
    document.getElementById("Saltos").innerHTML = `${SaltosPantalla} Saltos`;
    document.getElementById("SPS").innerHTML = `${SPS} por segundo`;
    document.getElementById("TorchicTotal").innerHTML = TorchicInv;
    document.getElementById("DatosTorchic").innerHTML = `Torchic<br>${TorchicPrecio} saltos<br>${TorchicSPS} SPS`;
    document.getElementById("CramorantTotal").innerHTML = CramorantInv;
    document.getElementById("DatosCramorant").innerHTML = `Cramorant<br>${CramorantPrecio} saltos<br>${CramorantSPS} SPS`;
    document.getElementById("KabutopsTotal").innerHTML = KabutopsInv;
    document.getElementById("DatosKabutops").innerHTML = `Kabutops<br>${KabutopsPrecio} saltos<br>${KabutopsSPS} SPS`;
};

function render1() {
    document.getElementById("title").innerHTML = `Salto Simulator - ${Saltos} Saltos`;
    Saltos += SPS;
};

setInterval(function() {
    render1();
}, 1000);

setInterval(function() {
	render60();
}, 1000 / 60);