/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, Heart, Copy, Check, Filter, Search, Sparkles } from "lucide-react";
import { Quote } from "../types";

interface QuotesViewProps {
  quotes: Quote[];
  onLikeQuote: (id: string) => void;
}

export const QuotesView: React.FC<QuotesViewProps> = ({ quotes, onLikeQuote }) => {
  const [selectedYear, setSelectedYear] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Group years from initial quotes (e.g. "2021", "2022", "2023", "2024", "2025")
  const years = ["All", ...Array.from(new Set(quotes.map((q) => q.fecha))).sort()];

  // Filter quotes by selected year and search query
  const filteredQuotes = quotes.filter((q) => {
    const matchesYear = selectedYear === "All" || q.fecha === selectedYear;
    const matchesQuery =
      q.texto.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.autor.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesYear && matchesQuery;
  });

  const handleCopy = (quote: Quote) => {
    const textToCopy = `"${quote.texto}" — ${quote.autor} (${quote.fecha})`;
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopiedId(quote.id);
      setTimeout(() => {
        setCopiedId(null);
      }, 2000);
    });
  };

  return (
    <div className="w-full space-y-6 pb-24">
      {/* Search & Timeline HUD */}
      <div className="rounded-3xl border border-pink-500/10 bg-black/40 p-5 shadow-[0_4px_30px_rgba(0,0,0,0.5)] backdrop-blur-md space-y-4">
        {/* Search bar inside glass wrapper */}
        <div className="relative flex items-center">
          <Search className="absolute left-4 h-5 w-5 text-pink-400/70" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar frase célebre o autor..."
            className="w-full rounded-2xl border border-pink-500/15 bg-zinc-950/60 py-3.5 pl-12 pr-4 text-zinc-100 placeholder-zinc-500 focus:border-pink-500/50 focus:outline-none focus:ring-1 focus:ring-pink-500/30 transition-all text-sm outline-none"
          />
        </div>

        {/* Timeline Year selector */}
        <div className="space-y-2">
          <span className="text-[10px] uppercase font-bold tracking-wider text-pink-400 pl-1 flex items-center gap-1.5">
            <Filter className="h-3 w-3" />
            Línea temporal de frases
          </span>
          
          <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none no-scrollbar -mx-1 px-1">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`flex-none rounded-xl px-4 py-2 text-xs font-semibold select-none cursor-pointer transition-all ${
                  selectedYear === year
                    ? "bg-gradient-to-r from-pink-600 to-rose-600 text-white shadow-[0_2px_10px_rgba(253,51,149,0.3)] border border-pink-400/20"
                    : "bg-zinc-950/45 text-zinc-400 border border-zinc-900 hover:text-zinc-200"
                }`}
              >
                {year === "All" ? "Todas 🔮" : year}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Quotes Cards Stream */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <AnimatePresence mode="popLayout">
          {filteredQuotes.map((quote, idx) => {
            const isCopied = copiedId === quote.id;

            return (
              <motion.div
                key={`quote-card-${quote.id}`}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                viewport={{ once: true }}
                className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-pink-500/10 bg-black/30 p-5 shadow-lg backdrop-blur-md group hover:border-pink-500/20 transition-all"
              >
                {/* Visual Quote mark backdrops */}
                <div className="absolute top-2 left-3 -z-10 font-serif text-[75px] leading-none text-pink-500/5 select-none font-bold">
                  “
                </div>

                <div>
                  <div className="flex justify-between items-start mb-3.5">
                    {/* Badge showing local timestamp metadata */}
                    <span className="rounded-full bg-pink-505/10 bg-pink-950/30 border border-pink-500/10 px-2.5 py-0.5 text-[10px] font-bold text-pink-400 uppercase tracking-widest leading-normal">
                      Frase #{quote.id}
                    </span>
                    <span className="text-xs text-zinc-500 font-mono font-bold">
                      {quote.fecha}
                    </span>
                  </div>

                  <p className="font-sans text-sm md:text-base text-zinc-200 leading-relaxed font-semibold italic pl-1 mb-5">
                    "{quote.texto}"
                  </p>
                </div>

                {/* Footer elements Actions */}
                <div className="pt-3.5 border-t border-zinc-900 flex items-center justify-between">
                  {/* Author detail info */}
                  <span className="text-xs font-bold text-zinc-400">
                    — {quote.autor}
                  </span>

                  {/* Actions (Like & Copy buttons) */}
                  <div className="flex items-center gap-2">
                    {/* Share Copy Button */}
                    <button
                      onClick={() => handleCopy(quote)}
                      title="Copiar frase al portapapeles"
                      className="relative p-2 rounded-xl transition-colors bg-zinc-900/50 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 cursor-pointer"
                    >
                      <AnimatePresence mode="wait" initial={false}>
                        {isCopied ? (
                          <motion.div
                            key="copied-check"
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.5, opacity: 0 }}
                            className="flex items-center gap-1 text-[10px] text-emerald-400 font-bold px-1"
                          >
                            <Check className="h-3.5 w-3.5" />
                            <span>Copiado</span>
                          </motion.div>
                        ) : (
                          <motion.div
                            key="copy-icon"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                          >
                            <Copy className="h-3.5 w-3.5" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </button>

                    {/* Interactive Like/Upvote Button */}
                    <button
                      onClick={() => onLikeQuote(quote.id)}
                      className="flex items-center gap-1.5 p-2 rounded-xl bg-zinc-900/50 hover:bg-zinc-800 text-zinc-400 hover:text-pink-400 transition-colors cursor-pointer"
                    >
                      <motion.div
                        whileTap={{ scale: 1.4 }}
                        animate={quote.likes && quote.likes > 0 ? { scale: [1, 1.25, 1] } : {}}
                        transition={{ duration: 0.3 }}
                      >
                        <Heart
                          className={`h-3.5 w-3.5 ${
                            quote.likes && quote.likes > 0
                              ? "fill-pink-500 text-pink-500 drop-shadow-[0_0_3px_rgba(253,51,149,0.8)]"
                              : ""
                          }`}
                        />
                      </motion.div>
                      <span className="font-mono text-xs font-bold text-zinc-400">
                        {quote.likes || 0}
                      </span>
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>

        {filteredQuotes.length === 0 && (
          <div className="col-span-full py-16 text-center">
            <MessageSquare className="mx-auto h-12 w-12 text-zinc-600 mb-3" />
            <p className="text-zinc-400 font-medium">No se encontraron frases notables para este filtro.</p>
            <p className="text-xs text-zinc-600 mt-1">Prueba seleccionando otro año o modificando el término de búsqueda.</p>
          </div>
        )}
      </div>
    </div>
  );
};
