'use-strict';

var React = require('react-native');

var styles = require('./Styles');

var {
  TouchableHighlight,
  Text,
  View,
} = React;

var button = React.createClass({
  getInitialState: function() {
    return {text: '+'};
  },
  buttonClicked: function() {
    console.log(this.props.text);
  },
  render: function() {
    return (

      <TouchableHighlight
        style={styles.button}
        onPress={this.buttonClicked.bind(this)}>
          <Text style={styles.buttonText}>{this.props.text}</Text>
      </TouchableHighlight>

    );
  }
});

module.exports = button;