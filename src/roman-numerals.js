'use strict';

export default class RomanNumerals {
  static convert(n) {
    let numeral = '';
    const numerals = [
      { num:1000, sym:'M' },
      { num:900, sym:'CM' },
      { num:500, sym:'D' },
      { num:400, sym:'CD' },
      { num:100, sym:'C' },
      { num:90, sym:'XC' },
      { num:50, sym:'L' },
      { num:40, sym:'XL' },
      { num:10, sym:'X' },
      { num:9, sym:'IX' },
      { num:5, sym:'V' },
      { num:4, sym:'IV' },
      { num:1, sym:'I' },
    ]

    numerals.forEach((pair) => {
      while (n >= pair.num) {
        numeral += pair.sym;
        n -= pair.num;
      }
    });
    return numeral;
  }
}
