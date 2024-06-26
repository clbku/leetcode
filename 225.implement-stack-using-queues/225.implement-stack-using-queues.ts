/*
 * @lc app=leetcode id=225 lang=typescript
 *
 * [225] Implement Stack using Queues
 */

// @lc code=start
class MyStack {
    private queue: number[];
    private len: number;

    constructor() {
        this.queue = [];
        this.len = 0;
    }

    push(x: number): void {
        this.queue.push(x);
        for (let i = 0; i < this.len; i++) {
            this.queue.push(this.queue.shift()!);
        }
        this.len++;
    }

    pop(): number {
        const top = this.queue.shift();
        this.len--;
        return top!;
    }

    top(): number {
       return this.queue[0];
    }

    empty(): boolean {
        return this.len === 0
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
// @lc code=end
