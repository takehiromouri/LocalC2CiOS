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

var PurchaseView = require('./PurchaseView');

var styles = StyleSheet.create({
  heading: {
    backgroundColor: '#F8F8F8',
  },
  separator: {
    height: 1,
    backgroundColor: '#DDDDDD'
  },
  image: {
    width: 400,
    height: 300
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 5,
    color: '#48BBEC'
  },
  title: {
    fontSize: 20,
    margin: 5,
    color: '#656565'
  },
  description: {
    fontSize: 18,
    margin: 5,
    color: '#656565'
  },
  buyButton: {
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: 'red',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    position: 'absolute',
    bottom: 80, 
    left: 20,
    right: 20
  },
  buyText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold' 
  }
});

class ItemView extends Component {
  rowPressed() {
    this.props.navigator.push({
      title: 'Buy Now',
      component: PurchaseView
    })
  }

  render() {
    return (
      <ScrollView contentContainerStyle={{flex:1}}>        
        <View style={styles.heading}>
          <Text style={styles.price}>$12.00</Text>
          <Text style={styles.title}>Bike</Text>
          <View style={styles.separator}/>
        </View>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </Text>
        <TouchableHighlight style={styles.buyButton}
                            onPress={() => this.rowPressed()} >
          <Text style={styles.buyText}>
            Buy
          </Text>
        </TouchableHighlight>
      </ScrollView>
    )
  }
}

module.exports = ItemView;