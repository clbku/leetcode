/*
 * @lc app=leetcode id=20 lang=typescript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
function isValid(s: string): boolean {
    const queue: string[] = [];
    for (let i = 0; i < s.length; i++) {
        if (['(', '[', '{'].includes(s[i])) {
            queue.push(s[i]);
        }
        else {
            const lastChar = queue.pop();
            if (s[i] === ')' && lastChar !== '(') return false; 
            else if (s[i] === ']' && lastChar !== '[') return false; 
            else if (s[i] === '}' && lastChar !== '{') return false;    
        }
    }

    if (queue.length === 0) return true;
    return false;
};
// @lc code=end
