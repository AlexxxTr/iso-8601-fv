import { describe, expect, it } from 'vitest';
import { calculateNumberOfWeeksInYear, parseDate } from '.';

describe('Number of weeks', () => {
  it('Should equal 52', () => {
    expect(calculateNumberOfWeeksInYear(new Date('2023'))).toBe(52);
    expect(calculateNumberOfWeeksInYear(new Date('2025'))).toBe(52);
    expect(calculateNumberOfWeeksInYear(new Date('1993'))).toBe(52);
  });

  it('Should equal 53', () => {
    expect(calculateNumberOfWeeksInYear(new Date('2026'))).toBe(53);
    expect(calculateNumberOfWeeksInYear(new Date('1998'))).toBe(53);
  });
});

describe('Calendar dates', () => {
  it('Should process caledar dates correctly', () => {
    expect(parseDate(new Date('2023/1/2'), 'YYYY-MM')).toBe('2023-01');
    expect(parseDate(1018821600000, 'YYYYMMDD')).toBe('20020415');
    expect(parseDate(new Date('2002'), 'YYYY')).toBe('2002');
  });
});
