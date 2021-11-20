var Saltos = 0;

function ClickCabeza() {
    Saltos ++;
}

function render60() {
    document.getElementById("render").innerHTML = `${Saltos} saltos`;
}

function render1() {
    document.getElementById("title").innerHTML = `Salto Simulator - ${Saltos} Saltos`;
}

setInterval(function() {
    render1();
}, 1000)

setInterval(function() {
	render60();
}, 1000 / 60);