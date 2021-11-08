function return1() {
	window.open('', '_parent', '');
	window.close();
}

function help1618() {
	console.log("Comandos:")
	console.log("Diego = n")
	console.log("inventario = [n(Tyranitar),n(Garchomp),n(Sylveon),n(Luvdisc)]")
	console.log("javascript:rngnumber();")
	console.log("javascript:win();")
	console.log("V-1.6 // V-1.8")
	console.log("")
	document.getElementById("consolebutton16").style.display = "none";
}

function help19() {
	console.log(` ------\n Command list: \n\n Diego = n; \n\n precioMejora1 = n; \n\n precioMejora2 = n; \n\n invmejroa = n; \n\n click = n; \n\n inventario = [n,n,n,n]; \n\n diegoproduce = [n,n,n,n]; \n\n precioProducto = [n,n,n,n]; \n\n ------ \n\n javascript:rngnumber(); \n\n javascript:stats(); \n\n javascript:clic(); \n\n ------ \n V-1.9 \n ------`);
	document.getElementById("consolebutton19").style.display = "none";
}

function commands19() {
	var save = prompt(` ---- Diego Clicker (v-1.9) ---- \n\n Pagina 1: Estadísticas (Escribe 'P1') \n Pagina 2: Precios (Escribe 'P2') \n Pagina 3: Producción (Escribe 'P3') \n Pagina 4: Funciones (Escribe 'P4') \n Pagina 5: Shiny/Inverted (Escribe 'P5') \n\n ---- Diego Clicker (v-1.9) ---- `, ``);
	if (save == "P1" || save == "p1" || save == "1")
		alert(` ---- Pagina 1: Estadísticas ---- \n\n Diego = 0; \n DiegoRedondeo = Math.round(Diego); \n DPS = 0; \n DPSRedondeo = Math.round(DPS) \n Total = 0; \n clicktotal = 0; \n gastadototal = 0; `);
	if (save == "P2" || save == "p2" || save == "2")
		alert(` ---- Pagina 2: Precios ---- \n\n TyranitarPrecio = 100; \n GarchompPrecio = 200; \n SylveonPrecio = 300; \n LuvdiscPrecio = 400; \n precioclick1 = 600; \n precioclick2 = 1200; \n precioinv1 = 1000; \n precioinv = 2000;`);
	if (save == "P3" || save == "p3" || save == "3")
		alert(` ---- Pagina 3: Producción ---- \n\n TyranitarProduce = 1; \n GarchompProduce = 2.25; \n SylveonProduce = 3.5; \n LuvdiscProduce = 4.75; \n invmejora = 1; \n click = 1; `);
	if (save == "P4" || save == "p4" || save == "4")
		alert(` ---- Pagina 4: Funciones ---- \n\n onload(); \n clic(); \n producir(); \n win(); \n rngnumber(); \n titlealert(); \n commands(); \n stats();`);
	if (save == "P5" || save == "p5" || save == "5")
		alert(` ---- Pagina 5: Shiny/Inverted ---- \n\n DiegoInverted = Math.random() * (0+ 100); \n TyranitarShiny = Math.random() * (0 + 100); \n GarchompShiny = Math.random() * (0 + 100); \n SylveonShiny = Math.random() * (0 + 100); \n LuvdiscShiny = Math.random() * (0 + 100); `);
}

function stats19() {
	var save = prompt(` Tiempo: ${cd}d ${ch}h ${cm}m ${cs}s \n Clicks totales: ${clicktotal+1} \n Diegos totales: ${Total} \n Diegos gastados: ${gastadototal}  \n Diegos: ${Diego} \n Tyranitar: ${TyranitarInv} \n Garchomp: ${GarchompInv} \n Sylveon: ${SylveonInv} \n Luvdisc: ${LuvdiscInv} \n Escribe "Guardar" para obtener tu código de guardado`, ``);
	if (save == "guardar" || save == "GUARDAR" || save == "Guardar" || save == "gUARDAR" || save == "1") {
		prompt(`Para cargar tu partida pega este código en la consola [F12]:`, `clicktotal = ${clicktotal}; Total = ${Total}; gastadototal = ${gastadototal}; Diego = ${Diego}; TyranitarInv = ${TyranitarInv}; GarchompInv = ${GarchompInv}; SylveonInv = ${SylveonInv}; LuvdiscInv = ${LuvdiscInv}; TyranitarPrecio = ${TyranitarPrecio}; GarchompPrecio = ${GarchompPrecio}; SylveonPrecio = ${SylveonPrecio}; LuvdiscPrecio = ${LuvdiscPrecio}; click = ${click}; invmejora = ${invmejora}; DiegoInverted = ${DiegoInverted}; TyranitarShiny = ${TyranitarShiny}; GarchompShiny = ${GarchompShiny}; SylveonShiny = ${SylveonShiny}; LuvdiscShiny = ${LuvdiscShiny}; cs = ${cs}; cm = ${cm}; ch = ${ch}; cd = ${cd}; DPS = ${DPS}; onload(); title(); cronometro(); win(); pokemon(); render(); clear(); rngnumber();`);
	}
}

function save19() {
	prompt(`Para cargar tu partida pega este código en la consola [F12]:`, `clicktotal = ${clicktotal}; Total = ${Total}; gastadototal = ${gastadototal}; Diego = ${Diego}; TyranitarInv = ${TyranitarInv}; GarchompInv = ${GarchompInv}; SylveonInv = ${SylveonInv}; LuvdiscInv = ${LuvdiscInv}; TyranitarPrecio = ${TyranitarPrecio}; GarchompPrecio = ${GarchompPrecio}; SylveonPrecio = ${SylveonPrecio}; LuvdiscPrecio = ${LuvdiscPrecio}; click = ${click}; invmejora = ${invmejora}; DiegoInverted = ${DiegoInverted}; TyranitarShiny = ${TyranitarShiny}; GarchompShiny = ${GarchompShiny}; SylveonShiny = ${SylveonShiny}; LuvdiscShiny = ${LuvdiscShiny}; cs = ${cs}; cm = ${cm}; ch = ${ch}; cd = ${cd}; DPS = ${DPS}; onload(); title(); cronometro(); win(); pokemon(); render(); clear(); rngnumber();`);
}

function titlealert19() {
	var selection = prompt(` ---- Diego Clicker (v-1.9) ---- \n\n Escribe 'Stats' para ver tus estadísticas \n Escribe 'Commands' para ver la lista de comandos \n\n ---- Diego Clicker (v-1.9) ---- `, ``);
	if (selection == "Stats" || selection == "stats" || selection == "STATS" || selection == "sTATS" || selection == "1") {
		stats19();
	}
	if (selection == "Commands" || selection == "commands" || selection == "COMMANDS" || selection == "cOMMANDS" || selection == "2") {
		commands19();
	}
}