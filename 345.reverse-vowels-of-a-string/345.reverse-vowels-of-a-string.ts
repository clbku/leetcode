/*
 * @lc app=leetcode id=345 lang=typescript
 *
 * [345] Reverse Vowels of a String
 */

// @lc code=start
function reverseVowels(s: string): string {
    let left = 0;
    let right = s.length - 1;
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    const arr = s.split('');
    while (left <= right) {
        if (vowels.includes(arr[left]) && vowels.includes(arr[right])) {
            let tmp = arr[left];
            arr[left] = arr[right];
            arr[right] = tmp;
            left++;
            right--;
        }
        else {
            if (!vowels.includes(arr[left])) { left++ }
            if (!vowels.includes(arr[right])) { right-- }
        }
    }

    return arr.join('');
};
// @lc code=end

console.log(reverseVowels('lEetcode'))