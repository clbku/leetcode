/*
 * @lc app=leetcode id=290 lang=typescript
 *
 * [290] Word Pattern
 */

// @lc code=start
function wordPattern(pattern: string, s: string): boolean {
    const splittedString = s.split(' ');
    if (splittedString.length !== pattern.length) return false;
    if (new Set(pattern.split("")).size !== new Set(splittedString).size) return false;

    const map = new Map();    
    for (let i = 0; i < pattern.length; i++) {
        if (map.has(pattern[i]) && map.get(pattern[i]) !== splittedString[i]) return false;
        map.set(pattern[i], splittedString[i]); 
    }

    return true;
};
// @lc code=end

console.log(wordPattern("abba", "dog cat cat dog1"))

