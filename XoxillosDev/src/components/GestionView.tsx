/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { UserPlus, CalendarPlus, Quote as QuoteIcon, HelpCircle, Sparkles, CheckCircle } from "lucide-react";
import { Birthday, GroupEvent, Quote } from "../types";

interface GestionViewProps {
  onAddBirthday: (birthday: Birthday) => void;
  onAddEvent: (event: GroupEvent) => void;
  onAddQuote: (quote: Quote) => void;
}

export const GestionView: React.FC<GestionViewProps> = ({
  onAddBirthday,
  onAddEvent,
  onAddQuote,
}) => {
  const [activeForm, setActiveForm] = useState<"birthday" | "event" | "quote">("birthday");
  const [successMsg, setSuccessMsg] = useState("");

  // Form states: Birthday
  const [bName, setBName] = useState("");
  const [bMonth, setBMonth] = useState("Jan");
  const [bDay, setBDay] = useState("1");
  const [bYear, setBYear] = useState("");
  const [bVisible, setBVisible] = useState(true);

  // Form states: Event
  const [eName, setEName] = useState("");
  const [eDate, setEDate] = useState("");
  const [eStart, setEStart] = useState("");
  const [eEnd, setEEnd] = useState("");
  const [eDesc, setEDesc] = useState("");
  const [eIsRange, setEIsRange] = useState(false);

  // Form states: Quote
  const [qText, setQText] = useState("");
  const [qAuthor, setQAuthor] = useState("");
  const [qYear, setQYear] = useState(String(new Date().getFullYear()));

  const handleSuccess = (msg: string) => {
    setSuccessMsg(msg);
    setTimeout(() => {
      setSuccessMsg("");
    }, 3500);
  };

  const handleBirthdaySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bName.trim() || !bDay) return;
    
    // Format: "Oct 6"
    const finalDateStr = `${bMonth} ${bDay}`;
    // Format: "(06)"
    const cleanYear = bYear.replace(/[()]/g, "").trim().slice(-2);
    const finalYearStr = cleanYear ? `(${cleanYear.padStart(2, "0")})` : "";

    const newB: Birthday = {
      name: bName.trim(),
      date: finalDateStr,
      year: finalYearStr,
      visible: bVisible,
    };

    onAddBirthday(newB);
    handleSuccess(`¡Cumpleaños de ${bName} guardado con éxito!`);
    
    // Reset fields
    setBName("");
    setBYear("");
  };

  const handleEventSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!eName.trim()) return;

    if (!eIsRange && !eDate) return;
    if (eIsRange && (!eStart || !eEnd)) return;

    const newE: GroupEvent = {
      name: eName.trim(),
      description: eDesc.trim() || undefined,
      ...(eIsRange
        ? { start: eStart, end: eEnd }
        : { date: eDate }),
    };

    onAddEvent(newE);
    handleSuccess(`¡Evento "${eName}" programado con éxito!`);

    // Reset fields
    setEName("");
    setEDate("");
    setEStart("");
    setEEnd("");
    setEDesc("");
  };

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!qText.trim() || !qAuthor.trim()) return;

    const newQ: Quote = {
      id: Math.random().toString(36).substring(2, 7).toUpperCase(),
      texto: qText.trim(),
      autor: qAuthor.trim(),
      fecha: qYear.trim() || String(new Date().getFullYear()),
      likes: 0,
    };

    onAddQuote(newQ);
    handleSuccess(`¡Frase de ${qAuthor} añadida a la posteridad!`);

    // Reset fields
    setQText("");
    setQAuthor("");
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6 pb-24">
      {/* Selector tab header */}
      <div className="flex border border-pink-500/10 rounded-2xl p-1 bg-black/40 backdrop-blur-md">
        <button
          onClick={() => setActiveForm("birthday")}
          className={`flex-1 flex items-center justify-center gap-1.5 py-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeForm === "birthday"
              ? "bg-pink-600/20 border border-pink-500/20 text-pink-400"
              : "text-zinc-400 hover:text-zinc-200"
          }`}
        >
          <UserPlus className="h-4 w-4" />
          Nuevo Cumple
        </button>
        <button
          onClick={() => setActiveForm("event")}
          className={`flex-1 flex items-center justify-center gap-1.5 py-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeForm === "event"
              ? "bg-pink-600/20 border border-pink-500/20 text-pink-400"
              : "text-zinc-400 hover:text-zinc-200"
          }`}
        >
          <CalendarPlus className="h-4 w-4" />
          Plan Grupal
        </button>
        <button
          onClick={() => setActiveForm("quote")}
          className={`flex-1 flex items-center justify-center gap-1.5 py-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeForm === "quote"
              ? "bg-pink-600/20 border border-pink-500/20 text-pink-400"
              : "text-zinc-400 hover:text-zinc-200"
          }`}
        >
          <QuoteIcon className="h-4 w-4" />
          Frase Histórica
        </button>
      </div>

      {/* Success Notification Pop */}
      <AnimatePresence>
        {successMsg && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            className="flex items-center gap-2.5 bg-emerald-950/40 border border-emerald-500/40 text-emerald-400 p-4 rounded-2xl shadow-xl"
          >
            <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0 animate-bounce" />
            <span className="text-sm font-semibold">{successMsg}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Form Card wrapper */}
      <div className="rounded-3xl border border-pink-500/10 bg-black/40 p-6 shadow-2xl backdrop-blur-md">
        
        {/* FORM 1: BIRTHDAY FORM */}
        {activeForm === "birthday" && (
          <form onSubmit={handleBirthdaySubmit} className="space-y-4">
            <h3 className="text-base font-bold text-zinc-100 flex items-center gap-2 mb-1">
              <Sparkles className="h-4 w-4 text-pink-400" />
              Añadir un Cumpleaños
            </h3>
            <p className="text-xs text-zinc-400 mb-4">
              Añade un amigo al calendario del grupo para que se le calcule la edad y su cuenta atrás aparezca en la portada.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-zinc-400 mb-1.5">Nombre o Apodo *</label>
                <input
                  type="text"
                  required
                  value={bName}
                  onChange={(e) => setBName(e.target.value)}
                  placeholder="Ej: Mariano"
                  className="w-full rounded-xl border border-zinc-800 bg-zinc-950/60 p-3 text-sm text-zinc-100 focus:border-pink-500/50 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-400 mb-1.5">Año de nacimiento (Opcional)</label>
                <input
                  type="number"
                  value={bYear}
                  onChange={(e) => setBYear(e.target.value)}
                  placeholder="Ej: 2006 (para saber la edad)"
                  className="w-full rounded-xl border border-zinc-800 bg-zinc-950/60 p-3 text-sm text-zinc-100 focus:border-pink-500/50 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-zinc-400 mb-1.5">Mes *</label>
                <select
                  value={bMonth}
                  onChange={(e) => setBMonth(e.target.value)}
                  className="w-full rounded-xl border border-zinc-800 bg-zinc-950/90 p-3 text-sm text-zinc-100 focus:border-pink-500/50 focus:outline-none"
                >
                  <option value="Jan">Enero</option>
                  <option value="Feb">Febrero</option>
                  <option value="Mar">Marzo</option>
                  <option value="Apr">Abril</option>
                  <option value="May">Mayo</option>
                  <option value="Jun">Junio</option>
                  <option value="Jul">Julio</option>
                  <option value="Aug">Agosto</option>
                  <option value="Sep">Septiembre</option>
                  <option value="Oct">Octubre</option>
                  <option value="Nov">Noviembre</option>
                  <option value="Dec">Diciembre</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-400 mb-1.5">Día *</label>
                <select
                  value={bDay}
                  onChange={(e) => setBDay(e.target.value)}
                  className="w-full rounded-xl border border-zinc-800 bg-zinc-950/90 p-3 text-sm text-zinc-100 focus:border-pink-500/50 focus:outline-none"
                >
                  {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                    <option key={day} value={String(day)}>
                      {day}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="flex items-center gap-2 cursor-pointer mt-2">
                <input
                  type="checkbox"
                  checked={bVisible}
                  onChange={(e) => setBVisible(e.target.checked)}
                  className="h-4 w-4 rounded border-zinc-800 bg-zinc-900 text-pink-500 focus:ring-0 cursor-pointer"
                />
                <span className="text-xs text-zinc-300 select-none">Cumpleaños visible en la página principal</span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-3 mt-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-pink-600 via-pink-700 to-rose-600 hover:opacity-90 select-none cursor-pointer text-white shadow-lg transition-all"
            >
              Registrar Cumpleaños
            </button>
          </form>
        )}

        {/* FORM 2: EVENT FORM */}
        {activeForm === "event" && (
          <form onSubmit={handleEventSubmit} className="space-y-4">
            <h3 className="text-base font-bold text-zinc-100 flex items-center gap-2 mb-1">
              <CalendarPlus className="h-4 w-4 text-pink-400" />
              Programar Evento o Viaje
            </h3>
            <p className="text-xs text-zinc-400 mb-4">
              Crea un evento grupal (pistas de fiesta, cenas, viajes a la playa) para que todos puedan ver cuántos días quedan para el plan.
            </p>

            <div>
              <label className="block text-xs font-bold text-zinc-400 mb-1.5">Título del Evento *</label>
              <input
                type="text"
                required
                value={eName}
                onChange={(e) => setEName(e.target.value)}
                placeholder="Ej: Barbacoa San Juan 🔥"
                className="w-full rounded-xl border border-zinc-800 bg-zinc-950/60 p-3 text-sm text-zinc-100 focus:border-pink-500/50 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-zinc-400 mb-1.5">Descripción o Lugar (Opcional)</label>
              <input
                type="text"
                value={eDesc}
                onChange={(e) => setEDesc(e.target.value)}
                placeholder="Ej: En la finca de Elías, traer bebidas"
                className="w-full rounded-xl border border-zinc-800 bg-zinc-950/60 p-3 text-sm text-zinc-100 focus:border-pink-500/50 focus:outline-none"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 cursor-pointer mb-3">
                <input
                  type="checkbox"
                  checked={eIsRange}
                  onChange={(e) => setEIsRange(e.target.checked)}
                  className="h-4 w-4 rounded border-zinc-800 bg-zinc-900 text-pink-500 focus:ring-0 cursor-pointer"
                />
                <span className="text-xs text-zinc-300 select-none">Es un viaje de varios días (fecha de inicio y fin)</span>
              </label>
            </div>

            {!eIsRange ? (
              <div>
                <label className="block text-xs font-bold text-zinc-400 mb-1.5">Fecha del Evento *</label>
                <input
                  type="date"
                  required={!eIsRange}
                  value={eDate}
                  onChange={(e) => setEDate(e.target.value)}
                  className="w-full rounded-xl border border-zinc-800 bg-zinc-950/60 p-3 text-sm text-zinc-100 focus:border-pink-500/50 focus:outline-none"
                />
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-zinc-400 mb-1.5">Fecha de Inicio *</label>
                  <input
                    type="date"
                    required={eIsRange}
                    value={eStart}
                    onChange={(e) => setEStart(e.target.value)}
                    className="w-full rounded-xl border border-zinc-800 bg-zinc-950/60 p-3 text-sm text-zinc-100 focus:border-pink-500/50 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-zinc-400 mb-1.5">Fecha de Fin *</label>
                  <input
                    type="date"
                    required={eIsRange}
                    value={eEnd}
                    onChange={(e) => setEEnd(e.target.value)}
                    className="w-full rounded-xl border border-zinc-800 bg-zinc-950/60 p-3 text-sm text-zinc-100 focus:border-pink-500/50 focus:outline-none"
                  />
                </div>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3 mt-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-pink-600 via-pink-700 to-rose-600 hover:opacity-90 select-none cursor-pointer text-white shadow-lg transition-all"
            >
              Publicar Evento
            </button>
          </form>
        )}

        {/* FORM 3: QUOTE FORM */}
        {activeForm === "quote" && (
          <form onSubmit={handleQuoteSubmit} className="space-y-4">
            <h3 className="text-base font-bold text-zinc-100 flex items-center gap-2 mb-1">
              <QuoteIcon className="h-4 w-4 text-pink-400" />
              Inmortalizar Frase Célere
            </h3>
            <p className="text-xs text-zinc-400 mb-4">
              ¿Alguien ha dicho una tontería tremenda, un chiste legendario o una frase de maestro del malabarismo? Escríbela aquí inmediatamente.
            </p>

            <div>
              <label className="block text-xs font-bold text-zinc-400 mb-1.5">La Frase *"</label>
              <textarea
                required
                rows={3}
                value={qText}
                onChange={(e) => setQText(e.target.value)}
                placeholder="Ej: Hasta la vista malabarista 🤹"
                className="w-full rounded-xl border border-zinc-800 bg-zinc-950/60 p-3 text-sm text-zinc-100 focus:border-pink-500/50 focus:outline-none resize-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-zinc-400 mb-1.5">Autor de la frase *</label>
                <input
                  type="text"
                  required
                  value={qAuthor}
                  onChange={(e) => setQAuthor(e.target.value)}
                  placeholder="Ej: Font"
                  className="w-full rounded-xl border border-zinc-800 bg-zinc-950/60 p-3 text-sm text-zinc-100 focus:border-pink-500/50 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-400 mb-1.5">Año *</label>
                <input
                  type="number"
                  required
                  value={qYear}
                  onChange={(e) => setQYear(e.target.value)}
                  placeholder="Ej: 2026"
                  className="w-full rounded-xl border border-zinc-800 bg-zinc-950/60 p-3 text-sm text-zinc-100 focus:border-pink-500/50 focus:outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 mt-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-pink-600 via-pink-700 to-rose-600 hover:opacity-90 select-none cursor-pointer text-white shadow-lg transition-all"
            >
              Guardar Frase Histórica
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
