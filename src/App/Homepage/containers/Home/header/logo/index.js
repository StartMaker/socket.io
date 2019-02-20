import React from 'react';
import {Icon} from 'antd';

import logo from '../../../../../static/image/logo_.jpg';

class Logo extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        return <img src={logo} alt='logo' title='五只小猪'/>
    }
}

export default Logo;