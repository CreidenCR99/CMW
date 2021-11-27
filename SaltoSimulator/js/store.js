var TorchicInv = 0;
var TorchicSPS = 0.1;
var TorchicPrecio = 15;

function ComprarTorchic() {
  if (Saltos >= TorchicPrecio) {
    Saltos -= TorchicPrecio;
    TorchicInv += 1;
    TorchicPrecio = +Math.floor(TorchicPrecio + (TorchicPrecio / (20 / 3)));
  } else {
    console.log(`No has saltado suficientes veces!\nNecesitas saltar ${Math.floor(TorchicPrecio-Saltos)} veces mas`);
  };
};

var CramorantInv = 0;
var CramorantSPS = 1;
var CramorantPrecio = 100;

function ComprarCramorant() {
  if (Saltos >= CramorantPrecio) {
    Saltos -= CramorantPrecio;
    CramorantInv += 1;
    CramorantPrecio = +Math.floor(CramorantPrecio + (CramorantPrecio / (20 / 3)));
  } else {
    console.log(`No has saltado suficientes veces!\nNecesitas saltar ${Math.floor(CramorantPrecio-Saltos)} veces mas`);
  };
};

var KabutopsInv = 0;
var KabutopsSPS = 8;
var KabutopsPrecio = 1100;

function ComprarKabutops() {
  if (Saltos >= KabutopsPrecio) {
    Saltos -= KabutopsPrecio;
    KabutopsInv += 1;
    KabutopsPrecio = +Math.floor(KabutopsPrecio + (KabutopsPrecio / (20 / 3)));
  } else {
    console.log(`No has saltado suficientes veces!\nNecesitas saltar ${Math.floor(KabutopsPrecio-Saltos)} veces mas`);
  };
};

function TiendaDatos() {
    document.getElementById("TorchicTotal").innerHTML = TorchicInv;
    document.getElementById("DatosTorchic").innerHTML = `Torchic<br>${TorchicPrecio} saltos<br>${TorchicSPS} SPS`;
    document.getElementById("CramorantTotal").innerHTML = CramorantInv;
    document.getElementById("DatosCramorant").innerHTML = `Cramorant<br>${CramorantPrecio} saltos<br>${CramorantSPS} SPS`;
    document.getElementById("KabutopsTotal").innerHTML = KabutopsInv;
    document.getElementById("DatosKabutops").innerHTML = `Kabutops<br>${KabutopsPrecio} saltos<br>${KabutopsSPS} SPS`;
}

var Click = 1;
var ClickUpgradePrice = 1000;

function clickUpgrade() {
  if(Saltos >= ClickUpgradePrice) {
    Saltos -= ClickUpgradePrice;
    Click += 1;
    ClickUpgradePrice += 1000;
  }
  else {
    console.log("no")
  }
}