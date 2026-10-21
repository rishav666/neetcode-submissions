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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        if(list1===null) return list2;
        if(list2=== null) return list1
        let head1=list1;
        let head2 = list2;
        let head3=null;
        let first=null
        while(head1!==null && head2!==null){
            if(head1.val<=head2.val){
                if(head3===null){
                    head3=head1;
                }else{
                    head3.next=head1
                    head3=head3.next;
                }
                if(first===null){
                    first=head3;
                }
                head1=head1.next;
            }else{
                if(head3===null){
                    head3=head2
                }else{
                    head3.next=head2;
                    head3=head3.next;
                }
                  if(first===null){
                    first=head3;
                }
                head2=head2.next;
            }
        }
        if(head1){
            head3.next=head1
        }
        if(head2){
            head3.next=head2
        }
        return first

    }
}
