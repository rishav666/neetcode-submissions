class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let left = new Array(height.length).fill(0);
        let right = new Array(height.length).fill(0);

        //check for the max left and max right
        left[0]=0;
        let max=left[0];
        for(let i=1;i<height.length;i++){
           left[i]= Math.max(max,height[i-1])
           max=left[i];
        }
        right[height.length-1]=0;
         max=0;
        for(let i=height.length-2;i>=0;i--){
            right[i]=Math.max(max,height[i+1])
            max=right[i];
        }

        let sum=0;
        for(let i=0;i<height.length;i++){
            let min=Math.min(left[i],right[i]);
            if(min>height[i]){
                let water=min-height[i];
                sum+=water
            }
        }
        return sum

    }
}
