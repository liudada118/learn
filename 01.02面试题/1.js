var CheckPermutation = function(s1, s2) {
    let arr1=[],arr2=[]
    for(let code of s1){
        arr1.push(code)
    }
    for(let code of s2){
        arr2.push(code)
    }
    return arr1.sort().join('') == arr2.sort().join('')
};
