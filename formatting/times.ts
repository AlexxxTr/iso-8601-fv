import { timeNotations } from '../types';

export function parseTime(date: number | Date | string, format: timeNotations) {
    if (typeof date === 'number' || typeof date === 'string')
        date = new Date(date);

    let time = Intl.DateTimeFormat(undefined, {
        hour: '2-digit',
        minute: format.includes('[mm]') ? '2-digit' : undefined,
        second: format.includes('[ss]') ? '2-digit' : undefined,
        timeZone: 'UTC',
        hourCycle: 'h24',
        hour12: false,
    }).format(date);


    console.log(time);
    if (!format.includes(':')) time = time.replaceAll(':', '');

    return `T${time}`;
}

console.log(parseTime(Date.now(), "T[hh]:[mm]:[ss]"));
