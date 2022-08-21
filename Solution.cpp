
#include <string>
#include <vector>
using namespace std;

class Solution {
    
public:
    string shiftingLetters(string input, vector<vector<int>>& shifts) {
        const int ALPHABET_SIZE = 26;
        vector<int> totalShifts(input.length() + 1);

        for (const auto& shift : shifts) {
            int change = (shift[2] == 1) ? 1 : -1;
            totalShifts[shift[0]] += change;
            totalShifts[shift[1] + 1] -= change;
        }

        for (int i = 0; i < input.length(); ++i) {
            int currentShift = (input[i] - 'a' + totalShifts[i] % ALPHABET_SIZE + ALPHABET_SIZE)
                               % ALPHABET_SIZE;
            input[i] = (char) (currentShift + 'a');
            totalShifts[i + 1] += totalShifts[i];
        }

        return input;
    }
};
