import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Landing from './Landing';
import { BrowserRouter, Route } from 'react-router-dom';

ReactDOM.render(<BrowserRouter><Route exact path="/tracker" component={App}></Route><Route exact path="/" component={Landing}></Route></BrowserRouter>, document.getElementById('root'));