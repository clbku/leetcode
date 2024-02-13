/*
 * @lc app=leetcode id=136 lang=typescript
 *
 * [136] Single Number
 */

// @lc code=start
function singleNumber(nums: number[]): number {
    const map: {[key: number]: number} = {};
    for (let index = 0; index < nums.length; index++) {
        if (map[nums[index]]) {
            map[nums[index]] = 2;
        }
        else {
            map[nums[index]] = 1;
        }  
    };

    return Number(Object.keys(map).filter(k => map[k] === 1)[0]);
};
// @lc code=end

console.log(singleNumber([1]))