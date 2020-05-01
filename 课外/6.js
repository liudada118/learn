/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function ( strs) {
    var c=0
    for (let j = 0; j < strs[0].length; j++,c++) {
        for (let i = 0; i + 1 < strs.length;i++ ) {
            if (strs[i][j] != strs[i+1][j]) {
                console.log(strs[0].split(strs[0][j])[0])
                return
            } 
        }
    }
};
longestCommonPrefix(['fl','fl','fl'])