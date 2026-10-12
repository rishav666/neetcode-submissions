class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
       let arrIndex=undefined
          

          let l=0;
          let r=matrix.length -1 ;
          while(l<=r){
            let mid=Math.floor((l+r)/2)
             if(target>= matrix[mid][0]  && target<= matrix[mid][matrix[mid].length-1]){
              arrIndex=mid;
              break ;
              }
              if(target<matrix[mid][matrix[mid].length-1]){
              r=mid-1

              }else{
                l=mid+1
              }
          }

         



           if(arrIndex===undefined){
            return false
           }
        
        if(arrIndex !=undefined){
            let l=0;
            let r=matrix[arrIndex].length -1 ;
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
