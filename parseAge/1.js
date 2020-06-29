function parseAge (a){
    let age = parseInt(a)
    if (typeof  age === 'number'){
        console.log(age)
    }else{
        console.log('请输入一个数字')
    }
}
parseAge('j')