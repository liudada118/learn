import {ThingsAdd, ThingsSub} from '../../constants'
const defaultState = {state:0,id:0}
// let b = {...a}
export default function (state = defaultState, action){
    console.log('+++++++++++++++++',state)
    // let b = {...action}
    // let b = a.state
    // let state = 0
    
    switch(action.type){
        case ThingsAdd :
            // return {state : action.state + 1}
            const list1 = state.slice(0)
            return  state + 1
        case ThingsSub :
            // return{state : action.state - 1}
            return state - 1
        // default : return state
    }

}