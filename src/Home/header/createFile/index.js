import React from 'react';
import {Button,Icon} from 'antd';

class CreateFile extends React.Component{
    render(){
        return (
            <Button size='large'>
                <Icon type="folder-add" theme="filled"/>
                {this.props.layoutsize ==='big'?'创建':null}
            </Button>
        );
    }
}

export default CreateFile;