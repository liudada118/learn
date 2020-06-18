import React, { Component } from 'react'
import Homepage from './components/homePage'
import { BrowserRouter, Route, Redirect, Link } from 'react-router-dom'
import Message from './components/message'
import Order from './components/order'
import "./App.css"
import homepage from './assets/img/homepage.png'
import message from './assets/img/message.png'
import order from './assets/img/order.png'
import Shopkeeper from './components/shopkeeper'
import App from './App'
import { Provider } from 'react-redux'
import store from './store'
import FoodList from './components/shopkeeper/foodlist'
import ShopComment from './components/shopkeeper/comment'
import ShopBusiness from './components/shopkeeper/business'
class Appp extends Component {
  render() {
    return (
      // <Provider store={store}>
        <BrowserRouter>
          {/* <Route path="/" component={App} /> */}
          <Route path="/homepage" component={Homepage} />
          <Route path="/message" component={Message} />
          <Route path="/order" component={Order} />
          <Route path='/:type/shopkeeper/order' component={Shopkeeper} />
          <Route path='/:type/shopkeeper/comment' component= {ShopComment}/>
          <Route path='/:type/shopkeeper/business' component= {ShopBusiness}/>
          <Redirect from="/*" to="/homepage" />
          <Route exact path='/:type/shopkeeper' component={Shopkeeper}/>
        </BrowserRouter>
      //  </Provider>
    )
  }
}

export default Appp