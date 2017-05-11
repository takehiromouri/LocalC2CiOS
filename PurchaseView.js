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

import { Dimensions } from 'react-native'; 
const { width, height } = Dimensions.get('window');
var ConfirmLocationView = require('./ConfirmLocationView');
var ThankYouView = require('./ThankYouView');

var styles = StyleSheet.create({
  heading: {
    flexDirection: 'row',
    padding: 10, 
  },
  separator: {
    height: 1,
    backgroundColor: '#DDDDDD'
  },
  image: {
    width: 80,
    height: 80
  },
  price: {
    fontSize: 12,   
    margin: 10, 
    color: '#333',
  },
  title: {
    fontSize: 16,
    marginLeft: 10,
    color: '#333'
  },
  description: {
    fontSize: 18,
    marginLeft: 5,
    color: '#656565'
  },
  checkoutButton: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#dc4e41',    
    borderWidth: 1,
    borderColor: '#fff',
    position: 'absolute',
    bottom: 80, 
    left: 20,
    right: 20
  },
  checkoutText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold' 
  },
  section: {
    flexDirection: 'row',
    padding: 15,
  },
  stepButton: {
    backgroundColor: '#eee',
    height: 45,
    padding: 10,
    borderWidth: 1,
    borderColor: '#eee',
    shadowRadius: 5,
    shadowOpacity: 0.1,    
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowColor: '#777',
    marginTop: 10,
    marginBottom: 20,
    marginRight: 20,
    marginLeft: 20
  },
  stepButtonText: {
    color: '#555',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold'
  },
});

class PurchaseView extends Component {
  constructor(props) {
    super(props);
    this.state = {      
      coordinate: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      date: new Date(),
    }
  }

  confirmLocation(){
    this.props.navigator.push({
      title: 'Confirm Location and Time',
      component: ConfirmLocationView,
      passProps: { 
        onDateChange: this.onDateChange,
        onCoordinateChange: this.onCoordinateChange,
        coordinate: this.state.coordinate,
        date: this.state.date
      }
    })
  }

  onCoordinateChange = (coordinate) => {
    this.setState({ coordinate: coordinate })
  }

  onDateChange = (date) => {
    this.setState({ date: date })
  }

  rowPressed() {
    this.props.navigator.push({
      title: 'Thank You',
      component: ThankYouView
    })
  }

  render() {
    return (
      <ScrollView contentContainerStyle={{flex:1}}>
        <View>
          <View style={styles.heading}>
            <Image style={styles.image}
              source={{uri: 'https://placeholdit.imgix.net/~text?txtsize=14&txt=150%C3%97150&w=150&h=150'}} />
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.title}>iPhone 4s</Text>  
              <Text style={styles.price}>$45</Text>        
            </View>                
          </View>

          <View style={styles.separator}/>

          <View style={styles.section}>
            <Text style={styles.subPrice}>Shipping Fee</Text>
            <Text></Text>
          </View>

          <View style={styles.separator}/>

          <View style={styles.section}>
            <Text style={{fontWeight: 'bold'}}>You Pay</Text>          
          </View>

          <View style={styles.separator}/>

          <TouchableHighlight style={styles.stepButton}
                              onPress={() => this.confirmLocation()}>
            <Text style={styles.stepButtonText}>
              Confirm location and time
            </Text>            
          </TouchableHighlight>
          
        </View>
        <TouchableHighlight style={styles.checkoutButton}
                            onPress={() => this.rowPressed()} >
          <Text style={styles.checkoutText}>
            Checkout
          </Text>
        </TouchableHighlight>
      </ScrollView>
    )
  }
}

module.exports = PurchaseView;