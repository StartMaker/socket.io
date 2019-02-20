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
    render(){
        return (
            <Header theme='light'>
                <Logo/>
                <Media query='(min-width:769px)'>
                    <NormalNav content={this.props.content}/>
                </Media>
                <Media query='(max-width: 768px)'>
                    <SmallNav content={this.props.content}/>
                </Media>
            </Header>
        );
    }
}

export default Nav;