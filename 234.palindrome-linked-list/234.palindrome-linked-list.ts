/*
 * @lc app=leetcode id=234 lang=typescript
 *
 * [234] Palindrome Linked List
 */

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

[1, 2]

function isPalindrome(head: ListNode | null): boolean {
    if (!head) return false;
    
    let fast = head;
    let slow = head;

    if (!slow.next) return true;
    if (!slow.next.next) {
        if (slow.val !== slow.next.val) return false;
        else return true;
    }

    const stack = [slow.val];

    while (fast?.next?.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (fast.next) stack.push(slow?.val);
    }

    
    slow = slow.next;
    
    while (slow && stack.length) {
        const top = stack.pop();
        if (slow.val !== top) return false;
        slow = slow.next;
    }

    return stack.length === 0;    
};
// @lc code=end

const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(2, new ListNode(1)))));
const head2 = new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(1))));

console.log(isPalindrome(head))
