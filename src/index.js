
import packageJSON from '../package.json';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

console.log (`${packageJSON.name} ${packageJSON.version} (${process.env.REACT_APP_ENV})`);

ReactDOM.render(
    <React.Fragment>
        <App />
    </React.Fragment>
, document.getElementById('root'));
