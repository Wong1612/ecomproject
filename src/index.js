import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import Reducers from './2.reducers'
import * as serviceWorker from './serviceWorker';
import './support/bootstrap/css/bootstrap.min.css'
import './support/font.css'
import './support/fontawesome-free/css/fontawesome.min.css'
import './support/fontawesome-free/css/all.min.css';
import { BrowserRouter } from 'react-router-dom';

const globalState = createStore(Reducers, {} , applyMiddleware(ReduxThunk))

ReactDOM.render(<Provider store = {globalState}>
                <BrowserRouter>
                <App />
                </BrowserRouter>
                </Provider> , document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
