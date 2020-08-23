import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import Main from "./pages/mainpage";
import AboutContents from "./pages/aboutpage";
import PortfolioContens from "./pages/portpage"
import Global from "./assets/style/GlobalStyle";


const Routes = () => {
    return(
    <>
        <Global/>
        <Router>
            <Switch>
                <Route exact path="/"component={Main}/>
                <Route path="/about"component={AboutContents}/>
                <Route path="/portfolio"component={PortfolioContens}/>
            </Switch>
        </Router>
    </>);
}

export default Routes;