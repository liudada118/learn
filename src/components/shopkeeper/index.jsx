import React, { Component } from 'react';
class Shopkeeper extends Component {
    state = {
        shop: [{
            id: 1,
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
            id: 2,
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
        },]
    }
    render() {

        const { id } = this.props.match.params
        
        // const sshop=`shop${id}`
        // const {sshop} = this.state
        // console.log(this.state.shop)
        return (
            <div>
                {this.state.shop.map(a => {
                        if (a.id == id) {
                            // console.log(a)
                            // return ("aa")
                            return(
                            a.food.map(b=>{
                                console.log('+++++++++++',b)
                                return (
                                    <div key={b.id}>
                                        <div>{b.name}</div>
                                        <img src={b.img} alt=""/>
                                    </div>
                                    // 'dfadfa'
                                )
                            })
                            )
                        }
                    }
                )}
            </div>
        );
    }
}

export default Shopkeeper;