/*
 * @lc app=leetcode id=263 lang=typescript
 *
 * [263] Ugly Number
 */

// @lc code=start
function isUgly(n: number): boolean {
    if (n <= 0) return false;
    
    const baseUglyNumber = [2, 3, 5];
    
    for (let i = 2; i >= 0; i--) {
        if (baseUglyNumber.includes(n)) return true;

        if (n % baseUglyNumber[i] !== 0) {
            continue;
        }
        else {
            n /= baseUglyNumber[i];
            i++;
        }
    }

    return n === 1;
};
// @lc code=end

console.log(isUgly(32))