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

var ItemList = require('./ItemList');

import { Dimensions } from 'react-native'; 
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    color: '#dc4e41',
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 150,
    textAlign: 'center'
  },
  congratulationsText: {
    color: '#333',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 40,
    padding: 20,
    textAlign: 'center'
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

class ThankYouView extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),      
    };
  }

  rowPressed() {
    this.props.navigator.popToTop()
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>
          Congratulations!
        </Text>
        <Text style={styles.congratulationsText}>
          You've successfully purchased an iPhone 6!

          Your seller will confirm and contact you regarding the pickup time and date.
        </Text>

        <TouchableHighlight style={styles.checkoutButton}
                            onPress={() => this.rowPressed()} >
          <Text style={styles.checkoutText}>
            Go Back
          </Text>
        </TouchableHighlight>
      </View>
    )
  }
}

module.exports = ThankYouView;