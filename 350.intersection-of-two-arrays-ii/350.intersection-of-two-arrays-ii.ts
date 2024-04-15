/*
 * @lc app=leetcode id=350 lang=typescript
 *
 * [350] Intersection of Two Arrays II
 */

// @lc code=start
function intersect(nums1: number[], nums2: number[]): number[] {
    const map1 = new Map();
    const map2 = new Map();
    const ans: number[] = [];

    if (nums1.length === 0 || nums2.length === 0) return []

    nums1.forEach(num => {
        map1.set(num, (map1.get(num) ?? 0) + 1);
    });

    nums2.forEach(num => {
        map2.set(num, (map2.get(num) ?? 0) + 1);
    });
    
    map1.forEach((value: number, key: number) => {
        if (map2.has(key)) {
            ans.push(...Array(Math.min(value, map2.get(key))).fill(key));
        }
    })

    return ans;
};
// @lc code=end

console.log(intersect([4,9,5], [9,4,9,8,4]))
