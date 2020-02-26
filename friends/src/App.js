import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import FriendList from './components/FriendList';
import Login from './components/Login';
import AddFriend from './components/AddFriend';

function App() {
  return (
    <div className="App">
      <ul>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/protected">Protected Page</Link></li>
      </ul>
      <Switch>
        {/* Protected Route */}
        <PrivateRoute exact path="/protected" component={FriendList} />
        <Route path="/login" component={Login} />
        {/* <Route component={Login} /> */}
      </Switch>
      <Route exact path="/add-friend" component={AddFriend} />
    </div>
  );
}

export default App;
