import React from "react";
import {Menu} from 'antd';
import {Link,withRouter} from 'react-router-dom';

class MyMenu extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        return (
            <Menu theme='light' mode={this.props.nav.mode}>
                {this.props.nav.items.map((item,index)=>{
                    return (
                        <Menu.Item key={index}>
                            <Link to={item.url}>{item.text}</Link>
                        </Menu.Item>
                    )
                })}
            </Menu>
        );
    }
}

export default withRouter(MyMenu);