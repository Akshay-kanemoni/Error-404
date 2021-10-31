import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Footer from "./components/Footer"
import Login from "./components/Login"
import Main from './components/Main';
import Mens from './components/Mens'
import Shoes from './components/Shoes';
import Womens from './components/Women';
import Header from "./components/Header"

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Header></Header>
            <Main />
          </Route>
          <Route path='/mens'>
            <Header></Header>
            <Mens /> {/* Men Product is Added */}
            <Footer />
          </Route>
          <Route path='/womens'>
            <Header></Header>
            <Womens />
            <Footer />
          </Route>
          <Route path='/shoes'>
            <Header></Header>
            <Shoes />
            <Footer />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>

      </Router>

    </div>
  );
}

export default App;
