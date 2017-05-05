'use strict';

import React, { Component } from 'react'
import {
  StyleSheet,
  Image,
  View,
  ScrollView,
  TouchableHighlight,
  Text
} from 'react-native';

var SelectLocationView = require('./SelectLocationView')

import { Dimensions } from 'react-native'; 
const { width, height } = Dimensions.get('window');
import MapView from 'react-native-maps';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  sectionHeader: {
    backgroundColor: '#f9f9f9',
    height: 50,    
  },
  sectionHeaderText: {
    color: '#777',
    position: 'absolute',
    bottom: 5,
    left: 20
  },
});

class ConfirmLocationView extends Component {  
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
        <SelectLocationView />
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionHeaderText}>
            SELECT TIME
          </Text>
        </View>        
      </View>
    )
  }
}

module.exports = ConfirmLocationView;