import React, { Component } from 'react';
import ShopHeader from '../shopheader';
class ShopComment extends Component {
    state = {  }
    render() { 
        console.log(this.props)
        return ( <div>
            <ShopHeader prop={this.props}/>
            Comment
            </div> );
    }
}
 
export default ShopComment;