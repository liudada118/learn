// import React, { Component } from 'react';
// import ReactDOM from 'react-dom'
// import BScroll from 'better-scroll'
// import PropTypes, { bool, func } from 'prop-types'
// import './scroll.css'

// class Scroll extends Component {
//     static defaultProps={
//         click : true,
//         onScroll : null,
//         refresh:false
//     }
//     static propTypes={
//         click : PropTypes.bool,
//         onScroll : PropTypes.func,
//         refresh : PropTypes.bool
//     }

    
//     componentDidMount(){
//        this.scrollView = ReactDOM.findDOMNode(this.refs.scrollView)
//        console.log(this.refs.scrollView)
//        if(!this.bScroll){
//            this.bScroll = new BScroll(this.scrollView,{
//                probeType : 3,
//                click : this.props.click
//            })
//        } 
//        if(this.props.onScroll){
//            this.bScroll.on('scroll',(scroll)=>{
//                this.props.onScroll(scroll)
//            })
//        }
//     }
    
//     state = {  }
    
//     render() { 
//         return ( 
        
//         <div className='scroll-view' ref='scrollView'>
            
//             {this.props.children}
//         </div> );
//         console.log(this.refs.scrollView)
//     }
// }
 
// export default Scroll;


// 滴滴 黄轶
import React from "react";
// 常用的好的包 
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import BScroll from "better-scroll";
import "./scroll.css";
// 容器，父组件 
class Scroll extends React.Component {
  componentDidMount() {
    this.scrollView = ReactDOM.findDOMNode(
      this.refs.scrollView);
    //   BScroll.use(Zoom)
    // console.log(this.scrollView);
    if (!this.bScroll) { // 防止多次渲染 单例
      this.bScroll = new BScroll(this.scrollView, {
        probeType: 3,
        click: this.props.click,
    // 等等
      })
      if (this.props.onScroll) {
        this.bScroll.on('scroll', (scroll) => {
          this.props.onScroll(scroll);
        })
      }
    }
  }
  render() {
    console.log(this.props.children);
    return (<div className="scroll-view" ref="scrollView">
      {this.props.children }
    </div>)
  }
}


Scroll.defaultProps = {
  click: true,
  onScroll: null,
  refresh: false
}
Scroll.propTypes = {
  click: PropTypes.bool,
  refresh: PropTypes.bool,
  onScroll: PropTypes.func
}


export default Scroll