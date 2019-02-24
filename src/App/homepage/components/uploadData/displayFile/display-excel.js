import React from 'react';
import { Table} from "antd";

class DisplayFiles extends React.Component{
    constructor(props){
        super(props);
    }
    componentWillMount(){
        console.log(this);
    }
    render(){
        return (
            <Table>

            </Table>
        );
    }
}

export default DisplayFiles;