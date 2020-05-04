## 前言

this在使用的过程中起着至关重要的作用，弄懂this的指向也非常关键，本文介绍一些常见的this指向和一些与this相关的api，让你轻轻松松弄懂this指向

### 普通函数this

this的指向：**我们可以大致的认为函数的this指向父级（上一级）**。怎么说呢，看下面案例

1. **当被定义为函数时，我们默认它指向window,为啥不说父级呢，我们看下面例子**

```JavaScript
    let a = function (){
        console.log(this.a)  //this->window
    }
    a()                      //undefined
```
```javaScript
    var a = function (){
        console.log(this.a)  //this->window
    }
    a()                      // F()
```
>**为啥同样是定义函数，let得到的结果是undefined，而var得到的才是我们想要的结果呢？**

在浏览器环境中系统默认生成**window（顶层对象）**里面来存放**var**声明的全局变量，
而**let**声明的全局变量不属于顶层对象的属性，**var**定义的元素是直接添加在**window**上的，**let**定义的元素不在顶层对象上，所以let定义的函数a在window上找不到。所以会出现undefined.

2. 当被作为属性函数定义的时候，**指向调用的父级元素**。怎么说呢，看下面案例
```JavaScript
    var c =2
    var a = {
        c:1,
        b: function () {
            console.log(this.c) //this->a
            }
        }
        a.b()                   //输出 1 
```
我们能清楚的看到属性函数b的父级为a，所以this指向a

3. 当属性函数赋值给函数时
```javascript
    var c =2
        var a = {
            c:1,
            b: function () {
                console.log(this.c)  // this->a
            }
        }
        let f = a.b
        f()                         //输出1
```
其实此函数就是跟例一的情况是一样的，相当于
```javascript
    var c = 1 
    let f = function () {
                console.log(this.c)  //输出1
            }
```
不用多讲参考例一
### 箭头函数this
this指向：**指向父级函数的this指向（上两级）**

**官方介绍**
- 函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
- this对象的指向是可变的，但是在箭头函数中，它是固定的。
- 箭头函数根本没有自己的this
- 箭头函数里面根本没有自己的this，而是引用外层的this。

具体参考阮一峰es6入门[阮一峰es6入门](https://es6.ruanyifeng.com)

1. 谁调用指向谁的this也相当于指向父级函数的this，例如
```javascript
var a =  ()=>{
            console.log(this)  //this->window
        }
a()                            //window
```
```javascript
var a = {
            b: ()=> {
                console.log(this)   //window
            }
        }
        a.b()                       //window
```
```javascript
var a = {
            c:1,
            b:  {
               d: ()=> {
                console.log(this) //window
            }
            d()
        }
        }
        a.b.d()                  //window
```
```javascript
    var a = {
        c:1,
        b: function() {
            d =()=> {
            this.c++                    //this->a
        }
    }
    }
    a.b()
    console.log(c)                      //输出2
```
我们知道箭头函数是指向父级函数的this，前面几个没有父级函数就指向window，箭头函数的父级函数为b，b的this指向a。所以箭头函数指向a。也可以这样理解箭头函数的父级（上级）为b，b的父级（上级）为a，所以箭头函数的this指向a。

this指向相当于如下代码
```javascript
var a = {
        c:1,
        b: function() {
            this.c++                    //this->a
        }
    }
    a.b()
    console.log(c)
```
看起来似乎有点多此一举，但是当配合一些dom操作的时候会有用处例如：
```javascript
function Timer() {
  this.s1 = 0;
  this.s2 = 0;
  // 箭头函数
  setInterval(() => this.s1++, 1000);   //this->Timer
  // 普通函数
  setInterval(function () {
    this.s2++;                          //this->setInterval
  }, 1000);
}
```
此时箭头函数起了作用而匿名函数并没有起到作用

### 使用api时this
**与函数this相关的api，可以直接改变this**
- **bind**
- **apply**
- **call**
>这三个api都能改变函数的this指向。**以下foo为定义号的函数**
1. **bind**
- 使用方法 foo.bind(a,b,c)

    第一个参数a为函数调用的时候指定的this指向,this指向a   例如foo.bind(window,b,c)指向window
    后面两个数b,c为形参，有的时候加，没有的话可以不写
    此api只是改变了函数的this指向，并没有直接执行函数，而另外两个api即改变函数this指向又执行了函数

2. apply
- 使用方法foo.apply(a,[b,c])
    
    第一个参数a为函数调用的时候指定的this指向,this指向a   例如foo.apply(window,[b,c])指向window
    后面两个数b,c为形参，有的时候加，没有的话可以不写
    此api只是改变了函数的this指向，并且执行函数

3. call
- 使用方法foo.call(a,b,c)

    第一个参数a为函数调用的时候指定的this指向,this指向a   例如foo.call(window,b,c)指向window
    后面两个数b,c为形参，有的时候加，没有的话可以不写
    此api只是改变了函数的this指向，并且执行函数

## 总结

本文讲解了this的指向问题
1. 普通函数this基本指向父级(上一级)
2. 箭头函数this基本指向父级函数的this指向（上两级）
3. api可以直接改变你想要指向的this

以上为本人对this的见解，如有问题请及时提出。大家一起讨论研究s