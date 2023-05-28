"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseTime = void 0;
function parseTime(date, format) {
    if (typeof date === 'number' || typeof date === 'string')
        date = new Date(date);
    var time = Intl.DateTimeFormat(undefined, {
        hour: '2-digit',
        minute: format.includes('[mm]') ? '2-digit' : undefined,
        second: format.includes('[ss]') ? '2-digit' : undefined,
        timeZone: 'UTC',
        hourCycle: 'h24',
        hour12: false,
    }).format(date);
    if (!format.includes(':'))
        time = time.replaceAll(':', '');
    return "T".concat(time);
}
exports.parseTime = parseTime;
console.log(parseTime(Date.now(), "T[hh]:[mm]:[ss]"));
