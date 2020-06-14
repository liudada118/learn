import React,{Component} from 'react'
import Homepage from './components/homePage'
import { BrowserRouter, Route, Redirect, Link } from 'react-router-dom'
import Message from './components/message'
import Order from './components/order'
import "./App.css"
import homepage from './assets/img/homepage.png'
import message from './assets/img/message.png'
import order from './assets/img/order.png'
import Shopkeeper from './components/shopkeeper'

class App extends Component{
  render(){
    return(
      <BrowserRouter>
      <Route path="/homepage" component={Homepage} />
      <Route path="/message" component={Message} />
      <Route path="/order" component={Order} />
      <Route path='/:id/Shopkeeper' component={Shopkeeper} />
      <Redirect from="/*" to="/homepage" />
      <div className="item">
        <div className="item-item homepage-item">
          <Link className="item-link" to="/homepage" >
            <div className="img">
              <img src={homepage} alt=""/>
            </div>
            <div>
              <span>首页</span>
            </div>
          </Link>
        </div>
        <div className="item-item order-item">
          <Link className="item-link" to="/order" >
            <div className="img">
              <img src={order} alt=""/>
            </div>
            <div>
              <span>订单</span>
            </div>
          </Link>
        </div>
        <div className="item-item message-item">
          <Link className="item-link" to="/message" >
            <div className="img">
              <img src={message} alt=""/>
            </div>
            <div>
              <span>我的</span>
            </div>
          </Link>
        </div>
      </div>
      </BrowserRouter>
    ) 
  }
}

export default App