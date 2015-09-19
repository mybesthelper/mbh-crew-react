'use strict';

var React = require("react-native");

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions
} = React;

var {
  width,
  height
} = Dimensions.get("window");

var Carousel = require("react-native-carousel");

var styles = StyleSheet.create({
  container: {
    width: width,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent"
  },

  image: {
    height: height,
    width: width
  }
});

var Onboarding = React.createClass({
  shouldComponentUpdate: function(nextProps, nextState) {
    return false;
  },

  render: function() {
    var images = [
      {uri: "http://mbh-static.s3.amazonaws.com/mycrew/new_onboarding_1.jpg?t=1"},
      {uri: "http://mbh-static.s3.amazonaws.com/mycrew/new_onboarding_2.jpg?t=1"},
      {uri: "http://mbh-static.s3.amazonaws.com/mycrew/new_onboarding_3.jpg?t=1"},
      {uri: "http://mbh-static.s3.amazonaws.com/mycrew/new_onboarding_4.jpg?t=1"},
      {uri: "http://mbh-static.s3.amazonaws.com/mycrew/new_onboarding_5.jpg?t=2"}
    ];

    return (
      <Carousel width={width} indicatorSize={30} indicatorPosition={115} inactiveIndicatorColor="#999999" indicatorColor="#444444" indicatorSpace={14}>
        {images.map(function(image) {
          return (
            <View style={styles.container}>
              <Image style={styles.image} source={image} />
            </View>
          );
        })}
      </Carousel>
    );
  }
});

module.exports = Onboarding;
