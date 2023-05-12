import { timeNotations } from '../types';

export function parseTime(date: number | Date | string, format: timeNotations) {
  if (typeof date === 'number' || typeof date === 'string')
    date = new Date(date);

  let time = Intl.DateTimeFormat(undefined, {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }).format(date);

  if (!format.includes(':')) time = time.replaceAll(':', '');
  if (!format.includes('[ss]')) time = time.slice(0, time.length - 2);
  if (!format.includes('[mm]')) time = time.slice(0, time.length - 2);

  return `T${time}`;
}
