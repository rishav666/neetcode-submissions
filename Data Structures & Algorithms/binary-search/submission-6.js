class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        function bsearch(arr,l,r,x){
            let mid=Math.floor((l+r)/2)
            if(arr[mid]===x){
                return mid
            }
            if(l>r){
                return -1
            }
            if(arr[mid]>x){
                return bsearch(arr,l,mid-1,x)
            }else{
                return bsearch(arr,mid+1,r,x)
            }
            

        }
        return bsearch(nums,0,nums.length,target)
    }
}
