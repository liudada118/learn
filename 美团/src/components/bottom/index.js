import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import homepage from '../../assets/img/homepage.png'
import message from '../../assets/img/message.png'
import order from '../../assets/img/order.png'
class Botttom extends Component {
    state = {  }
    render() { 
        return ( <div className="item">
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
      </div> );
    }
}
 
export default Botttom;