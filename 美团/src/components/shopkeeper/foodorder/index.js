import Number from '../../../common/numberAddOrSub'
import React, { Component } from 'react';
import { connect } from 'react-redux';
class Foodorder extends Component {
    state = {}
    render() {
        console.log(this.props.a)
        let money = 0 
        return (<div className='shopfood-orders'>
            {this.props.a.map(b => {
                if (b.number != 0) {
                    money += b.price*b.number
                     return (
                    <div className="shopfood-order">
                        <div className="food-img">
                            <img src={b.img} alt="" />
                        </div>
                        <div className="info">
                            <div className='food-name'>{b.name}</div>
                            <div className="price">{b.price*b.number}</div>
                        </div>

                        {/* <div className="food-number">{b.number}</div> */}
                        <Number type={b.key} />
                    </div>
                )}
            }
            )}
            <div className='food-order'>
                <div>总计</div>
                <div>{money}</div>
                <button>结算</button>
            </div>
        </div>);
    }

}
const mapStateToProps = (state) => {
    // let a= 0
    return {
        a: state
    }
}

export default connect(mapStateToProps)(Foodorder);