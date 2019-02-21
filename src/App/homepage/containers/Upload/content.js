import Content from '../../components/upload/content';
import {connect} from "react-redux";

import {initUploadPage} from "../../../../action/sync";

const mapStateToProps = (state) =>{
    const {homepage} = state;
    return {homepage};
};

const mapDispatchToProps = (dispatch) => {
    return {
        init: () => {
            dispatch(initUploadPage());
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Content);