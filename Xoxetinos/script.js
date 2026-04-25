// ---------- Cumples ---------- \\

document.addEventListener("DOMContentLoaded", function() {
    // Lista de cumpleaños (restaurada)
    var birthday = [
        {name: "Grupo", date: "Oct 6", year: "(21)", visible: true},
        {name: "Danna", date: "Feb 5", year: "(06)", visible: false},
        {name: "Almu", date: "Feb 12", year: "(06)", visible: true},
        {name: "Gabi", date: "Mar 4", year: "(08)", visible: true},
        {name: "Nerea", date: "Mar 18", year: "(08)", visible: false},
        {name: "Lucas", date: "May 19", year: "(09)", visible: true},
        {name: "Iyan", date: "Jun 18", year: "(06)", visible: true},
        {name: "Val", date: "Jul 14", year: "(06)", visible: true},
        {name: "Laura", date: "Jul 14", year: "(07)", visible: true},
        {name: "Jairo", date: "Jul 14", year: "(07)", visible: false},
        {name: "Deivid", date: "Jul 20", year: "(05)", visible: false},
        {name: "Guille", date: "Jul 21", year: "(07)", visible: true},
        {name: "Sofia", date: "Aug 7", year: "(07)", visible: true},
        {name: "Sergio", date: "Aug 12", year: "(08)", visible: true},
        {name: "Leo", date: "Aug 17", year: "(06)", visible: false},
        {name: "Deva", date: "Aug 26", year: "(06)", visible: true},
        {name: "Davo", date: "Sep 3", year: "(07)", visible: true},
        {name: "Olaya", date: "Sep 6", year: "(06)", visible: true},
        {name: "Io", date: "Sep 26", year: "(07)", visible: true},
        {name: "Runa", date: "Oct 9", year: "(07)", visible: false},
        {name: "Nadine", date: "Oct 19", year: "(07)", visible: false},
        {name: "Martín", date: "Oct 22", year: "(07)", visible: true},
        {name: "Font", date: "Nov 6", year: "(07)", visible: true},
        {name: "Pau", date: "Nov 27", year: "(06)", visible: true},
        {name: "Elías", date: "Nov 28", year: "(07)", visible: true},
        {name: "Salto", date: "Dec 11", year: "(06)", visible: true},
        {name: "Lau", date: "Dec 13", year: "(08)", visible: false},
        {name: "Valadri", date: "Dec 18", year: "(21)", visible: true},
        {name: "Dieguchi", date: "Dec 26", year: "(07)", visible: true}
    ];

    // Lista de eventos
    var events = [
        {name: "San Juan", date: "2025-06-23"},
        {name: "Les coses que floten", date: "2025-08-02"},
        {
            name: "Viaje a Madrid",
            start: "2025-08-18",
            end: "2025-08-21"
        }
        // Añade más eventos aquí
    ];

    // --- EVENTOS ---
    var contenedorEventos = document.getElementById('contenedor-eventos');
    var now = new Date();

    // Filtrar eventos futuros y ordenarlos por fecha
    var eventosFuturos = events
        .map(event => {
            if (event.start && event.end) {
                return {
                    ...event,
                    startObj: new Date(event.start),
                    endObj: new Date(event.end)
                };
            } else {
                return {
                    ...event,
                    dateObj: new Date(event.date)
                };
            }
        })
        .filter(event => {
            if (event.startObj && event.endObj) {
                // Mostrar si el evento no ha terminado
                return event.endObj >= now;
            } else {
                var eventDate = event.dateObj;
                return (
                    eventDate.getFullYear() > now.getFullYear() ||
                    (eventDate.getFullYear() === now.getFullYear() &&
                    (eventDate.getMonth() > now.getMonth() ||
                        (eventDate.getMonth() === now.getMonth() && eventDate.getDate() >= now.getDate())))
                );
            }
        })
        .sort((a, b) => {
            // Ordenar por la fecha de inicio (o fecha única)
            var aDate = a.startObj ? a.startObj : a.dateObj;
            var bDate = b.startObj ? b.startObj : b.dateObj;
            return aDate - bDate;
        });

    // Mostrar eventos futuros
    eventosFuturos.forEach(function(event) {
        var div = document.createElement('div');
        div.className = 'box';
        div.id = 'evento-' + event.name.replace(/\s+/g, '-');

        var h2NameDate = document.createElement('h2');
        h2NameDate.id = 'Event_Name_Date';

        var h2Distance = document.createElement('h2');
        h2Distance.id = 'Event_Distance';

        div.appendChild(h2NameDate);
        div.appendChild(h2Distance);

        contenedorEventos.appendChild(div);

        function updateEventCountdown() {
            var now = new Date();
            var container = document.getElementById('evento-' + event.name.replace(/\s+/g, '-'));

            if (event.startObj && event.endObj) {
                // Evento de varios días
                if (now < event.startObj) {
                    // Cuenta atrás hasta el inicio
                    var distance = event.startObj - now;
                    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                    container.querySelector('#Event_Distance').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
                } else if (now >= event.startObj && now <= event.endObj) {
                    // Durante el evento
                    container.querySelector('#Event_Distance').innerHTML = `¡AHORA!`;
                } else if (now > event.endObj) {
                    // Evento terminado
                    container.remove();
                    clearInterval(interval);
                }
            } else {
                // Evento de un solo día
                var eventDate = event.dateObj;
                var distance = eventDate - now;
                if (
                    now.getDate() === eventDate.getDate() &&
                    now.getMonth() === eventDate.getMonth() &&
                    now.getFullYear() === eventDate.getFullYear()
                ) {
                    container.querySelector('#Event_Distance').innerHTML = `¡HOY!`;
                } else if (distance < -86400000) {
                    container.remove();
                    clearInterval(interval);
                } else {
                    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                    container.querySelector('#Event_Distance').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
                }
            }
        }
        updateEventCountdown();
        var interval = setInterval(updateEventCountdown, 1000);

        // Mostrar nombre y fecha formateada
        var formattedDate;
        if (event.startObj && event.endObj) {
            formattedDate = `${event.startObj.getDate()}/${event.startObj.getMonth() + 1}/${event.startObj.getFullYear()} - ${event.endObj.getDate()}/${event.endObj.getMonth() + 1}/${event.endObj.getFullYear()}`;
        } else {
            formattedDate = `${event.dateObj.getDate()}/${event.dateObj.getMonth() + 1}/${event.dateObj.getFullYear()}`;
        }
        div.querySelector('#Event_Name_Date').innerHTML = event.name + ' ' + formattedDate;
    });

    // --- CUMPLEAÑOS PRÓXIMOS COMO EVENTOS ---
    // Solo los visibles
    var cumplesVisibles = birthday.filter(b => b.visible !== false);

    function getNextBirthdayDate(monthDayStr) {
        var now = new Date();
        var thisYear = now.getFullYear();
        var dateThisYear = new Date(monthDayStr + ', ' + thisYear);
        if (
            dateThisYear.getMonth() < now.getMonth() ||
            (dateThisYear.getMonth() === now.getMonth() && dateThisYear.getDate() < now.getDate())
        ) {
            dateThisYear = new Date(monthDayStr + ', ' + (thisYear + 1));
        }
        return dateThisYear;
    }

    cumplesVisibles.forEach(function(b) {
        b.nextDate = getNextBirthdayDate(b.date);
    });

    // Próximo(s) cumpleaños
    var minDistance = Math.min(...cumplesVisibles.map(b => b.nextDate - now));
    var cumplesProximos = cumplesVisibles.filter(b => (b.nextDate - now) === minDistance);

    // Mostrar los próximos cumpleaños como eventos
    cumplesProximos.forEach(function(birthday) {
        var div = document.createElement('div');
        div.className = 'box';
        div.id = 'evento-cumple-' + birthday.name.replace(/\s+/g, '-');

        var h2NameDate = document.createElement('h2');
        h2NameDate.id = 'Event_Name_Date';

        var h2Distance = document.createElement('h2');
        h2Distance.id = 'Event_Distance';

        div.appendChild(h2NameDate);
        div.appendChild(h2Distance);

        contenedorEventos.appendChild(div);

        var birthdayDate = birthday.nextDate;

        function updateBirthdayCountdown() {
            var now = new Date();
            var distance = birthdayDate - now;

            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            var container = document.getElementById('evento-cumple-' + birthday.name.replace(/\s+/g, '-'));

            if (
                now.getDate() === birthdayDate.getDate() &&
                now.getMonth() === birthdayDate.getMonth() &&
                now.getFullYear() === birthdayDate.getFullYear()
            ) {
                container.querySelector('#Event_Distance').innerHTML = `¡HOY!`;
            } else if (distance < -86400000) {
                container.remove();
                clearInterval(interval);
            } else {
                container.querySelector('#Event_Distance').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
            }
        }
        updateBirthdayCountdown();
        var interval = setInterval(updateBirthdayCountdown, 1000);

        var formattedDate = `${birthdayDate.getDate()}/${birthdayDate.getMonth() + 1}`;
        div.querySelector('#Event_Name_Date').innerHTML = `Cumple de ${birthday.name} ${formattedDate} ${birthday.year}`;
    });

    // --- CUMPLEAÑOS (todos los visibles) ---
    var contenedorCumples = document.getElementById('contenedor-cumples');
    contenedorCumples.innerHTML = "";

    cumplesVisibles.forEach(function(birthday) {
        var div = document.createElement('div');
        div.className = 'box';
        div.id = birthday.name;

        var h2NameDate = document.createElement('h2');
        h2NameDate.id = 'Name_Date';

        var h2Distance = document.createElement('h2');
        h2Distance.id = 'Distance';

        div.appendChild(h2NameDate);
        div.appendChild(h2Distance);

        contenedorCumples.appendChild(div);

        var birthdayDate = getNextBirthdayDate(birthday.date);

        function updateBirthdayCountdown() {
            var now = new Date();
            var distance = birthdayDate - now;

            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            var container = document.getElementById(birthday.name);

            if (
                now.getDate() === birthdayDate.getDate() &&
                now.getMonth() === birthdayDate.getMonth() &&
                now.getFullYear() === birthdayDate.getFullYear()
            ) {
                container.querySelector('#Distance').innerHTML = `¡HOY!`;
            } else if (distance < -86400000) {
                // Actualizar a la siguiente fecha automáticamente
                birthdayDate = getNextBirthdayDate(birthday.date);
            } else {
                container.querySelector('#Distance').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
            }
        }
        updateBirthdayCountdown();
        setInterval(updateBirthdayCountdown, 1000);

        var formattedDate = `${birthdayDate.getDate()}/${birthdayDate.getMonth() + 1}`;
        div.querySelector('#Name_Date').innerHTML = birthday.name + ' ' + formattedDate + ' ' + birthday.year;
    });

    // ---------- Frases ---------- \\

    var frases = [
        {id: "A", texto: "Si mueres, pierdes la vida.", autor: "Shadic", fecha: "2021"},
        {id: "B",texto: "Prendele fuego.", autor: "Io", fecha: "2021"},
        {id: "C",texto: "No quiero acabar morido... De momento", autor: "Martino", fecha: "2021"},
        {id: "D",texto: "¿Eso por donde se mete?", autor: "Sergio", fecha: "2022"},
        {id: "E",texto: "En las noches de calor, me meto en el congelador.", autor: "Io", fecha: "2022"},
        {id: "F",texto: "Que descanséis cuando os durmáis.", autor: "Pau", fecha: "2022"},
        {id: "G",texto: "Boicot al euro, que vuelva la peseta.", autor: "Adro", fecha: "2023"},
        {id: "H",texto: "Me la metes en el ascensor.", autor: "Olaya", fecha: "2023"},
        {id: "I",texto: "No sabes como me pones 😜🔥", autor: "Casque", fecha: "2023"},
        {id: "J",texto: "Glup 🫧", autor: "Nerea y yo", fecha: "2023"},
        {id: "K",texto: "Y tu... Eres una putaa😝☝️", autor: "Pau", fecha: "2024"},
        {id: "L",texto: "Si los culos son culos y las tetas son tetas trae tu boca y abre mi bragueta", autor: "Gabino", fecha: "2024"},
        {id: "M",texto: "La cagada va en la taza", autor: "Todos", fecha: "2025"},
        {id: "N",texto: "Font es judio y gitano", autor: "Meta AI", fecha: "2025"},
        {id: "O",texto: "Hasta la vista malabarista", autor: "Font", fecha: "2025"},
        {id: "P", texto: "Quien cojones se ha unido", autor: "Dieguito", fecha: "2025"},
        {id: "Q", texto: "Miau", autor: "Dieguito", fecha: "2025"}
    ]
    
    var contenedorFrases = document.getElementById('contenedor-frases');

    frases.forEach(function(frase) {
        var div = document.createElement('div');
        div.className = 'box';
        div.id = frase.id;

        var h2Texto = document.createElement('h2');
        h2Texto.id = 'Texto';
        div.appendChild(h2Texto);

        var h2AutoryFecha = document.createElement('h2');
        h2AutoryFecha.id = 'AutoryFecha';
        div.appendChild(h2AutoryFecha);


        contenedorFrases.appendChild(div);

        var container = document.querySelector(`#${frase.id}`);

        container.querySelector('#Texto').innerHTML = `"${frase.texto}"`;
        container.querySelector('#AutoryFecha').innerHTML = frase.autor + " - " + frase.fecha;
    });
});

//import { readFile, utils } from 'xlsx';
//var wb = readFile('frases.xlsx', { cellDates: true });
//var ws = wb.Sheets['Hoja1']; // Cambia 'Sheet1' al nombre de tu hoja
//const headerRow = utils.sheet_to_json(ws, { header: 1 })[0];
//const parametros = headerRow.slice(1); // Ignora la primera celda (que contiene el título)
//const data = utils.sheet_to_json(ws, { header: 1, range: 1 }); // Ignora la primera fila (encabezados)
//const arrayDeDatos = data.map((fila) => {
//    const obj = {};
//    parametros.forEach((parametro, indice) => {
//        obj[parametro] = fila[indice + 1]; // Ignora la primera celda (que contiene el nombre de la fila)
//    });
//    return obj;
//});
//console.log(arrayDeDatos)