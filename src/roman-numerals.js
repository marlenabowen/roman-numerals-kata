'use strict';

export default class RomanNumerals {
  static convert(n) {
    let numeral = '';
    const numerals = {
      1000:'M',
      900:'CM',
      500:'D',
      400:'CD',
      100:'C',
      90:'XC',
      50:'L',
      40:'XL',
      10:'X',
      9:'IX',
      5:'V',
      4:'IV',
      1:'I',
    }

    for (const number in numerals) {
      while (n >= number) {
        numeral += numerals[number];
        n -= number;
      }
    }
    return numeral;
  }
}
