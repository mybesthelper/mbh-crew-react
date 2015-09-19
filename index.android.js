/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var styles = require('./styles');

var Login = require('./login');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var MyCrew = React.createClass({
  render: function() {
    return (
      <Login />
    );
  }
});

AppRegistry.registerComponent('MyCrew', () => MyCrew);
