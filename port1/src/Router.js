import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import Main from "./pages/mainpage";


const Routes = () => {
    return(
    <>
        <Router>
            <Switch>
                <Route path="/"component={Main}/>
            </Switch>
        </Router>
    </>);
}

export default Routes;