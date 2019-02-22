import React from 'react';
import {Layout, Row} from "antd";

const {Content} = Layout;

import Column from '../../components/column';
import {Consumer} from '../../context';

class UploadContent extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        return (
            <Content>
                <Row type='flex'>
                    <Consumer>
                        {
                            (provider) => {
                                const {modules, grid} = provider;
                                return modules.map((value,index) =><Column grid={grid} key={index} {...value}></Column>);
                            }
                        }
                    </Consumer>
                </Row>
            </Content>
        );
    }
}

export default UploadContent;