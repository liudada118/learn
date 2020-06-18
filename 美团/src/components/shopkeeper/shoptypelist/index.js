import React, { Component } from 'react';
class ShopTypeList extends Component {
    state = { 
        typeList:[{
            id:1,
            name:'水果',
            type:'apple'
        },{
            id:2,
            name:'水果',
            type:'apple'
        },{
            id:3,
            name:'水果',
            type:'apple'
        },{
            id:4,
            name:'水果',
            type:'apple'
        },{
            id:5,
            name:'水果',
            type:'apple'
        },{
            id:6,
            name:'水果',
            type:'apple'
        }]
     }
    render() { 
        
        return ( 
            <div className='type-list'>
            {this.state.typeList.map(type=>{
                return (
                    <div className="food-type" key={type.id}>
                        {type.name}
                    </div>
                )
            })}
            </div>
             );
    }
}
 
export default ShopTypeList;