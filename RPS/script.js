// Var (Select)

var SelectionP1 = 0;
var SelectionP2 = 0;

var SelectedP1 = 0;
var SelectedP2 = 0;

// Var (Win)

var Winner = SelectionP1 + SelectionP2;

var WinP1 = 0;
var WinP2 = 0;

// Const (Selection)

const Rock = 100;
const Paper = 10;
const Scissors = 1;
const None = 0;

// Const (document.getElementById)

const ID = document.getElementById;

var WinnerId = document.getElementById("Winner");

var SelectionP1Id = document.getElementById("SelectionP1");
var SelectRockP1 = document.getElementById("SelectRockP1");
var SelectPaperP1 = document.getElementById("SelectPaperP1");
var SelectScissorsP1 = document.getElementById("SelectScissorsP1");

var SelectionP2Id = document.getElementById("SelectionP2");
var SelectRockP2 = document.getElementById("SelectRockP2");
var SelectPaperP2 = document.getElementById("SelectPaperP2");
var SelectScissorsP2 = document.getElementById("SelectScissorsP2");

// Selection (P1)

function SelectP1(Select) {
	if (SelectedP1 == 0) {
		if (Select == Rock) {
			SelectionP1 = Rock;
			document.getElementById("SelectRockP1").style.cursor = "not-allowed";
			document.getElementById("SelectPaperP1").style.cursor = "not-allowed";
			document.getElementById("SelectScissorsP1").style.cursor = "not-allowed";
			SelectedP1 = 1;
		} else if (Select == Paper) {
			SelectionP1 = Paper;
			document.getElementById("SelectRockP1").style.cursor = "not-allowed";
			document.getElementById("SelectPaperP1").style.cursor = "not-allowed";
			document.getElementById("SelectScissorsP1").style.cursor = "not-allowed";
			SelectedP1 = 1;
		} else if (Select == Scissors) {
			SelectionP1 = Scissors;
			document.getElementById("SelectRockP1").style.cursor = "not-allowed";
			document.getElementById("SelectPaperP1").style.cursor = "not-allowed";
			document.getElementById("SelectScissorsP1").style.cursor = "not-allowed";
			SelectedP1 = 1;
		};
	};
};

// Selection (P2)

function SelectP2(Select) {
	if (SelectedP2 == 0) {
		if (Select == Rock) {
			SelectionP2 = Rock;
			document.getElementById("SelectRockP2").style.cursor = "not-allowed";
			document.getElementById("SelectPaperP2").style.cursor = "not-allowed";
			document.getElementById("SelectScissorsP2").style.cursor = "not-allowed";
			SelectedP2 = 1;
		} else if (Select == Paper) {
			SelectionP2 = Paper;
			document.getElementById("SelectRockP2").style.cursor = "not-allowed";
			document.getElementById("SelectPaperP2").style.cursor = "not-allowed";
			document.getElementById("SelectScissorsP2").style.cursor = "not-allowed";
			SelectedP2 = 1;
		} else if (Select == Scissors) {
			SelectionP2 = Scissors;
			document.getElementById("SelectRockP2").style.cursor = "not-allowed";
			document.getElementById("SelectPaperP2").style.cursor = "not-allowed";
			document.getElementById("SelectScissorsP2").style.cursor = "not-allowed";
			SelectedP2 = 1;
		};
	};
};

// Render

async function Render() {
	Winner = SelectionP1 + SelectionP2;
	document.getElementById("Subtitle").innerHTML = `P1: ${WinP1} | P2: ${WinP2}`;
	if (SelectedP1 == 1 && SelectedP2 == 1) {
		if (SelectionP1 == Rock) {
			document.getElementById("SelectionP1").src = "img/Rock.png";
		} else if (SelectionP1 == Paper) {
			document.getElementById("SelectionP1").src = "img/Paper.png";
		} else if (SelectionP1 == Scissors) {
			document.getElementById("SelectionP1").src = "img/Scissors.png";
		};
		if (SelectionP2 == Rock) {
			document.getElementById("SelectionP2").src = "img/Rock.png";
		} else if (SelectionP2 == Paper) {
			document.getElementById("SelectionP2").src = "img/Paper.png";
		} else if (SelectionP2 == Scissors) {
			document.getElementById("SelectionP2").src = "img/Scissors.png";
		};
	};
	await sleep(2000);
	if (Winner == (Rock + Rock) || Winner == (Paper + Paper) || Winner == (Scissors + Scissors)) {
		document.getElementById("Winner").src = "img/Circle.png";
		await sleep(1000);
		Reset();
	} else if (Winner == (Rock + Paper)) {
		document.getElementById("Winner").src = "img/Paper.png";
		if (SelectionP1 == Rock) {
			WinP1++;
			SelectionP1 = None;
			SelectionP2 = None;
		} else if (SelectionP2 == Rock) {
			WinP2++;
			SelectionP1 = None;
			SelectionP2 = None;
		};
	} else if (Winner == (Paper + Scissors)) {
		document.getElementById("Winner").src = "img/Scissors.png";
		if (SelectionP1 == Scissors) {
			WinP1++;
			SelectionP1 = None;
			SelectionP2 = None;
		} else if (SelectionP2 == Scissors) {
			WinP2++;
			SelectionP1 = None;
			SelectionP2 = None;
		};
	} else if (Winner == (Scissors + Rock)) {
		document.getElementById("Winner").src = "img/Rock.png";
		if (SelectionP1 == Rock) {
			WinP1++;
			SelectionP1 = None;
			SelectionP2 = None;
		} else if (SelectionP2 == Rock) {
			WinP2++;
			SelectionP1 = None;
			SelectionP2 = None;
		};
	};
};

// Reset

function Reset() {
	Winner = 0;
	document.getElementById("Winner").src = "img/Circle.png";
	SelectedP1 = 0;
	SelectionP1 = None;
	document.getElementById("SelectionP1").src = "img/Circle.png";
	document.getElementById("SelectRockP1").style.cursor = "pointer";
	document.getElementById("SelectPaperP1").style.cursor = "pointer";
	document.getElementById("SelectScissorsP1").style.cursor = "pointer";
	SelectedP2 = 0;
	SelectionP2 = None;
	document.getElementById("SelectionP2").src = "img/Circle.png";
	document.getElementById("SelectRockP2").style.cursor = "pointer";
	document.getElementById("SelectPaperP2").style.cursor = "pointer";
	document.getElementById("SelectScissorsP2").style.cursor = "pointer";
};

// Sleep();

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

// Intervals

setInterval(function () {
	Render();
}, 1000 / 60);