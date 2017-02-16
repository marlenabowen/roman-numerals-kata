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

  //   it('converts the number 5 to a roman numeral', () => {
  //     expect(RomanNumerals.convert(5)).to.eq('V');
  //   });
  //
  //   it('converts numbers 6 through 8 to roman numerals', () => {
  //     expect(RomanNumerals.convert(6)).to.eq('VI');
  //     expect(RomanNumerals.convert(7)).to.eq('VII');
  //     expect(RomanNumerals.convert(8)).to.eq('VIII');
  //   });
  //
  //   it('converts the number 9 to a roman numeral', () => {
  //     expect(RomanNumerals.convert(9)).to.eq('IX');
  //   });
  // });
  //
  // context('multiples of 10', () => {
  //   it('converts correctly', () => {
  //     expect(RomanNumerals.convert(10)).to.eq('X');
  //     expect(RomanNumerals.convert(40)).to.eq('XL');
  //     expect(RomanNumerals.convert(50)).to.eq('L');
  //     expect(RomanNumerals.convert(90)).to.eq('XC');
  //   });
  // });
  //
  // context('multiples of 100', () => {
  //   it('converts correctly', () => {
  //     expect(RomanNumerals.convert(100)).to.eq('C');
  //     expect(RomanNumerals.convert(400)).to.eq('CD');
  //     expect(RomanNumerals.convert(500)).to.eq('D');
  //     expect(RomanNumerals.convert(900)).to.eq('CM');
  //   });
  // });
  //
  // context('1000', () => {
  //   it('converts correctly', () => {
  //     expect(RomanNumerals.convert(1000)).to.eq('M');
  //   });
  });
});
