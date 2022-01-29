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

var expiresdate = new Date(2040, 1, 01, 00, 00);

document.cookie = "Money=" + encodeURIComponent(`Money = ${Money}`) + "; expires=" + expiresdate.toUTCString();
document.cookie = "Rock=" + encodeURIComponent(`Rock = ${Rock}`) + "; expires=" + expiresdate.toUTCString();
document.cookie = "Coal=" + encodeURIComponent(`Coal = ${Coal}`) + "; expires=" + expiresdate.toUTCString();
document.cookie = "RawIron=" + encodeURIComponent(`RawIron = ${RawIron}`) + "; expires=" + expiresdate.toUTCString();
document.cookie = "Iron=" + encodeURIComponent(`Iron = ${Iron}`) + "; expires=" + expiresdate.toUTCString();
document.cookie = "Pickaxe=" + encodeURIComponent(`Pickaxe = "${Pickaxe}"`) + "; expires=" + expiresdate.toUTCString();
document.cookie = "Furnace=" + encodeURIComponent(`Furnace = ${Furnace}`) + "; expires=" + expiresdate.toUTCString();
document.cookie = "FurnaceContainer=" + encodeURIComponent(`FurnaceContainer = ${FurnaceContainer}`) + "; expires=" + expiresdate.toUTCString();
document.cookie = "FurnaceFuel=" + encodeURIComponent(`FurnaceFuel = ${FurnaceFuel}`) + "; expires=" + expiresdate.toUTCString();
document.cookie = "IronUnlocked=" + encodeURIComponent(`IronUnlocked = ${IronUnlocked}`) + "; expires=" + expiresdate.toUTCString();
document.cookie = "SellToggle=" + encodeURIComponent(`SellToggle = ${SellToggle}`) + "; expires=" + expiresdate.toUTCString();

async function Mine() {

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

	} else if (Pickaxe == "Iron") {
		let EarnRock = +Math.floor(Math.random() * 10) + 1;
		Rock += EarnRock;
		let EarnCoal = +Math.floor(Math.random() * 7) + 1;
		Coal += EarnCoal;
		let EarnRawIron = +Math.floor(Math.random() * 4);
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

function FurnaceAddContainer() {
	if (Furnace >= 1 && RawIron >= 1) {
		RawIron -= 1;
		FurnaceContainer += 1;
	}
}

function FurnaceAddFuel() {
	if (Furnace >= 1 && Coal >= 1) {
		Coal -= 1;
		FurnaceFuel += 1;
	}
}

function FurnaceFuntion() {
	if (Furnace >= 1 && FurnaceFuel >= 0.5 && FurnaceContainer >= 1) {
		Iron += 1;
		FurnaceFuel -= 0.5;
		FurnaceContainer -= 1;
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

	if (Rock >= 1) {
		document.getElementById("InventoryRock").style.display = "block";
		document.getElementById("Inventory").style.opacity = "1";
	}
	if (Money >= 0.01) {
		document.getElementById("InventoryMoney").style.display = "block";
	};
	if (Rock >= 100) {
		document.getElementById("InventoryMoney").style.display = "block";
	};
	if (Coal >= 1) {
		document.getElementById("InventoryCoal").style.display = "block";
	};
	if (Furnace == 0 && Pickaxe == "Stone") {
		document.getElementById("FurnaceBuy").style.display = "block";
	} else if (Furnace >= 1) {
		document.getElementById("FurnaceOpen").style.display = "block";
		document.getElementById("FurnaceBuy").style.display = "none";
	};
	if (RawIron >= 1 || Iron >= 1) {
		document.getElementById("InventoryRawIron").style.display = "block";
		document.getElementById("InventoryIron").style.display = "block";
		IronUnlocked = true;
	};
	if (Rock >= 50) {
		document.getElementById("InventoryRock").style.cursor = "pointer";
		document.getElementById("InventoryCoal").style.cursor = "pointer";
		document.getElementById("InventoryRawIron").style.cursor = "pointer";
		document.getElementById("InventoryIron").style.cursor = "pointer";
		document.getElementById("Shop").style.opacity = "1";
		document.getElementById("Craft").style.opacity = "1";
		SellToggle = true;
	};
	if (Rock >= 75 && Pickaxe == "Basic") {
		document.getElementById("StonePickaxe").style.display = "block";
	};
	if (SellToggle == true) {
		document.getElementById("SellBtn").style.display = "block";
	};
	if (Pickaxe != "Basic") {
		document.getElementById("InventoryPickaxe").style.display = "block";
	};
	if (Pickaxe == "Stone") {
		document.getElementById("StonePickaxe").style.display = "none";
	};
	if (Pickaxe == "Iron") {
		document.getElementById("IronPickaxe").style.display = "none";
	}
	if (Iron >= 3) {
		document.getElementById("IronPickaxe").style.display = "block";
	};

    // Texts

	document.getElementById("InventoryMoney").innerHTML = `Money: ${MoneyDisplay}$`;
	document.getElementById("InventoryPickaxe").innerHTML = `Pickaxe: ${Pickaxe}`;

	document.getElementById("InventoryRock").innerHTML = `Rock: x${RockDisplay}`;
	document.getElementById("InventoryCoal").innerHTML = `Coal: x${CoalDisplay}`;
	
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
(`Money = ${Money};
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
height = ${height};`);
};

function Saved() {
}

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

// Cookies

// Sat Jan 29 2022 14:17:23 GMT+0100

// Money = ${Money};
// Rock = ${Rock};
// Coal = ${Coal};
// RawIron = ${RawIron};
// Iron = ${Iron};
// Pickaxe = "${Pickaxe}";
// Furnace = ${Furnace};
// FurnaceContainer = ${FurnaceContainer};
// FurnaceFuel = ${FurnaceFuel};
// IronUnlocked = ${IronUnlocked};
// SellToggle = ${SellToggle};
// height = ${height};

