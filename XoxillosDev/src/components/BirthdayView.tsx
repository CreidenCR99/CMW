/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, Calendar, ArrowUpDown, Clock, SortAsc, User, Eye, EyeOff } from "lucide-react";
import confetti from "canvas-confetti";
import { Birthday, SortOption } from "../types";
import { sortAndFilterBirthdays, calculateCountdown, getFormattedDateSpanish, getNextBirthdayDate } from "../utils";

interface BirthdayViewProps {
  birthdays: Birthday[];
}

export const BirthdayView: React.FC<BirthdayViewProps> = ({ birthdays }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortType, setSortType] = useState<SortOption>("recent");
  const [showHidden, setShowHidden] = useState(false);
  const [tick, setTick] = useState(Date.now());

  // Unified clock tick for atomic synchronized state updates across all cards
  useEffect(() => {
    const timer = setInterval(() => {
      setTick(Date.now());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Filter out visible/invisible depending on state
  const displayedBirthdays = birthdays.filter(b => showHidden || b.visible !== false);
  const sortedAndFiltered = sortAndFilterBirthdays(displayedBirthdays, searchQuery, sortType);

  // Trigger interactive canvas-confetti blast on click
  const handleConfetti = (e: React.MouseEvent<HTMLDivElement>, isToday: boolean) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    const origin = x && y ? { x, y } : { x: 0.5, y: 0.5 };

    if (isToday) {
      confetti({
        particleCount: 125,
        spread: 90,
        origin,
        colors: ["#ec4899", "#f43f5e", "#fb7185", "#fbcfe8", "#fbbf24", "#38bdf8"],
      });
    } else {
      confetti({
        particleCount: 75,
        spread: 60,
        origin,
        colors: ["#ec4899", "#f43f5e", "#fb7185", "#fbcfe8", "#fbbf24"],
      });
    }
  };

  // Compute calculated age if possible (e.g., "(06)" on current year 2026 -> 20 years)
  const formatAgeText = (yearStr: string) => {
    const cleanYear = yearStr.replace(/[()]/g, "").trim();
    const parsed = parseInt(cleanYear, 10);
    if (!isNaN(parsed)) {
      // If of type "06", determine absolute birth year (usually 2000s)
      const fullBirthYear = parsed < 30 ? 2000 + parsed : 1900 + parsed;
      const currentYear = new Date().getFullYear(); // e.g. 2026
      const age = currentYear - fullBirthYear;
      return `(${age} años)`;
    }
    return "";
  };

  return (
    <div className="w-full">
      {/* Search & Sort HUD Controller */}
      <motion.div
        initial={{ y: -15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="mb-8 rounded-3xl border border-pink-500/10 bg-black/40 p-5 shadow-[0_4px_30px_rgba(0,0,0,0.5)] backdrop-blur-md"
      >
        <div className="flex flex-col gap-4">
          {/* Search bar inside glass wrapper */}
          <div className="relative flex items-center">
            <Search className="absolute left-4 h-5 w-5 text-pink-400/70" />
            <input
              type="text"
              id="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar persona por nombre..."
              className="w-full rounded-2xl border border-pink-500/15 bg-zinc-950/60 py-3.5 pl-12 pr-4 text-zinc-100 placeholder-zinc-500 focus:border-pink-500/50 focus:outline-none focus:ring-1 focus:ring-pink-500/30 transition-all text-sm outline-none"
            />
          </div>

          {/* Liquid Control Buttons */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-1.5 bg-zinc-950/50 p-1.5 rounded-2xl border border-zinc-800/60">
              <button
                id="btn-sort-recent"
                onClick={() => setSortType("recent")}
                className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium rounded-xl transition-all cursor-pointer ${
                  sortType === "recent"
                    ? "bg-gradient-to-r from-pink-600 to-rose-600 text-white shadow-[0_2px_10px_rgba(253,51,149,0.3)]"
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                <Clock className="h-3.5 w-3.5" />
                Más Recientes
              </button>
              <button
                id="btn-sort-chronological"
                onClick={() => setSortType("chronological")}
                className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium rounded-xl transition-all cursor-pointer ${
                  sortType === "chronological"
                    ? "bg-gradient-to-r from-pink-600 to-rose-600 text-white shadow-[0_2px_10px_rgba(253,51,149,0.3)]"
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                <Calendar className="h-3.5 w-3.5" />
                Cronológico (Ene-Dic)
              </button>
              <button
                id="btn-sort-alphabetical"
                onClick={() => setSortType("alphabetical")}
                className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium rounded-xl transition-all cursor-pointer ${
                  sortType === "alphabetical"
                    ? "bg-gradient-to-r from-pink-600 to-rose-600 text-white shadow-[0_2px_10px_rgba(253,51,149,0.3)]"
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                <SortAsc className="h-3.5 w-3.5" />
                Alfabético
              </button>
            </div>

            {/* Toggle show status (visible: false list) */}
            <button
              id="btn-toggle-hidden"
              onClick={() => setShowHidden(!showHidden)}
              className="flex items-center self-end gap-2 px-4 py-2 bg-zinc-900/55 hover:bg-zinc-800/80 border border-zinc-800 rounded-xl text-xs text-zinc-300 font-medium transition-colors cursor-pointer"
            >
              {showHidden ? <Eye className="h-3.5 w-3.5 text-pink-400" /> : <EyeOff className="h-3.5 w-3.5 text-zinc-500" />}
              {showHidden ? "Ocultar invisibles" : "Mostrar invisibles"}
            </button>
          </div>
        </div>
      </motion.div>

      {/* Birthday Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {sortedAndFiltered.map((user, idx) => {
            const nextBirthday = getNextBirthdayDate(user.date);
            const status = calculateCountdown(nextBirthday);
            const ageDisplay = formatAgeText(user.year);

            return (
              <motion.div
                key={`${user.name}-${user.date}`}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={(e) => handleConfetti(e, status.isToday)}
                transition={{ type: "spring", stiffness: 220, damping: 20 }}
                viewport={{ once: true }}
                className={`relative flex flex-col justify-between overflow-hidden rounded-2xl border bg-black/30 p-5 backdrop-blur-md transition-all duration-300 cursor-pointer select-none ${
                  status.isToday
                    ? "border-pink-500 bg-pink-950/15 shadow-[0_0_20px_rgba(253,51,149,0.3)]"
                    : "border-pink-500/10 hover:border-pink-500/30 hover:bg-black/40 shadow-md"
                }`}
                title="¡Haz clic para celebrar!"
              >
                {/* Special background aura for birthdays happening today */}
                {status.isToday && (
                  <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-pink-500/10 to-rose-500/10" />
                )}

                {/* Card Header information */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${status.isToday ? "bg-gradient-to-tr from-pink-500 to-rose-500 text-white" : "bg-pink-950/20 text-pink-400"}`}>
                      <User className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-sans font-bold text-base text-zinc-100 flex items-center gap-1.5">
                          {user.name}
                          {status.isToday && <span>🎉</span>}
                        </h3>
                        {!user.visible && (
                          <span className="rounded bg-zinc-800 px-1.5 py-0.5 text-[9px] font-medium text-zinc-400 uppercase">
                            Invisible
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-zinc-400 self-start">
                        {getFormattedDateSpanish(user.date, user.year)}
                      </p>
                    </div>
                  </div>

                  {/* Age text calculation bubble */}
                  {ageDisplay && (
                    <div className="rounded-full bg-pink-500/10 px-2.5 py-1 text-[11px] font-bold text-pink-400">
                      {ageDisplay}
                    </div>
                  )}
                </div>

                {/* Clock indicator / Countdown readout */}
                <div className="mt-5 pt-3.5 border-t border-zinc-800/50 flex flex-col items-center">
                  {status.isToday ? (
                    <div className="text-center w-full bg-pink-500/20 rounded-xl py-3 border border-pink-400/40">
                      <span className="text-sm font-bold tracking-widest text-pink-400 block uppercase animate-bounce">
                        👑 ¡HOY ES SU CUMPLE! 👑
                      </span>
                      <span className="text-xs text-zinc-300 mt-1 block">
                        ¡Mándale un mensaje ahora mismo!
                      </span>
                    </div>
                  ) : (
                    <div className="w-full">
                      <div className="text-[10px] text-zinc-500 font-semibold tracking-wider uppercase mb-1.5 text-center">
                        Cuenta Atrás para el Evento
                      </div>
                      <div className="flex items-center justify-center gap-2 text-zinc-100">
                        {/* Days box */}
                        <div className="flex flex-col items-center min-w-10">
                          <span className="text-lg font-bold font-mono text-zinc-100">{status.days}</span>
                          <span className="text-[9px] text-zinc-500 uppercase tracking-widest">Días</span>
                        </div>
                        <span className="text-sm text-pink-500 font-bold mb-3">:</span>
                        {/* Hours box */}
                        <div className="flex flex-col items-center min-w-10">
                          <span className="text-lg font-bold font-mono text-zinc-100">{String(status.hours).padStart(2, "0")}</span>
                          <span className="text-[9px] text-zinc-500 uppercase tracking-widest">Horas</span>
                        </div>
                        <span className="text-sm text-pink-500 font-bold mb-3">:</span>
                        {/* Minutes box */}
                        <div className="flex flex-col items-center min-w-10">
                          <span className="text-lg font-bold font-mono text-zinc-100">{String(status.minutes).padStart(2, "0")}</span>
                          <span className="text-[9px] text-zinc-500 uppercase tracking-widest">Min</span>
                        </div>
                        <span className="text-sm text-pink-500 font-bold mb-3">:</span>
                        {/* Seconds box */}
                        <div className="flex flex-col items-center min-w-10">
                          <span className="text-lg font-bold font-mono text-pink-400">{String(status.seconds).padStart(2, "0")}</span>
                          <span className="text-[9px] text-zinc-500 uppercase tracking-widest">Seg</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>

        {sortedAndFiltered.length === 0 && (
          <div className="col-span-full py-16 text-center">
            <User className="mx-auto h-12 w-12 text-zinc-600 mb-3" />
            <p className="text-zinc-400 font-medium">No se encontraron personas con ese nombre.</p>
            <p className="text-xs text-zinc-600 mt-1">Prueba reescribiendo la búsqueda o agrega un nuevo miembro.</p>
          </div>
        )}
      </div>
    </div>
  );
};
