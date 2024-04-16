/*
 * @lc app=leetcode id=383 lang=typescript
 *
 * [383] Ransom Note
 */

// @lc code=start
function canConstruct(ransomNote: string, magazine: string): boolean {
    const map = new Map();
    for (const character of magazine) {
        map.set(character, (map.get(character) ?? 0) + 1);
    }


    for (const character of ransomNote) {
        if (!map.get(character)) return false;
        map.set(character, map.get(character) - 1);
    }

    return true;
};
// @lc code=end

console.log(canConstruct("aaa", "aab"))

