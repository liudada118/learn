//定义一个常量 为 选取html中类名为speed的元素 下面的一次类推
const speed = document.querySelector('.speed')
const bar = document.querySelector('.speed-bar')
const video = document.querySelector('.flex')

// console.log(video.offsetHeight)
// 定义一个函数
function handleMove(e) {
  // console.log(e.pageY) 
  // e为形参 当触发事件时pageY为此时的纵坐标 this.offsettop为speed顶部的纵坐标
  const y = e.pageY - this.offsetTop; // offsetTop获取某个dom结构到浏览器顶部的距离
  //  this.offsetHeight为speed元素的总高度
  const percent = y / this.offsetHeight; // offsetHeight用来获取某dom结构的自身高度
  const min = 0.4;
  const max = 4;
  // 取整
  const height = Math.round(percent * 100) + '%';
  const playbackRate = percent * ( max - min ) + min;
  // console.log(y, percent, height, playbackRate)
  bar.style.height = height
  // tofixed函数去小数点后两位
  bar.textContent = playbackRate.toFixed(2) + 'x'
  // video的自带方法
  video.playbackRate = playbackRate
}

// 监听事件 就是当产生mousemove事件时触发handlemove事件
speed.addEventListener('mousemove', handleMove)