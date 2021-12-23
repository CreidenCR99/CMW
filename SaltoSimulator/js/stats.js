var SaltosSiempre = 0;
var GastadoTotal = 0;
var ClickTotal = 0;
var ClickCabezaTotal = 0;
var SPSStats = 0;
var SaltosStats = 0;

function Estadisticas() {
    document.getElementById("StatsClickTotal").innerHTML = `${ClickTotal} clicks en total`
    document.getElementById("StatsClickCabezaTotal").innerHTML = `${ClickCabezaTotal} clicks totales a la cabeza`
    document.getElementById("StatsSaltos").innerHTML = `${SaltosStats.toFixed(1)} saltos ahora mismo`
    document.getElementById("StatsSaltosSiempre").innerHTML = `${SaltosSiempre.toFixed(1)} saltos conseguidos en total`
    document.getElementById("StatsGastadoTotal").innerHTML = `${GastadoTotal} saltos gastados en total`
    document.getElementById("StatsSPS").innerHTML = `${SPSStats} Saltos por segundo`
    document.getElementById("StatsLogros").innerHTML = `${TotalAchievements}/7 logros conseguidos`
}