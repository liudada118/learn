// 将一个字符串改变成另一个字符串，莱文斯坦距离多少？
var a = "mitcmudadfa";
var b = "mtacnufadfd";
var c
console.log(c)
// 长度  有可能不等 
// 各种策略都去尝试下， 用递归很容易  f(n, m)  f(0, 0 ) 
// 回溯
//   最大值， JS 无穷大
// 一个大问题  分成若干个相似的小问题， 递归
// 递归 每一次都是 i, j 
// dist 依赖上一步的编辑距离 0   + 1
// 退出条件
// var i = 0, j = 0, edist = 0
for(let i = 0, j=0 ,edist=0 ;i <= a.length || j <= b.length;){
    // console.log(1)
    if (i == a.length || j == b.length) { // 不一定同时到达
        // console.log(2)
        if (i < a.length) edist += (a.length - i); // 
        if (j < b.length) edist += (b.length - j);
        console.log(edist)
        return;
    }

    if (a[i] == b[j]) {
        // console.log(3)
        i = i + 1;
        j = j + 1;
    }
    else if(a[i+1]=b[j+1])
    {
        i = i + 1;
        j = j + 1;
        edist += 1;
    }
    else if (a[i + 1] == b[j]) {
        i = i + 1;
        edist += 1;
    }
    else if (a[i] == b[j + 1]) {
        j += 1
        edist += 1;
    }else{
        i = i + 1;
        j = j + 1;
        edist += 1;  
    }
}

console.log(c)