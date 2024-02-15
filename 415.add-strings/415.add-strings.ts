/*
 * @lc app=leetcode id=415 lang=typescript
 *
 * [415] Add Strings
 */

// @lc code=start
function addStrings(num1: string, num2: string): string {
    let res = '';
    let carry = 0;
    
    while (num1 !== '' || num2 !== '' || carry !== 0) {
        const l1 = num1.at(-1) ?? 0;
        const l2 = num2.at(-1) ?? 0;
        
        const sum = (Number(l1) + Number(l2) + carry)
        res = String(sum % 10) + res;
        carry = Math.floor(sum / 10);

        num1 = num1.slice(0, num1.length - 1);
        num2 = num2.slice(0, num2.length - 1);
    }

    return res;
};
// @lc code=end


console.log(addStrings("1", "9"));
