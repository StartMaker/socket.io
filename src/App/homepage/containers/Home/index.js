import React from 'react';

import Content from './content';
import {Provider,ProviderForHomePage} from '../../context';

console.log(ProviderForHomePage);

class Home extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount() {
        console.log(this);
    }

    render(){
        return (
            <Provider value = {ProviderForHomePage}>
                <Content/>
            </Provider>
        );
    }
}

export default Home;