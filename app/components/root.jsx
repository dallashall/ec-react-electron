import React from 'react';
import { Provider } from 'react-redux';
// MemoryRouter for Electron; NativeRouter for React-Native
import { 
  MemoryRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import sign_in_container from './session/sign_in_container';
// import containers
const root = ({store}) => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <h1>EC-Electron</h1>
          <Link to='sign_in'>Sign In Page</Link>
          <Route exact path="/sign_in" component={sign_in_container} />
        </div>
      </Router>
    </Provider>
  )
}

export default root;
