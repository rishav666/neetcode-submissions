class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {

        let stack=[];
        for(let x of s){
            if(x==="("||x==="["||x==="{"){
                stack.push(x)
            }else if(x===')'){
                let p=stack.pop();
                if(p!='('){
                    return false
                }
            }
            else if(x===']'){
                let p=stack.pop();
                if(p!='['){
                    return false
                }
            }
            else if(x==='}'){
                let p=stack.pop();
                if(p!='{'){
                    return false
                }
            }
        }
        if(stack.length===0){
            return true
        }else{
            return false
        }

        

    }

}
