let a = 0
function a (){
function text(){
    console.log(a++)
}}
function text1(){
    console.log(a--)
}
console.log(a)
// a()
// a()
// a()
text1()
text1()
text1()
console.log(++a)
// 感觉就是多个函数公共使用的变量就使用闭包  单个函数使用就形参  内部