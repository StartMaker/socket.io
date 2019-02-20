import React from "react";
import {Link,withRouter} from "react-router-dom";
import {render} from 'react-dom';

import "./styles.less";

class NotFound extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount() {
        console.log(this.props);
    }

    render() {
        return (
            <div id='notFound'>
                <h1>404</h1>
                <h4>Not Found</h4>
                <Link to='/'>Go Back</Link>
            </div>
        );
    }
}
export default withRouter(NotFound);