/*
 * @lc app=leetcode id=125 lang=typescript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
function isPalindrome(s: string): boolean {
    let left = 0, right = s.length - 1;

    if (right <= left ) return true;

    s = s.toLowerCase();
    
    while (left < right) {
        const charLeft = s.charCodeAt(left);
        const charRight = s.charCodeAt(right);

        if (!(charLeft <= 122 && charLeft >= 97) && !(charLeft <= 57 && charLeft >= 48)) { left++; continue; }
        if (!(charRight <= 122 && charRight >= 97) && !(charRight <= 57 && charRight >= 48)) { right--; continue; }

        if (charLeft !== charRight) return false;
        left++;
        right--;
    }

    return true;
};
// @lc code=end

console.log(isPalindrome("A man, a plan, a canal: Panama"))
