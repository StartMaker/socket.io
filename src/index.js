import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import Root from './root';
import './static/css/default.less';
import storeConfig from './storeConfig';

const store = storeConfig();

class App extends React.Component{
    render() {
        return (
            <Provider store={store}>
                <Root/>
            </Provider>
        );
    }
}

render(
    <App/>,
    document.body
);

export default App;