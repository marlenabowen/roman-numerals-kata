export default class RomanNumerals {
  static numeral(value, numeral) {
    return { value: value, numeral: numeral };
  }

  static convert(n) {
    const numerals = [
      RomanNumerals.numeral(1, 'I'),
      RomanNumerals.numeral(4, 'IV'),
      RomanNumerals.numeral(5, 'V'),
      RomanNumerals.numeral(9, 'IX'),
      RomanNumerals.numeral(10, 'X'),
      RomanNumerals.numeral(40, 'XL'),
      RomanNumerals.numeral(50, 'L'),
      RomanNumerals.numeral(90, 'XC'),
      RomanNumerals.numeral(100, 'C'),
      RomanNumerals.numeral(400, 'CD'),
      RomanNumerals.numeral(500, 'D'),
      RomanNumerals.numeral(900, 'CM'),
      RomanNumerals.numeral(1000, 'M'),
    ];

    let romanNumeral = '';
    numerals.forEach((item) => {
      while (n >= item.value) {
        romanNumeral += item.numeral;
        n -= item.value;
      }
    });
    return romanNumeral;
  }
}
