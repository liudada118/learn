import { connect } from 'react-redux'
import { ThingAdd, ThingSub } from '../../store/action/shoping/shoping'
import React, { Component } from 'react';
// import store from '../../store';
import { ThingsSub, ThingsAdd } from '../../store/constants';
// const id = this.props.id
class Number extends Component {
    state = {}
    handleAdd(key) {
        // console.log('++++++',key)
        this.props.fetchNumber(ThingsAdd, key)
    }
    handleSub(key) {
        this.props.fetchNumber(ThingsSub, key)
    }
    // componentDidMount() {
    //     this.props.fetchAddNumber()
    //     this.props.fetchSubNumber()
    // }
    render() {
        const { type, a, id } = this.props
        // console.log(id,a,type)
        let r = id
        let d = a.find(e => a.key === type)
        // console.log(d,r)
        return (

            <React.Fragment>
                {this.props.a.map(b => {
                    if (b.key != type) return
                    else return (
                        b.number > 0 ? (<div className="number" key={b.key}>
                            <button className='number-button button-sub' onClick={() => { this.handleSub(type) }}>-</button>
                            {b.number}
                            <button className='number-button' onClick={() => { this.handleAdd(type) }}> + </button>
                        </div>) : (<div className="number" key={b.key}>
                            <button className='number-button'  onClick={() => { this.handleAdd(type) }}> + </button>
                        </div>)
                        //  b.key==type?b.number:null
                    )
                })}

                {/* {a[id].number > 0 && a.key==type?
                    (<div className="number" ><button onClick={()=>{this.handleSub(type)}}>-</button>
                        {a[r].number}
                        <button onClick={()=>{this.handleAdd(type)}}>+</button></div>) :
                    (<div className="number">
                        <button onClick={()=>{this.handleAdd(type)}}>+</button></div>)} */}
                {/* {a.map(b=>{
                    b.key==type
                })} */}
                {/* {this.props.a.state.map(b=>{
                    <div>
                        111
                    </div>
                })}  */}
            </React.Fragment>

        );
    }
}

const mapStateToProps = (state) => {
    // let a= 0
    return {
        a: state
    }
}
// 用户 操作 UI 引起页面变化
// 发起一个 action
// dispacth 行为 connect 传给 组件
const mapDispatchToProps = (dispatch) => {
    // console.log('------')
    return {
        fetchNumber(type, key) {
            // console.log('-------------')
            dispatch({
                type,
                key
            })
        },
    }
}
// // render()

export default connect(mapStateToProps, mapDispatchToProps)(Number);
// export default Number;