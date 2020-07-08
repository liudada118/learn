function sortArray(array) {
    let a = [],b=[]
    // Return a sorted array.
    let i = 0
    for(let arr of array){
      if(arr%2!=0){
        a.push(arr)
        b.push(i)
      }
      i++
    }
    a.sort(function(x,y){
      return x-y
    })
    b.sort()
    for(let k = 0;k<a.length ; k++){
      array[b[k]] = a[k]
    }
    return array
  }


//   function sortArray(array) {
//     const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
//     return array.map((x) => x % 2 ? odd.shift() : x);
//   }