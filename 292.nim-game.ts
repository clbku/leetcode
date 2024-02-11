/*
 * @lc app=leetcode id=292 lang=typescript
 *
 * [292] Nim Game
 */

// @lc code=start

// const map = new Map();

function canWinNim(n: number): boolean {

    // if (n === 1) return true;
    // if (n === 2) return true;
    // if (n === 3) return true;

    // if (map.has(n)) return map.get(n);

    // if (!canWinNim(n - 3) || !canWinNim(n - 2) || !(canWinNim(n - 1))) {
    //     map.set(n, true);
    //     return true;
    // }

    // map.set(n, false)
    // return false;

    return n % 4 !== 0
};
// @lc code=end

// console.log(canWinNim(1348820612));
console.log(canWinNim(1348820612))
