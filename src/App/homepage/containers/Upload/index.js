import React from 'react';
import {Layout} from "antd";

import Sider from './side';
import Content from './content';

class Upload extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <Layout>
                <Sider page='upload'/>
                <Content page='upload'/>
            </Layout>
        );
    }
}

export default Upload;