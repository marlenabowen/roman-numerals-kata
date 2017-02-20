import RomanNumerals from '../src/roman-numerals.js';

describe('<RomanNumerals />', () => {
  context('multiples of 1', () => {
    it('converts numbers 1 through 3 to roman numerals', () => {
      expect(RomanNumerals.convert(1)).to.eq('I');
      expect(RomanNumerals.convert(2)).to.eq('II');
      expect(RomanNumerals.convert(3)).to.eq('III');
    });

    it('converts the number 4 to a roman numeral', () => {
      expect(RomanNumerals.convert(4)).to.eq('IV');
    });

    it('converts the number 5 to a roman numeral', () => {
      expect(RomanNumerals.convert(5)).to.eq('V');
    });

    it('converts numbers 6 through 8 to roman numerals', () => {
      expect(RomanNumerals.convert(6)).to.eq('VI');
      expect(RomanNumerals.convert(7)).to.eq('VII');
      expect(RomanNumerals.convert(8)).to.eq('VIII');
    });

    it('converts the number 9 to a roman numeral', () => {
      expect(RomanNumerals.convert(9)).to.eq('IX');
    });
  });

  context('multiples of 10', () => {
    it('converts correctly', () => {
      expect(RomanNumerals.convert(10)).to.eq('X');
      expect(RomanNumerals.convert(13)).to.eq('XIII');
      expect(RomanNumerals.convert(27)).to.eq('XXVII');
      expect(RomanNumerals.convert(31)).to.eq('XXXI');
      expect(RomanNumerals.convert(45)).to.eq('XLV');
      expect(RomanNumerals.convert(42)).to.eq('XLII');
      expect(RomanNumerals.convert(54)).to.eq('LIV');
      expect(RomanNumerals.convert(66)).to.eq('LXVI');
      expect(RomanNumerals.convert(78)).to.eq('LXXVIII');
      expect(RomanNumerals.convert(89)).to.eq('LXXXIX');
      expect(RomanNumerals.convert(90)).to.eq('XC');
    });
  });

  context('multiples of 100', () => {
    it('converts correctly', () => {
      expect(RomanNumerals.convert(133)).to.eq('CXXXIII');
      expect(RomanNumerals.convert(264)).to.eq('CCLXIV');
      expect(RomanNumerals.convert(387)).to.eq('CCCLXXXVII');
      expect(RomanNumerals.convert(492)).to.eq('CDXCII');
      expect(RomanNumerals.convert(575)).to.eq('DLXXV');
      expect(RomanNumerals.convert(666)).to.eq('DCLXVI');
      expect(RomanNumerals.convert(702)).to.eq('DCCII');
      expect(RomanNumerals.convert(839)).to.eq('DCCCXXXIX');
      expect(RomanNumerals.convert(918)).to.eq('CMXVIII');
    });
  });

  context('1000', () => {
    it('converts correctly', () => {
      expect(RomanNumerals.convert(1000)).to.eq('M');
    });
  });
});
