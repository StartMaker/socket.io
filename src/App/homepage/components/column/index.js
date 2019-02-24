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
            <Card cover={<Avatar icon='addFile' type={type}/>} onClick={this.go}>
                <Meta
                    title={title}
                />
                <Drop/>
            </Card>
        );
    };
    render() {
        const {grid} = this.props;
        return (
            <Col {...grid} className='col'>
                {this.createModules()}
            </Col>
        );
    }
}

export default withRouter(Index);