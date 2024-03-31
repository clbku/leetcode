/*
 * @lc app=leetcode id=228 lang=typescript
 *
 * [228] Summary Ranges
 */

// @lc code=start
function summaryRanges(nums: number[]): string[] {
    if (!nums.length) return [];
    
    const res: string[] = [];
    let last = nums.shift();

    res.push(last!.toString());

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] - 1 !== last) {
            res[res.length-1] = res[res.length - 1] === last?.toString() ? res[res.length-1] : res[res.length-1] + "->" + last;
            last = nums[i];
            res.push(last.toString()) 
        }
        else {
            last = nums[i]
        }
    }

    res[res.length-1] = res[res.length - 1] === last?.toString() ? res[res.length-1] : res[res.length-1] + "->" + last;
    
    return res;
};
// @lc code=end

summaryRanges([0,2,3,4,6,8,9])

// [1,2,4,5,7], last = 0, res = ["0"]