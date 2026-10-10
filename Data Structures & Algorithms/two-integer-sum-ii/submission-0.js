class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let fp=0;
        let lp=numbers.length-1;
        while(fp<lp){
            let sum=numbers[fp]+numbers[lp];
            if(sum>target){
                lp--
            }else if(sum<target){
                fp++;
            }else{
                return [fp+1,lp+1]
            }
        }
    }
}
