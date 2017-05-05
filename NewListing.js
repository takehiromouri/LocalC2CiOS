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
    marginTop: 50,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: 'red',    
    borderWidth: 1,
    borderColor: '#fff',
  },
  listText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold' 
  },
  steps: {
    color: '#333',
    fontSize: 16,
    fontWeight: 'bold'
  },
  stepButton: {
    backgroundColor: 'white',
    height: 45,
    padding: 10,
    borderRadius: 10,
    shadowRadius: 5,
    shadowOpacity: 0.3,    
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowColor: '#777',
    marginTop: 10,
    marginBottom: 20
  },
  stepButtonText: {
    textAlign: 'center',
    fontSize: 18
  }
});

class NewListing extends Component {
  render() {
    return (
      <ScrollView style={{backgroundColor: '#f0f0f0'}} contentContainerStyle={{flex:1}}>
        <View style={{margin: 20}}>
          <View style={styles.section}>            
            <Text style={styles.steps}>STEP 1</Text>
            
            <TouchableHighlight style={styles.stepButton}>
              <Text style={styles.stepButtonText}>
                Add item photos
              </Text>
            </TouchableHighlight>
          </View>

          <View style={styles.section}>            
            <Text style={styles.steps}>STEP 2</Text>
            
            <TouchableHighlight style={styles.stepButton}>
              <Text style={styles.stepButtonText}>
                Add some details
              </Text>
            </TouchableHighlight>
          </View>

          <View style={styles.section}>            
            <Text style={styles.steps}>STEP 3</Text>
            
            <TouchableHighlight style={styles.stepButton}>
              <Text style={styles.stepButtonText}>
                Add shipping details
              </Text>
            </TouchableHighlight>
            
          </View> 

          <View style={styles.section}>            
            <Text style={styles.steps}>STEP 4</Text>
            
            <TouchableHighlight style={styles.stepButton}>
              <Text style={styles.stepButtonText}>
                Select Location
              </Text>
            </TouchableHighlight>
            
          </View>       
          <TouchableHighlight style={styles.listButton}
                            onPress={() => this.rowPressed()} >
            <Text style={styles.listText}>
              List
            </Text>
          </TouchableHighlight>
        </View>        
      </ScrollView>
    )
  }
}

module.exports = NewListing;