import React from 'react';
import {Input,Icon,Dropdown} from 'antd';

const Search = Input.Search;

class NavSearch extends React.Component{
    constructor(props){
        super(props);
    }
    search = (event) =>{

    };

    render() {
        return (
            <Search onSearch={this.search} placeholder='Input your Search'/>
        );
    }
}

export default NavSearch;