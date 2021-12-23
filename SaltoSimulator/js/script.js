var Saltos = 0;
var SPS = 0;

function ClickCabeza() {
	Saltos += Click;
	SaltosSiempre += Click;
	PorClick += Click;
	ClickCabezaTotal++;
};

var ClickPokemonsUpgrade = 0;
var ClickAchievementsUpgrade = 0;

function Clicks() {
	if (ClickPercentajePokemonsBuy == 1) {
		ClickPokemonsUpgrade = +(TorchicInv + CramorantInv + KabutopsInv + CrobatInv) / 20
	};
	if (ClickPercentajeAchievementsBuy == 1) {
		ClickAchievementsUpgrade = +(EarnedAchievements / 5)
	};
	Click = +1 + (ClickPokemonsUpgrade + ClickAchievementsUpgrade)
};

function render60() {
	if (Math.floor(Saltos) == 0) {
		document.getElementById("Saltos").innerHTML = `0 Saltos`;
	} else if (Math.floor(Saltos) == 1) {
		document.getElementById("Saltos").innerHTML = `1 Salto`;
	} else if (Saltos >= 2 && Saltos <= 999) {
		document.getElementById("Saltos").innerHTML = `${Math.floor(Saltos)} Saltos`;
	} else if (Saltos >= 1000 && Saltos <= 999999) {
		document.getElementById("Saltos").innerHTML = `${((Saltos / 1e3)).toFixed(3)} Saltos`
	} else if (Saltos >= 1000000) {
		document.getElementById("Saltos").innerHTML = `${(Saltos / 1e6).toFixed(3) + "M"} Saltos`
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

	if (Math.floor(Saltos) == 0) {
		document.getElementById("title").innerHTML = `Salto Simulator - 0 Saltos`;
	} else if (Math.floor(Saltos) == 1) {
		document.getElementById("title").innerHTML = `Salto Simulator - 1 Salto`;
	} else if (Saltos >= 2 && Saltos <= 999) {
		document.getElementById("title").innerHTML = `Salto Simulator - ${Math.floor(Saltos)} Saltos`;
	} else if (Saltos >= 1000 && Saltos <= 999999) {
		document.getElementById("title").innerHTML = `Salto Simulator - ${(Saltos / 1e3).toFixed(3)} Saltos`
	} else if (Saltos >= 1000000) {
		document.getElementById("title").innerHTML = `Salto Simulator - ${(Saltos / 1e6).toFixed(3) + "M"} Saltos`
	};

	SaltosSiempre += SPS;
	ProducidoTotal += SPS;
	Click = +Click.toFixed(2)
	Stats();
	Achievements();
};

function Load() {
	document.getElementById("CabezaLoad").src = "img/Cabeza.png"
	document.getElementById("TorchicLoad").src = "img/pkmns/Torchic.png"
	document.getElementById("CramorantLoad").src = "img/pkmns/Cramorant.png"
	document.getElementById("KabutopsLoad").src = "img/pkmns/Kabutops.png"
	document.getElementById("CrobatLoad").src = "img/pkmns/Crobat.png"
	document.getElementById("ClickAchievements").src = "img/Upgrades/ClickAchievement.png"
	document.getElementById("ClickPokemons").src = "img/Upgrades/PokemonAchievement.png"
	document.getElementById("AchievementEmojiLeft").src = "img/Achievements.png"
	document.getElementById("AchievementEmojiRight").src = "img/Achievements.png"
	document.getElementById("PercentajeSales").src = "img/Upgrades/PercentajeSales.png"
	setTimeout(() => {
		document.getElementById("body").style = "animation: 2.5s ease 0s 1 normal forwards running Loading;"
		setTimeout(() => {
			document.getElementById("GameScreen").style = "display: grid;";
		}, 250);
	}, 2500);
}

document.oncontextmenu = function () {
	return false
}

setInterval(function () {
	render1();
}, 1000);

setInterval(function () {
	render30();
}, 1000 / 30);

setInterval(function () {
	render60();
}, 1000 / 60);