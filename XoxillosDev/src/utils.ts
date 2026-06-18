/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Birthday } from "./types";

// Map short month string to 0-11 index
export const MONTHS_MAP: { [key: string]: number } = {
  Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
  Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11
};

export const MONTH_NAMES_FULL = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

/**
 * Calculates the next occurrence of a birthday based on its "Month Day" string (e.g. "Oct 6")
 */
export function getNextBirthdayDate(monthDayStr: string): Date {
  const now = new Date();
  const parts = monthDayStr.trim().split(/\s+/);
  if (parts.length < 2) return new Date();
  
  const monthStr = parts[0];
  const day = parseInt(parts[1], 10);
  const monthIndex = MONTHS_MAP[monthStr] !== undefined ? MONTHS_MAP[monthStr] : 0;

  // Compile birthday for this calendar year
  const birthdayThisYear = new Date(now.getFullYear(), monthIndex, day, 0, 0, 0, 0);
  
  // Set comparison representing midnight today to recognize birthdays today properly
  const todayComparison = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0);
  
  if (birthdayThisYear < todayComparison) {
    // If it already passed this year, it falls in the next year
    return new Date(now.getFullYear() + 1, monthIndex, day, 0, 0, 0, 0);
  }
  
  return birthdayThisYear;
}

/**
 * Calculates countdown units
 */
export interface CountdownResult {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isToday: boolean;
  hasPassed: boolean;
}

export function calculateCountdown(targetDate: Date): CountdownResult {
  const now = new Date();
  const distance = targetDate.getTime() - now.getTime();

  // Check if it's today
  const isToday = 
    now.getDate() === targetDate.getDate() &&
    now.getMonth() === targetDate.getMonth();

  if (isToday) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isToday: true, hasPassed: false };
  }

  if (distance < 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isToday: false, hasPassed: true };
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds, isToday: false, hasPassed: false };
}

/**
 * Get formatting for months
 */
export function getFormattedDateSpanish(dateAndMonthStr: string, yearStr?: string): string {
  const parts = dateAndMonthStr.trim().split(/\s+/);
  if (parts.length < 2) return dateAndMonthStr;
  
  const monthStr = parts[0];
  const day = parts[1];
  const monthIndex = MONTHS_MAP[monthStr] !== undefined ? MONTHS_MAP[monthStr] : 0;
  const spanishMonth = MONTH_NAMES_FULL[monthIndex];

  return `${day} de ${spanishMonth}${yearStr ? ` '${yearStr.replace(/[()]/g, '')}` : ""}`;
}

/**
 * Sorting & Filtering logic for Birthdays
 */
export function sortAndFilterBirthdays(
  birthdays: Birthday[],
  query: string,
  sortType: "recent" | "chronological" | "alphabetical"
): Birthday[] {
  // First, filter by visibility (always show all unless we specifically support hidden list)
  // Let's filter by search query (case insensitive)
  let result = birthdays.filter(
    (b) => b.name.toLowerCase().includes(query.toLowerCase())
  );

  // Apply sorting
  if (sortType === "alphabetical") {
    result = [...result].sort((a, b) => a.name.localeCompare(b.name, "es"));
  } else if (sortType === "chronological") {
    // January to December: sort by month index, then by day
    result = [...result].sort((a, b) => {
      const partsA = a.date.trim().split(/\s+/);
      const partsB = b.date.trim().split(/\s+/);
      const monthA = MONTHS_MAP[partsA[0]] !== undefined ? MONTHS_MAP[partsA[0]] : 0;
      const monthB = MONTHS_MAP[partsB[0]] !== undefined ? MONTHS_MAP[partsB[0]] : 0;
      const dayA = parseInt(partsA[1], 10) || 1;
      const dayB = parseInt(partsB[1], 10) || 1;

      if (monthA !== monthB) {
        return monthA - monthB;
      }
      return dayA - dayB;
    });
  } else if (sortType === "recent") {
    // Closest/Soonest upcoming birthdays (ordered by days remaining to their next occurrence)
    result = [...result].sort((a, b) => {
      const dateA = getNextBirthdayDate(a.date);
      const dateB = getNextBirthdayDate(b.date);
      return dateA.getTime() - dateB.getTime();
    });
  }

  return result;
}
