var AutoSaveTime = 15;

async function af_saveCookies() {
	var cookieValue = "u:" + u + ",ups:" + ups;
	for (let i = 1; i <= 15; i++) {
		cookieValue += `,c${i}p:${this["c" + i + "p"]},c${i}G:${this["c" + i + "G"]}`;
	}

	document.cookie = "savedData=" + cookieValue;
	console.log(cookieValue)
	console.log("Cookies saved");
};

function f_loadCookies() {
	var cookieValue = document.cookie
		.split('; ')
		.find(row => row.startsWith('savedData='))
		.split('=')[1];

	if (cookieValue) {
		var valuePairs = cookieValue.split(',');
		var data = {};

		valuePairs.forEach(function(pair) {
			var parts = pair.split(':');
			var name = parts[0];
			var value = parts[1];
			data[name] = value;
		});

		u = parseFloat(data.u);
		ups = parseFloat(data.ups);
		for (let i = 1; i <= 15; i++) {
			this["c" + i + "p"] = parseFloat(data["c" + i + "p"]);
			this["c" + i + "G"] = parseFloat(data["c" + i + "G"]);
		}
		console.log("Cookies loaded");
	};
};

function Reset() {
	f_Reset();
}

function f_Reset() {
	document.cookie = "savedData=0; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/CMW/DieguchiClicker;";
	document.cookie = "savedData=0; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/DieguchiClicker;";
	window.location.reload();
};

setInterval(function() {
	af_saveCookies();
}, 1000 * AutoSaveTime);