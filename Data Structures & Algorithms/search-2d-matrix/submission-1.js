class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
       let arrIndex=undefined
        for(let i=0;i<matrix.length;i++){

           if(target>= matrix[i][0]  && target<= matrix[i][matrix[i].length-1]){
              arrIndex=i
           }
        }
        if(arrIndex !=undefined){
            let l=0;
            let r=matrix[arrIndex].length;
            while(l<=r){
                let mid=Math.floor((l+r)/2)
                if(matrix[arrIndex][mid]===target){
                    return true;
                }
                if(matrix[arrIndex][mid]<target){
                    l=mid+1
                }else{
                   r=mid-1
                }
            }
        }
        return false
    }
}
