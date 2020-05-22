// let arr = [0,1,2,3]
// function shuffle(arr){
//     let len = arr.length
//     for(let i = 0;i < len; i++){
//         let idx = Math.floor(Math.random()*(len - i))
//         [arr[len-i-1],arr[idx]]=[arr[idx],arr[len-i-1]]
//     }
//     return arr
// }

// // console.log(arr)
function shuffle (arr){
    let len = arr.length
    for( let i = 0 ; i< len ; i++){
        let idx = Math.floor(Math.random()*(len - i))
        [arr[len - i - 1],arr[idx]]= [arr[idx],arr[len - i - 1]]
    }
    return arr
}