import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


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
            {/* Add Header , Main , Footer */}

            {/* Hello Everyone !! */}
            <Header></Header>

          </Route>
          <Route path='/mens'>
            {/* Add Header ,Men Products and Footer */}

            <Mens /> {/* Men Product is Added */}

          </Route>
          <Route path='/womens'>
            {/* Add Header, Women Products and Footer */}

            <Womens />

          </Route>
          <Route path='/shoes'>
            {/* Add Header, Shoes Products and Footer */}

            <Shoes />

          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
