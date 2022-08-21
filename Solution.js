
/**
 * @param {string} input
 * @param {number[][]} shifts
 * @return {string}
 */
var shiftingLetters = function (input, shifts) {
    const  ALPHABET_SIZE = 26;
    const ASCII_SMALL_CASE_A = 97;
    const totalShifts = new Array(input.length + 1).fill(0);

    for (let shift of shifts) {
        const change = (shift[2] === 1) ? 1 : -1;
        totalShifts[shift[0]] += change;
        totalShifts[shift[1] + 1] -= change;
    }

    let shiftedLetters = input.split('');
    for (let i = 0; i < input.length; ++i) {
        const currentShift = (input.codePointAt(i) - ASCII_SMALL_CASE_A
                              + totalShifts[i] % ALPHABET_SIZE + ALPHABET_SIZE)
                              % ALPHABET_SIZE;
        shiftedLetters[i] = String.fromCodePoint(currentShift + ASCII_SMALL_CASE_A);
        totalShifts[i + 1] += totalShifts[i];
    }

    return shiftedLetters.join('');
};
