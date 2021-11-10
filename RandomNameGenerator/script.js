function generate() {
	var PrimeroOpcional = ["", "", "Not_", "! ", "xX_", "FaZe_"];
	var SegundoObligatorio = ["Mystic", "Magic", "Mysterious", "Clown", "Killer", "Bad", "Uncle", "Black", "Bread", "Viwer", "UwU", "Diego", "Golden"];
	var TerceroObligatorio = ["Clown", "Magician", "Bunny", "Dude", "Uncle", "Asassin", "Drugs", "Viwer", "UwU", "Clicker", "Yo", "Tu"];
	var CuartoOpcional = ["", "", "n't", "_Xx", "_toN", "666", "69", `${Math.round(Math.random() * 100)}`];
	var Primero = Math.floor(Math.random() * PrimeroOpcional.length);
	var Segundo = Math.floor(Math.random() * SegundoObligatorio.length);
	var Tercero = Math.floor(Math.random() * TerceroObligatorio.length);
	var Cuarto = Math.floor(Math.random() * CuartoOpcional.length);
	document.getElementById("Nombre").innerHTML = PrimeroOpcional[Primero] + SegundoObligatorio[Segundo] + TerceroObligatorio[Tercero] + CuartoOpcional[Cuarto];
	console.log(PrimeroOpcional[Primero] + SegundoObligatorio[Segundo] + TerceroObligatorio[Tercero] + CuartoOpcional[Cuarto]);

}