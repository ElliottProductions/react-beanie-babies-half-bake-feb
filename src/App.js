import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import BeaniesPage from './BeaniesPage';
import BeanieDetail from './BeanieDetail';

export default function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route>
            <BeaniesPage path="/"/>
          </Route>
          <Route> 
            <BeanieDetail path="/beanies/:id"/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}