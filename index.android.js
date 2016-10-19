/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Alert,
  TouchableOpacity,
  InteractionManager,
  Navigator,
} from 'react-native';

var QRCodeScreen = require('./QRCodeScreen');

var Entry = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={()=>this.props.navigator.push({name:"QRCodeScreen"})} >
          <Text style={{fontWeight: 'bold', fontSize: 25}}> Scan QR  </Text>
        </TouchableHighlight>
      </View>
    );
  }
})

var RouteMapper = function(route, navigationOperations) {
  if (route.name === 'Entry'){
    return (<Entry {...route.params} navigator={navigationOperations} />);
  }
  else if (route.name === 'QRCodeScreen') {
    return (<QRCodeScreen {...route.params} navigator={navigationOperations}/>);
  }
}

export default class cameraTest extends Component {
  render() {
    return (
      <Navigator
        initialRoute = {{name: 'Entry'}}
        renderScene = {RouteMapper}
        configureScene={(route, routeStack) => Navigator.SceneConfigs.FadeAndroid}
      />
    );
  };
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('cameraTest', () => cameraTest);
