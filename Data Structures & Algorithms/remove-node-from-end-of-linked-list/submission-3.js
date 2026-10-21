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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {

        let first=head;
        let second=head;
        let temp=n;
        while(temp){
            second=second.next;
            temp--;
        }
        if(!second){
            return head.next;
        }
        let tempNode=first;
        while(second!=null){
            tempNode=first
            first=first.next;
            second=second.next;
        }
        tempNode.next=first.next;
        return head

        

    }
}
