/*
 * @lc app=leetcode id=217 lang=typescript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
function containsDuplicate(nums: number[]): boolean {
    const set = new Set<number>();
    nums.forEach(n => set.add(n));

    return nums.length !== set.size
};
// @lc code=end

console.log(containsDuplicate([1,2,3,1]));