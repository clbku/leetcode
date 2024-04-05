/*
 * @lc app=leetcode id=263 lang=typescript
 *
 * [263] Ugly Number
 */


// @lc code=start
const ugly = new Set([2,3,5]);

function isUgly(n: number): boolean {
    if (n <= 0) return false;

    const uglyNumbers = ugly.values;
    
    for (let i = 6; i >= 0; i--) {
        if (ugly.has(n)) return true;

        if (n % uglyNumbers[i] !== 0) {
            continue;
        }
        else {
            n /= uglyNumbers[i];
            i++;
        }
    }

    return n === 1;
};
// @lc code=end

console.log(isUgly(32))