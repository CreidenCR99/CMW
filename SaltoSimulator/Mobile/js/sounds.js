var oggsounds = ["ogg/sounds/"];
var SoundsActive = true;

function Sounds(SoundID) {
	if (SoundsActive = true) {
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
    } else if (SoundsActive = false) {
        Sound1.pause();
        Sound2.pause();
        Sound3.pause();
    };
};

var oggmusic = ["ogg/music/"];
var MusicActive = true;

function Music(SongID) {
	if (MusicActive = true) {
		if (SongID == 1) {
			var Song1 = new Audio(oggmusic + "ShadicTiene100Subs.ogg");
			Song1.play();
		} else if (SongID == 2) {
            var Song2 = new Audio(oggmusic + "SoyUnNoob.ogg");
            Song2.play();
		} else if (SongID == 3) {
            var Song3 = new Audio(oggmusic + "SalABailar.ogg");
            Song3.play();
        };
    } else if (MusicActive = false) {
        Song1.pause();
        Song2.pause();
        Song3.pause();
    };
};

Loaded += 1;