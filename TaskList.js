'use-strict';

var React = require('react-native');

var styles = require('./Styles');
var Button = require('./Button');

var GetMyCrew = require('getmycrew-node').GetMyCrew;

var getMyCrew = new GetMyCrew({
  client_id: '573464783de8e53595f554919556f698f9e63e9ea30c08bc225f520109e66dc6',
  client_secret: '664e5ca7b817c6eeb5892931e09745ff40005e3899ae9d1ab54300cbbe6bf036',
  endpoint_url: 'http://mbhx.ngrok.com/api/v2'
});

var {
  View,
  Image,
  ListView,
  Text,
  TouchableHighlight,
} = React;

var TaskList = React.createClass({
  getInitialState: function() {
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: true,
    };
  },

  componentDidMount: function() {
    this.fetchData();
  },

  fetchData: function() {
    var component = this;

    getMyCrew.authenticate("marcin.popielarz@gmail.com", "marcin123")
    .then(function(token) {
      getMyCrew.index_tasks()
      .then(function(data) {
        component.setState({
          dataSource: component.state.dataSource.cloneWithRows(data.tasks),
          loaded: true,
        });
      });
    });
  },

  render: function() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <View>
        <View >
          <View style={styles.header}>
            <Text style={styles.headerText}>{this.props.name}</Text>
          </View>

          <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderTask}
            style={styles.listView}
          />
        </View>
        <Button
          text='+'
        />
      </View>
    );
  },

  renderLoadingView: function() {
    return (
      <View style={styles.container}>
        <Image
          source={{uri: 'http://mbh-static.s3.amazonaws.com/mycrew/logo_getmycrew.png'}}
          style={{width: 400, height: 600}}
        />
      </View>
    );
  },
  renderTask: function(task) {
    return (
      <TouchableHighlight onPress={() => this._pressRow(task.id)}>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Text>{this.formatTime(task.time)}</Text>
        </View>
        <View style={styles.rightContainer}>
          {this.formatTaskTitle(task)}
        </View>
      </View>
      </TouchableHighlight>
    );
  },
  formatTime: function(time) {
    return (
        <Text style={styles.time}>10:00 AM</Text>
      )
  },
  formatTaskTitle: function(task){
    if(task.source_mycrew_others.task_responses) {
      var styling = styles.boldTitle;
    } else {
      var styling = styles.title;
    }

    if(task.urgency === 1) {
      return (
        <Text style={styling}>
          <Text style={styles.urgent}>! </Text>
          <Text>{task.title}</Text>
        </Text>

      )
    } else {
      return (
        <Text style={styling}>{task.title}</Text>
      )
    }
  },
  _pressRow: function(id, route) {
    this.props.onForward(id);
  }
})

module.exports = TaskList;
