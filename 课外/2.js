/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function ( strs) {
    var c=0
    for (let j = 0; j < strs[0].length; j++,c++) {
        for (let i = 0; i + 1 < strs.length; ) {
            if (strs[i][j] == strs[i+1][j]) {
                i++
                // console.log(1)
            } 
            else{
                c=c-1
                // console.log(strs[0].split(strs[0][c])[0])
                // return
                break  
            }
        }
        // console.log(1)
    }
    console.log(strs[0].split(strs[0][c])[0])
};
longestCommonPrefix(['flocd','flow','floight'])