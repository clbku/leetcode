/*
 * @lc app=leetcode id=168 lang=typescript
 *
 * [168] Excel Sheet Column Title
 */

// @lc code=start
function convertToTitle(columnNumber: number): string {
    let res = ''

    while (columnNumber > 0) {
        const code = columnNumber % 26;
        res = (code === 0 ? 'Z' : String.fromCharCode(code + 64)) + res;
        columnNumber = (columnNumber - (code === 0 ? 26 : code)) / 26;
    }

    return res;
};
// @lc code=end

console.log(convertToTitle(1))

// 701 = 26 * 26 + 25