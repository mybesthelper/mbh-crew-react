/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  StyleSheet,
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  rightContainer: {
    flex: 1,
    backgroundColor: '#FFF',
    marginBottom: 2,
  },
  leftContainer: {
    marginLeft: 5,
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  year: {
    textAlign: 'center',
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
  header: {
    height: 50,
    width: 100,
  },
  button: {
    backgroundColor: '#3666C6',
    height: 50,
    width: 50,
    shadowRadius: 2,
    shadowOffset: {width:0, height:2},
    shadowOpacity: 0.7,
    borderRadius: 50,
    shadowColor: 'black',
  },
  buttonText: {
    transform: [{translateY: -12}],
    textAlign: 'center',
    lineHeight: 90,
    color: '#FFFFFF',
    fontSize: 50,
  },
});

module.exports = styles;
