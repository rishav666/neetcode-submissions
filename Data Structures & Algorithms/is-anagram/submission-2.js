class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        if(s.length!=t.length){
            return false
        }
        const y=new Array(26).fill(0);
        s=s.toUpperCase();
        t=t.toUpperCase();
        for(let i=0;i<s.length;i++){
            y[s[i].charCodeAt()-65]++;
            y[t[i].charCodeAt()-65]--;

        }
        for(let i=0;i<y.length;i++){
            if(y[i]>0){
                return false
            }
        }
        return true
    }
}
