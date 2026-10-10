class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const y=s.split(' ').join('').split('').filter(x=> {
  const y= x.charCodeAt()>=65 && x.charCodeAt()<=90 || x.charCodeAt()>=97 && x.charCodeAt()<=122 || x.charCodeAt()>=48 && x.charCodeAt()<=57
            return y
}).join('').toLowerCase();
const p=y.split('').reverse().join('')
console.log(y)
console.log(p)



if(y===p){
    return true
}else{
    return false
}
    }
}
