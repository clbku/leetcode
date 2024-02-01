/*
 * @lc app=leetcode id=169 lang=typescript
 *
 * [169] Majority Element
 */

// @lc code=start
function majorityElement(nums: number[]): number {
    const map = new Map();
    let max = 1;
    let num = nums[0];

    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            const l = map.get(nums[i]) + 1;
            if (l > max) {
                max = l;
                num = nums[i];
            }
            map.set(nums[i], l)
        }
        else {
            map.set(nums[i], 1)
        }
    }

    console.log(num);
    
    return num;
};
// @lc code=end

majorityElement([2,2,1,1,1,2,2]);
