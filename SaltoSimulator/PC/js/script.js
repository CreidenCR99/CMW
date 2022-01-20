var Saltos = 0;
var SPS = 0;
var Click = 0;

function ClickCabeza() {
	Saltos += Click;
	SaltosSiempre += Click;
	PorClick += Click;
	ClickCabezaTotal++;
};

var ClickPokemonsUpgrade = 0;
var ClickAchievementsUpgrade = 0;
var ClickMultiplier = 1;

function Clicks() {
	if (ClickPercentajeAchievementsBuy == 1) {
		ClickAchievementsUpgrade = +(EarnedAchievements / 5);
	};
	if (ClickPercentajePokemonsBuy == 1) {
		ClickPokemonsUpgrade = +((TorchicInv + CramorantInv + KabutopsInv + CrobatInv) / 20);
	};
	if (ClickByFiveBuy == 1) {
		ClickMultiplier =+ 5;
	};
	Click = +((1 + (ClickPokemonsUpgrade + ClickAchievementsUpgrade)) * ClickMultiplier).toFixed(2);
};

var Loading = 0;
var Loaded = 0;

async function Load() {
	document.getElementById("LoadedText").innerHTML = `Salto Simulator<br>${Loaded}/17 Loaded`
	let rng = (Math.floor(Math.random() * (100 - 50)) + 50);
	function LoadingText() {
		Loaded += 1;
		document.getElementById("LoadedText").innerHTML = `Salto Simulator<br>${Loaded}/17 Loaded`
	}
	await sleep(Math.floor(Math.random() * (500 - 250)) + 250);
	document.getElementById("CabezaLoad").src = "img/Cabeza.png";
	LoadingText();
	await sleep(rng);
	document.getElementById("TorchicLoad").src = "img/pkmns/Torchic.png";
	LoadingText();
	await sleep(rng);
	document.getElementById("CramorantLoad").src = "img/pkmns/Cramorant.png";
	LoadingText();
	await sleep(rng);
	document.getElementById("KabutopsLoad").src = "img/pkmns/Kabutops.png";
	LoadingText();
	await sleep(rng);
	document.getElementById("CrobatLoad").src = "img/pkmns/Crobat.png";
	LoadingText();
	await sleep(rng);
	document.getElementById("ClickAchievements").src = "img/Upgrades/ClickAchievement.png";
	LoadingText();
	await sleep(rng);
	document.getElementById("ClickPokemons").src = "img/Upgrades/PokemonAchievement.png";
	LoadingText();
	await sleep(rng);
	document.getElementById("AchievementEmojiLeft").src = "img/Achievements.png";
	LoadingText();
	await sleep(rng);
	document.getElementById("AchievementEmojiRight").src = "img/Achievements.png";
	LoadingText();
	await sleep(Math.floor(Math.random() * (125 - 75)) + 75);
	document.getElementById("PercentajeSales").src = "img/Upgrades/PercentajeSales.png";
	LoadingText();
	await sleep(Math.floor(Math.random() * (250 - 125)) + 125);
	document.getElementById("ClickByFive").src = "img/Upgrades/ByFive.png";
	await sleep(Math.floor(Math.random() * (500 - 250)) + 250);
	LoadingText();
	await sleep(200);
	Loaded += 1;
	Loading += 1;
	await sleep(500);
	document.getElementById("LoadedText").style = "display: none;";
	document.getElementById("LoadingIcon").style = "display: none;";
	await sleep(100);
	document.getElementById("LoadScreen").style = "animation: 2500ms ease 0s 1 normal forwards running Loading;";
	document.getElementById("GameScreen").style = "display: grid;";
	await sleep(1500);
	document.getElementById("LoadScreen").style = "display: none;";
	Loading += 1;
};

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

document.oncontextmenu = function () {
	return false;
};

function Derecha(Seleccion) {
	if(Seleccion == 0) {
		document.getElementById("DerechaSeleccion").style = "display: grid;"
		document.getElementById("Opciones").style = "display: none;"
		document.getElementById("Estadisticas").style = "display: none;"
		document.getElementById("Logros").style = "display: none;"
	}
	else if (Seleccion == 1) {
		document.getElementById("DerechaSeleccion").style = "display: none;"
		document.getElementById("Opciones").style = "display: grid;"
		document.getElementById("Estadisticas").style = "display: none;"
		document.getElementById("Logros").style = "display: none;"
	}
	else if (Seleccion == 2) {
		document.getElementById("DerechaSeleccion").style = "display: none;"
		document.getElementById("Opciones").style = "display: none;"
		document.getElementById("Estadisticas").style = "display: grid;"
		document.getElementById("Logros").style = "display: none;"
	}
	else if (Seleccion == 3) {
		document.getElementById("DerechaSeleccion").style = "display: none;"
		document.getElementById("Opciones").style = "display: none;"
		document.getElementById("Estadisticas").style = "display: none;"
		document.getElementById("Logros").style = "display: grid;"
	}
}

function VersionLong() {
	document.getElementById("VersionShort").style = "display: none;";
	document.getElementById("VersionLong").style = "display: block;";
};

function VersionShort() {
	document.getElementById("VersionLong").style = "display: none;";
	document.getElementById("VersionShort").style = "display: block;";
};


function render60() {
	if (Math.floor(Saltos) == 0) {
		document.getElementById("Saltos").innerHTML = `0 Saltos`;
	} else if (Math.floor(Saltos) == 1) {
		document.getElementById("Saltos").innerHTML = `1 Salto`;
	} else if (Saltos >= 2 && Saltos <= 999) {
		document.getElementById("Saltos").innerHTML = `${Math.floor(Saltos)} Saltos`;
	} else if (Saltos >= 1000 && Saltos <= 999999) {
		document.getElementById("Saltos").innerHTML = `${((Saltos / 1e3)).toFixed(3)} Saltos`;
	} else if (Saltos >= 1000000) {
		document.getElementById("Saltos").innerHTML = `${(Saltos / 1e6).toFixed(3) + "M"} Saltos`;
	}
	TiendaDatos();
};

function render30() {
	if (SPS == 0) {
		document.getElementById("SPS").innerHTML = `0 SPS`;
	} else {
		document.getElementById("SPS").innerHTML = `${SPS} SPS`;
	};
	SPS = +((TorchicInv * TorchicSPS) + (CramorantInv * CramorantSPS) + (KabutopsInv * KabutopsSPS) + (CrobatInv * CrobatSPS)).toFixed(1);
	Saltos += (SPS / 30);
	UpgradesRender();
	Clicks();
	Achievements();
};

function render1() {
	if (Loading == 0 || Loading == 1) {
		document.getElementById("title").innerHTML = `Salto Simulator - Loading...`
	} else if (Loading == 2) {
		if (Math.floor(Saltos) == 0) {
			document.getElementById("title").innerHTML = `Salto Simulator - 0 Saltos`;
		} else if (Math.floor(Saltos) == 1) {
			document.getElementById("title").innerHTML = `Salto Simulator - 1 Salto`;
		} else if (Saltos >= 2 && Saltos <= 999) {
			document.getElementById("title").innerHTML = `Salto Simulator - ${Math.floor(Saltos)} Saltos`;
		} else if (Saltos >= 1000 && Saltos <= 999999) {
			document.getElementById("title").innerHTML = `Salto Simulator - ${(Saltos / 1e3).toFixed(1) + "K"} Saltos`;
		} else if (Saltos >= 1000000) {
			document.getElementById("title").innerHTML = `Salto Simulator - ${(Saltos / 1e6).toFixed(3) + "M"} Saltos`;
		};
	};
	SaltosSiempre += SPS;
	ProducidoTotal += SPS;
	Click = +Click.toFixed(2)
	Stats();
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

Loaded += 1;