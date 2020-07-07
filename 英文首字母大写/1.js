String.prototype.toJadenCase = function () {
    //...
    let arr = this.split(' ')
    let arr1 = []
    console.log(arr)
    for (let a of arr) {
        a = a.charAt(0).toUpperCase() + a.slice(1)
        arr1.push(a)
    }
    return arr1.join(' ')
};
let ad = 'hello wrold'
console.log(ad.toJadenCase())

// String.prototype.toJadenCase = function () { 
//     return this.split(" ").map(function(word){
//       return word.charAt(0).toUpperCase() + word.slice(1);
//     }).join(" ");
//   }

// String.prototype.toJadenCase = function () {
//     return this.replace(/(^|\s)[a-z]/g, function(x){ return x.toUpperCase(); });
//   };