import React, { Component } from 'react';
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import './index.css'
import { Link } from 'react-router-dom';
import address from '../../assets/img/address.png'
import notice from '../../assets/img/notice.png'
import swiper1 from '../../assets/img/swiper1.jpg'
import swiper2 from '../../assets/img/swiper2.jpg'
import swiper3 from '../../assets/img/swiper3.jpg'
import type1 from '../../assets/img/type1.png'
import type2 from '../../assets/img/type2.png'
import type3 from '../../assets/img/type3.png'
import type4 from '../../assets/img/type4.png'
import type5 from '../../assets/img/type5.png'
import type6 from '../../assets/img/type6.png'
import type7 from '../../assets/img/type7.png'
import type8 from '../../assets/img/type8.png'
import type9 from '../../assets/img/type9.png'
import type10 from '../../assets/img/type10.png'
import type11 from '../../assets/img/type11.png'
import type12 from '../../assets/img/type12.png'
import type13 from '../../assets/img/type13.png'
import type14 from '../../assets/img/type14.png'
import type15 from '../../assets/img/type15.png'
import Scroll from '../../common/scroll/Scroll';
import Botttom from '../bottom';

class Homepage extends Component {
    state = {
        recommendName: [{
            id: 1,
            name: '张亮麻辣烫'
        },
        {
            id: 2,
            name: '肯德基'
        },
        {
            id: 3,
            name: '麦当劳'
        },
        {
            id: 4,
            name: '汉堡王'
        },
        {
            id: 5,
            name: '新疆菜'
        },
        ],
        swiperImg: [{
            id: 1,
            img: swiper1
        },
        {
            id: 2,
            img: swiper2
        },
        {
            id: 3,
            img: swiper3
        },],
        type: [{
            id: 1,
            img: type1,
            name: '美食'
        },
        {
            id: 2,
            img: type2,
            name: '甜点'
        },
        {
            id: 3,
            img: type3,
            name: '超市便利'
        },
        {
            id: 4,
            img: type4,
            name: '水果蔬菜'
        },
        {
            id: 5,
            img: type5,
            name: '送药上门'
        },

        {
            id: 6,
            img: type6,
            name: '下午茶'
        },
        {
            id: 7,
            img: type7,
            name: '汉堡披萨'
        },
        {
            id: 8,
            img: type8,
            name: '火锅香锅'
        },
        {
            id: 9,
            img: type9,
            name: '家常菜'
        },
        {
            id: 10,
            img: type10,
            name: '券集市'
        },
        {
            id: 11,
            img: type11,
            name: '送菜上门'
        },
        {
            id: 12,
            img: type12,
            name: '津贴联盟'
        },
        {
            id: 13,
            img: type13,
            name: '美团专送'
        },
        {
            id: 14,
            img: type14,
            name: '跑腿代购'
        },
        {
            id: 15,
            img: type15,
            name: '全部分类'
        },],
        list: [{
            id: 1,
            type: 'apple',
            name: '季季红',
            info: '8人看过',
            img: 'https://p0.meituan.net/bbia/a7a90a6ecefb1e276538d555e7f6bcc450017.jpg@267w_150h_1e_1c'
        },
        {
            id: 2,
            type : 'blanana',
            name: '季季红',
            info: '8人看过',
            img: 'https://p0.meituan.net/bbia/a7a90a6ecefb1e276538d555e7f6bcc450017.jpg@267w_150h_1e_1c'
        },
        {
            id: 3,
            type:'val',
            name: '季季红',
            info: '8人看过',
            img: 'https://p0.meituan.net/bbia/a7a90a6ecefb1e276538d555e7f6bcc450017.jpg@267w_150h_1e_1c'
        },
        {
            id: 4,
            name: '季季红',
            info: '8人看过',
            img: 'https://p0.meituan.net/bbia/a7a90a6ecefb1e276538d555e7f6bcc450017.jpg@267w_150h_1e_1c'
        },
        {
            id: 5,
            name: '季季红',
            info: '8人看过',
            img: 'https://p0.meituan.net/bbia/a7a90a6ecefb1e276538d555e7f6bcc450017.jpg@267w_150h_1e_1c'
        },
        {
            id: 6,
            name: '季季红',
            info: '8人看过',
            img: 'https://p0.meituan.net/bbia/a7a90a6ecefb1e276538d555e7f6bcc450017.jpg@267w_150h_1e_1c'
        },
        {
            id: 7,
            name: '季季红',
            info: '8人看过',
            img: 'https://p0.meituan.net/bbia/a7a90a6ecefb1e276538d555e7f6bcc450017.jpg@267w_150h_1e_1c'
        },
        {
            id: 8,
            name: '季季红',
            info: '8人看过',
            img: 'https://p0.meituan.net/bbia/a7a90a6ecefb1e276538d555e7f6bcc450017.jpg@267w_150h_1e_1c'
        },
        {
            id: 9,
            name: '季季红',
            info: '8人看过',
            img: 'https://p0.meituan.net/bbia/a7a90a6ecefb1e276538d555e7f6bcc450017.jpg@267w_150h_1e_1c'
        },
        {
            id: 10,
            name: '季季红',
            info: '8人看过',
            img: 'https://p0.meituan.net/bbia/a7a90a6ecefb1e276538d555e7f6bcc450017.jpg@267w_150h_1e_1c'
        },],
        refreshScroll: false
    }
    componentDidUpdate() {
        //组件更新后，如果实例化了better-scroll并且需要刷新就调用refresh()函数
        if (this.bScroll && this.props.refresh === true) {
            this.bScroll.refresh();
        }
    }
    componentDidMount() {
        new Swiper('.swiper-container', {
            // Optional parameters
            // direction: 'vertical',
            loop: true
            , pagination: {
                el: '.swiper-pagination',
            },
        }
        )
        this.setState({
            refreshScroll: true
        })
    }
    render() {
        
        return (
            <React.Fragment>
                <Botttom />
                <div className="head">
                    <div className="header">
                        <Link to="" >
                            <div className="address">
                                <div className="address-img">
                                    <img src={address} alt="" />
                                </div>
                                <span>地址</span>
                            </div>
                        </Link>
                        <Link to="">
                            <div className="notice">
                                <div className="notice-img">
                                    <img src={notice} alt="" />
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="main">
                    <div className="mainer">
                        <div className="main-search">
                            <input type="text" />
                        </div>
                        <div className="main-recommend">
                            {this.state.recommendName.map(name => {
                                return (
                                    <Link to='' key={name.id}>
                                        <div className='recommend-name' key={name.id}>{name.name}</div>
                                    </Link>
                                )
                            })}
                        </div>
                        <div className="swiper-container">
                            <div className="swiper-wrapper">
                                {this.state.swiperImg.map(swiper => {
                                    return (
                                        <div className="swiper-slide" key={swiper.id}>
                                            <Link to="">
                                                <div className="s">
                                                    <img src={swiper.img} alt="" />
                                                </div>
                                            </Link>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="swiper-pagination"></div>
                        </div>
                        <div className="type">

                            {this.state.type.map(type => {
                                return (
                                    <div className="type-type" key={type.id}>
                                        <Link to="">
                                            <div className="img"><img src={type.img} alt="" /></div>
                                            <span>{type.name}</span></Link>
                                    </div>
                                )
                            })}
                        </div>

                        <div className="list">
                            <div className="listhead">
                                <span>xiawucha</span><span>more</span>
                            </div>
                            <Scroll
                                refresh={this.state.refreshScroll}
                                onScroll={(e) => {
                                    console.log(e)
                                    // console.log(this.state.refreshScroll)
                                }}>
                                <div className="all-list">  
                                    {this.state.list.map(list => {
                                        return (
                                            <div className="list-list" key={list.id}>
                                                <Link to={`/${list.type}/shopkeeper`}>
                                                    <div className="img">
                                                        <img src={list.img} alt="" />
                                                    </div>
                                                    <div className="name">
                                                        {list.name}
                                                    </div>
                                                    <div className="info">
                                                        {list.info}
                                                    </div>
                                                </Link>
                                            </div>)
                                    })}
                                </div>
                            </Scroll>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Homepage;