import React from 'react';
import {Input, Button} from "antd";
import CreateDataForm from "../../uploadData";

class DataSearch extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <Button.Group compact={true} block={true}>
                <Input size='large' placeholder='搜索数据源' addonAfter={<CreateDataForm/>}/>
            </Button.Group>
        );
    }
}

export default DataSearch;