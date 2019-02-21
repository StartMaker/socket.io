import React,{lazy} from 'react';
import {Route,Switch} from 'react-router-dom';
import {Layout} from "antd";

const Header = lazy(() => import('./components/header'));
const Home = lazy(() => import('./containers/Home'));
const Upload = lazy(() => import('./containers/Upload'));
import './styles.less';

class Root extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount() {
        console.log(this);
    }

    render(){
        return (
            <Layout page='home'>
                <Header/>
                <Layout>
                    <Switch>
                        <Route exact component={Home} path='/homepage'/>
                        <Route component={Upload} path='/homepage/upload'/>
                    </Switch>
                </Layout>
            </Layout>
        )
    }
}

export default Root;