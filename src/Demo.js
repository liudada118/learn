import React from 'react'
import { Tabs, Row, Col } from 'antd';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Cash Assets',
    className: 'column-money',
    dataIndex: 'money',
    align: 'right',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    // money: '￥300,000.00',
    // address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    money: '￥1,256,000.00',
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    money: '￥120,000.00',
    address: 'Sidney No. 1 Lake Park',
  },
];
const { TabPane } = Tabs;

class Demo extends React.Component {
  constructor() {
    super()
    this.state = ({
      typea: 0
    })
  }
  callback(key) {
    console.log(key)
    this.setState({
      typea: key
    })
  }
  render() {
    let { tab2, lesson, type, typea } = this.props.state
    // if (type == '' || type == 1) {
    //   lesson = lesson
    //   console.log(lesson,type,typea)
    //   if (this.state.typea == '' || this.state.typea == 0) {
    //     lesson = lesson
    //     console.log(lesson)
    //   } else {
    //     lesson = lesson.filter(a => a.typea == this.state.typea)
    //   }
    // } else if(type == 2) {
    //   lesson = lesson.filter(a => a.type == type)
    //   if (this.state.typea == '' || this.state.typea == 'all') {
    //     lesson = lesson
    //   } else if(type == 3){
    //     lesson = lesson.filter(a => a.typea == 100)
    //   }
    // }


    if(type == '' || type == 1){
      lesson = lesson
      if(this.state.typea == '' || this.state.typea == 0){
        lesson = lesson
      }else{
        lesson = lesson.filter(a => a.typea == this.state.typea)
      }
    }else if(type == 2){
      lesson = lesson.filter(a => a.progress == 100)
      if(this.state.typea == '' || this.state.typea == 0){
        lesson = lesson
      }else{
        lesson = lesson.filter(a => a.typea == this.state.typea)
      }
    }else if(type == 3){
      lesson = lesson.filter(a => a.progress<100)
      if(this.state.typea == '' || this.state.typea == 0){
        lesson = lesson
      }else{
        lesson = lesson.filter(a => a.typea == this.state.typea)
      }
    }
    // if()
    
    // if(type == ''){
    //   lesson = lesson
    // }else {
    //   lesson = lesson.filter(a=>a.type == type)
    // }
    // if(typea == ''){
    //   lesson = lesson
    // }else {
    //   lesson = lesson.filter(a=>a.typea == this.state.typea)
    // }
    console.log(this.props.state, lesson, type, this.state.typea)
    return (
      <React.Fragment>
        <Tabs type="card" onChange={this.callback.bind(this)}>
          {tab2.length ? tab2.map((a, i) => {
            return (
              <TabPane tab={a.name} key={a.typea}>
                {lesson.map((b,i) => {
                  let progress = `${b.progress}%`
                  console.log(b.image)
                  return (
                    <Row key={i}>
                      <Col span={16}>
                        <img src={b.image} alt="" />
                        <span>
                          <p>{b.name}</p>
                          <p>{progress}</p>
                        </span>
                      </Col>
                  <Col span={2}>{b.title}</Col>
                      <Col span={6}><button>开始学习</button></Col>
                    </Row>
                  )
                })}

              </TabPane>
            )
          }) : 1}
        </Tabs>,
      </React.Fragment>
    )
  }
}

export default Demo