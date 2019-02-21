import React from 'react';
import {Layout} from "antd";

// import Side from './sider';
import Content from './content';

class Upload extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <Layout>
                {/*<Side/>*/}
                <Content/>
            </Layout>
        );
    }
}

export default Upload;