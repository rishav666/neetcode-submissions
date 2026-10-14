class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if(s1.length>s2.length){
            return false
        }

        function isSame(s1,s2){
            for(let i=0;i<s1.length;i++){
                if(s1[i]!==s2[i])
                return false
            }
            return true;
        }

        let h1=new Array(26).fill(0);
        let h2= new Array(26).fill(0);
        for(let i=0;i<s1.length;i++){
            h1[s1[i].charCodeAt()-97] =h1[s1[i].charCodeAt()-97]+1;
             h2[s2[i].charCodeAt()-97] =h2[s2[i].charCodeAt()-97] +1;
        }

        for(let i=s1.length;i<s2.length;i++){
            if(isSame(h1,h2)){
                return true
            }
            h2[s2[i].charCodeAt()-97]++;
            h2[s2[i-s1.length].charCodeAt()-97]--;
            console.log(h1,h2)
        }

        if(isSame(h1,h2)){
            return true
        }
        return false
       

   



    }
}
