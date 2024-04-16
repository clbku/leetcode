/*
 * @lc app=leetcode id=387 lang=typescript
 *
 * [387] First Unique Character in a String
 */

// @lc code=start
function firstUniqChar(s: string): number {
    const map = new Map();
    for (let i = 0; i < s.length; i++) {
        if (map.get(s[i]) !== undefined) {
            map.set(s[i], -1);
        }
        else {
            map.set(s[i], i);
        }
    }
    
    for (const value of map.values()) {
        if (value !== -1) return value;
    }

    return -1;
};
// @lc code=end

console.log(firstUniqChar('aabb'))