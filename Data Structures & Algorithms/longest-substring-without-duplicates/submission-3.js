class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let mySet= new Set();
        let maxLen=0;
        if(s.length===1) return 1
        let l=0;
        for(let r=0;r<s.length;r++){

            while(mySet.has(s[r])){
                mySet.delete(s[l])
                                l++;

            }
            mySet.add(s[r])

            maxLen=Math.max(maxLen,r-l+1)
       
        }
            return maxLen

    }
}
