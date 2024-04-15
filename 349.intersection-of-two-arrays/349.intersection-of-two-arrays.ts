/*
 * @lc app=leetcode id=349 lang=typescript
 *
 * [349] Intersection of Two Arrays
 */

// @lc code=start
function intersection(nums1: number[], nums2: number[]): number[] {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    
    if (set1.size === 0 || set2.size === 0) return []

    const ans: number[] = []

    set1.forEach(v => set2.has(v) && ans.push(v));

    return ans;
};
// @lc code=end

