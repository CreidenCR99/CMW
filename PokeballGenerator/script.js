var poke = Math.floor(Math.random() * (4) + 1)

function RandomPokeball() {
  poke = +Math.floor(Math.random() * (4) + 1)
  document.getElementById("Poke").src = "img/poke" + poke + ".png"
  console.log(poke)
}

// function VecImagenes() {
//     n = 0;
//     this[n++] = "img/poke.png";
//     this[n++] = "img/poke1.png";
//     this[n++] = "img/poke2.png";
//     this[n++] = "img/poke3.png"
//     this.N = n;
//   }
//   var Imagenes = new VecImagenes();
//   src = Imagenes[Math.floor(Math.random() * Imagenes.N)];
//   document.write("<img src=" + src + ">");