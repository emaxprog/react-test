import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import 'semantic-ui-css/semantic.min.css';
import './app.css';
import createStore from './store';
import App from "./containers/App";
import About from "./components/About";
import {BrowserRouter, Route, Link} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import {syncHistoryWithStore} from 'react-router-redux';

const store = createStore();
const history = syncHistoryWithStore(createBrowserHistory(),store);

ReactDom.render(
    <Provider store={store}>
        <BrowserRouter history={history}>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>

                <hr />
                <Route exact path='/' component={App}/>
                <Route path='/about' component={About}/>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);