/*
 * @lc app=leetcode id=70 lang=typescript
 *
 * [70] Climbing Stairs
 */

// @lc code=start

const climbStairsMap = new Map();

function climbStairs(n: number): number {
    if (n <= 0) return 0;
    if (n === 1) return 1;
    if (n === 2) return 2;
    if (n == 3) return 3;

    let stepNeed = 0;

    if (climbStairsMap.has(n)) {
        return climbStairsMap.get(n)
    }
    else {
        stepNeed = climbStairs(n - 1) + climbStairs(n - 2);
        climbStairsMap.set(n, stepNeed);
    }

    return stepNeed;
};
// @lc code=end

console.log(climbStairs(45), climbStairsMap)