class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let newArray=[]
        for(let i=0;i<position.length;i++){
               let y=[position[i],speed[i]];
               newArray.push(y)
        }
        // console.log(newArray)
        newArray.sort((a,b)=>b[0]-a[0])
        // console.log(newArray)
        let stack=[newArray[0]];
        for(let i=1;i<newArray.length;i++){
            let sp=(target-newArray[i][0])/newArray[i][1];
            let top1=(target-stack[stack.length-1][0])/stack[stack.length-1][1];
            if(sp>top1){
                stack.push(newArray[i])
            }

        }
        return stack.length
    }
}
