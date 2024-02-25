/*
 * @lc app=leetcode id=14 lang=typescript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
    let prefix = "";

    for (let j = 0; j < strs[0].length; j++) {
        for (let i = 1; i < strs.length; i++) {
            if (strs[i][j] !== strs[0][j]) return prefix;
        }
        prefix += strs[0][j];
    }

    return prefix;
};
// @lc code=end

console.log(longestCommonPrefix(["flower","flow","flight"]));