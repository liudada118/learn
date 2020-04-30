var num = [0,0,0,1,1,1,2,2,7,2,3,3,6,3,4,4,4,5,5,5,6]

for(let i = 0 ; i< num.length;i++){
    for(let j= i+1 ; j<num.length ;j++){
        if( num[j] == num[i]){
            // console.log(num[i])
            num.splice(j,1)
            j--
        }
    }
}
console.log(num)