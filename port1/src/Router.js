import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import Main from "./pages/mainpage";
import About from "./pages/aboutpage";
import Global from "./assets/style/GlobalStyle";


const Routes = () => {
    return(
    <>
        <Global/>
        <Router>
            <Switch>
                <Route exact path="/"component={Main}/>
                <Route path="/about"component={About}/>
            </Switch>
        </Router>
    </>);
}

export default Routes;