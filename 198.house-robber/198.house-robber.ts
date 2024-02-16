/*
 * @lc app=leetcode id=198 lang=typescript
 *
 * [198] House Robber
 */

// @lc code=start
function rob(nums: number[]): number {
    const map = new Map();
    const rec = (nums: number[]) => {
        if (nums.length === 0) return 0;
        if (nums.length === 1) return nums[0];
        if (nums.length === 2) return Math.max(nums[0], nums[1]);
        
        const len = nums.length;
        if (map.has(len)) { return map.get(len) }
        else {
            const max = Math.max(nums[0] + rec(nums.slice(2)), nums[1] + rec(nums.slice(3)));
            map.set(len, max);
            return max;
        }
    }
    return rec(nums); 
};
// @lc code=end

console.log(rob([226,174,214,16,218,48,153,131,128,17,157,142,88,43,37,157,43,221,191,68,206,23,225,82,54,118,111,46,80,49,245,63,25,194,72,80,143,55,209,18,55,122,65,66,177,101,63,201,172,130,103,225,142,46,86,185,62,138,212,192,125,77,223,188,99,228,90,25,193,211,84,239,119,234,85,83,123,120,131,203,219,10,82,35,120,180,249,106,37,169,225,54,103,55,166,124]));
console.log(rob([0,0,0]))