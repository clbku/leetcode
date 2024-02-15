/*
 * @lc app=leetcode id=206 lang=typescript
 *
 * [206] Reverse Linked List
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

function reverseList(head: ListNode | null): ListNode | null {
    if (!head) {return null}

    let reverseList = head;
    let p = head.next;
    
    if (!p) { return reverseList; }
    reverseList.next = null;
    
    while (p) {
        let tmp = p.next;
        p.next = reverseList;
        reverseList = p;
        p = tmp;
    }    

    return reverseList;
};
// @lc code=end

const head1 = new ListNode(1);
head1.next = new ListNode(2);
head1.next.next = new ListNode(3);
head1.next.next.next = new ListNode(4);
head1.next.next.next.next = new ListNode(5);

let res = reverseList(head1);
while (res) {
    console.log(res.val);
    res = res.next;
}

