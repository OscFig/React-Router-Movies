import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

// You'll need to wrap <App /> for routing to work

import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
<Router>
    <App />
</Router>,
document.getElementById('root'));

/*            ----
//          -index.js-
-Added import { BrowserRouter as Router} from 'react-router-dom'
-Wrapped <Router></Router> around <App />

//          -App.js-
-import { Route, Link, Switch } from 'react-router-dom'
-
*/