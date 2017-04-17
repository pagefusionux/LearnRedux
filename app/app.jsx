/*
 * React Boilerplate 3
 */

// require react and react-dom
const React = require('react');
const ReactDOM = require('react-dom');
const {Route, Router, IndexRoute, hashHistory} = require('react-router');

// route/page aliases to be configured in webpack.config.js
const Main = require('Main');
const Page1 = require('Page1');
const Page2 = require('Page2');

// load Foundation (using style and css loaders)
//require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

// app css
require('style!css!sass!applicationStyles');

// router implementation
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="page1" component={Page1}/>
      <Route path="page2" component={Page2}/>
      <IndexRoute component={Page1}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
