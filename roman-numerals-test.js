import RomanNumerals from '../src/roman-numerals.js';

describe.only('<RomanNumerals />', () => {
  it('converts numbers to roman numerals', () => {
    expect(RomanNumerals.convert(1)).to.eq('I');
    expect(RomanNumerals.convert(2)).to.eq('II');
    expect(RomanNumerals.convert(3)).to.eq('III');
    expect(RomanNumerals.convert(4)).to.eq('IV');
    expect(RomanNumerals.convert(2648)).to.eq('MMDCXLVIII');
  });
});
