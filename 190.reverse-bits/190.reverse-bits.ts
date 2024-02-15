/*
 * @lc app=leetcode id=190 lang=typescript
 *
 * [190] Reverse Bits
 */

// @lc code=start
function reverseBits(n: number): number {
    let res = 0;

    for (let i = 0; i < 32; i++) {
        res += n % 2 === 1 ? Math.pow(2, 32 - i - 1) : 0;
        n = Math.floor(n/2);
    }

    return res;
};
// @lc code=end

reverseBits(43261596);
