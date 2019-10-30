import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import  * as auth from './api/authInterceptor';
import registerServiceWorker from './registerServiceWorker';
// importing for redux
import { Provider } from 'react-redux';
import store from './store/index';

ReactDOM.render(
     <Provider store={store}>
        <App />
    </Provider>

, document.getElementById('root'));
registerServiceWorker();
