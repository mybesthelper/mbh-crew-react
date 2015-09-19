'use strict';

var TaskList = require('./TaskList');
var Login = require('./login');

var React = require('react-native');
var {
  Text,
  Navigator,
} = React;


var Nav = React.createClass({
  renderScene(route, navigator) {
    switch(route.component){
      case TaskList:
        return <TaskList
                  name={'Task List'}
                />
      default:
        return <Login
                  navigator={navigator}
                />
    }
  },
  render() {
      return(
        <Navigator
          initialRoute={{name: 'Login', index: 0}}
          renderScene={this.renderScene}
        />
        )
  }
})

module.exports = Nav;
