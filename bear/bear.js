const red = document.querySelector('.progress-red')
// Console.log('width')
let width=0;
let interval = setInterval(function(){
    width+=10;
    if(width>100){
        clearInterval(interval)
        return
    }
    red.style.width=width+'%';
},100)