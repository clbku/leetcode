/*
 * @lc app=leetcode id=28 lang=typescript
 *
 * [28] Find the Index of the First Occurrence in a String
 */

// @lc code=start
function strStr(haystack: string, needle: string): number {
    const splitted = haystack.split(needle);
    if (splitted.length === 1) return -1;
    return splitted[0].length;
};
// @lc code=end