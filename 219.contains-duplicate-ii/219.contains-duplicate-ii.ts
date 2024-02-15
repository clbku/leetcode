/*
 * @lc app=leetcode id=219 lang=typescript
 *
 * [219] Contains Duplicate II
 */

// @lc code=start
function containsNearbyDuplicate(nums: number[], k: number): boolean {
    const map = new Map();

    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];

        if (map.has(element) && index - map.get(element) <= k) return true;
        map.set(element, index);
    }

    return false;
};
// @lc code=end

console.log(containsNearbyDuplicate([1,2,3,1,2,3], 2))