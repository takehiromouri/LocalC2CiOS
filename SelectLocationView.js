'use strict';

import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
} from 'react-native';

import { Dimensions } from 'react-native'; 
const { width, height } = Dimensions.get('window');
import MapView from 'react-native-maps';

const styles = StyleSheet.create({
  container: {
    height: 300    
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
      markers: [
        {
          coordinate: {
            latitude: 37.78825,
            longitude: -122.4154,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          },
          title: 'Target',
          description: '6 people have met here.'
        },
        {
          coordinate: {
            latitude: 37.78855,
            longitude: -122.4354,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          },
          title: 'Walmart',
          description: '8 people have met here.'
        },
        {
          coordinate: {
            latitude: 37.78425,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          },
          title: 'ShopMart',
          description: '11 people have met here.'
        },
        {
          coordinate: {
            latitude: 37.78495,
            longitude: -122.4394,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          },
          title: 'Taco Bell',
          description: '7 people have met here.'
        }
      ]
    }
  }

  onCoordinateChange = (coordinate) => {    
    this.props.onCoordinateChange(coordinate);
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.022,
            longitudeDelta: 0.0421,
          }}
        >
          {this.state.markers.map(marker => (
            <MapView.Marker
              key={marker.title}
              coordinate={marker.coordinate}
              title={marker.title}
              description={marker.description}
            />
          ))}
          <MapView.Marker draggable
            coordinate={this.props.coordinate}
            onDragEnd={
              (e) => this.onCoordinateChange(e.nativeEvent.coordinate)
            }
          />          
        </MapView>      
      </View>
    )
  }
}

module.exports = SelectLocationView;