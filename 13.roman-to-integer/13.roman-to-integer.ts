/*
 * @lc app=leetcode id=13 lang=typescript
 *
 * [13] Roman to Integer
 */

// @lc code=start
const map = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
}

function romanToInt(s: string): number {
    if (s.length === 1) return map[s];
    
    let sum = 0;
    let i = 0;
    while (i < s.length) {
        const curVal = s[i];
        const nextVal = s[i + 1];
        if (
            (curVal === "I" && ["V", "X"].includes(nextVal)) ||
            (curVal === "X" && ["L", "C"].includes(nextVal)) ||
            (curVal === "C" && ["D", "M"].includes(nextVal))
        ) {
            sum += (map[nextVal] - map[curVal]);
            i += 2;
        }
        else {
            sum += map[curVal];
            i += 1;
        }
    }

    return sum;
};
// @lc code=end

console.log(romanToInt("LVIII"))

