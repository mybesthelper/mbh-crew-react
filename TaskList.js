'use-strict';

var React = require('react-native');

var styles = require('./Styles');
var Button = require('./Button');

var {
  View,
  Image,
  ListView,
  Text,
} = React;

var TaskList = React.createClass({
  getInitialState: function() {
    return {
      tasks: [],
    };
  },
  render: function() {
    return (
      <View>

        <Image
          source={require('image!logo')}
          style={styles.header}
        />
        <View>
          <Text>Task List</Text>
        </View>

        <ListView
          dataSource={this.props.tasks}
          renderRow={this.renderTask}
          style={styles.listView}
        />
        <Button
          text='+'
        />
      </View>
    )
  },
  renderTask: function(task) {
    return (
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Text>{this.formatTime(task.time)}</Text>
        </View>
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{task.Title}</Text>
          <Text style={styles.year}>{task.title}</Text>
        </View>
      </View>
    );
  },
  formatTime: function(time) {
    return (
      <Text style={styles.time}>10:00<Text>AM</Text></Text>

      )
  }
})

module.exports = TaskList;
