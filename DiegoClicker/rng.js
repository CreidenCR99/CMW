function rngnumber() {
	console.log(` Diego:      ${DiegoInverted} \n Tyranitar:  ${TyranitarShiny} \n Garchomp:   ${GarchompShiny} \n Sylveon:    ${SylveonShiny} \n Luvdisc:    ${LuvdiscShiny}`)
}

var DiegoInverted = 0;
var TyranitarShiny = 0;
var GarchompShiny = 0;
var SylveonShiny = 0;
var LuvdiscShiny = 0;

DiegoInverted = Math.random() * (0 + 100);
DiegoInverted = Math.round(DiegoInverted);

TyranitarShiny = Math.random() * (0 + 100);
TyranitarShiny = Math.round(TyranitarShiny);

GarchompShiny = Math.random() * (0 + 100);
GarchompShiny = Math.round(GarchompShiny);

SylveonShiny = Math.random() * (0 + 100);
SylveonShiny = Math.round(SylveonShiny);

LuvdiscShiny = Math.random() * (0 + 100);
LuvdiscShiny = Math.round(LuvdiscShiny);

window.onload = function onload() {

	if (DiegoInverted >= 90) {
		document.getElementById("DiegoI").src =
			"img/DiegoI.png"
		document.getElementById("DiegoI").title =
			"Inverted!"
	} else {
		document.getElementById("DiegoI").src =
			"img/Diego.png"
		document.getElementById("DiegoI").title =
			""
	}

	// Tyranitar 

	if (TyranitarShiny >= 90) {
		document.getElementById("TyranitarS").src =
			"img/pkmns/TyranitarS.png"
	} else {
		document.getElementById("TyranitarS").src =
			"img/pkmns/Tyranitar.png"
	}


	// Garchomp

	if (GarchompShiny >= 90) {
		document.getElementById("GarchompS").src =
			"img/pkmns/GarchompS.png"
	} else {
		document.getElementById("GarchompS").src =
			"img/pkmns/Garchomp.png"
	}

	// Sylveon

	if (SylveonShiny >= 90) {
		document.getElementById("SylveonS").src =
			"img/pkmns/SylveonS.png"
	} else {
		document.getElementById("SylveonS").src =
			"img/pkmns/Sylveon.png"
	}

	// Luvdisc

	if (LuvdiscShiny >= 90) {
		document.getElementById("LuvdiscS").src =
			"img/pkmns/LuvdiscS.png"
	} else {
		document.getElementById("LuvdiscS").src =
			"img/pkmns/Luvdisc.png"
	}
	rngnumber();
}