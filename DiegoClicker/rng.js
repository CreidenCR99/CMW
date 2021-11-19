function rngnumber() {
	console.log(` Diego:      ${DiegoInverted} \n Tyranitar:  ${TyranitarShiny} \n Garchomp:   ${GarchompShiny} \n Sylveon:    ${SylveonShiny} \n Luvdisc:    ${LuvdiscShiny}`)
}

var DiegoInverted = Math.floor(Math.random() * (100));
var TyranitarShiny = Math.floor(Math.random() * (100));
var GarchompShiny = Math.floor(Math.random() * (100));
var SylveonShiny = Math.floor(Math.random() * (100));
var LuvdiscShiny = Math.floor(Math.random() * (100));

window.onload = function onload() {

	// Diego

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