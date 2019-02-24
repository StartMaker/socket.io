import React from 'react';
import {Affix, Button, Drawer} from "antd";

import DataSearch from './data-search';

class SmallSider extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            visible: false
        }
    }
    openDrawer = ()=>{
        this.setState({
            visible: true
        })
    };
    onClose = () =>{
        this.setState({
            visible: false
        })
    };
    render() {
        const {state:{visible},openDrawer,onClose} = this;
        return (
            [
                <Affix offsetTop='100' className='ant-default-affix'>
                    <Button onClick={openDrawer} type='primary'>数据源</Button>
                </Affix>,
                <Drawer
                    className='upload-sider'
                    title='数据源'
                    closable={false}
                    placement='left'
                    onClose={onClose}
                    visible={visible}>
                    <DataSearch></DataSearch>
                </Drawer>
            ]
        );
    }
}

export default SmallSider;