/*
 * @lc app=leetcode id=9 lang=typescript
 *
 * [9] Palindrome Number
 */

// @lc code=start
function isPalindrome(x: number): boolean {
    if (x < 0) return false;

    let tmp = x;
    let n = 0;

    while (tmp !== 0) {
        n = n * 10 + tmp % 10;
        tmp = Math.floor(tmp / 10);
    };

    if (x === n) return true;
    return false;
};
// @lc code=end


console.log(isPalindrome(-121))