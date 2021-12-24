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

async function Load() {
	let Loaded = 0;
	function LoadingText() {
		Loaded += 10;
		document.getElementById("LoadedText").innerHTML = `Salto Simulator<br>${Loaded}/100 Loaded`
	}
	await sleep(50);
	document.getElementById("CabezaLoad").src = "img/Cabeza.png";
	LoadingText();
	await sleep(100);
	document.getElementById("TorchicLoad").src = "img/pkmns/Torchic.png";
	LoadingText();
	await sleep(100);
	document.getElementById("CramorantLoad").src = "img/pkmns/Cramorant.png";
	LoadingText();
	await sleep(100);
	document.getElementById("KabutopsLoad").src = "img/pkmns/Kabutops.png";
	LoadingText();
	await sleep(100);
	document.getElementById("CrobatLoad").src = "img/pkmns/Crobat.png";
	LoadingText();
	await sleep(100);
	document.getElementById("ClickAchievements").src = "img/Upgrades/ClickAchievement.png";
	LoadingText();
	await sleep(100);
	document.getElementById("ClickPokemons").src = "img/Upgrades/PokemonAchievement.png";
	LoadingText();
	await sleep(100);
	document.getElementById("AchievementEmojiLeft").src = "img/Achievements.png";
	LoadingText();
	await sleep(100);
	document.getElementById("AchievementEmojiRight").src = "img/Achievements.png";
	LoadingText();
	await sleep(100);
	document.getElementById("PercentajeSales").src = "img/Upgrades/PercentajeSales.png";
	await sleep(250);
	LoadingText();
	await sleep(400);
	document.getElementById("LoadedText").style = "display: none;"
	document.getElementById("LoadingIcon").style = "display: none;"
	await sleep(100);
	document.getElementById("LoadScreen").style = "animation: 2500ms ease 0s 1 normal forwards running Loading;";
	document.getElementById("GameScreen").style = "display: grid;";
	await sleep(1500);
	Loading = +1;
	document.getElementById("LoadScreen").style = "display: none;";
};

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

document.oncontextmenu = function () {
	return false;
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
};

function render1() {
	if (Loading == 0) {
		document.getElementById("title").innerHTML = `Salto Simulator - Loading...`
	} else if (Loading == 1) {
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