import { ThingsAdd, ThingsSub } from '../../constants'
const defaultState = [{ 
    number: 0, 
    key: 'apple1' ,
    img : 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1849785126,3032824496&fm=26&gp=0.jpg',
    name : '橙子',
    price : 15
},
{ 
    number: 0, 
    key: 'apple2',
    img : 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3301642898,92830133&fm=26&gp=0.jpg',
    name : '芒果',
    price : 15
 },
{ 
    number: 0, 
    key: 'apple3',
    img : 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2160770224,76115748&fm=26&gp=0.jpg',
    name : '苹果',
    price : 15
 },
{ 
    number: 0, 
    key: 'apple4',
    img : 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2349487808,2573098135&fm=26&gp=0.jpg',
    name : '葡萄',
    price : 15
 },
{ 
    number: 0, 
    key: 'apple5',
    img : 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2238712307,2789059053&fm=26&gp=0.jpg',
    name : '桃子',
    price : 15
 },
{ 
    number: 0, 
    key: 'blanana1',
    img : 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2547790868,1486970994&fm=26&gp=0.jpg',
    name : '西红柿',
    price : 15
 },
{ 
    number: 0, 
    key: 'val1',
    img : 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2545595191,2159708674&fm=26&gp=0.jpg',
    name : '草莓',
    price : 15
 }]
// let b = {...a}

export default function (state = defaultState, action) {
    // console.log('+++++++++++++++++',state)
    // let b = {...action}
    // let b = a.state
    // let state = 0

    switch (action.type) {
        case ThingsAdd:
            // return {state : action.state + 1}
            const list1 = state.slice(0)
            let goodAdd = list1.find(e => action.key == e.key)
            goodAdd.number += 1
            // console.log(goodAdd.state)
            return list1
        case ThingsSub:
            // return{state : action.state - 1}
            const list2 = state.slice(0)
            let goodSub = list2.find(e => action.key == e.key)
            goodSub.number -= 1
            return list2
        default: return state
    }

}