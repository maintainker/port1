import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import Main from "./pages/mainpage";
import About from "./pages/aboutpage";


const Routes = () => {
    return(
    <>
        <Router>
            <Switch>
                <Route exact path="/"component={Main}/>
                <Route path="/about"component={About}/>
            </Switch>
        </Router>
    </>);
}

export default Routes;