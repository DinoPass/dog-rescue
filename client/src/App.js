import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './component/Home';
import Dogs from './component/Dogs';
import AddDog from './component/AddDog';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/dogs'>Dogs</Link>
          </li>
          <li>
            <Link to='/add'>Add Dog</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/dogs' component={Dogs} />
          <Route path='/add' component={AddDog} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
