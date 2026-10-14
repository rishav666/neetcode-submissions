class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let long=0;
        let mySet = new Set(nums);
        for(let i=0;i<nums.length;i++){
            let sum=0;
            if(!mySet.has(nums[i]-1)){
                let localNum=nums[i]
                while(mySet.has(localNum)){
                    sum++;
                    localNum++;
                }
            }
            long=Math.max(long,sum)
        }
        return long;
    }
}
