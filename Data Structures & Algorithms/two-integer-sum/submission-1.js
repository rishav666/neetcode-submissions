class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const y= new Map();
        for(let i=0;i<nums.length;i++){
            if(y.has(target-nums[i])){
                return [y.get(target-nums[i]),i]
            }else{
                y.set(nums[i],i)
            }
        }
        return []
    
    }
}
