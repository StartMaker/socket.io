import React from 'react';
import {Icon,Button,Menu} from 'antd';
import {Link} from 'react-router-dom';

import Search from '../../../../../components/search';
import DropDown from '../nav-item-pull';
import Create from '../createFile';

class SmallWindow extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showmenu: false
        }
    };
    render(){
        return (
            <div className='nav-home'>
                <Search layoutsize='small' content={this.props.search}/>
                <Create layoutsize='small' />
                <DropDown layoutsize='small' content={this.props.content.pulldown}/>
            </div>
        );
    }
}

export default SmallWindow;