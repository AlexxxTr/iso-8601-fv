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

  return (
    form
      // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain, @typescript-eslint/no-non-null-assertion
      .replace('YYYY', parts.at(2)?.value!)
      // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain, @typescript-eslint/no-non-null-assertion
      .replace('MM', parts.at(1)?.value!)
      // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain, @typescript-eslint/no-non-null-assertion
      .replace('DD', parts.at(0)?.value!)
  );
}

export function calculateNumberOfWeeksInYear(date: Date) {
  let firstDayThisYear = date.setMonth(0);
  firstDayThisYear = new Date(firstDayThisYear).setDate(1);

  let lastDayLastYear = date.setFullYear(date.getFullYear() - 1);
  lastDayLastYear = new Date(lastDayLastYear).setMonth(11);
  lastDayLastYear = new Date(lastDayLastYear).setDate(31);

  const firstDayOfThisYear = Intl.DateTimeFormat(undefined, {
    weekday: 'long',
  }).format(firstDayThisYear);
  const lastDayOfLastYear = Intl.DateTimeFormat(undefined, {
    weekday: 'long',
  }).format(lastDayLastYear);

  return (
    52 +
    (firstDayOfThisYear === 'Thursday' || lastDayOfLastYear === 'Wednesday'
      ? 1
      : 0)
  );
}
