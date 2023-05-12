# ISO-8601 Formatter and Validator

## Table of contents

- [ISO-8601 Formatter and Validator](#iso-8601-formatter-and-validator)
  - [Table of contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Parsing Dates](#parsing-dates)
    - [parseDate](#parsedate)
    - [getDayOfTheWeek](#getdayoftheweek)
    - [getWeekNumber](#getweeknumber)
    - [calculateNumberOfWeeksInYear](#calculatenumberofweeksinyear)
    - [getDayOfYear](#getdayofyear)

## Introduction

This package has been created as part of my bachelor thesis. The goal is to create a globally available package that can format and validate the ISO-8601 standard.

This documentation will be updated as more functions are being added.

## Parsing Dates

This section will handle all the functions that can be used to parse dates

### parseDate

The parse date function takes in a `number` or `Date`, the seconds argument is the form of the date. It will return the string of the given date, in the correct format.

```ts
function parseDate(date: number | Date, form: datesNotation): string
```

### getDayOfTheWeek

This function will take a `number` or `Date` as the parameter. It will convert this parameter into a number. This number will resprest the day number in it's own week. 1 for Monday and 7 for Sunday.

```ts
function getDayOfTheWeek(date: number | Date): number
```

### getWeekNumber

This functkon will take a `number` or `Date` as the parameter. It will convert it into a number, this number will respresent the week number of the specific date.

```ts
function getWeekNumber(date: number | Date): number
```

### calculateNumberOfWeeksInYear

This function takes only a `Date` as its parameter. Based on this date, it will calculate the number of weeks that year has.

```ts
function calculateNumberOfWeeksInYear(date: Date): number
```

### getDayOfYear

This functions takes a `number` or `Date` as its parameter. Based on this, the function will calcute what day of the year it is, the result will be a number between 1 and 365 or 366.

```ts
function getDayOfYear(date: number | Date): number
```