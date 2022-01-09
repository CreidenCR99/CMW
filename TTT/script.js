// Const (X-O-None)

const None = 0;
const X = 1;
const O = 10;

// Var (Player)

var Player = X;

// Var (Win)

var WinX = 0;
var WinO = 0;

// Var (Casillas)

var C1 = None;
var C2 = None;
var C3 = None;
var C4 = None;
var C5 = None;
var C6 = None;
var C7 = None;
var C8 = None;
var C9 = None;

var Row1 = 0;
var Row2 = 0;
var Row3 = 0;

var Column1 = 0;
var Column2 = 0;
var Column3 = 0;

var Diagonal1 = 0;
var Diagonal2 = 0;

// Functions

function Play(Casilla) {
	if (Player == X) {
		if (Casilla == 1) {
			document.getElementById("C1").src = "img/X.png"
			Player = 10;
			C1 = 1;
		} else if (Casilla == 2) {
			document.getElementById("C2").src = "img/X.png"
			Player = 10;
			C2 = 1;
		} else if (Casilla == 3) {
			document.getElementById("C3").src = "img/X.png"
			Player = 10;
			C3 =1;
		} else if (Casilla == 4) {
			document.getElementById("C4").src = "img/X.png"
			Player = 10;
			C4 = 1;
		} else if (Casilla == 5) {
			document.getElementById("C5").src = "img/X.png"
			Player = 10;
			C5 = 1;
		} else if (Casilla == 6) {
			document.getElementById("C6").src = "img/X.png"
			Player = 10;
			C6 = 1;
		} else if (Casilla == 7) {
			document.getElementById("C7").src = "img/X.png"
			Player = 10;
			C7 = 1;
		} else if (Casilla == 8) {
			document.getElementById("C8").src = "img/X.png"
			Player = 10;
			C8 = 1;
		} else if (Casilla == 9) {
			document.getElementById("C9").src = "img/X.png"
			Player = 10;
			C9 = 1;
		};
	} else if (Player == O) {
		if (Casilla == 1) {
			document.getElementById("C1").src = "img/O.png"
			Player = 1;
			C1 = 10;
		} else if (Casilla == 2) {
			document.getElementById("C2").src = "img/O.png"
			Player = 1;
			C2 = 10;
		} else if (Casilla == 3) {
			document.getElementById("C3").src = "img/O.png"
			Player = 1;
			C3 = 10;
		} else if (Casilla == 4) {
			document.getElementById("C4").src = "img/O.png"
			Player = 1;
			C4 = 10;
		} else if (Casilla == 5) {
			document.getElementById("C5").src = "img/O.png"
			Player = 1;
			C5 = 10;
		} else if (Casilla == 6) {
			document.getElementById("C6").src = "img/O.png"
			Player = 1;
			C6 = 10;
		} else if (Casilla == 7) {
			document.getElementById("C7").src = "img/O.png"
			Player = 1;
			C7 = 10;
		} else if (Casilla == 8) {
			document.getElementById("C8").src = "img/O.png"
			Player = 1;
			C8 = 10;
		} else if (Casilla == 9) {
			document.getElementById("C9").src = "img/O.png"
			Player = 1;
			C9 = 10;
		};
	};
};

// Funcion (Win)

function Win() {
	document.getElementById("Subtitle").innerHTML = `X: ${WinX} | O: ${WinO}`

	Row1 = (C1 + C2 + C3);
	Row2 = (C4 + C5 + C6);
	Row3 = (C7 + C8 + C9);
	
	Column1 = (C1 + C4 + C7);
	Column2 = (C2 + C5 + C8);
	Column3 = (C3 + C6 + C9);

	Diagonal1 = (C1 + C5 + C9);
	Diagonal2 = (C3 + C5 + C7);

	if (Row1 == 3 || Row2 == 3 || Row3 == 3) {
		WinX++;
		CNone();
	};
	if (Row1 == 30 || Row2 == 30 || Row3 == 30) {
		WinO++;
		CNone();
	};
	if (Column1 == 3 || Column2 == 3 || Column3 == 3) {
		WinX++;
		CNone();
	};
	if (Column1 == 30 || Column2 == 30 || Column3 == 30) {
		WinO++;
		CNone();
	};
	if (Diagonal1 == 3 || Diagonal2 == 3) {
		WinX++;
		CNone();
	};
	if (Diagonal1 == 30 || Diagonal2 == 30) {
		WinO++;
		CNone();
	};
};

// Function (Reset)

function Reset() {
	CNone();
	imgNone();
	Player = X;
}

function CNone() {
 	C1 = None;
 	C2 = None;
 	C3 = None;
 	C4 = None;
 	C5 = None;
 	C6 = None;
 	C7 = None;
 	C8 = None;
 	C9 = None;
}

function imgNone() {
	document.getElementById("C1").src = "img/None.png"
	document.getElementById("C2").src = "img/None.png"
	document.getElementById("C3").src = "img/None.png"
	document.getElementById("C4").src = "img/None.png"
	document.getElementById("C5").src = "img/None.png"
	document.getElementById("C6").src = "img/None.png"
	document.getElementById("C7").src = "img/None.png"
	document.getElementById("C8").src = "img/None.png"
	document.getElementById("C9").src = "img/None.png"
}

// Sleep();

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

// Intervals

setInterval(function () {
	Win();
}, 1000 / 60);