import React from 'react';

import NavSearch from '../../../components/search/index';
import CreateFile from '../createFile/index';
import PullMenu from "../nav-item-pull";

class Normal extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className='nav-home'>
                <CreateFile content={this.props.content.create} layoutsize='big'/>
                <NavSearch content={this.props.content.search} layoutsize='big'/>
                <PullMenu content={this.props.content.pulldown} layoutsize='big'/>
            </div>
        );
    }
}

export default Normal;