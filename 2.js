var longestCommonPrefix = function (strs) {
    for (let j = 0; j < strs[0].length; j++) {
        for (let i = 0, j = 0; i + 1 < strs.length; i++) {
            console.log(strs[i][j] ,strs[i + 1][j])
            if (strs[i][j] == strs[i + 1][j]) {
                console.log(1)
                continue
            } else if (j == 0) {
                console.log('')
            } else if (j > 0) {
                console.log(strs[0].split(strs[0][j])[0])
            }
        }
    }
};
longestCommonPrefix('lw','lwx')