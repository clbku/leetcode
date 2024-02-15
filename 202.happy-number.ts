/*
 * @lc app=leetcode id=202 lang=typescript
 *
 * [202] Happy Number
 */

// @lc code=start
function isHappy(n: number): boolean {
    const set = new Set<number>();

    while (!set.has(n) && n !== 1) {
        set.add(n);
        n = n.toString().split("").reduce((p, c) => p += Math.pow(Number(c), 2), 0);
    }

    if (n === 1) return true;
    return false;
};
// @lc code=end

console.log(isHappy(82));