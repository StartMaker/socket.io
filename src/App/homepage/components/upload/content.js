import React from 'react';
import {Layout, Row} from "antd";

const {Content} = Layout;

class UploadContent extends React.Component{
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
        return (
            <Content>
                <Row type='flex'></Row>
            </Content>
        );
    }
}

export default UploadContent;