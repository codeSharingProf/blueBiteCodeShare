import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {
    BrowserRouter as Router,
    Switch,
    Link,
    Route
} from "react-router-dom";
import PageOne from "./screens/PageOne.jsx";


const Root = () => (
    <div>
        <Link to="/page-one">Page One</Link><br />

    </div>
);

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Root />
                </Route>
                <Route path="/page-one" exact>
                   <PageOne/>
                </Route>

            </Switch>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);
