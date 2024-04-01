/*
 * @lc app=leetcode id=231 lang=typescript
 *
 * [231] Power of Two
 */

// 2^3     = 8 = 1000
// 2^3 - 1 = 7 = 0111
//           & = 0

// @lc code=start
function isPowerOfTwo(n: number): boolean { 
    return (n & (n-1)) === 0 && n > 0
};
// @lc code=end

console.log(isPowerOfTwo(-4))
