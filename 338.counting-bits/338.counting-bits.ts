/*
 * @lc app=leetcode id=338 lang=typescript
 *
 * [338] Counting Bits
 */

// @lc code=start
function countBits(n: number): number[] {
    const ans = Array(n + 1).fill(0);
    if (n === 0) return ans;
    ans[1] = 1;

    for (let i = 2; i <= n; i++) {
        if (i % 2 === 0) {
            ans[i] =  ans[i/2];
        }
        else {
            ans[i] = ans[Math.floor((i - 1) / 2)] + 1;
        }
    }

    return ans;
};
// @lc code=end

console.log(countBits(5))