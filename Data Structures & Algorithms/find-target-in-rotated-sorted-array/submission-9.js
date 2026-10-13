class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let piv = -1;
        let l=0;
        let r=nums.length-1;
        while(l<=r){
            let mid=Math.floor((l+r)/2);
            if(nums[mid]<nums[mid-1]){
                piv=mid;
                break
            }
             if(nums[mid]>nums[mid+1]){
                piv=mid+1;
                break
            }else if(nums[mid]>nums[l]){
                l=mid+1
            }else{
                r=mid-1
            }
        }
        console.log(piv,'skjfghksuhjf')
        if(nums[piv]===target){
            return piv
        }
        l=0;
        r=nums.length-1;
        if(target>=nums[0] && target<=nums[piv-1]){
            r=piv-1;
        }else{
            l=piv
        }
        if(piv===-1){
            l=0;
            r=nums.length-1
        }
        // if(target>nums[0] && target<nums[piv]){
        //     l=0;
        //     r=piv-1
        // }else{
        //     l=piv+1;
        //     r=nums.length-1
        // }
        console.log(l,r,'dhfbgsdjksdklfjisudhfguy')
        while(l<=r){
            let mid=Math.floor((l+r)/2);
            if(nums[mid]===target){
                return mid
            }
            if(nums[mid]<target){
                l=mid+1
            }else{
                r=mid-1;
            }
        }
        return -1

    }
}
