/*
 * @lc app=leetcode id=242 lang=typescript
 *
 * [242] Valid Anagram
 */

// @lc code=start
function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;

    const sMap = new Map();

    for (let i = 0; i < s.length; i++) {
        sMap.set(s[i], (sMap.get(s[i]) ?? 0) + 1)
    }

    
    for (let i = 0; i < t.length; i++) {
        if (sMap.get(t[i]) === undefined) return false;
        if (sMap.get(t[i]) - 1 < 0) return false;
        sMap.set(t[i], sMap.get(t[i]) - 1) 
    }

    return true;
};
// @lc code=end

console.log(isAnagram("ab", "ba"))