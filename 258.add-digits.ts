/*
 * @lc app=leetcode id=258 lang=typescript
 *
 * [258] Add Digits
 */

// @lc code=start
function addDigits(num: number): number {
    if (num === 0) return 0;
    if (num < 9) return num;
   
    let sum = 0;
    while (num > 0) {
        const last = num % 10;
        num = (num - last) / 10;
        sum += last;
    }

    if (sum > 9) return addDigits(sum);
    return sum;
};
// @lc code=end

console.log(addDigits(185))
