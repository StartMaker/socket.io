import React from 'react';
import {Avatar, Card, Col, Dropdown, Icon, Menu} from "antd";

const {Meta} = Card;

class Index extends React.Component{
    constructor(props){
        super(props);
    }
    reName = () =>{

    };
    createDropDownMenu=(nav)=>{
        return (
            <Menu className='dropdown-menu'>
                {nav.map((item,index)=>{
                    return (
                        <Menu.Item key={index}>
                            {item.text}
                        </Menu.Item>
                    );
                })}
            </Menu>
        );
    };
    createDropDown = (nodeProperty) =>{
        if(nodeProperty.nav.length === 0){
            return null;
        }
        return  <Dropdown
            overlay={this.createDropDownMenu(nodeProperty.nav)}
            trigger={['click']}
            overlayClassName='dropdown-menu'>
            <Icon type='menu-fold'/>
            </Dropdown>
    };
    createModules = (nodeProperty)=>{
        return  (
            <Card cover={<Avatar icon='addFile' type={nodeProperty.moduleType}/>}>
                <Meta
                    title={nodeProperty.text}
                />
                {this.createDropDown(nodeProperty)}
            </Card>
        );
    };
    render() {
        return (
            <Col xs={24} sm={24} md={5} lg={5} xl={4} xxl={3} className='col'>
                {this.createModules(this.props.nodeProperty)}
            </Col>
        );
    }
}

export default Index;