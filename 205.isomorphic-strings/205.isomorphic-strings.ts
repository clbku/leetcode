/*
 * @lc app=leetcode id=205 lang=typescript
 *
 * [205] Isomorphic Strings
 */

// @lc code=start
function isIsomorphic(s: string, t: string): boolean {
    const map = new Map<string, string>();

    if (s.length !== t.length) return false;
    if (new Set(s.split("")).size !== new Set(t.split("")).size) return false;

    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            if (map.get(s[i]) !== t[i]) return false;
        }
        else {
            map.set(s[i], t[i]);
        }
    }

    return true;
};
// @lc code=end
console.log(isIsomorphic("dede", "baba"));