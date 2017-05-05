'use strict';

import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';

import { Dimensions } from 'react-native'; 
const { width, height } = Dimensions.get('window');
import MapView from 'react-native-maps';

const styles = StyleSheet.create({
  container: {
    height: 400    
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  }
});

class SelectLocationView extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <MapView.Marker draggable
            coordinate={this.state.region}
            onDragEnd={(e) => this.setState({ region: e.nativeEvent.coordinate })}
          /> 
        </MapView>      
      </View>
    )
  }
}

module.exports = SelectLocationView;