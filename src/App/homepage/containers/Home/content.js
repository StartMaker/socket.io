import React from 'react';
import {connect} from "react-redux";

import HomepageContent from '../../components/home/content';
import {initHomePage} from '../../../../action/sync';

const mapStateToProps = (state) => {
    const {homepage} = state;
    return {homepage};
};

const mapDispatchToProps = (dispatch) => {
    return {
        init: () => {
            return dispatch(initHomePage());
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomepageContent);