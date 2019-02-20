import {Layout} from 'antd';
import React from 'react';

import Header from './header';
import Content from './content';
import './styles.less';

class Home extends React.Component{
    constructor(props){
        super(props);
    }
    static defaultProps = {
        header: {
            create: {},
            search: {},
            pulldown: [
                {
                    text: '个人中心',
                    url: '/own-center'
                },
                {
                    text: '用户管理',
                    url: '/manager'
                },
                {
                    type: 'line'
                },
                {
                    text: '退出',
                    url: '/'
                }
            ]
        },
        content: {
            defaultModules: [
                {
                    text: '新建报表',
                    icon: 'addFile',
                    moduleType: 'newFile',
                    nav: []
                },
                {
                    text: '我的下载',
                    icon: '',
                    moduleType: 'download',
                    nav: []
                },
                {
                    text: '文件夹',
                    icon: '',
                    moduleType: 'Folder',
                    nav: [
                        {
                            text: '重命名',
                            run: ''
                        }
                    ]
                }
            ],
            activeModules: []
        }
    };
    render() {
        return (
            <Layout page='home'>
                <Header content={this.props.header}/>
                <Layout>
                    <Content content={this.props.content}/>
                </Layout>
            </Layout>
        );
    }
}

export default Home;