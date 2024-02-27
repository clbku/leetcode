/*
 * @lc app=leetcode id=66 lang=typescript
 *
 * [66] Plus One
 */

// @lc code=start
function plusOne(digits: number[]): number[] {
    let carry = 0;
    digits[digits.length - 1]++;

    for (let i = digits.length - 1; i >= 0; i--) {
        digits[i] += carry;
        carry = 0;

        if (digits[i] > 9) {
            digits[i] = digits[i] % 10;
            carry = 1;
        }
        else {
            return digits
        }
    }

    return [1, ...digits];
};
// @lc code=end
