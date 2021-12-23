var TorchicInv = 0;
var TorchicSPS = 0.1;
var TorchicPrecio = 15;

function ComprarTorchic() {
	if (Saltos >= TorchicPrecio) {
		Saltos -= TorchicPrecio;
		GastadoTotal += TorchicPrecio;
		TorchicInv += 1;
		TorchicPrecio =+ Math.floor((TorchicPrecio + (TorchicPrecio / (41 / 6)))).toFixed(0);
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
		GastadoTotal += CramorantPrecio;
		CramorantInv += 1;
		CramorantPrecio =+ Math.floor((CramorantPrecio + (CramorantPrecio / (41 / 6)))).toFixed(0);
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
		GastadoTotal += KabutopsPrecio;
		KabutopsInv += 1;
		KabutopsPrecio =+ Math.floor((KabutopsPrecio + (KabutopsPrecio / (41 / 6)))).toFixed(0);
	} else {
		console.log(`No has saltado suficientes veces!\nNecesitas saltar ${Math.floor(KabutopsPrecio-Saltos)} veces mas`);
	};
};

var CrobatInv = 0;
var CrobatSPS = 47;
var CrobatPrecio = 12000;

function ComprarCrobat() {
	if (Saltos >= CrobatPrecio) {
		Saltos -= CrobatPrecio;
		GastadoTotal += CrobatPrecio;
		CrobatInv += 1;
		CrobatPrecio =+ Math.floor((CrobatPrecio + (CrobatPrecio / (41 / 6)))).toFixed(0);
	} else {
		console.log(`No has saltado suficientes veces!\nNecesitas saltar ${Math.floor(CrobatPrecio-Saltos)} veces mas`);
	};
};

function TiendaDatos() {
	document.getElementById("TorchicTotal").innerHTML = TorchicInv;
	document.getElementById("DatosTorchic").innerHTML = `Torchic<br>${TorchicPrecio} saltos<br>${TorchicSPS} SPS`;
	document.getElementById("CramorantTotal").innerHTML = CramorantInv;
	document.getElementById("DatosCramorant").innerHTML = `Cramorant<br>${CramorantPrecio} saltos<br>${CramorantSPS} SPS`;
	document.getElementById("KabutopsTotal").innerHTML = KabutopsInv;
	document.getElementById("DatosKabutops").innerHTML = `Kabutops<br>${KabutopsPrecio} saltos<br>${KabutopsSPS} SPS`;
	document.getElementById("CrobatTotal").innerHTML = CrobatInv;
	document.getElementById("DatosCrobat").innerHTML = `Crobat<br>${CrobatPrecio} saltos<br>${CrobatSPS} SPS`;
}

var Click = 1;
var ClickUpgradePrice = 1000;

function clickUpgrade() {
	if (Saltos >= ClickUpgradePrice) {
		Saltos -= ClickUpgradePrice;
		GastadoTotal += ClickUpgradePrice;
		Click += 1;
		ClickUpgradePrice += 1000;
	} else {
		console.log("no")
	}
}

var PercentajeSalePrice = 500;
var PercentajeSaleBuy = 0;
var PercentajeSaleUnlock = 0;
var Descuento = 1;

function PercentajeSaleUpgrade() {
	if (Saltos >= PercentajeSalePrice && PercentajeSaleBuy == 0) {
		Saltos -= PercentajeSalePrice;
		PercentajeSaleBuy = +1;
		TorchicPrecio -= ((TorchicPrecio*10)/100).toFixed(0);
		CramorantPrecio -= ((CramorantPrecio*10)/100).toFixed(0);
		KabutopsPrecio -= ((KabutopsPrecio*10)/100).toFixed(0);
		CrobatPrecio -= ((CrobatPrecio*10)/100).toFixed(0);
	}
}

var ClickPercentajeAchievementsPrice = 750;
var ClickPercentajeAchievementsBuy = 0;
var ClickPercentajeAchievementsUnlock = 0;

function ClickPercentajeAchievements() {
	if (Saltos >= ClickPercentajeAchievementsPrice && ClickPercentajeAchievementsBuy == 0) {
		Saltos -= ClickPercentajeAchievementsPrice;
		ClickPercentajeAchievementsBuy = +1;
	}
}

var ClickPercentajePokemonsPrice = 1000;
var ClickPercentajePokemonsBuy = 0;
var ClickPercentajePokemonsUnlock = 0;

function ClickPercentajePokemons() {
	if (Saltos >= ClickPercentajePokemonsPrice && ClickPercentajePokemonsBuy == 0) {
		Saltos -= ClickPercentajePokemonsPrice;
		ClickPercentajePokemonsBuy = +1;
	}
}

function UpgradesRender() {
	// PercentajeSales
	if (Saltos >= 449) {
		PercentajeSaleUnlock = +1;
	}
	if (PercentajeSaleBuy == 0) {
		if (Saltos >= 449 && Saltos <= 450) {
			document.getElementById("PercentajeSales").style = "display: initial; filter: brightness(0.02); opacity: 0;";
		} else if (Saltos >= 451 && Saltos <= 499) {
			document.getElementById("PercentajeSales").style = "display: initial; filter: brightness(0.02); opacity: 1;";
		} else if (PercentajeSaleUnlock == 1) {
			if (Saltos >= 500) {
				document.getElementById("PercentajeSales").style = "display: initial; filter: brightness(1); opacity: 1;";
			} else if (Saltos <= 449) {
				document.getElementById("PercentajeSales").style = "display: initial; filter: brightness(0.02); opacity: 1;";
			};
		} else if (PercentajeSaleUnlock == 0) {
			if (Saltos <= 449) {
				document.getElementById("PercentajeSales").style = "display: none;";
			};
		};
	} else if (PercentajeSaleBuy == 1) {
		document.getElementById("PercentajeSales").style = "display: none;";
	};
	//	ClickAchievementsPercentaje
	if (Saltos >= 699) {
		ClickPercentajeAchievementsUnlock = +1;
	}
	if (ClickPercentajeAchievementsBuy == 0) {
		if (Saltos >= 699 && Saltos <= 700) {
			document.getElementById("ClickAchievements").style = "display: initial; filter: brightness(0.02); opacity: 0;";
		} else if (Saltos >= 701 && Saltos <= 749) {
			document.getElementById("ClickAchievements").style = "display: initial; filter: brightness(0.02); opacity: 1;";
		} else if (ClickPercentajeAchievementsUnlock == 1) {
			if (Saltos >= 750) {
				document.getElementById("ClickAchievements").style = "display: initial; filter: brightness(1); opacity: 1;";
			} else if (Saltos <= 699) {
				document.getElementById("ClickAchievements").style = "display: initial; filter: brightness(0.02); opacity: 1;";
			};
		} else if (ClickPercentajeAchievementsUnlock == 0) {
			if (Saltos <= 699) {
				document.getElementById("ClickAchievements").style = "display: none;";
			};
		};
	} else if (ClickPercentajeAchievementsBuy == 1) {
		document.getElementById("ClickAchievements").style = "display: none;";
	};
	//	ClickPokemonsPercentaje
	if (Saltos >= 899) {
		ClickPercentajePokemonsUnlock = +1;
	};
	if (ClickPercentajePokemonsBuy == 0) {
		if (Saltos == 899 && Saltos <= 900) {
			document.getElementById("ClickPokemons").style = "display: initial; filter: brightness(0.02); opacity: 0;";
		} else if (Saltos >= 901 && Saltos <= 1000) {
			document.getElementById("ClickPokemons").style = "display: initial; filter: brightness(0.02); opacity: 1;";
		} else if (ClickPercentajePokemonsUnlock == 1) {
			if (Saltos >= 1000) {
				document.getElementById("ClickPokemons").style = "display: initial; filter: brightness(1); opacity: 1;";
			} else if (Saltos <= 899) {
				document.getElementById("ClickPokemons").style = "display: initial; filter: brightness(0.02); opacity: 1;";
			};
		} else if (ClickPercentajePokemonsUnlock == 0) {
			if (Saltos <= 899) {
				document.getElementById("ClickPokemons").style = "display: none;";
			};
		};
	} else if (ClickPercentajePokemonsBuy == 1) {
		document.getElementById("ClickPokemons").style = "display: none;";
	};
};

// Original
//TorchicPrecio =+ Math.floor(TorchicPrecio + (TorchicPrecio / (41 / 6))).toFixed(0);

//Usado
//Math.floor(((15*(TorchicInv+(41/6)) / (41 / 6)))).toFixed(0);

//Primera idea
//TorchicPrecio =+ Math.floor((15 + (15 / (41 / 6))) * TorchicInv).toFixed(0);

//Original
//TorchicPrecio =+ Math.floor(TorchicPrecio + (TorchicPrecio / (41 / 6))).toFixed(0);