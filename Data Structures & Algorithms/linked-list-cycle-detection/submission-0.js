/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        let curr=head;
        let mySet = new Set();
        while(curr!=null){
            if(mySet.has(curr.next)){
                return true
            }else{
                mySet.add(curr.next)
            }
            curr=curr.next;
        }
        return false
    }
}
