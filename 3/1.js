var lengthOfLongestSubstring = function (s) {
    let arr = []
    // let arr1 = []
    let i=0,j=0
    for (let a of s) {
        let index = arr.indexOf(a)
       if(index<0){
        arr.push(a)
       }else{
        //    arr1.push(arr.length)
        // if(i<arr.length)
        if(i<arr.length){
            i=arr.length
        }
           arr.splice(0,index+1)
           arr.push(a)
       }
    }
    // arr1.push(arr.length)
    if(i<arr.length){
        i = arr.length
    }
    console.log(i)
};
lengthOfLongestSubstring('dvdf')