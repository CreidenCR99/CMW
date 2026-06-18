/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { CalendarDays, Hourglass, Landmark, HelpCircle, Trophy } from "lucide-react";
import { Birthday, GroupEvent } from "../types";
import { getNextBirthdayDate, calculateCountdown } from "../utils";

interface EventsViewProps {
  events: GroupEvent[];
  birthdays: Birthday[];
}

export const EventsView: React.FC<EventsViewProps> = ({ events, birthdays }) => {
  const [tick, setTick] = useState(Date.now());

  useEffect(() => {
    const timer = setInterval(() => {
      setTick(Date.now());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Compute upcoming birthdays to showcase the very next occurrence(s) as featured top card(s)
  const visibleBirthdays = birthdays.filter((b) => b.visible !== false);
  
  // Find which birthdays have the minimum distance/days left
  const withDates = visibleBirthdays.map((b) => {
    const nextDate = getNextBirthdayDate(b.date);
    const distance = nextDate.getTime() - tick;
    return { ...b, nextDate, distance };
  });

  // Sort them to get the closest ones
  const sortedUpcoming = [...withDates].sort((a, b) => a.distance - b.distance);
  const minDistance = sortedUpcoming.length > 0 ? sortedUpcoming[0].distance : 0;
  
  // Accept birthdays that fall on the closest date (e.g. within a 24h threshold if dates are very close, or matching the exact min distance)
  // Let's grab all birthdays happening within the same closest day to show multiple if there are concurrent ones!
  const nextBirthdaysAsEvents = sortedUpcoming.filter(
    (b) => Math.abs(b.distance - minDistance) < 24 * 60 * 60 * 1000
  );

  return (
    <div className="w-full space-y-8">
      {/* Featured Header Notification */}
      <div className="border border-pink-500/10 bg-gradient-to-r from-pink-950/20 via-black/40 to-zinc-950/40 rounded-3xl p-6 shadow-2xl backdrop-blur-md">
        <h2 className="text-xl font-bold text-zinc-100 flex items-center gap-2 mb-2">
          <Trophy className="h-5 w-5 text-pink-400 animate-pulse" />
          Lo Siguiente en el Calendario
        </h2>
        <p className="text-xs text-zinc-400">
          Los planes grupales más cercanos y los cumpleaños a los que les queda menos tiempo de espera. ¡Prepara los regalos!
        </p>
      </div>

      {/* Part 1: Upcoming Featured Birthdays */}
      {nextBirthdaysAsEvents.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-pink-400/80 mb-3 px-1">
            🌟 Próximos Cumpleaños Destacados
          </h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {nextBirthdaysAsEvents.map((b, idx) => {
              const status = calculateCountdown(b.nextDate);
              const formattedDay = `${b.nextDate.getDate()}/${b.nextDate.getMonth() + 1}`;

              return (
                <motion.div
                  key={`featured-birthday-${b.name}`}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative overflow-hidden rounded-2xl border border-pink-500/30 bg-gradient-to-b from-pink-950/20 to-black/60 p-5 shadow-[0_4px_25px_rgba(253,51,149,0.15)] align-stretch"
                >
                  <div className="absolute top-0 right-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-pink-500/10 blur-xl" />
                  
                  <div className="flex justify-between items-start mb-3">
                    <span className="inline-flex rounded-full bg-pink-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-pink-400 border border-pink-500/20">
                      ¡Próximo Cumple! 🎉
                    </span>
                    <span className="text-sm font-mono font-bold text-pink-400">{formattedDay}</span>
                  </div>

                  <h4 className="text-xl font-extrabold text-white mb-1 tracking-tight">
                    Cumple de {b.name} <span className="text-sm text-zinc-400 font-normal">{b.year}</span>
                  </h4>
                  <p className="text-xs text-zinc-400 mb-4">
                    Su gran día está llegando. ¿Tienes listo el mensaje de felicitación?
                  </p>

                  <div className="rounded-xl bg-zinc-950/70 p-3.5 border border-zinc-900 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-zinc-300 text-xs">
                      <Hourglass className="h-4 w-4 text-pink-400 animate-spin" style={{ animationDuration: "3s" }} />
                      <span>Falta:</span>
                    </div>

                    {status.isToday ? (
                      <span className="text-sm font-extrabold tracking-widest text-pink-400 uppercase animate-pulse">
                        ¡HOY! 👑
                      </span>
                    ) : (
                      <div className="font-mono text-sm font-bold text-zinc-200">
                        {status.days}d {status.hours}h {status.minutes}m {status.seconds}s
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      )}

      {/* Part 2: Main Event lists (San Juan, Madrid Voyage, etc) */}
      <div className="space-y-4">
        <h3 className="text-sm font-bold uppercase tracking-wider text-pink-400/80 mb-3 px-1">
          📅 Eventos y Viajes Oficiales
        </h3>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {events.map((event, idx) => {
            // Determine type of event (single or multi-day range)
            const isRange = !!(event.start && event.end);
            const targetStart = isRange ? new Date(event.start!) : new Date(event.date!);
            const targetEnd = isRange ? new Date(event.end!) : new Date(event.date!);
            
            // Set end of single day event to the end of that day (23:59:59) for consistency
            if (!isRange) {
              targetEnd.setHours(23, 59, 59, 999);
            }

            const now = new Date();
            const started = now >= targetStart;
            const finished = now > targetEnd;
            const distance = targetStart.getTime() - now.getTime();

            // Format representation
            let formattedPeriod = "";
            if (isRange) {
              const startD = targetStart;
              const endD = targetEnd;
              formattedPeriod = `${startD.getDate()}/${startD.getMonth() + 1}/${startD.getFullYear()} - ${endD.getDate()}/${endD.getMonth() + 1}/${endD.getFullYear()}`;
            } else {
              formattedPeriod = `${targetStart.getDate()}/${targetStart.getMonth() + 1}/${targetStart.getFullYear()}`;
            }

            // Calculate countdown distance
            let countdownString = "";
            let badgeText = "Próximamente";
            let badgeColor = "bg-zinc-800 text-zinc-400 border-zinc-700";

            if (finished) {
              badgeText = "Terminado";
              badgeColor = "bg-zinc-950 text-zinc-600 border-transparent opacity-60";
              countdownString = "Evento concluido";
            } else if (started) {
              badgeText = "¡AHORA MISMO! 🔥";
              badgeColor = "bg-pink-600/30 text-pink-300 border-pink-500/40 animate-pulse";
              countdownString = "¡El plan está sucediendo hoy!";
            } else {
              // Active upcoming countdown
              const days = Math.floor(distance / (1000 * 60 * 60 * 24));
              const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
              const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
              const seconds = Math.floor((distance % (1000 * 60)) / 1000);
              countdownString = `${days}d ${hours}h ${minutes}m ${seconds}s`;
            }

            return (
              <motion.div
                key={`group-event-${event.name}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.15 + idx * 0.08 }}
                className={`relative flex flex-col justify-between rounded-2xl border bg-black/40 p-5 backdrop-blur-md hover:border-pink-500/30 transition-all ${
                  started && !finished ? "border-pink-500/50 shadow-[0_0_15px_rgba(253,51,149,0.15)]" : "border-zinc-800/60"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className={`rounded-xl px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest border ${badgeColor}`}>
                      {badgeText}
                    </span>
                    <span className="text-xs font-semibold text-zinc-400">{formattedPeriod}</span>
                  </div>

                  <h4 className="text-lg font-bold text-zinc-100 flex items-center gap-2">
                    <CalendarDays className="h-4.5 w-4.5 text-pink-400" />
                    {event.name}
                  </h4>
                  {event.description && (
                    <p className="text-xs text-zinc-500 mt-1.5">{event.description}</p>
                  )}
                </div>

                <div className="mt-5 pt-3.5 border-t border-zinc-900 flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-bold">Countdown</span>
                  <span className={`font-mono text-sm font-bold ${started && !finished ? "text-pink-400" : "text-zinc-300"}`}>
                    {countdownString}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
