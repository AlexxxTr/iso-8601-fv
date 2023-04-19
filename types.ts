// Const arrays (helpers for types);
export const yearNotation = 'YYYY';
export const calendarDatesNotation = ['YYYY-MM-DD', 'YYYY-MM', 'YYYYMMDD', 'YYYYMM'] as const;
export const weekDatesNotation = [
  'YYYY-Www',
  'YYYYWww',
  'YYYY-Www-D',
  'YYYYWwwD',
] as const;
export const ordinalDatesNotation = ['YYYY-DDD', 'YYYYDDD'] as const;

export const extendedFullTimeNotation = 'T[hh]:[mm]:[ss]';
export const extendedMediumTimeNotation = 'T[hh]:[mm]';
export const basicFullTimeNotation = 'T[hh][mm][ss]';
export const basicMediumTimeNotation = 'T[hh][mm]';
export const shortTimeNotation = 'T[hh]';

// Types
export type DateParamter = number | Date;

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