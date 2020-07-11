import Mock from 'mockjs'

export default  Mock.mock('/all/',
'get',{
  headName:'我的课程',
//   'tab1|3':[{
//     'type|+1' : 1,
//     'name' : '@name()'
//   }],
  tab1:[{
    type : 1,
    name:'全部'
  },
  {
    type : 2,
    name:'未完成'
  },{
    type: 3,
    name:'已学完'
  }],
//   'tab2|6' : [{
//     'typea|+1' : 0,
//     'name':'@name()'
//   }],
  tab2:[
    {
      typea : 0,
      name:'所有形式'
    },
    {
      name:'专栏',
      typea : 1
    },{
      name:'视屏课',
      typea : 2
    },{
      name:'微课',
      typea : 3
    },{
      name:'每日一课',
      typea : 4
    },{
      name:'其他',
      typea : 5
    }],
    'lesson|7' : [
      {
        'type|+1' : 1,
        'typea|1-5' : 1,
        'image' : "@image('100x100','#FFC0CB','Hello')",
        'name' : '@name()',
        'title' : '@title()',
        'progress|1-100':1,
      }
    ],
    // lesson : [
    //   {
    //     type : 'ok',
    //     typea : '1',
    //     img : 'https://static001.geekbang.org/resource/image/3d/a3/3d7751a2844e063b00125c017bf360a3.jpg?x-oss-process=image/resize,m_fill,h_103,w_103',
    //     name : '深入剖析Kubernetes',
    //     info : '共 57 讲 | 已学 57 讲 | 学完 100%',
    //     infoname : '专栏'
    //   },
    //   {
    //     type : 'no',
    //     typea : '1',
    //     img : 'https://static001.geekbang.org/resource/image/3d/a3/3d7751a2844e063b00125c017bf360a3.jpg?x-oss-process=image/resize,m_fill,h_103,w_103',
    //     name : '深入剖析Kubernetes',
    //     info : '共 57 讲 | 已学 2 讲 | 学完 3%',
    //     infoname : '专栏'
    //   },
    //   {
    //     type : 'ok',
    //     typea : '2',
    //     img : 'https://static001.geekbang.org/resource/image/3d/a3/3d7751a2844e063b00125c017bf360a3.jpg?x-oss-process=image/resize,m_fill,h_103,w_103',
    //     name : '深入剖析Kubernetes',
    //     info : '共 57 讲 | 已学 57 讲 | 学完 100%',
    //     infoname : '视屏课'
    //   },
    //   {
    //     type : 'ok',
    //     typea : '2',
    //     img : 'https://static001.geekbang.org/resource/image/3d/a3/3d7751a2844e063b00125c017bf360a3.jpg?x-oss-process=image/resize,m_fill,h_103,w_103',
    //     name : '深入剖析Kubernetes',
    //     info : '共 57 讲 | 已学 57 讲 | 学完 100%',
    //     infoname : '视屏课'
    //   },
    //   {
    //     type : 'ok',
    //     typea : '1',
    //     img : 'https://static001.geekbang.org/resource/image/3d/a3/3d7751a2844e063b00125c017bf360a3.jpg?x-oss-process=image/resize,m_fill,h_103,w_103',
    //     name : '深入剖析Kubernetes',
    //     info : '共 57 讲 | 已学 57 讲 | 学完 100%',
    //     infoname : '专栏'
    //   },
    //   {
    //     type : 'no',
    //     typea : '3',
    //     img : 'https://static001.geekbang.org/resource/image/3d/a3/3d7751a2844e063b00125c017bf360a3.jpg?x-oss-process=image/resize,m_fill,h_103,w_103',
    //     name : '深入剖析Kubernetes',
    //     info : '共 57 讲 | 已学 2 讲 | 学完 3%',
    //     infoname : '微课'
    //   },
    //   {
    //     type : 'ok',
    //     typea : '5',
    //     img : 'https://static001.geekbang.org/resource/image/3d/a3/3d7751a2844e063b00125c017bf360a3.jpg?x-oss-process=image/resize,m_fill,h_103,w_103',
    //     name : '深入剖析Kubernetes',
    //     info : '共 57 讲 | 已学 57 讲 | 学完 100%',
    //     infoname : '其他'
    //   }
    // ]
})