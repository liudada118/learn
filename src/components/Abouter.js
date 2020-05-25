// import React from 'react'
// import { Link } from 'react-router-dom'
// class Abouter extends React.Component {
//     render() {
//         return (
//             <h1>
//                 <Link to="/About">{this.props.siteName}</Link>
//             </h1>
//         )
//     }
// }
import React from 'react';
import { Link } from 'react-router-dom'

class Abouter extends React.Component {
  render() {
    return (
        <h1> 
            <Link  to= "/About" >{this.props.siteName}</Link> 
        </h1>
    )
  }
}


export default Abouter;