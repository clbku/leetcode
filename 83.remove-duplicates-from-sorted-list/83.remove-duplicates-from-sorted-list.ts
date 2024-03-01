/*
 * @lc app=leetcode id=83 lang=typescript
 *
 * [83] Remove Duplicates from Sorted List
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

function deleteDuplicates(head: ListNode | null): ListNode | null {
    const set = new Set();
    
    if (!head) return null;
    if (!head.next) return new ListNode(head.val);

    let tmp = head;
    let res = tmp;

    set.add(tmp.val);

    while (tmp.next) {
        if (set.has(tmp.next.val)) {
            tmp.next = tmp.next.next;
        }
        else {
            set.add(tmp.next.val);
            tmp = tmp.next;
        }
    }

    return res;
};
// @lc code=end

const head = new ListNode(1);
head.next = new ListNode(1);
head.next.next = new ListNode(2);
head.next.next.next = new ListNode(3);
head.next.next.next.next = new ListNode(3);

console.log(deleteDuplicates(head));