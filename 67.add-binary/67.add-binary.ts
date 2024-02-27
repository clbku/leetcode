/*
 * @lc app=leetcode id=67 lang=typescript
 *
 * [67] Add Binary
 */

// @lc code=start
function addBinary(a: string, b: string): string {
    let carry = 0;
    let output = '';

    a.length - b.length > 0 ? b = b.padStart(a.length, "0") : a = a.padStart(b.length, "0") 

    for (let i = 0; i < b.length; i++ ) {
        switch (Number(a[a.length - i - 1]) + Number(b[b.length - i - 1]) + carry) {
            case 0: {
                output = "0" + output;
                carry = 0;
                break;
            }
            case 1: {
                output = "1" + output;
                carry = 0;
                break;
            }
            case 2: {
                output = "0" + output;
                carry = 1;
                break;
            }
            case 3: {
                output = "1" + output;
                carry = 1;
                break;
            }
        }
    }

    if (carry === 1) return "1" + output
    return output
};

// @lc code=end

console.log(addBinary("1111","1111"))

