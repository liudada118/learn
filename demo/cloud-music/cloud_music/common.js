window.onload = function() {
  const tabLinks = document.querySelectorAll('.tabbar a');
  
  // console.log(imge)
  tabLinks.forEach(function(link) {
    // console.log(link);
    link.addEventListener('click', function(event) {
      console.log(event)
      event.preventDefault();
      // 1. 取消之前的selected
      // 2. 点哪个a 就加selected 
      document.querySelector('.selected')
        .classList.remove('selected');
      this.classList.add('selected')
    }, false);
  })

  // 先拿到 swiper 的数据
  // bannerList 数据
  // 真的数据  真的做出
  // XMLHttpRequest 太难了 现代版fetch  
  // var a = []
    fetch('http://localhost:3000/banner')
    .then(data => data.json())
    .then(data => {
      // console.log(data);
      for(let i=0; i<data.banners.length;i++){
        const swiperWrapper = document.querySelector('.swiper-wrapper')
        // console.log(swiperWrapper)
        // swiperWrapper.innerHTML = 1
        const img = document.createElement('img')
        img.src = data.banners[i].imageUrl
        // console.log(data.banners[i].imageUrl)
        const div = document.createElement('div')
        div.className='swiper-slide'
        div.appendChild(img)
        swiperWrapper.innerHTML+= `<div class="swiper-slide"><img src="${data.banners[i].imageUrl}"></div>`
        // console.log(div)
      };
    })
    .then( ()=> {
      var mySwiper = new Swiper ('.swiper-container', {
      direction: 'horizontal', // 垂直切换选项
      // loop: true, // 循环模式选项
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      },
    })  })
}
