import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom'
// import logo from './logo.svg';
import Home from  './Page/Home/index'
import Create from './Page/Create/index'
// import './App.css';


class App extends React.Component {
  render(){
  return (
   <BrowserRouter>
   <Route exact path='/' >
     <Home/>
     </Route>
   <Route path='/create' component={Create}/>
   </BrowserRouter>
  );
}
}

export default App;
