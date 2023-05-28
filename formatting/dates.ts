import { DateParamter, datesNotation } from '../types';

export const dayOfWeek = {
  Monday: 1,
  Tuesday: 2,
  Wednesday: 3,
  Thursday: 4,
  Friday: 5,
  Saturday: 6,
  Sunday: 7,
};

export function parseDate(date: DateParamter, form: datesNotation): string {
  if (typeof date === 'number') date = new Date(date);
  const parts = Intl.DateTimeFormat(undefined, {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    timeZone: 'UTC',
  })
    .formatToParts(date)
    .filter((part) => part.type !== 'literal');

  const year =
    parts.find((item) => item.type === 'year')?.value ??
    date.getFullYear().toString();
  const month =
    parts.find((item) => item.type === 'month')?.value ??
    date.getMonth().toString();
  const day =
    parts.find((item) => item.type === 'day')?.value ??
    date.getDate().toString();

  const weekNumber = getWeekNumber(date).toString();
  const dayOfYear = getDayOfYear(date).toString();

  return form
    .replace('YYYY', year)
    .replace('MM', month.length > 2 ? '0' + month : month)
    .replace('ww', weekNumber.length === 2 ? '0' + weekNumber : weekNumber)
    .replace(
      'DDD',
      dayOfYear.length === 1
        ? '00' + dayOfYear
        : dayOfYear.length === 2
        ? '0' + dayOfYear
        : dayOfYear
    )
    .replace('DD', day.length < 2 ? '0' + day : day)
    .replace('D', getDayOfTheWeek(date).toString());
}

export function getDayOfTheWeek(date: number | Date) {
  return dayOfWeek[
    Intl.DateTimeFormat(undefined, { weekday: 'long' }).format(
      date
    ) as keyof typeof dayOfWeek
  ];
}

export function getWeekNumber(date: number | Date) {
  const target = new Date(date);
  const dayNr = (target.getDay() + 6) % 7;
  target.setDate(target.getDate() - dayNr + 3);
  const firstThursday = target.valueOf();
  target.setMonth(0, 1);
  if (target.getDay() != 4) {
    target.setMonth(0, 1 + ((4 - target.getDay() + 7) % 7));
  }
  return 1 + Math.ceil((firstThursday - target.getTime()) / 604800000);
}

export function calculateNumberOfWeeksInYear(date: Date) {
  let firstDayThisYear = date.setMonth(0);
  firstDayThisYear = new Date(firstDayThisYear).setDate(1);

  let lastDayLastYear = date.setFullYear(date.getFullYear() - 1);
  lastDayLastYear = new Date(lastDayLastYear).setMonth(11);
  lastDayLastYear = new Date(lastDayLastYear).setDate(31);

  const firstDayOfThisYear = Intl.DateTimeFormat(undefined, {
    weekday: 'long'
  }).format(firstDayThisYear);
  const lastDayOfLastYear = Intl.DateTimeFormat(undefined, {
    weekday: 'long'
  }).format(lastDayLastYear);

  return (
    52 +
    (firstDayOfThisYear === 'Thursday' || lastDayOfLastYear === 'Wednesday'
      ? 1
      : 0)
  );
}

export function getDayOfYear(date: number | Date) {
  if (typeof date === 'number') date = new Date(date);
  const firstOfJan = new Date(date.getFullYear(), 0, 1);
  return Math.ceil((date.getTime() - firstOfJan.getTime()) / 86400000);
}
