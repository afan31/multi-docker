import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OtherPage from'./OtherPage';
import Fib from './Fib';
import { render } from '@testing-library/react';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Fibonacci Calculator</h1>
          <Link to="/">Home</Link>
          <Link to="/otherpage">Other page</Link>
          <p>
            <Route exact path="/" component={Fib} />
            <Route path="/otherpage" component={OtherPage} />
          </p>
        </header>
      </div>
      </Router>
    );
  }
}

export default App;
