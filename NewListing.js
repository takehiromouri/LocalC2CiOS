'use strict';

import React, { Component } from 'react'
import {
  StyleSheet,
  Image,
  View,
  ScrollView,
  TouchableHighlight,
  Text,
  Alert
} from 'react-native';
import Camera from 'react-native-camera';

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
    backgroundColor: '#dc4e41',    
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
  },
  preview: {    
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});

class NewListing extends Component {
  takePicture() {    
    const options = {};
    //options.location = ...
    this.camera.capture({metadata: options})
      .then((data) => console.log(data))
      .catch(err => console.error(err));
  }

  rowPressed() {
    Alert.alert(
      'Creating new listing',
      'You are about to create a new listing. Are you sure?',
      [        
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},        
        {text: 'Yes', onPress: () => this.props.navigator.pop()},
      ],     
    )        
  }

  render() {
    return (
      <ScrollView style={{backgroundColor: '#f0f0f0'}} contentContainerStyle={{flex:1}}>
        <View style={{margin: 20}}>
          <View style={styles.section}>            
            <Text style={styles.steps}>STEP 1</Text>
            
            <View style={styles.stepButton}>
              <Camera ref={(cam) => {
                this.camera = cam;
              }}>
                <Text style={styles.stepButtonText} onPress={this.takePicture.bind(this)}>Add item photos</Text>
              </Camera>
            </View>

            
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