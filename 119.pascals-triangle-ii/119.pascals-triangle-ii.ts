/*
 * @lc app=leetcode id=119 lang=typescript
 *
 * [119] Pascal's Triangle II
 */

// @lc code=start
const map = new Map();

function getRow(rowIndex: number): number[] {
    if (rowIndex === 0) return [1];
    if (rowIndex === 1) return [1,1];
    if (map.has(rowIndex)) return map.get(rowIndex);
    
    const rowBefore = getRow(rowIndex - 1);
    
    const res: number[] = [];
    for (let i = 0, j = 1; j < rowIndex; i++, j++) {
        res.push(rowBefore[i] + rowBefore[j]);
    }

    map.set(rowIndex, [1, ...res, 1]);

    return map.get(rowIndex);
};
// @lc code=end

console.log(getRow(10));
