class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        for (var x=0;x<nums.length;x++){
            for(var y=x+1;y<nums.length;y++){
                if(nums[x]===nums[y]){
                    return true;
                }
            }
        }
        return false
    }
}
