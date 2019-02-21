import React from 'react';
import {Avatar, Card, Col, Dropdown, Icon, Menu} from "antd";
import {withRouter} from "react-router-dom";

const {Meta} = Card;

class Index extends React.Component{
    constructor(props){
        super(props);
    }
    go = () =>{
        const {history,link} = this.props;
        history.push(link);
    };
    createModules = ()=>{
        const {title, dropdownList, type} = this.props;
        const Drop = () => {
            if(dropdownList.length === 0){
                return null;
            }
            return (
                <Dropdown
                    trigger={['click']}
                    overlayClassName='dropdown-menu'
                    overlay={
                        <Menu>
                            {
                                dropdownList.map((value, index) => {
                                    return (
                                        <Menu.Item key={index}>
                                            {value.title}
                                        </Menu.Item>
                                    );
                                })
                            }
                        </Menu>
                    }>
                    <Icon type='menu-fold'/>
                </Dropdown>
            );
        };
        return  (
            <Card cover={<Avatar icon='addFile' type={type}/>}>
                <Meta
                    title={title}
                />
                <Drop/>
            </Card>
        );
    };
    render() {
        return (
            <Col xs={24} sm={24} md={5} lg={5} xl={4} xxl={3} className='col' onClick={this.go}>
                {this.createModules()}
            </Col>
        );
    }
}

export default withRouter(Index);