/*
 * @lc app=leetcode id=203 lang=typescript
 *
 * [203] Remove Linked List Elements
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

function removeElements(head: ListNode | null, val: number): ListNode | null {
    if (head === null) return null;
    if (head.val === val) return removeElements(head.next, val);
    head.next = removeElements(head.next, val);

    return head;
};
// @lc code=end

const head = new ListNode(1);
head.next = new ListNode(2, new ListNode(6, new ListNode(4, new ListNode(6))));

console.log(removeElements(head, 6))
