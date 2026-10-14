class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let p= new Array(nums.length).fill(0);
        let s=new Array(nums.length).fill(0);
        let res= new Array(nums.length).fill(0);

        p[0]=1;
        s[nums.length-1]=1;
        for(let i=1;i<nums.length;i++){
            p[i]=p[i-1] * nums[i-1];
        }
        for(let j=nums.length-2;j>=0;j--){
            s[j]=nums[j+1]*s[j+1];
        }
        for(let i=0;i<nums.length;i++){
            res[i]=p[i]*s[i]
        }

        return res
     
    }
}
