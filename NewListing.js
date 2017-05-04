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
  listButton: {
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
  listText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold' 
  }
});

class NewListing extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={{flex:1}}>
        <View>
          <View style={styles.section}>            
            <Text style={styles.steps}>Step 1</Text>
            <View style={styles.separator}/>
          </View>

          <View style={styles.section}>            
            <Text style={styles.steps}>Step 2</Text>
            <View style={styles.separator}/>
          </View>

          <View style={styles.section}>            
            <Text style={styles.steps}>Step 3</Text>
            <Text>Shipping</Text>
            <View style={styles.separator}/>
          </View> 

          <View style={styles.section}>            
            <Text style={styles.steps}>Step 4</Text>
            <Text>Select Location</Text>
            <View style={styles.separator}/>
          </View>       
        </View>
        <TouchableHighlight style={styles.listButton}
                              onPress={() => this.rowPressed()} >
            <Text style={styles.listText}>
              List
            </Text>
          </TouchableHighlight>
      </ScrollView>
    )
  }
}

module.exports = NewListing;