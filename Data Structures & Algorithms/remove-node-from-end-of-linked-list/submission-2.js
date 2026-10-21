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

        let count=0;
        let tempHead=head;
        while(tempHead){
            count++;
            tempHead=tempHead.next;
        }
        // console.log(count,'dsfsdfs')
        tempHead=head;
        if(n>count){
            return head;
        }
      
        let removeIndex=count-n
        console.log(removeIndex,'sdfsd')
        if(removeIndex===0){
            return head.next
            head=head.next
        }
        console.log(removeIndex,'dsfuhs')
        while(removeIndex-1>0){
            tempHead=tempHead.next;
            removeIndex--;
        }
        let nextNode=tempHead.next;
        tempHead.next=nextNode.next;

        return head

    }
}
