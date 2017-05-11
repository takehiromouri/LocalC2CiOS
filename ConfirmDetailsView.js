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
  Alert
} from 'react-native';


var SelectLocationView = require('./SelectLocationView')
var PurchaseView = require('./PurchaseView')

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
  checkoutButton: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#dc4e41',    
    borderWidth: 1,
    borderColor: '#fff',
    position: 'absolute',
    bottom: 70, 
    left: 20,
    right: 20
  },
  checkoutText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  cancelButton: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#bbb',    
    borderWidth: 1,
    borderColor: '#fff',
    position: 'absolute',
    bottom: 20, 
    left: 20,
    right: 20
  },
  cancelText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold' 
  },
});

class ConfirmDetailsView extends Component {  
  onDateChange = (date) => {    
    this.props.onDateChange(date);
  }

  onCoordinateChange = (coordinate) => {    
    this.props.onCoordinateChange(coordinate)
  }


  rowPressed(){
    Alert.alert(
      'Request Changes',
      'Are you sure you want to request these changes?',
      [        
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},        
        {text: 'Yes', onPress: () => this.props.navigator.pop()},
      ],     
    )    
  }

  render() {
    return (
      <View style={styles.container}>
        <SelectLocationView onCoordinateChange={this.onCoordinateChange} coordinate={this.props.coordinate} />
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionHeaderText}>
            CONFIRM DATE AND TIME
          </Text>
        </View>
        <DatePickerIOS
          style={{height: 100}}
          date={this.props.date}
          mode="datetime"
          onDateChange={this.onDateChange}
        />

        <TouchableHighlight style={styles.checkoutButton}
                            onPress={() => this.rowPressed()} >
          <Text style={styles.checkoutText}>
            Confirm
          </Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.cancelButton}
                            onPress={() => this.props.navigator.pop()} >
          <Text style={styles.cancelText}>
            Cancel
          </Text>
        </TouchableHighlight>
      </View>
    )
  }
}

module.exports = ConfirmDetailsView;