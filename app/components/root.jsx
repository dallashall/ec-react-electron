import React from 'react';
import { Provider } from 'react-redux';
import { 
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Test from './test/test';
// import containers

const root = () => {
  return (
    <Router>
      <div>
        <h1>EC-Electron</h1>
        <Route exact path="/" component={Test} />
      </div>
    </Router>
  )
}

export default root;
