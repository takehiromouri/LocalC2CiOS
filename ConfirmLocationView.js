'use strict';

import React, { Component } from 'react'
import {
  StyleSheet,
  Image,
  View,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
  Text,
  DatePickerIOS,
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
      date: new Date(),      
    };
  }

  onDateChange = (date) => {
    this.setState({date: date});
  };

  render() {
    return (
      <View style={styles.container}>
        <SelectLocationView />
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionHeaderText}>
            SELECT DATE AND TIME
          </Text>
        </View>
        <DatePickerIOS
          style={{height: 100}}
          date={this.state.date}
          mode="datetime"
          onDateChange={this.onDateChange}
        />
      </View>
    )
  }
}

module.exports = ConfirmLocationView;