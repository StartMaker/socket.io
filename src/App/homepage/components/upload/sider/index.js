import React from 'react';
import Media from 'react-media';

import NormalSider from './normalSider';
import SmallSider from './samllSider';

class UploadSide extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            [
                <Media query= "(min-width:961px)">
                    <NormalSider/>
                </Media>,
                <Media query="(max-width:960px)">
                    <SmallSider/>
                </Media>
            ]
        )
    }
}

export default UploadSide;