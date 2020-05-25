import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// 添加路由  react 组件
import Main from './components/Main';
import About from './components/About';
import { BrowserRouter, Route }  from 'react-router-dom';


ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Main} />
      <Route path="/about" component={About} />
      <Route path="/Search/:SearchTerm" component={Main}/>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
