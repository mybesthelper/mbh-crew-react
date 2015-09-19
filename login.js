'use strict';

var React = require("react-native");

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity
} = React;

var {
  width,
  height
} = Dimensions.get("window");

var Onboarding = require('./onboarding');

var styles = StyleSheet.create({
  blueButton: {
    backgroundColor: '#3b70f4',
    width: width,
    paddingTop: 17,
    paddingBottom: 17,
    bottom: 124
  },

  transparentButton: {
    bottom: 124,
    paddingTop: 17,
    paddingBottom: 17,
    width: width / 2
  },

  leftHalfButton: {
    left: 0
  },

  rightHalfButton: {
    bottom: 173,
    left: width / 2
  },

  whiteText: {
    color: "#ffffff",
    textAlign: "center"
  },

  smallText: {
    fontSize: 12,
    fontWeight: "200"
  }
});

var Login = React.createClass({
  shouldComponentUpdate: function(nextProps, nextState) {
    return false;
  },

  render: function() {
    return (
      <View>
        <Onboarding />
        <TouchableOpacity activeOpacity={0.8} style={styles.blueButton}>
          <Text style={[styles.whiteText, styles.smallText]}>Login with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5} style={[styles.transparentButton, styles.leftHalfButton]}>
          <Text style={[styles.whiteText, styles.smallText]}>Join now</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5} style={[styles.transparentButton, styles.rightHalfButton]}>
          <Text style={[styles.whiteText, styles.smallText]}>Log in</Text>
        </TouchableOpacity>
      </View>
    );
  }
});

module.exports = Login;
