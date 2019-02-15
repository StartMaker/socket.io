import React from "react";
import {hot} from "react-hot-loader";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {ConfigProvider} from "antd";

import Login from './Login/index';
import Home from './Home';
import NotFound from './components/NotFound/index';
import Register from './Register/index';

class App extends React.Component{
    render() {
        return (
            <ConfigProvider>
                <Router>
                    <Switch>
                        <Route exact path='/' component={Login}/>
                        <Route path='/home' component={Home}/>
                        <Route path='/register' component={Register}/>
                        <Route to='*' component={NotFound}/>
                    </Switch>
                </Router>
            </ConfigProvider>
        );
    }
}
export default hot(module)(App);