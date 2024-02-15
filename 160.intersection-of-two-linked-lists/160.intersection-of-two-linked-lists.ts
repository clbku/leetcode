/*
 * @lc app=leetcode id=160 lang=typescript
 *
 * [160] Intersection of Two Linked Lists
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

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    let p1 = headA, p2 = headB;
    let l1 = 0, l2 = 0;

    while (p1 !== null) {
        l1++;
        p1 = p1.next;
    }

    while(p2 !== null) {
        l2++;
        p2 = p2.next;
    }

    p1 = headA;
    p2 = headB;
    
    
    if (l1 > l2) {
        for (let i = 0; i < l1 - l2; i++) {
            p1 = p1!.next;
        }
    }
    else {
        for (let i = 0; i < l2 - l1; i++) {
            p2 = p2!.next;
        }
    }

    while (p1 !== null && p2 !== null) {
        if (p1 === p2) {
            return p1;
        }
        p1 = p1.next;
        p2 = p2.next;
    }

    return null;
};
// @lc code=end

const a1 = new ListNode(4);
const a2 = new ListNode(1);
const b1 = new ListNode(5);
const b2 = new ListNode(6);
const b3 = new ListNode(1);
const c1 = new ListNode(8);
const c2 = new ListNode(4);
const c3 = new ListNode(5);

const headA = a1;
headA.next = a2;
headA.next.next = c1;
headA.next.next.next = c2
headA.next.next.next.next = c3


const headB = b1
headB.next = b2
headB.next.next = b3
headB.next.next.next = c1
headB.next.next.next.next = c2
headB.next.next.next.next.next = c3

console.log(getIntersectionNode(headA, headB));