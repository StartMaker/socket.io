import React from 'react';
import {Input} from 'antd';

class UploadSql extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <Input addonBefore={<label>连接字符串</label>}/>
        )
    }
}

export default UploadSql;