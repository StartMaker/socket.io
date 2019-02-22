import { Layout, Row} from 'antd';
import React from 'react';

const {Content} = Layout;

import Column from '../column';
import {Consumer} from '../../context';

class HomepageContent extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        return (
            <Content page='home'>
                <Row type='flex'>
                    <Consumer>
                        {
                            (provider)=> {
                                const {modules,grid} = provider;
                                return modules.map((value,index)=><Column key={index} {...value} grid={grid}></Column>);
                            }
                        }
                    </Consumer>
                </Row>
            </Content>
        )
    }
}

export default HomepageContent;