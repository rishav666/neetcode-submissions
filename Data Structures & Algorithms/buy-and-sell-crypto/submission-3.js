class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxSum=0;
        let fp=0;
        let sp=fp+1;
        while(sp<prices.length){
            let sum=prices[sp]-prices[fp];
            if(sum<0){
                fp++;
                // sp++;
            }else{
            maxSum=Math.max(maxSum,sum)
            sp++;
            }
        }

        return maxSum;
       
    }
}
