class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxWater=0;
        let pointerone=0;
        let pointerlast=heights.length-1;
        while(pointerone<pointerlast){
            let min=Math.min(heights[pointerone],heights[pointerlast])
            let water=min*(pointerlast-pointerone);
            maxWater=water>maxWater?water:maxWater;
            if(heights[pointerone]<heights[pointerlast]){
                pointerone++
            }else if(heights[pointerone]>heights[pointerlast]){
                pointerlast--;
            }else{
                pointerone++;
                pointerlast--;
            }
        }
        return maxWater

    }
}
