'use strict';
import React,{Suspense} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {render} from 'react-dom';

import Login from './App/login';
import Room from './App/room';
import './styles.less';
import Loading from './components/loading';

class App extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <Suspense fallback={Loading}>
                <Router>
                    <Switch>
                        <Route exact component={Login} path='/'/>
                        <Route component={Room} path='/room'/>
                    </Switch>
                </Router>
            </Suspense>
        );
    }
}

render(
    <App/>,
    document.getElementById('root')
);

export default App;