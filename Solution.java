
public class Solution {

    public String shiftingLetters(String input, int[][] shifts) {
        final int ALPHABET_SIZE = 26;
        int[] totalShifts = new int[input.length() + 1];

        for (int[] shift : shifts) {
            int change = (shift[2] == 1) ? 1 : -1;
            totalShifts[shift[0]] += change;
            totalShifts[shift[1] + 1] -= change;
        }

        char[] shiftedLetters = input.toCharArray();
        for (int i = 0; i < input.length(); ++i) {
            int currentShift = (shiftedLetters[i] - 'a'
                                + totalShifts[i] % ALPHABET_SIZE + ALPHABET_SIZE)
                                % ALPHABET_SIZE;
            shiftedLetters[i] = (char) (currentShift + 'a');
            totalShifts[i + 1] += totalShifts[i];
        }

        return String.valueOf(shiftedLetters);
    }
}
