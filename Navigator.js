'use strict';

var TaskList = require('./TaskList');

var React = require('react-native');
var {
  Text,
  Navigator,
} = React;


var Nav = React.createClass({
  render() {
    return(
      <Navigator
        initialRoute={{name: 'Task List', index: 0}}
        renderScene={(route, navigator) =>
          <TaskList
            navigator={navigator}
            name={route.name}
            onForward={(id) => {
              var nextIndex = route.index + 1;
              navigator.push({
                name: 'Scene ' + id,
                index: nextIndex,
              });
            }}
            onBack={() => {
              if (route.index > 0) {
                navigator.pop();
              }
            }}
          />
        }
      />
      )
  }
})

module.exports = Nav;