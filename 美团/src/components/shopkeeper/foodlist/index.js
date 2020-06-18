import React, { Component } from 'react';
import Number from '../../../common/numberAddOrSub'
import { connect } from 'react-redux';
class FoodList extends Component {
    state = {
        shop: [{
            id: 1,
            type: 'apple',
            food: [{
                id: 1,
                img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1849785126,3032824496&fm=26&gp=0.jpg',
                name: "橙子"
            },
            {
                id: 2,
                img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3301642898,92830133&fm=26&gp=0.jpg',
                name: "香蕉"
            },
            {
                id: 3,
                img: 'https://p0.meituan.net/msmerchant/5e09ea9aea69db584d778f2b8155a7d6432541.png@267w_150h_1e_1c',
                name: "芒果"
            },
            {
                id: 4,
                img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2349487808,2573098135&fm=26&gp=0.jpg',
                name: "葡萄"
            },
            {
                id: 5,
                img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2238712307,2789059053&fm=26&gp=0.jpg',
                name: "桃子"
            },
            ]
        },
        {
            id: 2,
            type: 'blanana',
            food: [{
                id: 1,
                img: 'https://p0.meituan.net/msmerchant/5e09ea9aea69db584d778f2b8155a7d6432541.png@267w_150h_1e_1c',
                name: "hh"
            },
            {
                id: 2,
                img: 'https://p0.meituan.net/msmerchant/5e09ea9aea69db584d778f2b8155a7d6432541.png@267w_150h_1e_1c',
                name: "hh"
            },
            {
                id: 3,
                img: 'https://p0.meituan.net/msmerchant/5e09ea9aea69db584d778f2b8155a7d6432541.png@267w_150h_1e_1c',
                name: "hh"
            },
            {
                id: 4,
                img: 'https://p0.meituan.net/msmerchant/5e09ea9aea69db584d778f2b8155a7d6432541.png@267w_150h_1e_1c',
                name: "hh"
            },
            {
                id: 5,
                img: 'https://p0.meituan.net/msmerchant/5e09ea9aea69db584d778f2b8155a7d6432541.png@267w_150h_1e_1c',
                name: "hh"
            },
            ]
        },
        {
            id: 3,
            type: 'val',
            food: [{
                id: 1,
                img: 'https://p0.meituan.net/msmerchant/5e09ea9aea69db584d778f2b8155a7d6432541.png@267w_150h_1e_1c',
                name: "hh"
            },
            {
                id: 2,
                img: 'https://p0.meituan.net/msmerchant/5e09ea9aea69db584d778f2b8155a7d6432541.png@267w_150h_1e_1c',
                name: "hh"
            },
            {
                id: 3,
                img: 'https://p0.meituan.net/msmerchant/5e09ea9aea69db584d778f2b8155a7d6432541.png@267w_150h_1e_1c',
                name: "hh"
            },
            {
                id: 4,
                img: 'https://p0.meituan.net/msmerchant/5e09ea9aea69db584d778f2b8155a7d6432541.png@267w_150h_1e_1c',
                name: "hh"
            },
            {
                id: 5,
                img: 'https://p0.meituan.net/msmerchant/5e09ea9aea69db584d778f2b8155a7d6432541.png@267w_150h_1e_1c',
                name: "hh"
            },
            ]
        },],
        // value : a
    }
    render() { 
        const {type} = this.props.prop.match.params
        return ( 
            <div>
                {/* {this.props.a.map(b=>{
                    if(b.key == ttype)
                })} */}


                {this.state.shop.map(a => {
                        if (a.type == type) {
                            return (
                                <div className="food-list" key={a.id}>
                                    {a.food.map(b => {
                                        const key = `${a.type + b.id}`
                                        return (
                                            <div className='food' key={key}>
                                                <div className="food-img">
                                                    <img src={b.img} alt="" />
                                                </div>
                                                <div className='food-info'>
                                                    {b.name}
                                                </div>
                                                 <Number type={key} id={b.id} />
                                            </div>
                                        )
                                    })}
                                </div>)
                        }
                    }
                    )}
            </div>
         );
    }
}
const mapStateToProps = (state) => {
    // let a= 0
    return {
        a: state
    }
}
 
export default connect(mapStateToProps) (FoodList);