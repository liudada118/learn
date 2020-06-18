import React, { Component } from 'react';
import Number from '../../common/numberAddOrSub'
import { connect } from 'react-redux'
// import store from '../../store/index';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { ThingAdd, ThingSub } from '../../store/action/shoping/shoping'
import shopingReducer from '../../store/reduces/shoping/shoping';
import './index.css'
import ShopHeader from './shopheader';
import ShopTypeList from './shoptypelist';
import Foodorder from './foodorder';
import { Link } from 'react-router-dom';
import { Route } from 'react-router'
import FoodList from './foodlist';
// import { render } from 'react-dom';
const store = createStore(shopingReducer)
// const render =()=> {
// let a = store.getState()
// }
class Shopkeeper extends Component {
    state = {
        infos:[{
            id:1,
            name:'点菜',
            type:'order'
        },
        {
            id:2,
            name:'评价',
            type:'comment'
        },
        {
            id:3,
            name:'店家',
            type:'business'
        },],
    }
    componentDidMount() {
        // this.porps.fetchHomeList()
    }
    // handleUrl(url){
    //     this.props.history.push({
    //         pathname:url
    //     })
    // }
    render() {
        const {infos} = this.state
        const {match} = this.props
        const { type } = this.props.match.params
        console.log('+++++++++++++', match.url,`${match.url+'/order'}`,`${match.url+'/'+infos[0].type}`)
        // const sshop=`shop${id}`
        // const {sshop} = this.state
        // console.log(this.state.shop)
        // let b = this.state.shop.find(e=>{e.type==type})
        return (
            <Provider store={store}>
                {/* <div> */}
                <ShopHeader prop={this.props}/>
                {/* <Link to={`/${type}/shopkeeper/order`} >
                    <div key='1' type={type} onClick={this.handerUrl.bind(this, `${match.url+'/order'}`)}>点菜</div>
                    </Link>
                <Link to={`/${type}/shopkeeper/comment`} ><div key='1'>评价</div></Link>
                <Link to={`/${type}/shopkeeper/business`} ><div key='1'>商家</div></Link>
                <div className='shopList'>{this.state.infos.map(info=>{
                    return (
                    <div className='shop-foodlist' key={info.id} 
                    onClick={this.handleUrl.bind(this,`${match.url+'/order'}`)}
                    >{info.name}</div>
                    
                    <Link className='shop-foodlist' to={`${'/'+type+'/shopkeeper/'+info.type}`}>
                        <div className='shop-foodlist' key={info.id} 
                    >{info.name}</div>
                    </Link>
                    )
                })}</div> */}
                {/* <Route path={`${match.url+'/order'}`} component={FoodList}/> */}
                {/* <Route path={`${match.url+'/order'}`} component={Shopkeeper}/> */}

                <div className="main">
                    <FoodList 
                    prop={this.props} 
                    // onSubmit={}
                    />
                    <ShopTypeList />
                </div>
                <Foodorder />
                {/* </div> */}
                    
            </Provider>
        );
    }

}
export default Shopkeeper