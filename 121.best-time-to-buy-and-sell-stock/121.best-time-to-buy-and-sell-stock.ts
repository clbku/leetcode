/*
 * @lc app=leetcode id=121 lang=typescript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
function maxProfit(prices: number[]): number { 
    let maxProfit = 0;
    let left = 0, right = 1;
    
    for (let i = 0; right < prices.length; i++) {
        if (prices[right] - prices[left] < 0) {
            left = right;
            right++;
        }
        else {
            maxProfit = Math.max(maxProfit, prices[right] - prices[left]);
            right++;
        }
    }

    return maxProfit
};
// @lc code=end

console.log(maxProfit([7,1,5,3,6,4]))
console.log(maxProfit([7,6,4,3,1]))
console.log(maxProfit([2,1,2,1,0,1,2]))