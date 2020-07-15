var letterCombinations = function(digits) {
    let result = []
    if(digits.length == 0) return []
    let numMap = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz'
    }
    for(let code of digits){
        let word = numMap[code]
        if(result.length > 0){
            let tmp = []
            for(let char of word){
                for(let old of result){
                    tmp.push(old+char)
                }
            }
            result = tmp
        }else{
            result.push(...word)
        }
    }
    return result
};