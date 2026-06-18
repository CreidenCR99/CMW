/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Birthday {
  name: string;
  date: string; // e.g. "Oct 6", "Feb 5"
  year: string; // e.g. "(21)", "(06)"
  visible: boolean;
  nextDateObj?: Date;
  daysRemaining?: number;
}

export interface GroupEvent {
  name: string;
  date?: string; // e.g. "2026-06-23"
  start?: string; // e.g. "2026-08-18"
  end?: string; // e.g. "2026-08-21"
  description?: string;
  dateObj?: Date;
  startObj?: Date;
  endObj?: Date;
}

export interface Quote {
  id: string; // e.g. "A", "B"
  texto: string;
  autor: string;
  fecha: string; // e.g. "2021", "2025"
  likes?: number; // extra interactive feature!
}

export type SortOption = "recent" | "chronological" | "alphabetical";
