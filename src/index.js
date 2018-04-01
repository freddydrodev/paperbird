import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheet/main.less';
import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
