import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Footer from "./components/Footer"
import Login from "./components/Login"

import Main from './components/Main';


import Mens from './components/Mens'
import Shoes from './components/Shoes';
import Womens from './components/Women';

import Header from "./components/Header"

 main
function App() {
  return (
    <div>
       <Router>
        <Switch>
          <Route exact path='/'>

            <Main />

            {/* Add Header , Main , Footer */}

            {/* Hello Everyone !! */}
            <Header></Header>
 main

          </Route>
          <Route path='/mens'>
            {/* Add Header ,Men Products and Footer */}

             <Footer/>


            <Mens /> {/* Men Product is Added */}
 main

          </Route>
          <Route path='/womens'>
            {/* Add Header, Women Products and Footer */}

              <Footer/>


            <Womens />
 main

          </Route>
          <Route path='/shoes'>
            {/* Add Header, Shoes Products and Footer */}

             <Footer/>

          </Route>
          <Route path="/login">
            <Login/>


            <Shoes />
 main

          </Route>
        </Switch>
        
      </Router>
      
    </div>
  );
}

export default App;
