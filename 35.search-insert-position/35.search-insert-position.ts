/*
 * @lc app=leetcode id=35 lang=typescript
 *
 * [35] Search Insert Position
 */

// @lc code=start
function searchInsert(nums: number[], target: number): number {
    if (nums.length === 0) return 0;
    if (nums.length === 0 || target <= nums[0]) return 0;
    if (nums.length === 2 && nums[0] < target && target <= nums[1]) return 1;
    if (target > nums[nums.length - 1]) return nums.length;
    
    let mid = Math.floor((nums.length - 1) / 2);
    if (nums[mid] === target) return mid;
    if (target < nums[mid]) {
        return searchInsert(nums.slice(0, mid), target);
    }
    else {
        return mid + searchInsert(nums.splice(mid), target)
    }
};
// @lc code=end

console.log(searchInsert([1,3,5], 5))