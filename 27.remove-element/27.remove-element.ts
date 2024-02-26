/*
 * @lc app=leetcode id=27 lang=typescript
 *
 * [27] Remove Element
 */

// @lc code=start
function removeElement(nums: number[], val: number): number {
    let left = 0, right = nums.length - 1;

    while (left <= right) {
        if (nums[left] !== val) {
            console.log(nums[left], val)
            left++;
        }
        else {
            const tmp = nums[left];
            nums[left] = nums[right];
            nums[right] = tmp;
            right--;
        }
    }

    return left; 
};
// @lc code=end

const nums = [2,2];
console.log(removeElement(nums, 2), nums);