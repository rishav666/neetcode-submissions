class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack=[];
        for(let op of tokens){
           if(op==='+'){
            const x=stack.pop();
            const y=stack.pop();
            stack.push(x+y)
            
           }else if(op ==='-'){
             const x=stack.pop();
            const y=stack.pop();
            stack.push(y-x)

           }else if(op === "*"){
             const x=stack.pop();
            const y=stack.pop();
            stack.push(x*y)

           }else if (op==="/"){
             const x=stack.pop();
            const y=stack.pop();
          
            stack.push(Math.trunc(y/x))

           }else{
            stack.push(+op)
           }
        }
        return stack[0]
    }
}
