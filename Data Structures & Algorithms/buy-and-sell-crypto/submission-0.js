class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let sum=0;
        for(let i=0;i<prices.length-1;i++){
            for(let y=i+1;y<prices.length;y++){
                let tsum=prices[y]-prices[i]
                sum=tsum>sum?tsum:sum;
            }
        }
        return sum
    }
}
