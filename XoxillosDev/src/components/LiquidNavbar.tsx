/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Cake, CalendarDays, MessageSquareQuote, PlusCircle } from "lucide-react";

interface NavItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface LiquidNavbarProps {
  activeTab: string;
  setActiveTab: (tabId: string) => void;
}

export const LiquidNavbar: React.FC<LiquidNavbarProps> = ({
  activeTab,
  setActiveTab,
}) => {
  const items: NavItem[] = [
    { id: "cumples", label: "Cumples", icon: Cake },
    { id: "eventos", label: "Eventos", icon: CalendarDays },
    { id: "frases", label: "Frases", icon: MessageSquareQuote },
    { id: "gestior", label: "Crear", icon: PlusCircle },
  ];

  return (
    <div className="fixed bottom-6 left-0 right-0 z-50 flex justify-center px-4 md:px-0">
      <motion.nav
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
        className="relative flex items-center gap-1 rounded-3xl border border-pink-500/15 bg-black/40 px-3 py-2 shadow-[0_8px_32px_0_rgba(109,21,57,0.3)] backdrop-blur-2xl md:gap-3"
      >
        {items.map((item) => {
          const IconComponent = item.icon;
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className="relative flex flex-col items-center justify-center rounded-2xl px-3 py-2 text-xs font-medium transition-colors outline-none cursor-pointer select-none md:flex-row md:gap-2 md:px-4 md:text-sm"
              style={{ WebkitTapHighlightColor: "transparent" }}
            >
              {/* Liquid indicator background */}
              {isActive && (
                <motion.div
                  layoutId="liquid-crystal-pill"
                  className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-pink-500/20 via-pink-600/20 to-rose-500/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_0_15px_rgba(253,51,149,0.25)] border border-pink-400/30"
                  transition={{
                    type: "spring",
                    stiffness: 180,
                    damping: 18,
                  }}
                />
              )}

              {/* Icon & Label with glowing contrast */}
              <IconComponent
                className={`h-5 w-5 md:h-4 md:w-4 transition-all duration-300 ${
                  isActive
                    ? "text-pink-400 scale-110 drop-shadow-[0_0_5px_rgba(253,51,149,0.8)]"
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
              />
              <span
                className={`hidden min-w-[50px] text-center md:inline transition-all duration-300 ${
                  isActive
                    ? "text-zinc-100 font-semibold drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]"
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                {item.label}
              </span>
              <span
                className={`inline md:hidden text-[9px] mt-0.5 transition-all duration-300 ${
                  isActive ? "text-pink-400 font-bold" : "text-zinc-500"
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </motion.nav>
    </div>
  );
};
