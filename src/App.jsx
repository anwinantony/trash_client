import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Dashboard from './Pages/Dasboard';

const App = () => {
  return (
    <>
     <Router>
      <Switch>
      <Route exact path="/" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard/:username" component={Dashboard} />
      </Switch>
    </Router>
    {/* <Dashboard/> */}
    </>
  );
};

export default App;
