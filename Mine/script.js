var Money = 0;
var Rock = 0;
var Coal = 0;
var RawIron = 0;
var Iron = 0;
var Pickaxe = "Basic";
var Furnace = 0;
var FurnaceContainer = 0;
var FurnaceFuel = 0;
var IronUnlocked = false;
var SellToggle = false;
var height = 100;

function Mine() {

	// --- Basic Pickaxe ---

	if (Pickaxe == "Basic") {
		if (Rock <= 15) {
			let EarnRock = +Math.floor(Math.random() * 3) + 1;
			Rock += EarnRock;
			document.getElementById("Earned").innerHTML = `+${EarnRock} rock<br>`;
		} else {
			let EarnRock = +Math.floor(Math.random() * 5) + 1;
			Rock += EarnRock;
			let CoalBasic = +Math.floor(Math.random() * 100);
			if (CoalBasic >= 90) {
				let EarnCoal = +Math.floor(Math.random() * 3) + 1;
				Coal += EarnCoal;
				document.getElementById("Earned").innerHTML = `+${EarnRock} rock<br>+${EarnCoal} coal`;
			} else {
				document.getElementById("Earned").innerHTML = `+${EarnRock} rock<br>`;
			};
		};

		// --- Stone Pickaxe ---

	} else if (Pickaxe == "Stone") {
		let EarnRock = +Math.floor(Math.random() * 7) + 1;
		Rock += EarnRock;
		let EarnCoal = +Math.floor(Math.random() * 5);
		Coal += EarnCoal;
		let RawIronStone = +(Math.random() * 100).toFixed(1);
		if (IronUnlocked = false) {
			if (Furnace >= 1) {
				if (RawIronStone >= 90) {
					let EarnRawIron = +Math.floor(Math.random() * 3) + 1;
					RawIron += EarnRawIron;
					if (EarnCoal >= 1) {
						document.getElementById("Earned").innerHTML = `+${EarnRock} rock<br>+${EarnCoal} coal<br>+${EarnRawIron} raw iron`;
					} else if (EarnCoal == 0) {
						document.getElementById("Earned").innerHTML = `+${EarnRock} rock<br>+${EarnRawIron} raw iron`;
					};
				} else {
					if (EarnCoal >= 1) {
						document.getElementById("Earned").innerHTML = `+${EarnRock} rock<br>+${EarnCoal} coal`;
					} else if (EarnCoal == 0) {
						document.getElementById("Earned").innerHTML = `+${EarnRock} rock`;
					};
				};
			} else if (Furnace == 0) {
				if (RawIronStone >= 99.5) {
					let EarnRawIron = +Math.floor(Math.random() * 3) + 1;
					RawIron += EarnRawIron;
					if (EarnCoal >= 1) {
						document.getElementById("Earned").innerHTML = `+${EarnRock} rock<br>+${EarnCoal} coal<br>+${EarnRawIron} raw iron`;
					} else if (EarnCoal == 0) {
						document.getElementById("Earned").innerHTML = `+${EarnRock} rock<br>+${EarnRawIron} raw iron`;
					};
				} else {
					if (EarnCoal >= 1) {
						document.getElementById("Earned").innerHTML = `+${EarnRock} rock<br>+${EarnCoal} coal`;
					} else if (EarnCoal == 0) {
						document.getElementById("Earned").innerHTML = `+${EarnRock} rock`;
					};
				};
			};
		} else if (IronUnlocked = true) {
			if (Furnace >= 1) {
				if (RawIronStone >= 85) {
					let EarnRawIron = +Math.floor(Math.random() * 3) + 1;
					RawIron += EarnRawIron;
					if (EarnCoal >= 1) {
						document.getElementById("Earned").innerHTML = `+${EarnRock} rock<br>+${EarnCoal} coal<br>+${EarnRawIron} raw iron`;
					} else if (EarnCoal == 0) {
						document.getElementById("Earned").innerHTML = `+${EarnRock} rock<br>+${EarnRawIron} raw iron`;
					};
				} else {
					if (EarnCoal >= 1) {
						document.getElementById("Earned").innerHTML = `+${EarnRock} rock<br>+${EarnCoal} coal`;
					} else if (EarnCoal == 0) {
						document.getElementById("Earned").innerHTML = `+${EarnRock} rock`;
					};
				};
			} else if (Furnace == 0) {
				if (RawIronStone >= 94.5) {
					let EarnRawIron = +Math.floor(Math.random() * 3) + 1;
					RawIron += EarnRawIron;
					if (EarnCoal >= 1) {
						document.getElementById("Earned").innerHTML = `+${EarnRock} rock<br>+${EarnCoal} coal<br>+${EarnRawIron} raw iron`;
					} else if (EarnCoal == 0) {
						document.getElementById("Earned").innerHTML = `+${EarnRock} rock<br>+${EarnRawIron} raw iron`;
					};
				} else {
					if (EarnCoal >= 1) {
						document.getElementById("Earned").innerHTML = `+${EarnRock} rock<br>+${EarnCoal} coal`;
					} else if (EarnCoal == 0) {
						document.getElementById("Earned").innerHTML = `+${EarnRock} rock`;
					};
				};
			};
		};

		// --- Iron Pickaxe ---

		var IronPickaxeUses = 0;

	} else if (Pickaxe == "Iron") {
		let EarnRock = +Math.floor(Math.random() * 10) + 1;
		Rock += EarnRock;
		let EarnCoal = +Math.floor(Math.random() * 7) + 1;
		Coal += EarnCoal;
		let EarnRawIron = +Math.floor(Math.random() * 6);
		RawIron += EarnRawIron;
		if (EarnRawIron >= 1) {
			document.getElementById("Earned").innerHTML = `+${EarnRock} rock<br>+${EarnCoal} coal<br>+${EarnRawIron} raw iron`;
		} else if (EarnRawIron == 0) {
			document.getElementById("Earned").innerHTML = `+${EarnRock} rock<br>+${EarnCoal} coal`;
		};
	};
};

// ItemID

function Sell(ItemID) {
	if (SellToggle == true) {
		if (ItemID == 1 || ItemID == 0) {
			Money += Rock * 0.75;
			Rock -= Rock;
		};
		if (ItemID == 2 || ItemID == 0) {
			Money += Coal * 1;
			Coal -= Coal;
		};
		if (ItemID == 3 || ItemID == 0) {
			Money += RawIron * 2;
			RawIron -= RawIron;
		};
		if (ItemID == 4 || ItemID == 0) {
			Money += Iron * 4;
			Iron -= Iron;
		};
	};
};

function Buy(ItemID) {
	if (ItemID == 1) {
		if (Pickaxe == "Basic" && Money >= 250 && Rock >= 100) {
			Money -= 250;
			Rock -= 100;
			Pickaxe = "Stone";
		};
	} else if (ItemID == 2) {
		if (Pickaxe == "Stone" && Money >= 1500 && Iron >= 50) {
			Money -= 1500;
			Iron -= 50;
			Pickaxe = "Iron";
		};
	};
};

function Craft(ItemID) {
	if (ItemID == 1) {
		if (Pickaxe == "Stone" && Rock >= 500 && Coal >= 250) {
			Rock -= 500;
			Coal -= 250;
			Furnace++;
		};
	};
};

// Furnace

function FurnaceAddContainer(Cantidad) {
	if (Furnace >= 1 && RawIron >= Cantidad) {
		RawIron -= Cantidad;
		FurnaceContainer += Cantidad;
	}
}

function FurnaceAddFuel(Cantidad) {
	if (Furnace >= 1 && Coal >= Cantidad) {
		Coal -= Cantidad;
		FurnaceFuel += Cantidad;
	}
}

function FurnaceFuntion(Cantidad) {
	if (Furnace >= 1 && FurnaceFuel >= (Cantidad*0.5) && FurnaceContainer >= Cantidad) {
		Iron += Cantidad;
		FurnaceFuel -= Cantidad*0.5;
		FurnaceContainer -= Cantidad;
	};
};

function FurnaceScreen(Screen) {
	if (Screen == 0) {
		document.getElementById("Furnace").style.display = "none";
		document.getElementById("FurnaceBackground").style.display = "none";
	} else if (Screen == 1) {
		document.getElementById("Furnace").style.display = "block";
		document.getElementById("FurnaceBackground").style.display = "block";
	}
}

function render60() {

    // FurnaceFuel
	
	if (FurnaceFuel <= 0) {
		FurnaceFuel = 0;
	}
	document.getElementById("progress").style.height = height + "%";
	document.getElementById("progressGradient").title = `x${FurnaceFuel}`;
	document.getElementById("progress").title = `x${FurnaceFuel}`;
	if (FurnaceFuel == 0) {
		document.getElementById("progress").style.backgroundColor = "rgba(0, 0, 0, 1)";
		if (height <= 99) {
			height = 100;
		};
	} else if (FurnaceFuel >= 1 && FurnaceFuel == Math.floor(FurnaceFuel)) {
		document.getElementById("progress").style.backgroundColor = "rgba(0, 0, 0, 0.75)";
		if (height >= 0) {
			height = 0;
		};
	} else if ((FurnaceFuel != Math.floor(FurnaceFuel))) {
		if (FurnaceFuel <= 0.5) {
			document.getElementById("progress").style.backgroundColor = "rgba(0, 0, 0, 1)";
			if (height >= 51) {
				height = 50;
			} else if (height <= 49) {
				height = 50;
			};
		} else if (FurnaceFuel >= 1.5) {
			document.getElementById("progress").style.backgroundColor = "rgba(0, 0, 0, 0.35)";
			if (height >= 51) {
				height = 50;
			} else if (height <= 49) {
				height = 50;
			};
		};
	};



    // Numbers

	Money = Number(Money);
	Rock = Number(Rock);
	Coal = Number(Coal);
	RawIron = Number(RawIron);
	Iron = Number(Iron);
	Furnace = Number(Furnace);
	FurnaceContainer = Number(FurnaceContainer);
	FurnaceFuel = Number(FurnaceFuel);
	// IronUnlocked = false;
	// SellToggle = false;

	// Short Numbers

	var MoneyDisplay = Money.toFixed(2);
	if (Rock <= 999) {
		var RockDisplay = Rock;
	} else if (Rock >= 1000) {
		var RockDisplay = ((Rock / 1e3)).toFixed(3);
	};
	if (Coal <= 999) {
		var CoalDisplay = Coal;
	} else if (Coal >= 1000) {
		var CoalDisplay = ((Coal / 1e3)).toFixed(3);
	};
	if (RawIron <= 999) {
		var RawIronDisplay = RawIron;
	} else if (RawIron >= 1000) {
		var RawIronDisplay = ((RawIron / 1e3)).toFixed(3);
	};
	if (Iron <= 999) {
		var IronDisplay = Iron;
	} else if (Iron >= 1000) {
		var IronDisplay = ((Iron / 1e3)).toFixed(3);
	};

    // Unlock

	if (Rock >= 1 || Money >= 0.01 || Pickaxe != "Basic") {
		document.getElementById("InventoryRock").removeAttribute("style");
		document.getElementById("Inventory").removeAttribute("style");
	};
	if (Money >= 0.01) {
		document.getElementById("InventoryMoney").removeAttribute("style");
	};
	if (Rock >= 100) {
		document.getElementById("InventoryMoney").removeAttribute("style");
	};
	if (Coal >= 1 || IronUnlocked == true || Pickaxe != "Basic") {
		document.getElementById("InventoryCoal").removeAttribute("style");
	};
	if (Furnace == 0 && Pickaxe == "Stone") {
		document.getElementById("FurnaceBuy").removeAttribute("style");
	} else if (Furnace >= 1) {
		document.getElementById("FurnaceOpen").removeAttribute("style");
		document.getElementById("FurnaceBuy").style.display = "none";
	};
	if (RawIron >= 1 || Iron >= 1) {
		document.getElementById("InventoryRawIron").removeAttribute("style");
		document.getElementById("InventoryIron").removeAttribute("style");
		IronUnlocked = true;
	};
	if (Rock >= 50 || Money >= 0.01 || Pickaxe != "Basic") {
		document.getElementById("Shop").removeAttribute("style");
		document.getElementById("Craft").removeAttribute("style");
		SellToggle = true;
	};
	if (Rock >= 75 && Pickaxe == "Basic") {
		document.getElementById("StonePickaxe").removeAttribute("style");
	};
	if (SellToggle == true) {
		document.getElementById("SellBtn").removeAttribute("style");
	};
	if (Pickaxe != "Basic") {
		document.getElementById("InventoryPickaxe").removeAttribute("style");
	};
	if (Pickaxe == "Stone") {
		document.getElementById("StonePickaxe").style.display = "none";
	};
	if (Pickaxe == "Iron") {
		document.getElementById("IronPickaxe").style.display = "none";
	};
	if (Iron >= 3 && Pickaxe == "Stone") {
		document.getElementById("IronPickaxe").removeAttribute("style");
	};

    // Texts

	document.getElementById("InventoryMoney").innerHTML = `Money: ${MoneyDisplay}$`;
	document.getElementById("InventoryRock").innerHTML = `Rock: x${RockDisplay}`;
	document.getElementById("InventoryCoal").innerHTML = `Coal: x${CoalDisplay}`;

	if (Pickaxe != "Basic") {
		document.getElementById("InventoryPickaxe").innerHTML = `Pickaxe: ${Pickaxe}`;
	};
	
	if (IronUnlocked == true) {
		document.getElementById("InventoryRawIron").innerHTML = `Raw Iron: x${RawIronDisplay}`;
		document.getElementById("InventoryIron").innerHTML = `Iron: x${IronDisplay}`;
	}

	if (SellToggle == true) {
		document.getElementById("InventoryRock").title = `Click to sell all of Rock (${Rock*0.75}$)`;
		document.getElementById("InventoryCoal").title = `Click to sell all of Coal (${Coal*1}$)`;
		document.getElementById("InventoryRawIron").title = `Click to sell all of RawIron (${RawIron*2}$)`;
		document.getElementById("InventoryIron").title = `Click to sell all of Iron (${Iron*4}$)`;
		document.getElementById("SellBtn").title = `Click to sell all (${(Rock*0.75)+(Coal*1)+(RawIron*2)+(Iron*4)}$)`
	}

	if (Furnace >= 1) {
		document.getElementById("FurnaceContainer").innerHTML = `Raw Iron: x${FurnaceContainer}`;
		document.getElementById("FurnaceFuel").innerHTML = `Fuel: x${FurnaceFuel.toFixed(1)}`;
	};
};

setInterval(function () {
	render60();
}, 1000 / 60);

// Save

function save() {console.log
	(window.btoa(
	`Money = ${Money};
	Rock = ${Rock};
	Coal = ${Coal};
	RawIron = ${RawIron};
	Iron = ${Iron};
	Pickaxe = "${Pickaxe}";
	Furnace = ${Furnace};
	FurnaceContainer = ${FurnaceContainer};
	FurnaceFuel = ${FurnaceFuel};
	IronUnlocked = ${IronUnlocked};
	SellToggle = ${SellToggle};
	`));
};

// Cookies

var expiresDate = new Date(2100, 1, 01, 00, 00);
var deleteDate = new Date(1970, 1, 01, 00, 00);

async function saveCookies() {
	document.cookie = "cookie.Money=" + Money + "; expires=" + expiresDate.toUTCString();
	document.cookie = "cookie.Rock=" + Rock + "; expires=" + expiresDate.toUTCString();
	document.cookie = "cookie.Coal=" + Coal + "; expires=" + expiresDate.toUTCString();
	document.cookie = "cookie.RawIron=" + RawIron + "; expires=" + expiresDate.toUTCString();
	document.cookie = "cookie.Iron=" + Iron + "; expires=" + expiresDate.toUTCString();
	document.cookie = "cookie.Pickaxe=" + Pickaxe + "; expires=" + expiresDate.toUTCString();
	document.cookie = "cookie.Furnace=" + Furnace + "; expires=" + expiresDate.toUTCString();
	document.cookie = "cookie.FurnaceContainer=" + FurnaceContainer + "; expires=" + expiresDate.toUTCString();
	document.cookie = "cookie.FurnaceFuel=" + FurnaceFuel + "; expires=" + expiresDate.toUTCString();
	if (document.cookie != "") {
		document.getElementById("Saving").removeAttribute("style");
		await sleep(3500);
		document.getElementById("Saving").style.opacity = "0";
	};
};

if (document.cookie == "") {
	saveCookies();
}

// Options
// var AutoSaveTime = prompt("",90);
var AutoSaveTime = 90;
// AutoSaveTime = Number(AutoSaveTime);

setInterval(async function() {
	saveCookies();
}, 1000*AutoSaveTime);

function leerCookieMoney() {
	var lista = document.cookie.split(";");
	for (i in lista) {
		var busca = lista[i].search("cookie.Money");
		if (busca > -1) {
			var micookie = lista[i];
		};
	};
	var igual = micookie.indexOf("=");
	var valor = micookie.substring(igual + 1);
	if (Number(valor) >= 1) {
		return Number(Money = valor);
	} else {
		return Number(Money = 0);
	};
};

function leerCookieRock() {
	var lista = document.cookie.split(";");
	for (i in lista) {
		var busca = lista[i].search("cookie.Rock");
		if (busca > -1) {
			var micookie = lista[i];
		};
	};
	var igual = micookie.indexOf("=");
	var valor = micookie.substring(igual + 1);
 	if (Number(valor >= 1)) {
		return Number(Rock = valor);
	} else {
		return Number(Rock = 0);
	};
};

function leerCookieCoal() {
	var lista = document.cookie.split(";");
	for (i in lista) {
		var busca = lista[i].search("cookie.Coal");
		if (busca > -1) {
			var micookie = lista[i];
		};
	};
	var igual = micookie.indexOf("=");
	var valor = micookie.substring(igual + 1);
 	if (Number(valor >= 1)) {
		return Number(Coal = valor);
	} else {
		return Number(Coal = 0);
	};
};

function leerCookieRawIron() {
	var lista = document.cookie.split(";");
	for (i in lista) {
		var busca = lista[i].search("cookie.RawIron");
		if (busca > -1) {
			var micookie = lista[i];
		};
	};
	var igual = micookie.indexOf("=");
	var valor = micookie.substring(igual + 1);
 	if (Number(valor >= 1)) {
		return Number(RawIron = valor);
	} else {
		return Number(RawIron = 0);
	};
};

function leerCookieIron() {
	var lista = document.cookie.split(";");
	for (i in lista) {
		var busca = lista[i].search("cookie.Iron");
		if (busca > -1) {
			var micookie = lista[i];
		};
	};
	var igual = micookie.indexOf("=");
	var valor = micookie.substring(igual + 1);
 	if (Number(valor >= 1)) {
		return Number(Iron = valor);
	} else {
		return Number(Iron = 0);
	};
};

function leerCookiePickaxe() {
	var lista = document.cookie.split(";");
	for (i in lista) {
		var busca = lista[i].search("cookie.Pickaxe");
		if (busca > -1) {
			var micookie = lista[i];
		};
	};
	var igual = micookie.indexOf("=");
	var valor = micookie.substring(igual + 1);
 	return Pickaxe = valor;
};

function leerCookieFurnace() {
	var lista = document.cookie.split(";");
	for (i in lista) {
		var busca = lista[i].search("cookie.Furnace");
		if (busca > -1) {
			var micookie = lista[i];
		};
	};
	var igual = micookie.indexOf("=");
	var valor = micookie.substring(igual + 1);
 	if (Number(valor >= 1)) {
		return Number(Furnace = valor);
	} else {
		return Number(Furnace = 0);
	};
};

function leerCookieFurnaceContainer() {
	var lista = document.cookie.split(";");
	for (i in lista) {
		var busca = lista[i].search("cookie.FurnaceContainer");
		if (busca > -1) {
			var micookie = lista[i];
		};
	};
	var igual = micookie.indexOf("=");
	var valor = micookie.substring(igual + 1);
 	if (Number(valor >= 1)) {
		return Number(FurnaceContainer = valor);
	} else {
		return Number(FurnaceContainer = 0);
	};
};

function leerCookieFurnaceFuel() {
	var lista = document.cookie.split(";");
	for (i in lista) {
		var busca = lista[i].search("cookie.FurnaceFuel");
		if (busca > -1) {
			var micookie = lista[i];
		};
	};
	var igual = micookie.indexOf("=");
	var valor = micookie.substring(igual + 1);
 	if (Number(valor >= 1)) {
		return Number(FurnaceFuel = valor);
	} else {
		return Number(FurnaceFuel = 0);
	};
};

function leerCookies() {
	leerCookieMoney();
	leerCookieRock();
	leerCookieCoal();
	leerCookieRawIron();
	leerCookieIron();
	leerCookiePickaxe();
	leerCookieFurnace();
	leerCookieFurnaceContainer();
	leerCookieFurnaceFuel();
};

leerCookies();

function Restart() {
	document.cookie = "cookie.Money=" + 0 + "; expires=" + deleteDate.toUTCString();
	document.cookie = "cookie.Rock=" + 0 + "; expires=" + deleteDate.toUTCString();
	document.cookie = "cookie.Coal=" + 0 + "; expires=" + deleteDate.toUTCString();
	document.cookie = "cookie.RawIron=" + 0 + "; expires=" + deleteDate.toUTCString();
	document.cookie = "cookie.Iron=" + 0 + "; expires=" + deleteDate.toUTCString();
	document.cookie = "cookie.Pickaxe=" + 0 + "; expires=" + deleteDate.toUTCString();
	document.cookie = "cookie.Furnace=" + 0 + "; expires=" + deleteDate.toUTCString();
	document.cookie = "cookie.FurnaceContainer=" + 0 + "; expires=" + deleteDate.toUTCString();
	document.cookie = "cookie.FurnaceFuel=" + 0 + "; expires=" + deleteDate.toUTCString();
	window.location.reload();
};

// Other

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
};

var startTime = Date.now();
var frame = 0;
function tick() {
    var time = Date.now();
    frame++;
    if (time - startTime > 1000) {
        document.getElementById("FPS").innerHTML = (frame / ((time - startTime) / 1000)).toFixed(2) + " FPS";
        startTime = time;
        frame = 0;
    };
    window.requestAnimationFrame(tick);
};
tick();