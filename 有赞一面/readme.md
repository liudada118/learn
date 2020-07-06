有赞一面凉经

1. css选择器有哪些

2. 选择器的优先级

    1，0，0，0 style = ''
    0，1，0，0 id选择器
    0，0，1，0 class选择器
    0，0，0，1 元素选择器 div span
    0，0，0，0 通配符选择器 :* 子元素选择器：> 相邻选择器：+ ~

    选择器重叠时   不会进位

flex布局

postion有哪些属性

absolute，relative，fixed定位的区别

relative 相当于自身定位 不脱离文档流
    absolute fixed 脱离文档流 相对于包含块定位

es6新特性

es5和es6写法上有什么不同

let,const,var的区别

    let const 不属于顶层变量 为块级作用域

    var 属于顶层变量 不为会计作用域

箭头函数和普通函数的区别

    1. 箭头函数没有this 根据指向父级函数的this
    2. 

js异步处理方式有哪些

promise有哪些静态属性

    Promise.all
    看所有的Promise
    Promise.race
    比较Promise
    Promise.allSettled

js的数据类型


什么是闭包，闭包可以用来做什么

    (作用域) 词法环境  调用外层变量形成闭包

js有哪些类型检查的方法

instance of在原型链上的查找方式，是递归还是...？

    1. 判断 构造上面存不存在一个 Symbol.hasInstance的方法，如果有这个方法，则取这个方法的返回值
    2. 否则判断左边这个 对象的原型链上面，存不存在右边这个 构造函数的prototype

call,bind,apply的区别

浏览器事件模型，一个点击按钮点完发生了什么？

    事件流

如何对多个事件进行处理？

跨域，同源策略

jsonp的原理

cors跨域有哪些头部

cookie,seesion,localstorage的区别