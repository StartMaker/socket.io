import React from 'react';
import {Divider, Input, Layout, List} from "antd";

import CreateDataForm from "../../uploadData";
import DataSearch from './data-search';
const {Sider} = Layout;

class NormalSider extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <Sider page='upload' theme='light' width='15%' collapsible={true} collapsedWidth={0}>
                <DataSearch/>
                <Divider/>
                <List>
                    <List.Item>

                    </List.Item>
                </List>
            </Sider>
        )
    }
}

export default NormalSider;