import React from 'react';
import {connect} from "react-redux";

class Loading extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>Loading</div>
        );
    }
}

export default Loading;