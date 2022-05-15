var Money = 0,
	Rock = 0,
	Coal = 0,
	RawIron = 0,
	Iron = 0,
	Pickaxe = "Basic",
	Furnace = 0,
	FurnaceContainer = 0,
	FurnaceFuel = 0,
	IronUnlocked = false,
	SellToggle = false,
	height = 100,
	IronPickaxeUses = 0,
	AutoSaveTime = 90,
	Lapis = 0,
	LapisUnlocked = false,
XP = 0;

function Mine() {

	// Var Earn

	var EarnRock = 0;
	var EarnCoal = 0;
	var EarnRawIron = 0;
	var EarnLapis = 0;
	var EarnXP = 0;

	// --- Basic Pickaxe ---

	if (Pickaxe == "Basic") {
		if (Rock <= 15) {
			EarnRock = +Math.floor(Math.random() * 3) + 1;
			Rock += EarnRock;
		} else {
			EarnRock = +Math.floor(Math.random() * 5) + 1;
			Rock += EarnRock;
			let CoalBasic = +Math.floor(Math.random() * 100);
			if (CoalBasic >= 90) {
				EarnCoal = +Math.floor(Math.random() * 3) + 1;
				Coal += EarnCoal;
			};
		};

		// --- Stone Pickaxe ---

	} else if (Pickaxe == "Stone") {
		EarnRock = +Math.floor(Math.random() * 7) + 1;
		Rock += EarnRock;
		EarnCoal = +Math.floor(Math.random() * 5);
		Coal += EarnCoal;
		let RawIronStone = +(Math.random() * 100).toFixed(1);
		if (IronUnlocked = false) {
			if (Furnace >= 1) {
				if (RawIronStone >= 90) {
					EarnRawIron = +Math.floor(Math.random() * 3) + 1;
					RawIron += EarnRawIron;
				};
			} else if (Furnace == 0) {
				if (RawIronStone >= 99.5) {
					EarnRawIron = +Math.floor(Math.random() * 3) + 1;
					RawIron += EarnRawIron;
				};
			};
		} else if (IronUnlocked = true) {
			if (Furnace >= 1) {
				if (RawIronStone >= 85) {
					EarnRawIron = +Math.floor(Math.random() * 3) + 1;
					RawIron += EarnRawIron;
				};
			} else if (Furnace == 0) {
				if (RawIronStone >= 94.5) {
					EarnRawIron = +Math.floor(Math.random() * 3) + 1;
					RawIron += EarnRawIron;
				};
			};
		};

		// --- Iron Pickaxe ---

	} else if (Pickaxe == "Iron") {
		IronPickaxeUses++;
		if (IronPickaxeUses <= 10) {
			EarnRock = +Math.floor(Math.random() * 10) + 1;
			Rock += EarnRock;
			EarnCoal = +Math.floor(Math.random() * 7) + 1;
			Coal += EarnCoal;
			EarnRawIron = +Math.floor(Math.random() * 6);
			RawIron += EarnRawIron;
		} else if (IronPickaxeUses >= 10) {
			EarnRock = +Math.floor(Math.random() * 10) + 1;
			Rock += EarnRock;
			EarnCoal = +Math.floor(Math.random() * 7) + 1;
			Coal += EarnCoal;
			EarnRawIron = +Math.floor(Math.random() * 6);
			RawIron += EarnRawIron;
			let LapisIron = +(Math.random() * 100).toFixed(1);
			if (LapisIron >= 97.5) {
				EarnLapis = +Math.floor(Math.random() * 5) + 1;
				Lapis += EarnLapis;
				if (EarnLapis >= 1) {
						eval("EarnXP = EarnXP + (+Math.floor(Math.random() * 5) + 1);".repeat(EarnLapis));
						XP += EarnXP;
					};
				};
			};
		}; 

	// Earned

	document.getElementById("Earned").innerHTML = "+" + EarnRock + " rock<br>";
	if (EarnCoal >= 1) {
		document.getElementById("Earned").innerHTML += "+" + EarnCoal + " coal<br>";
	};
	if (EarnRawIron >= 1) {
		document.getElementById("Earned").innerHTML += ("+" + EarnRawIron + " raw iron<br>");
	};
	if (EarnLapis >= 1) {
		document.getElementById("Earned").innerHTML += ("+" + EarnLapis + " lapis<br>");
	};
	if (EarnXP >= 1) {
		document.getElementById("Earned").innerHTML += ("+" + EarnXP + " XP<br>");
	};
};

// ItemID

function Sell(ItemID) {
	document.getElementById("Earned").innerHTML = "";
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
			Money += Lapis * 1.5;
			Lapis -= Lapis;
		};
		if (ItemID == 4 || ItemID == 0) {
			Money += RawIron * 2;
			RawIron -= RawIron;
		};
		if (ItemID == 5 || ItemID == 0) {
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
		document.getElementById("Furnace").removeAttribute("style");
		document.getElementById("FurnaceBackground").removeAttribute("style");
	}
}

var OptionsOpen = false;

function OptionsScreen(Screen) {
	if (Screen == 0) {
		OptionsOpen = false;
		document.getElementById("Options").style.display = "none";
		document.getElementById("OptionsBackground").style.display = "none";
		document.getElementById("FPS").style.left = "0px";
		document.getElementById("FPS").style.top = "0px";
		document.getElementById("Saving").style.right = "26%";
		document.getElementById("Saving").style.left = "auto";
		document.getElementById("Saving").style.top = "auto";
		document.getElementById("Title").style.display = "block";
		document.getElementById("Earned").style.display = "block";
		document.getElementById("MineBtn").style.display = "block";
	} else if (Screen == 1) {
		OptionsOpen = true;
		document.getElementById("Options").style.display = "block";
		document.getElementById("Options").style.opacity = "1";
		document.getElementById("OptionsBackground").style.display = "block";
		document.getElementById("FPS").style.left = "50px";
		document.getElementById("FPS").style.top = "10px";
		document.getElementById("Saving").style.right = "auto";
		document.getElementById("Saving").style.left = "50px";
		document.getElementById("Saving").style.top = "15px";
		document.getElementById("Title").style.display = "none";
		document.getElementById("Earned").style.display = "none";
		document.getElementById("MineBtn").style.display = "none";
	};
};

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
	IronPickaxeUses = Number(IronPickaxeUses);
	AutoSaveTime = Number(AutoSaveTime);
	Lapis = Number(Lapis);

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
	if (Lapis <= 999) {
		var LapisDisplay = Lapis;
	} else if (Lapis >= 1000) {
		var LapisDisplay = ((Lapis / 1e3)).toFixed(3);
	};
	if (XP <= 999) {
		var XPDisplay = XP;
	} else if (XP >= 1000) {
		var XPDisplay = ((XP / 1e3)).toFixed(3);
	};

    // Unlock

	 if (OptionsOpen == true){
		document.getElementById("Inventory").style.display = "none";
	 } else if (Rock >= 1 || Money >= 0.01 || Pickaxe != "Basic") {
		document.getElementById("InventoryRock").removeAttribute("style");
		document.getElementById("Inventory").removeAttribute("style");
	};
	if (Money >= 0.01) {
		document.getElementById("InventoryMoney").removeAttribute("style");
	};
	if (XP >= 1) {
		document.getElementById("InventoryXP").removeAttribute("style");
	};
	if (Rock >= 100) {
		document.getElementById("InventoryMoney").removeAttribute("style");
	};
	if (Coal >= 1 || IronUnlocked == true || Pickaxe != "Basic") {
		document.getElementById("InventoryCoal").removeAttribute("style");
	};
	if (Furnace == 0 && Pickaxe == "Stone") {
		document.getElementById("FurnaceBuy").removeAttribute("style");
	};
	if (Furnace >= 1) {
		document.getElementById("FurnaceOpen").removeAttribute("style");
		document.getElementById("FurnaceBuy").style.display = "none";
	};
	if (RawIron >= 1 || Iron >= 1 || FurnaceContainer >= 1 || LapisUnlocked == true || IronUnlocked == true || Pickaxe == "Iron") {
		document.getElementById("InventoryRawIron").removeAttribute("style");
		document.getElementById("InventoryIron").removeAttribute("style");
		IronUnlocked = true;
	};
	if (Rock >= 50 || Money >= 0.01 || Pickaxe != "Basic" || IronUnlocked == true) {
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
	if ((Iron >= 3 || (RawIron >= 25 || FurnaceContainer >= 25)) && Pickaxe == "Stone") {
		document.getElementById("IronPickaxe").removeAttribute("style");
	};
	if (Lapis >= 1 || LapisUnlocked == true) {
		document.getElementById("InventoryLapis").removeAttribute("style");
		LapisUnlocked = true;
	};
	if (IronPickaxeUses >= 250) {

	};

    // Texts

	document.getElementById("InventoryMoney").innerHTML = `Money: ${MoneyDisplay}$`;
	document.getElementById("InventoryXP").innerHTML = `XP: ${XPDisplay}`;
	document.getElementById("InventoryRock").innerHTML = `Rock: x${RockDisplay}`;
	document.getElementById("InventoryCoal").innerHTML = `Coal: x${CoalDisplay}`;

	if (Pickaxe != "Basic") {
		document.getElementById("InventoryPickaxe").innerHTML = `Pickaxe: ${Pickaxe}`;
	};
	
	if (IronUnlocked == true) {
		document.getElementById("InventoryRawIron").innerHTML = `Raw Iron: x${RawIronDisplay}`;
		document.getElementById("InventoryIron").innerHTML = `Iron: x${IronDisplay}`;
	};

	if (LapisUnlocked == true) {
		document.getElementById("InventoryLapis").innerHTML = `Lapis: x${LapisDisplay}`;
	};
	
	if (SellToggle == true) {
		document.getElementById("InventoryRock").title = `Click to sell all of Rock (${Rock*0.75}$)`;
		document.getElementById("InventoryCoal").title = `Click to sell all of Coal (${Coal*1}$)`;
		if (LapisUnlocked == true) {
			document.getElementById("InventoryLapis").title = `Click to sell all of Lapis (${Lapis*1.5}$)`;
		};
		if (IronUnlocked == true) {
		document.getElementById("InventoryRawIron").title = `Click to sell all of RawIron (${RawIron*2}$)`;
		document.getElementById("InventoryIron").title = `Click to sell all of Iron (${Iron*4}$)`;
		};
		document.getElementById("SellBtn").title = `Click to sell all (${(Rock*0.75)+(Coal*1)+(Lapis*1.5)+(RawIron*2)+(Iron*4)}$)`
	};

	if (Furnace >= 1) {
		document.getElementById("FurnaceContainer").innerHTML = `Raw Iron: x${FurnaceContainer}`;
		document.getElementById("FurnaceFuel").innerHTML = `Fuel: x${FurnaceFuel.toFixed(1)}`;
	};
};

function render1() {

	// Inputs

	if (AutoSaveTime == 0) {
		document.getElementById("AutoSaveTime").value = "0";
	} else if (AutoSaveTime <= 30) {
		document.getElementById("AutoSaveTime").value = "30";
	} else if (AutoSaveTime >= 180) {
		document.getElementById("AutoSaveTime").value = "180";
	};
	AutoSaveTime = Number(document.getElementById("AutoSaveTime").value);
};

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
	document.cookie = "cookie.IronPickaxeUses=" + IronPickaxeUses + "; expires=" + expiresDate.toUTCString();
	document.cookie = "cookie.AutoSaveTime=" + AutoSaveTime + "; expires=" + expiresDate.toUTCString();
	document.cookie = "cookie.IronUnlocked=" + IronUnlocked + "; expires=" + expiresDate.toUTCString();
	document.cookie = "cookie.Lapis=" + Lapis + "; expires=" + expiresDate.toUTCString();
	document.cookie = "cookie.LapisUnlocked=" + LapisUnlocked + "; expires=" + expiresDate.toUTCString();
	if (document.cookie != "") {
		document.getElementById("Saving").style.opacity = "1";
		await sleep(3500);
		document.getElementById("Saving").style.opacity = "0";
	};
};

if (document.cookie == "") {
	saveCookies();
}

function leerCookieMoney() {
	var lista = document.cookie.split(";");
	for (i in lista) {
		if (lista[i].search("cookie.Money") > -1) var micookie = lista[i];
	};
	var igual = micookie.indexOf("="),
        valor = micookie.substring(igual + 1);
	return Number(valor) >= 1 ? Number(Money = valor) : Number(Money = 0);
};
function leerCookieRock() {
	var lista = document.cookie.split(";");
	for (i in lista) {
		if (lista[i].search("cookie.Rock") > -1) var micookie = lista[i];
	};
	var igual = micookie.indexOf("="),
        valor = micookie.substring(igual + 1);
	return Number(valor) >= 1 ? Number(Rock = valor) : Number(Rock = 0);
};
function leerCookieCoal() {
	var lista = document.cookie.split(";");
	for (i in lista) {
		if (lista[i].search("cookie.Coal") > -1) var micookie = lista[i];
	};
	var igual = micookie.indexOf("="),
        valor = micookie.substring(igual + 1);
	return Number(valor) >= 1 ? Number(Coal = valor) : Number(Coal = 0);
};
function leerCookieRawIron() {
	var lista = document.cookie.split(";");
	for (i in lista) {
		if (lista[i].search("cookie.RawIron") > -1) var micookie = lista[i];
	};
	var igual = micookie.indexOf("="),
        valor = micookie.substring(igual + 1);
	return Number(valor) >= 1 ? Number(RawIron = valor) : Number(RawIron = 0);
};
function leerCookieIron() {
	var lista = document.cookie.split(";");
	for (i in lista) {
		if (lista[i].search("cookie.Iron") > -1) var micookie = lista[i];
	};
	var igual = micookie.indexOf("="),
        valor = micookie.substring(igual + 1);
	return Number(valor) >= 1 ? Number(Iron = valor) : Number(Iron = 0);
};
function leerCookiePickaxe() {
	var lista = document.cookie.split(";");
	for (i in lista) {
		if (lista[i].search("cookie.Pickaxe") > -1) var micookie = lista[i];
	}
	var igual = micookie.indexOf("="),
		valor = micookie.substring(igual + 1);
	return Pickaxe = valor;
};
function leerCookieFurnace() {
	var lista = document.cookie.split(";");
	for (i in lista) {
		if (lista[i].search("cookie.Furnace") > -1) var micookie = lista[i];
	};
	var igual = micookie.indexOf("="),
        valor = micookie.substring(igual + 1);
	return Number(valor) >= 1 ? Number(Furnace = valor) : Number(Furnace = 0);
};
function leerCookieFurnaceContainer() {
	var lista = document.cookie.split(";");
	for (i in lista) {
		if (lista[i].search("cookie.FurnaceContainer") > -1) var micookie = lista[i];
	};
	var igual = micookie.indexOf("="),
        valor = micookie.substring(igual + 1);
	return Number(valor) >= 1 ? Number(FurnaceContainer = valor) : Number(FurnaceContainer = 0);
};
function leerCookieFurnaceFuel() {
	var lista = document.cookie.split(";");
	for (i in lista) {
		if (lista[i].search("cookie.FurnaceFuel") > -1) var micookie = lista[i];
	};
	var igual = micookie.indexOf("="),
        valor = micookie.substring(igual + 1);
	return Number(valor) >= 1 ? Number(FurnaceFuel = valor) : Number(FurnaceFuel = 0);
};
function leerCookieIronPickaxeUses() {
	var lista = document.cookie.split(";");
	for (i in lista) {
		if (lista[i].search("cookie.IronPickaxeUses") > -1) var micookie = lista[i];
	};
	var igual = micookie.indexOf("="),
        valor = micookie.substring(igual + 1);
	return Number(valor) >= 1 ? Number(IronPickaxeUses = valor) : Number(IronPickaxeUses = 0);
};
function leerCookieAutoSaveTime() {
	var lista = document.cookie.split(";");
	for (i in lista) {
		if (lista[i].search("cookie.AutoSaveTime") > -1) var micookie = lista[i];
	};
	var igual = micookie.indexOf("="),
        valor = micookie.substring(igual + 1);
	return Number(valor) >= 1 ? Number(AutoSaveTime = valor) : Number(AutoSaveTime = 0);
};
function leerCookieIronUnlocked() {
	var lista = document.cookie.split(";");
	for (i in lista) {
		if (lista[i].search("cookie.IronUnlocked") > -1) var micookie = lista[i]
	};
	var igual = micookie.indexOf("="),
	    valor = micookie.substring(igual + 1);
	return Number(valor >= 1) ? IronUnlocked = true : IronUnlocked = false;
};
function leerCookieLapis() {
	var lista = document.cookie.split(";");
	for (i in lista) {
		if (lista[i].search("cookie.Lapis") > -1) var micookie = lista[i];
	};
	var igual = micookie.indexOf("="),
        valor = micookie.substring(igual + 1);
	return Number(valor) >= 1 ? Number(Lapis = valor) : Number(Lapis = 0);
};
function leerCookieLapisUnlocked() {
	var lista = document.cookie.split(";");
	for (i in lista) {
		if (lista[i].search("cookie.LapisUnlocked") > -1) var micookie = lista[i]
	};
	var igual = micookie.indexOf("="),
	    valor = micookie.substring(igual + 1);
	return Number(valor >= 1) ? LapisUnlocked = true : LapisUnlocked = false;
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
	leerCookieIronPickaxeUses();
	leerCookieAutoSaveTime();
	leerCookieIronUnlocked();
	leerCookieLapis();
	leerCookieLapisUnlocked();
};

leerCookies();

function Restart() {
	document.cookie = "cookie.Money=" + (-1) + "; expires=" + deleteDate.toUTCString();
	document.cookie = "cookie.Rock=" + (-1) + "; expires=" + deleteDate.toUTCString();
	document.cookie = "cookie.Coal=" + (-1) + "; expires=" + deleteDate.toUTCString();
	document.cookie = "cookie.RawIron=" + (-1) + "; expires=" + deleteDate.toUTCString();
	document.cookie = "cookie.Iron=" + (-1) + "; expires=" + deleteDate.toUTCString();
	document.cookie = "cookie.Pickaxe=" + (-1) + "; expires=" + deleteDate.toUTCString();
	document.cookie = "cookie.Furnace=" + (-1) + "; expires=" + deleteDate.toUTCString();
	document.cookie = "cookie.FurnaceContainer=" + (-1) + "; expires=" + deleteDate.toUTCString();
	document.cookie = "cookie.FurnaceFuel=" + (-1) + "; expires=" + deleteDate.toUTCString();
	document.cookie = "cookie.IronPickaxeUses=" + (-1) + "; expires=" + deleteDate.toUTCString();
	document.cookie = "cookie.AutoSaveTime=" + (-1) + "; expires=" + deleteDate.toUTCString();
	document.cookie = "cookie.IronUnlocked=" + (-1) + "; expires=" + deleteDate.toUTCString();
	document.cookie = "cookie.Lapis=" + (-1) + "; expires=" + deleteDate.toUTCString();
	document.cookie = "cookie.LapisUnlocked=" + (-1) + "; expires=" + deleteDate.toUTCString();
	window.location.reload();
};

// Intervals

setInterval(function () {
	render60();
}, 1000 / 60);

setInterval(function () {
	render1();
}, 1000);

setInterval(function() {
	saveCookies();
}, 1000*AutoSaveTime);

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
        document.getElementById("FPS").innerHTML = "~" + (frame / ((time - startTime) / 1000)).toFixed(2) + " FPS";
        startTime = time;
        frame = 0;
    };
    window.requestAnimationFrame(tick);
};
tick();