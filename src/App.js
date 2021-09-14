import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import LayoutNavBar from './components/LayoutNavBar';
import Home from './pages/Home';
import ItemDetail from './pages/ItemDetail';
import Basket from './pages/Basket'

function App() {
  return (
    <Router>
      <LayoutNavBar>
        <Switch>
          <Route path="/details/:id">
            <ItemDetail />
          </Route>
          <Route path="/basket">
            <Basket />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </LayoutNavBar>
    </Router>

  );
}

export default App;