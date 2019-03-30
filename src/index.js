import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'animate.css'
import registerServiceWorker from './registerServiceWorker';
import Message from './message/Message'

ReactDOM.render(<Message />, document.getElementById('root'));
registerServiceWorker();
