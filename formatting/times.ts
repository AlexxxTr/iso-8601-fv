import { timeNotations } from '../types';

export function parseTime(date: number | Date | string, format: timeNotations) {
  if (typeof date === 'number' || typeof date === 'string')
    date = new Date(date);

  let time = Intl.DateTimeFormat(undefined, {
    hour: '2-digit',
    minute: format.includes('[mm]') ? '2-digit' : undefined,
    second: format.includes('[ss]') ? '2-digit' : undefined,
    timeZone: 'UTC'
  }).format(date);
  

  time
  if (!format.includes(':')) time = time.replaceAll(':', '');

  return `T${time}`;
}

console.log(parseTime(1685285611686, 'T[hh][mm]'));
