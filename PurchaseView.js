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

var styles = StyleSheet.create({
  heading: {
    backgroundColor: '#F8F8F8',
    flexDirection: 'row'
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
  checkoutButton: {
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
  checkoutText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold' 
  }
});

class PurchaseView extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={{flex:1}}>
        <View>
          <View style={styles.heading}>
            <Image style={styles.image}
              source={{uri: 'https://placeholdit.imgix.net/~text?txtsize=14&txt=150%C3%97150&w=150&h=150'}} />
            <Text style={styles.price}>$45</Text>
            <Text style={styles.title}>iPhone 4s</Text>
            <View style={styles.separator}/>
          </View>
          <Text style={styles.subPrice}>Shipping Fee</Text>
          <Text style={styles.subPrice}>Mercari credits</Text>
          <View style={styles.separator}/>
          <Text style={styles.subPrice}>You Pay</Text>          
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