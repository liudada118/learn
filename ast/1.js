{/* <div id="root">
  <span class="demo">
    This is a span.
  </span>
  <p>DOM</p>
</div> */}
let dom = {
    tag: 'div',
    attrs: {
      id: 'root',
      className: 'wrap'
    },
    children: [
      {oneChild:{
          tag:'span',
          attrs:{class :demo},
          vlues:'This is a span.'
      }
    },{
        twoChild:{
            tag:'p',
            value:'DOM'
        }
    }
    ]
  }