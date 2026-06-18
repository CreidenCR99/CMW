/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Calendar, Users, HeartIcon } from "lucide-react";

// Types & Data
import { Birthday, GroupEvent, Quote } from "./types";
import { initialBirthdays, initialEvents, initialQuotes } from "./data";

// Sub-components
import { LiquidNavbar } from "./components/LiquidNavbar";
import { BirthdayView } from "./components/BirthdayView";
import { EventsView } from "./components/EventsView";
import { QuotesView } from "./components/QuotesView";
import { GestionView } from "./components/GestionView";

// Generated Visual Assets
import bgFlames from ".assets/images/background.png";
import iconLogo from ".assets/images/icon.jpg";

export default function App() {
  const [activeTab, setActiveTab] = useState<string>("cumples");

  // State synchronized with localStorage
  const [birthdays, setBirthdays] = useState<Birthday[]>(() => {
    const saved = localStorage.getItem("xoxetinos_birthdays");
    return saved ? JSON.parse(saved) : initialBirthdays;
  });

  const [events, setEvents] = useState<GroupEvent[]>(() => {
    const saved = localStorage.getItem("xoxetinos_events");
    return saved ? JSON.parse(saved) : initialEvents;
  });

  const [quotes, setQuotes] = useState<Quote[]>(() => {
    const saved = localStorage.getItem("xoxetinos_quotes");
    return saved ? JSON.parse(saved) : initialQuotes;
  });

  // Sync state with localStorage
  useEffect(() => {
    localStorage.setItem("xoxetinos_birthdays", JSON.stringify(birthdays));
  }, [birthdays]);

  useEffect(() => {
    localStorage.setItem("xoxetinos_events", JSON.stringify(events));
  }, [events]);

  useEffect(() => {
    localStorage.setItem("xoxetinos_quotes", JSON.stringify(quotes));
  }, [quotes]);

  // Handle actions
  const handleAddBirthday = (newB: Birthday) => {
    setBirthdays((prev) => [newB, ...prev]);
  };

  const handleAddEvent = (newE: GroupEvent) => {
    setEvents((prev) => [newE, ...prev]);
  };

  const handleAddQuote = (newQ: Quote) => {
    setQuotes((prev) => [newQ, ...prev]);
  };

  const handleLikeQuote = (id: string) => {
    setQuotes((prev) =>
      prev.map((q) => (q.id === id ? { ...q, likes: (q.likes || 0) + 1 } : q))
    );
  };

  // Quick stats computed widgets
  const totalVisibleMembers = birthdays.filter((b) => b.visible).length;
  const totalQuotes = quotes.length;
  const activeEventsCount = events.length;

  return (
    <div
      className="min-h-screen w-full relative overflow-x-hidden text-zinc-100 bg-neutral-950 font-sans pb-32"
      style={{
        backgroundImage: `url(${bgFlames})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Absolute background color overlay for premium contrast & legibility */}
      <div className="absolute inset-0 bg-neutral-950/85 backdrop-blur-[2px] pointer-events-none -z-10" />

      {/* Main container */}
      <div className="w-full max-w-4xl mx-auto px-4 pt-8 md:px-6">
        
        {/* HEADER SECTION WITH LOGO */}
        <header className="flex flex-col items-center text-center mt-4 mb-10">
          {/* Glowing Animated Circular Emblem Logo matches "icon7" */}
          <motion.div
            animate={{
              y: [0, -6, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative mb-4 cursor-pointer select-none"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-pink-500 to-rose-500 blur-md opacity-70 animate-pulse" />
            <img
              src={iconLogo}
              alt="Xoxetinos App Icon Logo"
              referrerPolicy="no-referrer"
              className="relative h-20 w-20 rounded-full border-2 border-pink-400/40 p-0.5 object-cover shadow-[0_0_20px_rgba(253,51,149,0.4)]"
            />
          </motion.div>

          <h1 className="font-display text-4xl md:text-5xl font-black tracking-tight bg-gradient-to-b from-zinc-50 via-zinc-100 to-pink-500 bg-clip-text text-transparent glow-title pr-1">
            Xoxetinos
          </h1>
          <p className="text-zinc-400 text-sm md:text-base font-semibold mt-1 tracking-tight">
            Nuestros Cumpleaños, Eventos y Frases Célebres 🤹
          </p>

          {/* Miniature Group HUD Stats cards */}
          <div className="flex flex-wrap justify-center gap-3.5 mt-6 w-full max-w-md">
            <div className="flex items-center gap-2 rounded-2xl bg-black/45 border border-zinc-900/60 px-4 py-2.5 shadow-sm text-xs backdrop-blur-md">
              <Users className="h-4 w-4 text-pink-400" />
              <span className="font-bold text-zinc-300">{totalVisibleMembers} Compas</span>
            </div>
            <div className="flex items-center gap-2 rounded-2xl bg-black/45 border border-zinc-900/60 px-4 py-2.5 shadow-sm text-xs backdrop-blur-md">
              <Calendar className="h-4 w-4 text-pink-400" />
              <span className="font-bold text-zinc-300">{activeEventsCount} Planes</span>
            </div>
            <div className="flex items-center gap-2 rounded-2xl bg-black/45 border border-zinc-900/60 px-4 py-2.5 shadow-sm text-xs backdrop-blur-md">
              <Sparkles className="h-4 w-4 text-pink-400" />
              <span className="font-bold text-zinc-300">{totalQuotes} Frases</span>
            </div>
          </div>
        </header>

        {/* COMPONENT RENDER VIEWS */}
        <main className="relative w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3, cubicBezier: [0.16, 1, 0.3, 1] }}
            >
              {activeTab === "cumples" && <BirthdayView birthdays={birthdays} />}
              {activeTab === "eventos" && <EventsView events={events} birthdays={birthdays} />}
              {activeTab === "frases" && <QuotesView quotes={quotes} onLikeQuote={handleLikeQuote} />}
              {activeTab === "gestior" && (
                <GestionView
                  onAddBirthday={handleAddBirthday}
                  onAddEvent={handleAddEvent}
                  onAddQuote={handleAddQuote}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>

      {/* FLOAT GLASS LIQUID CUSTOM NAVIGATION */}
      <LiquidNavbar activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}
