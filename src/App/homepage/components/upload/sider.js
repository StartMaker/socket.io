import React from 'react';
import {Layout, Input, Button, List} from "antd";

const {Sider} = Layout;
const {InputGroup} = Input;

class UploadSide extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <Sider>
                <InputGroup>
                    <Input />
                    <Button/>
                </InputGroup>
                <List>
                    <List.Item>

                    </List.Item>
                </List>
            </Sider>
        )
    }
}

export default UploadSide;