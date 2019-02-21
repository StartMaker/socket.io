import React from 'react';
import {connect} from "react-redux";

import Content from '../../components/home/content';

const mapStateToProps = (state) => {
    console.log(state);
    const {folders} = state;
    return folders;
};

export default connect(
    mapStateToProps
)(Content);