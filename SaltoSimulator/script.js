var Mobile;

function AutoDetector() {
	if(navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
		Mobile = true;
		console.log(Mobile);
	} else {
		Mobile = false;
		console.log(Mobile)
	};
};

var Timer = 15;

const Interval = setInterval(function() {
	Timer --;
	document.getElementById("Title").innerHTML = `Salto Simulator<br>Autoselect: ${Timer}s`
	console.log(Timer);
	if (Timer == 0) {
		AutoDetector();
		if (Mobile == false) {
			window.location.href = "https://creidencr99.github.io/CMW/SaltoSimulator/PC/";
		} else if (Mobile == true) {
			window.location.href = "https://creidencr99.github.io/CMW/SaltoSimulator/Mobile/";
		} else {
			window.location.href = "https://creidencr99.github.io/CMW/SaltoSimulator/";
		}
		clearInterval(Interval);
	};
}, 1000);

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

document.oncontextmenu = function () {
	return false;
};