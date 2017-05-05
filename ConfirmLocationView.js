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
    bottom: 20, 
    left: 20,
    right: 20
  },
  checkoutText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold' 
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

  rowPressed(){
    this.props.navigator.pop()
  }

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

        <TouchableHighlight style={styles.checkoutButton}
                            onPress={() => this.rowPressed()} >
          <Text style={styles.checkoutText}>
            Confirm
          </Text>
        </TouchableHighlight>
      </View>
    )
  }
}

module.exports = ConfirmLocationView;