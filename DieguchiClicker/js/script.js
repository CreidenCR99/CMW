var km = 0;
var kmh = 0;
function f_clic() {
    km++;
};

function f_kms() {
		document.getElementById("id_km").innerHTML =
		`${km} km`;
		document.getElementById("id_kmh").innerHTML =
		`${kmh} km/h`;
};

setInterval(function() {
	f_kms();
}, 1000 / 60);