/*
 * @lc app=leetcode id=374 lang=typescript
 *
 * [374] Guess Number Higher or Lower
 */

const pick = 1;

const guess = (num: number) => {
    if (num > pick) return -1;
    else if (num < pick) return 1;
    else return 0;
}

// @lc code=start
/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */


function guessNumber(n: number): number {
    const gn = (from: number, to: number) => {
        const mid = (from + to) % 2 === 0 ? (from + to) / 2 : (from + to + 1) / 2;
        
        if (guess(mid) < 0) return gn(from, mid - 1);
        else if (guess(mid) > 0) return gn(mid + 1, to);
        else return mid;
    }
    return gn(1, n);
};
// @lc code=end

console.log(guessNumber(2))
