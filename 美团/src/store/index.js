import { createStore ,combineReducers } from 'redux'
import ShoppingReducer from './reduces/shoping/shoping'

const rootReducer = combineReducers({
    shop : ShoppingReducer
})

export default rootReducer