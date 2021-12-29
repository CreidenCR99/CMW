var SaltosSiempre = 0;
var GastadoTotal = 0;
var ClickCabezaTotal = 0;
var ProducidoTotal = 0;
var PorClick = 0;

function Stats() {
	document.getElementById("Stats").innerHTML = `${ClickCabezaTotal} clicks totales a la cabeza<br>${Saltos.toFixed(1)} saltos ahora mismo<br>${SaltosSiempre.toFixed(1)} saltos conseguidos en total<br>${PorClick.toFixed(1)} saltos por click<br>${ProducidoTotal.toFixed(1)} saltos de pokemons<br>${GastadoTotal} saltos gastados en total<br>${SPS} Saltos por segundo<br>${EarnedAchievements}/${TotalAchievements} logros conseguidos<br>${Click} por click`
}

Loaded += 1;