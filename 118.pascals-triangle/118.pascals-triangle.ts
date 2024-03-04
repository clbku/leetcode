/*
 * @lc app=leetcode id=118 lang=typescript
 *
 * [118] Pascal's Triangle
 */

// @lc code=start
const map = new Map();
map.set(1, [1]);
map.set(2, [1, 1])

function triangle(rowIndex: number) {
    if (map.has(rowIndex)) return map.get(rowIndex)

    const rowBefore = triangle(rowIndex - 1);
    
    const res: number[] = [];
    for (let i = 0, j = 1; j < rowIndex - 1; i++, j++) {
        res.push(rowBefore[i] + rowBefore[j]);
    }

    map.set(rowIndex, [1, ...res, 1]);
    return map.get(rowIndex)
};

function generate(numRows: number): number[][] {
    triangle(numRows)

    return Array(numRows).fill(0).map((_, i) => map.get(i + 1))
};
// @lc code=end

console.log(generate(5));
