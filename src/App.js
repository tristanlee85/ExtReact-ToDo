import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider} from 'react-redux';
import reducer from './reducer';
import Layout from './Layout'
import { Container, Transition } from '@extjs/ext-react';
import { BrowserRouter as Router } from 'react-router-dom';

// Enable responsiveConfig app-wide. You can remove this if you don't plan to build a responsive UI.
Ext.require('Ext.plugin.Responsive');

const store = createStore(
    reducer,
    {
        store: new Ext.data.Store({
            fields: ['id', 'todo'],
            data: [{todo: 'Foo TODO'}]
        }),
        value: '',
        showAppMenu: false
    }, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Layout />
                </Router>
            </Provider>
        );
    }
}
