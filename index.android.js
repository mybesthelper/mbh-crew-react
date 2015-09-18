/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');

var Styles = require('./Styles');
var Button = require('./Button');
var TaskList = require('./TaskList');

var data = {
  tasks:
    [ { 'id': 1,
        'type': 'undefined',
        'title': 'Beeeeeer',
        'details': 'Happy Hours!',
        'time': '2015-02-13T17:00:00.000Z',
        'urgency': 0,
        'location': 'Vancouver',
        'latitude': '',
        'longitude': '',
        'source': 'source_mycrew_self',
        'source_mycrew_self': [Object],
        'source_mycrew_others': {} },
      { 'id': 2,
        'type': 'undefined',
        'title': 'Babysitter needed',
        'details': 'Party',
        'time': '2015-03-21T20:00:00.000Z',
        'urgency': 0,
        'location': 'V6j1g1',
        'latitude': 49.2704,
        'longitude': -123.142,
        'source': 'source_mycrew_others',
        'source_mycrew_self': [Object],
        'source_mycrew_others': [Object] }
    ]
}

var {
  AppRegistry,
  Navigator,
  Text,
  View,
  Image,
  ListView,
} = React;

var MyCrew = React.createClass({
  getInitialState: function() {
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };
  },

  componentDidMount: function() {
    this.fetchData();
  },

  fetchData: function() {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(data.tasks),
      loaded: true,
    });
  },

  render: function() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <TaskList
        tasks={this.state.dataSource}
      />
    );
  },

  renderLoadingView: function() {
    return (
      <View style={styles.container}>
        <Image
          source={require('image!logo')}
          style={styles.thumbnail}
        />
      </View>
    );
  },
});

var styles = Styles;

AppRegistry.registerComponent('MyCrew', () => MyCrew);

