/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');

var Styles = require('./Styles');
var Button = require('./Button');
var TaskList = require('./TaskList');
var Nav = require('./Navigator');


var {
  AppRegistry,
  Text,
  View,
  Image,
  ListView,
} = React;

var home = {
  name: 'Calendar',
  component: TaskList
}

var MyCrew = React.createClass({
  render() {
    return (
        <Nav />
      )
  }
});

var styles = Styles;

AppRegistry.registerComponent('MyCrew', () => MyCrew);

