import {Col, Layout, Row} from 'antd';
import React from 'react';

const {Content} = Layout;

import Column from './column';

class Main extends React.Component{
    constructor(props){
        super(props);
        this.columns = [
            {
                title: '新建报表',
                type: 'newFile',
                link: '/homepage/upload',
                dropdownList: []
            },
            {
                title: '我的下载',
                type: 'download',
                link: '/homepage/download',
                dropdownList: []
            },
            {
                title: '文件夹',
                type: 'folder',
                link: '/homepage/folder',
                dropdownList: [
                    {
                        title: '重命名'
                    }
                ]
            }
        ];
    }
    render() {
        return (
            <Content page='home'>
                <Row type='flex'>
                    {this.columns.map((value,index)=>{
                        return (
                            <Column key={index} {...value}></Column>
                        );
                    })}
                </Row>
            </Content>
        )
    }
}

export default Main;