import React from 'react';
import {Dropdown, Menu, Icon, Button} from 'antd';
import {Link} from 'react-router-dom';

class DownMenu extends React.Component{
    constructor(props){
        super(props);
    }
    static defaultProps = {
        iconType:['team','setting','','logout']
    };
    clickedMenu =()=>{
        return (
            <Menu>
                {this.props.content.map((item,index)=>{
                    if(item.type==='line'){
                        return (<Menu.Divider />);
                    }
                    return (
                        <Menu.Item key={index}>
                            {
                                <Link to={item.url}><Icon type={this.props.iconType[index]} style={{marginRight: '5px'}}/>{item.text}</Link>
                            }
                            </Menu.Item>
                    );
                })}
            </Menu>
        );
    };
    render(){
        return (
            <Dropdown overlay={this.clickedMenu} trigger={['click']}>
                {
                    this.props.layoutsize === 'big'
                        ?<Button className="ant-dropdown-link">个人中心<Icon type='down'/></Button>
                        :<Button><Icon type="appstore" theme="twoTone"/></Button>
                }
            </Dropdown>
        );
    }
}
export default DownMenu;