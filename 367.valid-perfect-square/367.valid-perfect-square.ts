/*
 * @lc app=leetcode id=367 lang=typescript
 *
 * [367] Valid Perfect Square
 */

// @lc code=start
function isPerfectSquare(num: number): boolean {
    if (num <= 0) return false;

    let i = 1;    
    while (i * i < num) i++;

    return i * i === num;
};
// @lc code=end

console.log(isPerfectSquare(14))
