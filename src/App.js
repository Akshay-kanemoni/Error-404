import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
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
          </Route>
          <Route path='/womens'>
            {/* Add Header, Women Products and Footer */}
          </Route>
          <Route path='/shoes'>
            {/* Add Header, Shoes Products and Footer */}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
