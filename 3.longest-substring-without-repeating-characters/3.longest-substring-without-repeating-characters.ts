/*
 * @lc app=leetcode id=3 lang=typescript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
    const set = new Set();
    let left = 0, right = 0;
    let maxLength = 0;

    while (right < s.length) {
        if (!set.has(s[right])) {
            set.add(s[right])
            right++;
            maxLength = Math.max(maxLength, right - left);
        }
        else {
            set.delete(s[left]);
            left++;
        }
    }
    
    return maxLength;
}

// @lc code=end

lengthOfLongestSubstring("bbbbb");
