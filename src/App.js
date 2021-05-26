import React from 'react';
import './App.css';
import Chat from './components/chatComponents/ChatComponent';
import Login from './components/AuthComponents/Login';
import Register from './components/AuthComponents/Register';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './components/AuthComponents/Landing';


function App() {
  return (
    <Router>
      <div className="App">
        <h2> Chat App</h2>
        <Switch>
          {/*<Route exact path='/' component={Chat} />*/}
          <Landing exact path='/' component={Chat} />
          <Route exact path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route render={()=><h1>404 page not found</h1>}/>
        </Switch>

      </div>
    </Router>

  );
}

export default App;
