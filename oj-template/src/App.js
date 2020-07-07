import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// 数据跟组件是分离的
import axios from 'axios'
import './mock/data'
// 函数的返回是组件
// /posts/ axios api url  /comment/
// Post 组件作为参数 WarppedPost就是一个高阶组件 loadAndRefresh是一个高阶函数 
// 通用性的提供数据请求及更新的解决方案
// 有人为他服务

class Post extends Component {
  render() {
    return (
      <div>
        <p>{this.props.msg}</p>
        <p>{this.props.content}</p>
      </div>
    )
  }
}

class Comment extends Component {
  render() {
    return (
      <div>
        Comment
      </div>
    )
  }
}

const loadAndRefresh = (url) => (WrappedCommponent) => {
  return class extends Component {
    constructor(){
      super()
      this.state = {
        msg:'',
        content:''
      }
    }
    componentDidMount() {
      // 数据请求 
      this._loadData();
    }
    async _loadData() {
      this.setState({
        msg: '数据加载中'
      })
      axios.get(url)
        .then(res => {
          // console.log(res)
          this.setState({
            msg: res.data.title,
            content : res.data.content
          })
        })
    }
    render() {
      const props = {
        msg: this.state.msg,
        content: this.state.content
      }
      return (
        <WrappedCommponent {...props} />
      )
    }
  }
}
// 复用 
const WarppedPost = loadAndRefresh('/posts/')(Post)
const WarppedComment = loadAndRefresh('/comment/')(Comment)

function App() {
  return (
    <div className="App">
      {/* message  */}
      {/* <Post/> */}
      <WarppedPost />
      <WarppedComment />
    </div>
  );
}

export default App;
