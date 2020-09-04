import React from 'react';
import {
    // BrowserRouter as Router,
    HashRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import Main from "./pages/mainpage";
import AboutContents from "./pages/aboutpage";
import PortfolioContens from "./pages/portpage"
import Contactcontents from "./pages/contactpage"
import Global from "./assets/style/GlobalStyle";


const Routes = () => {
    return(
    <>
        <Global/>
        {/* <Router> */}
        <Router  basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route exact path="/"component={Main}/>
                <Route path="/about"component={AboutContents}/>
                <Route path="/portfolio"component={PortfolioContens}/>
                <Route path="/contact"component={Contactcontents}/>
            </Switch>
        </Router>
    </>);
}

export default Routes;