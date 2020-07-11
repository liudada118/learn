import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css'
import { Tabs} from 'antd';
import Demo from './Demo';
import axios from 'axios'
import './mock/data'

const { TabPane } = Tabs;



class App extends Component {
  constructor() {
    super()
    this.state = {
      head: '',
      tab1: [],
      tab2:  [],
      lesson : [],
      type : 0
    }
  }
  callback(key) {
    console.log(key);
    this.setState({
      type : key
    })
  }

  componentDidMount() {
    axios.get('/all/')
      .then(res => {
        console.log('--------------', res)
        this.setState({
          head: res.data.headName,
          tab1: res.data.tab1,
          tab2: res.data.tab2,
          lesson : res.data.lesson
        })
      })
  }
  allType(type){
    this.setState({
      type
    })
    console.log(this.state.type)
  }
  render() {
    const {  tab1,  head } = this.state;
    return (
      <div className="App">
        <div>{head}</div>
        <Tabs defaultActiveKey="1" onChange={this.callback.bind(this)}>
          {tab1.length ? tab1.map((a, i) => {
            let number = a.type == 1 ? `(${this.state.lesson.length})` : ''
            return (
              <TabPane tab={a.name+number}  key={a.type}>
                <Demo state={this.state}/>
              </TabPane>)
          }) : 1}
        </Tabs>
      ,
      </div>
    );
  }
}

export default App;
