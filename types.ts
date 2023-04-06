// Const arrays (helpers for types);
const yearNotation = 'YYYY';
const calendarDatesNotation = ['YYYY-MM-DD', 'YYYY-MM', 'YYYYMMDD'] as const;
const weekDatesNotation = [
  'YYYY-Www',
  'YYYYWww',
  'YYYY-Www-D',
  'YYYYWwwD',
] as const;
const ordinalDatesNotation = ['YYYY-DDD', 'YYYYDDD'] as const;

const extendedFullTimeNotation = 'T[hh]:[mm]:[ss]';
const extendedMediumTimeNotation = 'T[hh]:[mm]';
const basicFullTimeNotation = 'T[hh][mm][ss]';
const basicMediumTimeNotation = 'T[hh][mm]';
const shortTimeNotation = 'T[hh]';

// Types
// Dates
export type yearNotation = typeof yearNotation;
export type calendarDatesNotation = (typeof calendarDatesNotation)[number];
export type weekDatesNotation = (typeof weekDatesNotation)[number];
export type ordinalDatesNotation = (typeof ordinalDatesNotation)[number];
export type datesNotation =
  | yearNotation
  | calendarDatesNotation
  | weekDatesNotation
  | ordinalDatesNotation;

// Times
export type extendedFullTimeNotation = typeof extendedFullTimeNotation;
export type extendedMediumTimeNotation = typeof extendedMediumTimeNotation;
export type basicFullTimeNotation = typeof basicFullTimeNotation;
export type basicMediumTimeNotation = typeof basicMediumTimeNotation;
export type shortTimeNotation = typeof shortTimeNotation;