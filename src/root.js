import React,{Suspense} from "react";
import {hot} from "react-hot-loader";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import {ConfigProvider} from "antd";

import Demo from './demo/demo';
import Login from './App/login';
import Register from './App/register';
import Homepage from './App/homepage';
import NotFound from './components/notFound';
import Loading from './components/loading';
import Error from './components/error';

class App extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidCatch(error, errorInfo) {
        console.log(error);
        console.log(errorInfo);
    }
    render() {
        return (
            <ConfigProvider>
                <Suspense fallback={Loading}>
                    <Router>
                        <Switch>
                            <Route component={Demo} path='/demo'/>
                            <Route component={Login} path='/login'/>
                            <Route component={Register} path='/register'/>
                            <Route component={Homepage} path='/homepage'/>
                            <Route component={Error} path='/error'/>
                            <Route component={NotFound} path='*'/>
                            <Redirect to='/login'/>
                        </Switch>
                    </Router>
                </Suspense>
            </ConfigProvider>
        );
    }
}
export default hot(module)(App);