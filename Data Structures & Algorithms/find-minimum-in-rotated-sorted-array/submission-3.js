class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l=0;
        let r=nums.length-1;
        if(nums.length===1){
            return nums[0]
        }
        if(nums[nums.length-1]>nums[0]){
            return nums[0]
        }
        while(l<=r){
            let mid = Math.floor((l+r)/2)
            if(nums[mid]<nums[mid-1]){
                return nums[mid]
            }else if(nums[mid]>nums[mid+1]){
                return nums[mid+1]
            }else if(nums[l]<=nums[mid]){
                l=mid+1
            }else{
                r=mid-1
            }
        }
    }
}
