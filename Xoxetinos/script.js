// ---------- Cumples ---------- \\

document.addEventListener("DOMContentLoaded", function() {
    var birthday = [
        {name: "Grupo", date: "Oct 6, 2024", year: "(21)"},
        {name: "Danna", date: "Feb 5, 2025", year: "(06)"},
        {name: "Almu", date: "Feb 12, 2025", year: "(06)"},
        {name: "Gabino", date: "Mar 4, 2025", year: "(08)"},
        {name: "Nerea", date: "Mar 18, 2025", year: "(08)"},
        {name: "Lucas", date: "May 19, 2025", year: "(09)"},
        {name: "Iyan", date: "Jun 18, 2024", year: "(06)"},
        {name: "Val", date: "Jul 14, 2024", year: "(06)"},
        {name: "Deivid", date: "Jul 20, 2024", year: "(05)"},
        {name: "Guille", date: "Jul 21, 2024", year: "(07)"},
        {name: "Sofia", date: "Aug 7, 2024", year: "(07)"},
        {name: "Sergio", date: "Aug 12, 2024", year: "(08)"},
        {name: "Leo", date: "Aug 17, 2024", year: "(06)"},
        {name: "Deva", date: "Aug 26, 2024", year: "(06)"},
        {name: "Olaya", date: "Sep 6, 2024", year: "(06)"},
        {name: "Io", date: "Sep 26, 2024", year: "(07)"},
        {name: "Nadine", date: "Oct 19, 2024", year: "(07)"},
        {name: "Martín", date: "Oct 22, 2024", year: "(07)"},
        {name: "Pau", date: "Nov 27, 2024", year: "(06)"},
        {name: "Salto", date: "Dec 11, 2024", year: "(06)"},
        {name: "Lau", date: "Dec 13, 2024", year: "(08)"},
        {name: "Valadri", date: "Dec 18, 2024", year: "(21)"},
        {name: "Dieguchi", date: "Dec 26, 2024", year: "(07)"}
    ];

    var contenedorCumples = document.getElementById('contenedor-cumples');

    birthday.forEach(function(birthday) {
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
    });

    // Bucle y cuenta regresiva para cada cumpleaños
    birthday.forEach(function(birthday) {
        var birthdayDate = new Date(birthday.date);

        var countdown = setInterval(function() {
            var now = new Date().getTime();
            var distance = birthdayDate - now;

            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            var container = document.querySelector(`#${birthday.name}`);

            if (distance < -86400000) { // Si ya paso el cumpleaños
                clearInterval(countdown);
                container.querySelector('#Distance').innerHTML = ``;
            } else if (distance < 1) { // Si el cumpleaños es hoy
                clearInterval(countdown);
                container.querySelector('#Distance').innerHTML = `¡HOY!`;
            } else {
                container.querySelector('#Distance').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
            }
        }, 1000);

        // Pasar fecha a dd/mm
        var formattedDate = `${birthdayDate.getDate()}/${birthdayDate.getMonth() + 1}`;

        // Mostrar la fecha y el nombre
        var Name_date = setInterval(function() {
            document.querySelector(`#${birthday.name}`)
                .querySelector('#Name_Date')
                .innerHTML = birthday.name + ' ' + formattedDate + ' ' + birthday.year;

            clearInterval(Name_date);
        }, 1000);
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
        {id: "K",texto: "Si los culos son culos y las tetas son tetas trae tu boca y abre mi bragueta", autor: "Gabino", fecha: "2023"}
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
//var wb = readFile('tu_archivo.xlsx', { cellDates: true });
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