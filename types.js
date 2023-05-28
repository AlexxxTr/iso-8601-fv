"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shortTimeNotation = exports.basicMediumTimeNotation = exports.basicFullTimeNotation = exports.extendedMediumTimeNotation = exports.extendedFullTimeNotation = exports.ordinalDatesNotation = exports.weekDatesNotation = exports.calendarDatesNotation = exports.yearNotation = void 0;
// Const arrays (helpers for types);
exports.yearNotation = 'YYYY';
exports.calendarDatesNotation = [
    'YYYY-MM-DD',
    'YYYY-MM',
    'YYYYMMDD',
    'YYYYMM',
];
exports.weekDatesNotation = [
    'YYYY-Www',
    'YYYYWww',
    'YYYY-Www-D',
    'YYYYWwwD',
];
exports.ordinalDatesNotation = ['YYYY-DDD', 'YYYYDDD'];
exports.extendedFullTimeNotation = 'T[hh]:[mm]:[ss]';
exports.extendedMediumTimeNotation = 'T[hh]:[mm]';
exports.basicFullTimeNotation = 'T[hh][mm][ss]';
exports.basicMediumTimeNotation = 'T[hh][mm]';
exports.shortTimeNotation = 'T[hh]';
