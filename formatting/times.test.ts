import { describe, expect, it } from 'vitest';
import { parseTime } from './times';

describe('Should format time correctly', () => {
  it('Format time', () => {
    expect(parseTime(1685285611686, 'T[hh]:[mm]:[ss]')).toBe('T16:53:31');
  });
});
