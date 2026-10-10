class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const y= new Map();
        for(let i=0;i<nums.length;i++){
            if(y.has(nums[i])){
                return true
            }else{
                y.set(nums[i],'true')
            }
        }
        return false
    }
}
