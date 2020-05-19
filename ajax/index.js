    // button 通过 一个 ajax | http 请求，向后端请求数据
    const btn = document.getElementById('btn')
    btn.addEventListener('click',function(){
      const val = document.getElementById('input').value
      const body = document.querySelector('body')
      const ul = document.querySelector('.ul')
    const xhr = new XMLHttpRequest();
    // 向网易云后端 url：统一资源定位符
    // 1: 请求的方法 get: http 规定的一个方法
    // 2：request url
    // 3: true 异步 false 同步
    xhr.open('get',
    `http://neteasecloudmusicapi.zhaoboy.com/search?keywords=${val}`,
    true);
    xhr.onreadystatechange = function (){
      console.log(xhr.readyState,xhr.response)
      if(xhr.readyState === 4 && xhr.status === 200){
      let res = JSON.parse(xhr.response);
      console.log(res);
      console.log(res.result.songs[1].name)
      
      ul.innerHTML = res.result.songs.map(function(song){
      let {artists} = song
      let singers = artists.map(function(artist){
        return artist.name
      }).join('/')
    return`
        <li>
          ${song.name} ${singers}
          </li>
        `
      }).join('')
    }
    }
    // console.log(xhr.readyState)
    xhr.send();
    // 拿到le
    // console.log(xhr.response);
    })