import React,{lazy} from 'react';
import {Route,Switch} from 'react-router-dom';

const Home = lazy(() => import('./containers/Home'));
// import Home from './Home';

class Root extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount() {
        console.log(this);
    }

    render(){
        return (
            <Switch>
                <Route component={Home} path='/homepage'/>
            </Switch>
        )
    }
}

export default Root;