import React from 'react';
import Header from './Header';
import Abouter from './Abouter'
import Search from './Search'
class Main extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      // 每个页面， 由组件构成
      <div className="wrapper">
        <Header siteName="Beer me!" />
        <Search/>
        <Abouter siteName = "About"/>
      </div>
    )
  } 
}


export default Main;