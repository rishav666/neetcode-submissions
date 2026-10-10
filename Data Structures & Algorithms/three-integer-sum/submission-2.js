class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a,b)=>a-b);
        let arr=[];
        for(let i=0;i<nums.length-2;i++){
            if (i > 0 && nums[i] === nums[i - 1]) continue;
            let fp=i+1;
            let lp=nums.length-1;
            while(fp<lp){
                let sum=nums[fp]+nums[lp]+nums[i];
                if(sum>0){
                    lp--;
                }else if(sum<0){
                    fp++;
                }else{
                   const tArr=[nums[i],nums[fp],nums[lp]];
                   arr.push(tArr)
                   while(fp<lp && nums[fp]===nums[fp+1]) fp++;
                   while(fp<lp && nums[lp]===nums[lp-1]) lp--;
                   lp--;
                   fp++;
               
                }
            }
        }
        return arr

     
    }
}
