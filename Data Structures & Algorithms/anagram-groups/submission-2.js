class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

       let newMap= new Map();
        let ans=[]
        for(let word of strs){
            const arr= new Array(26).fill(0);
            for(let i=0;i<word.length;i++){
                arr[word[i].charCodeAt()-97]++;
            }
            let wordStr=arr.join(',');

            if(!newMap.has(wordStr)){
                newMap.set(wordStr,[])
            }

           let l= newMap.get(wordStr);
           l=[...l,word]
        //    console.log(l,'dfjkgsu')
           newMap.set(wordStr,l)
        }

        for(let [key,value] of newMap){
            ans.push(value)
        }
        return ans

    }
}
