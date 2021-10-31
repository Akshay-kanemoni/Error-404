import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Main from './components/Main';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Main />

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
