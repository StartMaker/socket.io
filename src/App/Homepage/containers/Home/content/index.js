import {Col, Layout, Row} from 'antd';
import React from 'react';

const {Content} = Layout;

import DefaultModule from './Folder';

class Main extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        return (
            <Content>
                <DefaultModule defaultModules={this.props.content.defaultModules} activeModules={this.props.activeModules}/>
            </Content>
        )
    }
}

export default Main;