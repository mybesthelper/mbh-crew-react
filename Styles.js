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
    marginBottom: 5,
    paddingTop: 20,
    paddingBottom: 20,
  },
  rightContainer: {
    flex: 4,
    backgroundColor: '#FFF',
  },
  leftContainer: {
    flex: 1,
    marginLeft: 5,
  },
  title: {
    fontSize: 18,
    marginBottom: 8,
    textAlign: 'left',
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#F6F6F6',
  },
  header: {
    height: 60,
    paddingTop: 5,
    backgroundColor: '#3666C6',
  },
  headerText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 20,
  },
  button: {
    backgroundColor: '#3666C6',
    height: 50,
    width: 50,
    borderRadius: 50,
    position: 'absolute',
    top: 500,
    right: 15,
    shadowColor: '#222',
    shadowOffset: {width: 55, height: 55},
    shadowOpacity: 1,
  },
  buttonText: {
    transform: [{translateY: -12}],
    textAlign: 'center',
    lineHeight: 90,
    color: '#FFFFFF',
    fontSize: 50,
  },
  time: {
    fontWeight: 'bold'
  },
  boldTitle: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  urgent: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#DE6363'
  },
  menu: {
    height: 24,
    width: 24,
  }
});

module.exports = styles;
