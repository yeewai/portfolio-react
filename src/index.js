import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
// import { ConnectedRouter as Router } from 'react-router-redux';
import { Route } from 'react-router-dom';
import store from './store';

const renderTarget = document.getElementById('root');

const componentToRender = (
    <Provider store={store}>
        <BrowserRouter>
            <Route path="/" component={App} />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(componentToRender, renderTarget);
