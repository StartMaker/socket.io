import React from 'react';
import {Layout} from "antd";

import Sider from './side';
import Content from './content';
import {Provider,ProviderForUploadPage} from '../../context';

class Upload extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount() {
        console.log(this);
    }

    render(){
        return (
            <Layout>
                <Sider page='upload'/>
                <Provider value={ProviderForUploadPage}>
                    <Content page='upload'/>
                </Provider>
            </Layout>
        );
    }
}

export default Upload;