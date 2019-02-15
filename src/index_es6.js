import {Provider} from 'react-redux';
import React from 'react';
import {createStore} from 'redux';
import {render} from 'react-dom';

import App from './redux_/App';
import reducers from './redux_/reducers/index';
import View from './redux_/ccc/index';

const store = createStore(reducers);

class AppContainer extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <Provider store={store}>
                <App/>
                <View/>
            </Provider>
        );
    }
}
render(
    <AppContainer/>,
    document.body
);

export default AppContainer;
