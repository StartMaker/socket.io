import React from 'react';
import {Layout} from 'antd';
import Media from 'react-media';

const {Header} = Layout;

import Logo from './logo';
import NormalNav from './normal-window';
import SmallNav from './small-window';

class Nav extends React.Component{
    constructor(props){
        super(props);
    }
    static defaultProps = {
        content: {
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
        }
    };
    render(){
        const {content} = this.props;
        return (
            <Header theme='light'>
                <Logo/>
                <Media query='(min-width:769px)'>
                    <NormalNav content={content}/>
                </Media>
                <Media query='(max-width: 768px)'>
                    <SmallNav content={content}/>
                </Media>
            </Header>
        );
    }
}

export default Nav;