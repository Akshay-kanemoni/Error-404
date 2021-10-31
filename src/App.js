import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Footer from "./components/Footer"
import Login from "./components/Login"
function App() {
  return (
    <div>
       <Router>
        <Switch>
          <Route exact path='/'>
            {/* Add Header , Main , Footer */}
            Hello Everyone !!
          </Route>
          <Route path='/mens'>
            {/* Add Header ,Men Products and Footer */}
             <Footer/>

          </Route>
          <Route path='/womens'>
            {/* Add Header, Women Products and Footer */}
              <Footer/>

          </Route>
          <Route path='/shoes'>
            {/* Add Header, Shoes Products and Footer */}
             <Footer/>

          </Route>
          <Route path="/login">
            <Login/>

          </Route>
        </Switch>
        
      </Router>
      
    </div>
  );
}

export default App;
