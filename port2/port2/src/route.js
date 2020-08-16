import React from 'react';
import {BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom"; 
import Home from './pages/homepage'
import Global from "./common/GlobalStyle";


function Routes() {
  return (
    <>
    <Router>
      <Switch>
        <Route path="/" component={Home}/>
        <Redirect from="*" to="/"/>
      </Switch>
    </Router>
    <Global/>
    </>
  );
}

export default Routes;
