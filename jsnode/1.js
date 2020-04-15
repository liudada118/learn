function area(w,h){
    if(arguments.length<2){
        console.error('参数不够')
    }
    if(typeof(w)!='number'||typeof(h)!='number'){
        console.error('参数类型不对请输入数字')
    }else{ return w*h} 
}
console.log(area(1,2))