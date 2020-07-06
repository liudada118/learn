function solve(s){
    //..
  let arr = []
  for(let code of s){
    if(arr.indexOf(code)>=0){
      return false
    }
    arr.push(code)
    }
     arr.sort()
    console.log(arr)
    for(let b = 0 ; b<arr.length-1;b++){
     console.log( arr[b].charCodeAt()+1,arr[b+1].charCodeAt())
      if( arr[b].charCodeAt()+1 != arr[b+1].charCodeAt()){ 
        return false
      }
   
  }
   return true
}
console.log(solve('abd'))


// function solve(s) {
//     return 'abcdefghijklmnopqrstuvwxyz'.includes([...s].sort().join(''));
// }