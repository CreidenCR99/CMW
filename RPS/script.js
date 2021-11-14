// Variables

var SelectionP1 = 0;
var SelectionP2 = 0;
var Winner = SelectionP1 + SelectionP2;

var SelectP1 = 0;
var SelectP2 = 0;

var Rock = 100;
var Paper = 10;
var Scissors = 1;

// SelectionP1

function SelectRockP1() {
    SelectionP1 = Rock;
    document.getElementById("SelectionP1").src = "img/Rock.png";
    SelectP1 = 1;
}

function SelectPaperP1() {
    SelectionP1 = Paper;
    document.getElementById("SelectionP1").src = "img/Paper.png";
    SelectP1 = 1;
}

function SelectScissorsP1() {
    SelectionP1 = Scissors;
    document.getElementById("SelectionP1").src = "img/Scissors.png";
    SelectP1 = 1;
}

// SelectionP2

function SelectRockP2() {
    SelectionP2 = Rock;
    document.getElementById("SelectionP2").src = "img/Rock.png";
    SelectP2 = 1;
}

function SelectPaperP2() {
    SelectionP2 = Paper;
    document.getElementById("SelectionP2").src = "img/Paper.png";
    SelectP2 = 1;
}

function SelectScissorsP2() {
    SelectionP2 = Scissors;
    document.getElementById("SelectionP2").src = "img/Scissors.png";
    SelectP2 = 1;
}

function win() {
    if(Winner == 200) {
        document.getElementById("Winner").scr = "img/Circle.png"
    }
    else if(Winner == 20) {
        document.getElementById("Winner").scr = "img/Circle.png"
    }
    else if(Winner == 2) {
        document.getElementById("Winner").scr = "img/Circle.png"
    }
    else if(Winner == 110) {
        document.getElementById("Winner").src = "img/Paper.png"
    }
    else if(Winner == 101) {
        document.getElementById("Winner").src = "img/Rock.png"
    }
    else if(Winner == 11) {
        document.getElementById("Winner").src = "img/Scissors.png"
    }
}

function Reset() {
    SelectP1 = 0;
    SelectP2 = 0;
    SelectionP1 = 0;
    SelectionP2 = 0;
    Winner = 0;
    document.getElementById("Winner").src = "img/Circle.png"
    document.getElementById("SelectionP1").src = "img/Circle.png"
    document.getElementById("SelectionP2").src = "img/Circle.png"
}

setInterval(function() {
    win();
    Winner = SelectionP1 + SelectionP2;
}, 1000);