'use strict';

import React, { Component } from 'react'
import {
  StyleSheet,
  Image,
  ListView,
  View,
  TouchableHighlight,
  Text
} from 'react-native';

var ItemView = require('./ItemView');

import { Dimensions } from 'react-native'; 
const { width, height } = Dimensions.get('window');

var styles = StyleSheet.create({
  image: {
    height: width / 3,
    width: width / 3 - 2
  },
})

class Item extends Component {
  constructor(props) {
    super(props);
    this.rowPressed = this.rowPressed.bind(this);
  }

  rowPressed() {
    this.props.navigator.push({
      title: 'iPhone 4s',
      component: ItemView      
    })
  }

  render() {
    return (
      <TouchableHighlight onPress={() => this.rowPressed()}>
        <Image style={styles.image} source={{ uri: this.props.uri }}/>
      </TouchableHighlight>
    );
  }
}

module.exports = Item;