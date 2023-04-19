import { DateParamter, datesNotation } from '../types';

export function parseDate(date: DateParamter, form: datesNotation): string {
  if (typeof date === 'number') date = new Date(date);
  const parts = Intl.DateTimeFormat(undefined, {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })
    .formatToParts(date)
    .filter((part) => part.type !== 'literal');

  return form
    .replace('YYYY', parts.at(2)?.value ?? date.getFullYear().toString())
    .replace('MM', parts.at(1)?.value ?? date.getMonth().toString())
    .replace('DD', parts.at(0)?.value ?? date.getDay().toString());
}

console.log(parseDate(new Date(), 'YYYYMMDD'));
