/*
 * @lc app=leetcode id=198 lang=typescript
 *
 * [198] House Robber
 */

// @lc code=start
function hammingWeight(n: number): number {
    let count = 0;
   
    while (n > 0) {
        count += n % 2;
        n = Math.floor(n/2)
    }

    return count
};
// @lc code=end

console.log(hammingWeight(4294967293))