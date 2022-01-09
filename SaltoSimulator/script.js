var Mobile;

function AutoDetector() {
	if(navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
		Mobile = true;
		console.log(Mobile);
	} else {
		Mobile = false;
		console.log(Mobile)
	}
	SelectTimer();
}

var Timer = 15;

const Interval = setInterval(function() {
	Timer --;
	document.getElementById("Title").innerHTML = `Salto Simulator<br>Autoselect: ${Timer}s`
	console.log(Timer);
	if (Timer == 0) {
		if (Mobile == false) {
			window.location.href = "file:///C:/Users/Rogelio/Documents/GitHub/CreidenCR99/SaltoSimulator/PC/index.html#";
		} else if (Mobile == true) {
			window.location.href = "file:///C:/Users/Rogelio/Documents/GitHub/CreidenCR99/SaltoSimulator/index.html"
		};
		clearInterval(Interval);
	};
}, 1000);

function SelectTimer() {

}

AutoDetector();

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

document.oncontextmenu = function () {
	return false;
};