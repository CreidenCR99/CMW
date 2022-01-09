var TorchicInv = 0;
var TorchicSPS = 0.1;
var TorchicPrecio = 15;
var TorchicPrecioDisplay = 15;

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
var CramorantPrecioDisplay = 100;

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
var KabutopsPrecioDisplay = 1100;

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
var CrobatPrecioDisplay = 12000;

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

function TorchicDisplay() {
	if (TorchicPrecio <= 999) {
		TorchicPrecioDisplay = +TorchicPrecio
	} else if (TorchicPrecio >= 1000 && TorchicPrecio <= 999999) {
		TorchicPrecioDisplay = +(TorchicPrecio / 1e3).toFixed(2) + "K";
	} else if (TorchicPrecio >= 1000000) {
		TorchicPrecioDisplay = +(TorchicPrecio / 1e6).toFixed(3) + "M";
	};
};

function CramorantDisplay() {
	if (CramorantPrecio <= 999) {
		CramorantPrecioDisplay = +CramorantPrecio
	} else if (CramorantPrecio >= 1000 && CramorantPrecio <= 999999) {
		CramorantPrecioDisplay = +(CramorantPrecio / 1e3).toFixed(2) + "K";
	} else if (CramorantPrecio >= 1000000) {
		CramorantPrecioDisplay = +(CramorantPrecio / 1e6).toFixed(3) + "M";
	};
};

function KabutopsDisplay() {
	if (KabutopsPrecio <= 999) {
		KabutopsPrecioDisplay = +KabutopsPrecio
	} else if (KabutopsPrecio >= 1000 && KabutopsPrecio <= 999999) {
		KabutopsPrecioDisplay = +(KabutopsPrecio / 1e3).toFixed(2) + "K";
	} else if (KabutopsPrecio >= 1000000) {
		KabutopsPrecioDisplay = +(KabutopsPrecio / 1e6).toFixed(3) + "M";
	};
};

function CrobatDisplay() {
	if (CrobatPrecio <= 999) {
		CrobatPrecioDisplay = +CrobatPrecio
	} else if (CrobatPrecio >= 1000 && CrobatPrecio <= 999999) {
		CrobatPrecioDisplay = +(CrobatPrecio / 1e3).toFixed(2) + "K";
	} else if (CrobatPrecio >= 1000000) {
		CrobatPrecioDisplay = +(CrobatPrecio / 1e6).toFixed(3) + "M";
	};
};


function TiendaDatos() {
	document.getElementById("TorchicTotal").innerHTML = TorchicInv;
	document.getElementById("DatosTorchic").innerHTML = `Torchic<br>${TorchicPrecioDisplay} saltos<br>${TorchicSPS} SPS`;
	TorchicDisplay();
	document.getElementById("CramorantTotal").innerHTML = CramorantInv;
	document.getElementById("DatosCramorant").innerHTML = `Cramorant<br>${CramorantPrecioDisplay} saltos<br>${CramorantSPS} SPS`;
	CramorantDisplay();
	document.getElementById("KabutopsTotal").innerHTML = KabutopsInv;
	document.getElementById("DatosKabutops").innerHTML = `Kabutops<br>${KabutopsPrecioDisplay} saltos<br>${KabutopsSPS} SPS`;
	KabutopsDisplay();
	document.getElementById("CrobatTotal").innerHTML = CrobatInv;
	document.getElementById("DatosCrobat").innerHTML = `Crobat<br>${CrobatPrecioDisplay} saltos<br>${CrobatSPS} SPS`;
	CrobatDisplay();
};

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

function PercentajeSaleUpgrade() {
	if (Saltos >= PercentajeSalePrice && PercentajeSaleBuy == 0) {
		Saltos -= PercentajeSalePrice;
		PercentajeSaleBuy = +1;
	};
	if (PercentajeSaleBuy == 1) {
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
	};
}

var ClickPercentajePokemonsPrice = 1000;
var ClickPercentajePokemonsBuy = 0;
var ClickPercentajePokemonsUnlock = 0;

function ClickPercentajePokemons() {
	if (Saltos >= ClickPercentajePokemonsPrice && ClickPercentajePokemonsBuy == 0) {
		Saltos -= ClickPercentajePokemonsPrice;
		ClickPercentajePokemonsBuy = +1;
	};
}

var ClickByFivePrice = 1250;
var ClickByFiveBuy = 0;
var ClickByFiveUnlock = 0;

function ClickByFive() {
	if (Saltos >= ClickByFivePrice && ClickByFiveBuy == 0) {
		Saltos -= ClickByFivePrice;
		ClickByFiveBuy = +1;
	};
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
	// ClickByFive
	if (Saltos >= 1099) {
		ClickByFiveUnlock = +1;
	};
	if (ClickByFiveBuy == 0) {
		if (Saltos == 1099 && Saltos <= 1100) {
			document.getElementById("ClickByFive").style = "display: initial; filter: brightness(0.02); opacity: 0;";
		} else if (Saltos >= 1101 && Saltos <= 1250) {
			document.getElementById("ClickByFive").style = "display: initial; filter: brightness(0.02); opacity: 1;";
		} else if (ClickByFiveUnlock == 1) {
			if (Saltos >= 1250) {
				document.getElementById("ClickByFive").style = "display: initial; filter: brightness(1); opacity: 1;";
			} else if (Saltos <= 1099) {
				document.getElementById("ClickByFive").style = "display: initial; filter: brightness(0.02); opacity: 1;";
			};
		} else if (ClickByFiveUnlock == 0) {
			if (Saltos <= 1099) {
				document.getElementById("ClickByFive").style = "display: none;";
			};
		};
	} else if (ClickByFiveBuy == 1) {
		document.getElementById("ClickByFive").style = "display: none;";
	};
};

Loaded += 1;