import React from 'react';
import {Row} from 'antd';

import MyModule from './folder/index';

class Index extends React.Component{
    constructor(props){
        super(props);
    }
    componentWillMount() {
        console.log(this.props);
    }

    render(){
        //默认组件生成
        const defaultModules = this.props.defaultModules.map((item)=>{
            return <MyModule nodeProperty={item}/>;
        });
        return (
            <Row type='flex'>
                {defaultModules}
            </Row>
        );
    }
}

export default Index;