var oggsounds = ["ogg/sounds/"];
var active = true;

function Sounds(SoundID) {
	if (active = true) {
		if (SoundID == 1) {
			var Sound1 = new Audio(oggsounds + "LogroObtenido.ogg");
			Sound1.play();
		} else if (SoundID == 2) {
            var Sound2 = new Audio(oggsounds + "ComprarPokemon.ogg");
            Sound2.play();
		} else if (SoundID == 3) {
            var Sound3 = new Audio(oggsounds + "ComprarMejora.ogg");
            Sound3.play();
        };
    } else if (active = false) {
        Sound1.pause();
        Sound2.pause();
        Sound3.pause();
    };
};

Loaded += 1;