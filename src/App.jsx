import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Home from "./components/Home"
import About from "./components/About"

function App() {
  return (
    <>
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
        <Switch>
          <Route exact path="/" component={() => <Home message='Hello React Props - 2' />} />
          <Route exact path="/about" component={() => <About messagePart1='Hello ' messagePart2='React Props!'/>} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
