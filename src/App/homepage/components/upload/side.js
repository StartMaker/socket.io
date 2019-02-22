import React from 'react';
import {Layout, Input, Button, List, Divider} from "antd";

const {Sider} = Layout;

class UploadSide extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <Sider page='upload' theme='light' width='15%' collapsible={true} collapsedWidth={0}>
                <Input.Group compact={true}>
                    <Input size='large' placeholder='搜索数据源' addonAfter={<Button type='primary' block={true}>+创建数据</Button>}/>
                </Input.Group>
                <Divider/>
                <List>
                    <List.Item>

                    </List.Item>
                </List>
            </Sider>
        )
    }
}

export default UploadSide;