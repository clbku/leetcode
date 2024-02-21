/*
 * @lc app=leetcode id=21 lang=typescript
 *
 * [21] Merge Two Sorted Lists
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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let p1 = list1, p2 = list2;
    let res = new ListNode();
    let t1 = res;

    if (!p1 && !p2) return null;
    if (!p1) return p2;
    if (!p2) return p1;

    if (p1.val > p2.val) {
        res.val = p2.val;
        p2 = p2.next;
    }
    else {
        res.val = p1.val;
        p1 = p1.next;
    }

    while (p1 !== null || p2 !== null) {
        if (!p1) {
            t1.next = p2;
            break;
        }
        else if (!p2) {
            t1.next = p1;
            break;
        }
        else if (p1.val > p2.val) {
            t1.next = p2;
            t1 = t1.next;
            p2 = p2.next;
        }
        else {
            t1.next = p1;
            t1 = t1.next;
            p1 = p1.next;
        }
    }

    return res;
};
// @lc code=end

const list1 = new ListNode(1);
list1.next = new ListNode(2);
list1.next.next = new ListNode(4);

const list2 = new ListNode(1);
list2.next = new ListNode(3);
list2.next.next = new ListNode(4);

console.log(mergeTwoLists(list1, list2))