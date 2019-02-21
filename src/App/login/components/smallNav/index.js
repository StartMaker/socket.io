import React from 'react';
import {Icon,Menu,Dropdown} from 'antd';
import {Link} from 'react-router-dom';

class MySmallNav extends React.Component{
    constructor(props){
        super(props);
    }
    menu = ()=>{
        return (
            <Menu>
                {this.props.nav.items.map((item,index)=>{
                    return (
                        <Menu.Item key={index}>
                            <Link to={item.url}>{item.text}</Link>
                        </Menu.Item>
                    );
                })}
            </Menu>
        );
    };
    render(){
        return (
            <Dropdown overlay={this.menu} trigger={['click','hover']}>
                <Icon type="appstore" theme="twoTone"/>
            </Dropdown>
        );
    };
}

export default MySmallNav;