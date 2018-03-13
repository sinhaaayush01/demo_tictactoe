import React, { Component } from 'react';
import './App.css';
import './index.css';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import Home from './Home.js';
import TicTacToe from './TicTacToe.js';
import Leaderboard from './Leaderboard.js';
class App extends Component {
  render() {
    return (
         <Router history={browserHistory}>
        <Route path={"/"} component={Home} >
           <IndexRoute component={Home} />
          </Route>
        <Route path={"Tic Tac Toe"} component={TicTacToe}/>
        <Route path={"/"} component={Home}/>
      </Router>
    );
  }
}

export default App;
