class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, count) {
        const newmap=new Map();
        for(let i=0;i<nums.length;i++){
            if(newmap.has(nums[i])){
                newmap.set(nums[i],newmap.get(nums[i])+1)
            }else{
                newmap.set(nums[i],1)
            }
        }
        const ans=new Array(nums.length).fill(0);

        
       
        for(let [key,value] of newmap){
            if(ans[value]){
                ans[value]=[...ans[value],key]
            }else{
                ans[value]=[key]
            }
        }

        let kfreq=[]
for(let i=ans.length;i>=0 && count>0;i--){
    if(Array.isArray(ans[i])){

         if(Array.isArray(ans[i])){
            for(let z=0;z<ans[i].length && count;z++){
                kfreq.push(ans[i][z]);
                count--;
            }
         }else{
            kfreq.push(ans[i][0])
            count--;
         }
    }
}

return kfreq

    }
}
