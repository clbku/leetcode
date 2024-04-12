/*
 * @lc app=leetcode id=342 lang=typescript
 *
 * [342] Power of Four
 */

// @lc code=start
function isPowerOfFour(n: number): boolean {
    return Number.isInteger(Math.log2(n) / 2);
};
// @lc code=end

