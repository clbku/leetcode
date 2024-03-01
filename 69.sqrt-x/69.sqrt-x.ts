/*
 * @lc app=leetcode id=69 lang=typescript
 *
 * [69] Sqrt(x)
 */

// @lc code=start
function mySqrt(x: number): number {
    let a = 0, b = x;
    let mid = 1;
    const ep = 10e-9

    do {
        mid = (a + b) / 2;

        if (mid * mid > x) {
            b = mid;
        }
        else {
            a = mid;
        }
    } while (b - a > ep);

    return Math.floor(b);
};
// @lc code=end

console.log(mySqrt(2147395599))