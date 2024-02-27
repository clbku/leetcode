/*
 * @lc app=leetcode id=58 lang=typescript
 *
 * [58] Length of Last Word
 */

// @lc code=start
function lengthOfLastWord(s: string): number {
    let count = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === " " && count === 0) continue;
        if (s[i] === " " && count !== 0) return count;
        count++;
    }

    return count;
};
// @lc code=end

console.log(lengthOfLastWord("Hello World"))
console.log(lengthOfLastWord("   fly me   to   the moon  "))
console.log(lengthOfLastWord("luffy is still joyboy"))
