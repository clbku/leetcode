/*
 * @lc app=leetcode id=171 lang=typescript
 *
 * [171] Excel Sheet Column Number
 */

// @lc code=start
function titleToNumber(columnTitle: string): number {
    let res = 0;
    for (let i = 0; i < columnTitle.length; i++) {
        const code = columnTitle.charCodeAt(i) - 64;
        res = res * 26 + code;
    }
    return res;
};
// @lc code=end

console.log(titleToNumber("AB"))