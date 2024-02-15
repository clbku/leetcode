/*
 * @lc app=leetcode id=15 lang=typescript
 *
 * [15] 3Sum
 */

// @lc code=start

function threeSum(nums: number[]): number[][] {
    const sorted = nums.sort((a, b) => a - b)
    const map = new Map();
    const set = new Set();
    const res: number[][] = [];

    for (let i = 0; i < sorted.length; i++) {
        map.set(nums[i], i);
    }

    for (let i =0; i < sorted.length; i++) {
        for (let j = i + 1; j < sorted.length; j++) {
            const n = 0 - sorted[i] - sorted[j];
            if (map.has(n) && map.get(n) > j) {
                const r = [sorted[i], sorted[j], n];
                if (!set.has(JSON.stringify(r))) {
                    res.push(r);
                    set.add(JSON.stringify(r));
                }
            }
        }
    }

    return res;
};
// @lc code=end

threeSum([-1,0,1,2,-1,-4])
