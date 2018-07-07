import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import rootReducer from './reducers'

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(rootReducer);


ReactDOM.render(
    <React.Fragment>
        <BrowserRouter>
            <Provider store={store}>
              <App /> 
            </Provider>
        </BrowserRouter>
    </React.Fragment>,
    document.getElementById('root'));
registerServiceWorker();
