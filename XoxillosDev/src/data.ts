/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Birthday, GroupEvent, Quote } from "./types";

export const initialBirthdays: Birthday[] = [
  { name: "Grupo", date: "Oct 6", year: "(21)", visible: true },
  { name: "Danna", date: "Feb 5", year: "(06)", visible: false },
  { name: "Almu", date: "Feb 12", year: "(06)", visible: false },
  { name: "Gabi", date: "Mar 4", year: "(08)", visible: true },
  { name: "Nerea", date: "Mar 18", year: "(08)", visible: false },
  { name: "Lucas", date: "May 19", year: "(09)", visible: true },
  { name: "Iyan", date: "Jun 18", year: "(06)", visible: true },
  { name: "Val", date: "Jul 14", year: "(06)", visible: true },
  { name: "Laura", date: "Jul 14", year: "(07)", visible: true },
  { name: "Jairo", date: "Jul 14", year: "(07)", visible: false },
  { name: "Deivid", date: "Jul 20", year: "(05)", visible: false },
  { name: "Guille", date: "Jul 21", year: "(07)", visible: true },
  { name: "Sofia", date: "Aug 7", year: "(07)", visible: true },
  { name: "Sergio", date: "Aug 12", year: "(08)", visible: true },
  { name: "Leo", date: "Aug 17", year: "(06)", visible: false },
  { name: "Deva", date: "Aug 26", year: "(06)", visible: true },
  { name: "Davo", date: "Sep 3", year: "(07)", visible: true },
  { name: "Olaya", date: "Sep 6", year: "(06)", visible: true },
  { name: "Cuervo", date: "Sep 26", year: "(07)", visible: true },
  { name: "Runa", date: "Oct 9", year: "(07)", visible: false },
  { name: "Nadine", date: "Oct 19", year: "(07)", visible: false },
  { name: "Martín", date: "Oct 22", year: "(07)", visible: false },
  { name: "Font", date: "Nov 6", year: "(07)", visible: false },
  { name: "Pau", date: "Nov 27", year: "(06)", visible: true },
  { name: "Elías", date: "Nov 28", year: "(07)", visible: false },
  { name: "Shadic", date: "Dec 11", year: "(06)", visible: true },
  { name: "Sarah", date: "Dec 12", year: "(07)", visible: true },
  { name: "Lalu", date: "Dec 13", year: "(08)", visible: false },
  { name: "Valadri", date: "Dec 18", year: "(21)", visible: true },
  { name: "Dieguchi", date: "Dec 26", year: "(07)", visible: true }
];

export const initialEvents: GroupEvent[] = [
  { name: "San Juan 🔥", date: "2026-06-23" },
  { name: "La Sardina 🐟", start: "2026-08-01", end: "2026-08-04" },
  { name: "Les coses que floten 🛶", date: "2026-08-02" },
  { name: "Viaje a Madrid 🎒", start: "2025-08-18", end: "2025-08-21"},
  { name: "Viaje a Almuñecar🔥", start: "2026-08-19", end: "2026-08-26"}
];

export const initialQuotes: Quote[] = [
  { id: "A", texto: "Si mueres, pierdes la vida.", autor: "Shadic", fecha: "2021" },
  { id: "B", texto: "Prendele fuego.", autor: "Io", fecha: "2021" },
  { id: "C", texto: "No quiero acabar morido... De momento", autor: "Martino", fecha: "2021" },
  { id: "D", texto: "¿Eso por donde se mete?", autor: "Sergio", fecha: "2022" },
  { id: "E", texto: "En las noches de calor, me meto en el congelador.", autor: "Io", fecha: "2022" },
  { id: "F", texto: "Que descanséis cuando os durmáis.", autor: "Pau", fecha: "2022" },
  { id: "G", texto: "Boicot al euro, que vuelva la peseta.", autor: "Adro", fecha: "2023" },
  { id: "H", texto: "Me la metes en el ascensor.", autor: "Olaya", fecha: "2023" },
  { id: "I", texto: "No sabes como me pones 😜🔥", autor: "Casque", fecha: "2023" },
  { id: "J", texto: "Glup 🫧", autor: "Nerea y yo", fecha: "2023" },
  { id: "K", texto: "Y tu... Eres una putaa😝☝️", autor: "Pau", fecha: "2024" },
  { id: "L", texto: "Si los culos son culos y las tetas son tetas trae tu boca y abre mi bragueta", autor: "Gabino", fecha: "2024" },
  { id: "M", texto: "La cagada va en la taza", autor: "Todos", fecha: "2025" },
  { id: "N", texto: "Font es judio y gitano", autor: "Meta AI", fecha: "2025" },
  { id: "O", texto: "Hasta la vista malabarista", autor: "Font", fecha: "2025" },
  { id: "P", texto: "Quien cojones se ha unido", autor: "Dieguito", fecha: "2025" },
  { id: "Q", texto: "Miau", autor: "Dieguito", fecha: "2025" }
];
