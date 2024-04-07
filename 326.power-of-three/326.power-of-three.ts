/*
 * @lc app=leetcode id=326 lang=typescript
 *
 * [326] Power of Three
 */

// @lc code=start
const set = new Set();
function isPowerOfThree(n: number): boolean {
    if (n <= 0) return false;
    if (set.has(n)) return true;

    let mul = 1;

    while (mul < n) {
        mul *= 3;
    }

    if (mul === n) {
        set.add(n);
        return true;
    }
    else {
        return false;
    }
};
// @lc code=end

console.log(isPowerOfThree(45));