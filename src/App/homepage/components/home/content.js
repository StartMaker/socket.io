import {Col, Layout, Row} from 'antd';
import React from 'react';

const {Content} = Layout;

import Column from '../column';

class HomepageContent extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount() {
        console.log(this);
    }
    componentWillMount() {
        const {init} = this.props;
        init();
    }

    render() {
        const {homepage:{modules}} = this.props;
        return (
            <Content page='home'>
                <Row type='flex'>
                    {modules.map((value,index)=>{
                        return (
                            <Column key={index} {...value}></Column>
                        );
                    })}
                </Row>
            </Content>
        )
    }
}

export default HomepageContent;