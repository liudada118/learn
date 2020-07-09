function findNb(m) {
    // your code
  let a = 0,i= 0
  while(a<m){
    i++
    a += Math.pow(i,3)
    // console.log(i)
  }
  if(a == m){
      return i
  }else{
     return (-1); 
  }
}
console.log(findNb(4183059834009))


// function findNb(m) {
//     var n = 0
//     while (m > 0) m -= ++n**3
//     return m ? -1 : n
//   }