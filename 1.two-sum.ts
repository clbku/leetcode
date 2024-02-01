/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const pair = map.get(target - nums[i]);
        console.log(target - nums[i], i, map, pair);
        if (pair !== undefined) {
            return [pair, i];
        } else {
            map.set(nums[i], i);
        }
    }

    return [];
}

// @lc code=end
