'use strict';

import React, { Component } from 'react'
import {
  StyleSheet,
  Image,
  View,
  ScrollView,
  TextInput,
  TouchableHighlight,
  Text
} from 'react-native';

import { Dimensions } from 'react-native'; 
const { width, height } = Dimensions.get('window');

var PurchaseView = require('./PurchaseView');

var styles = StyleSheet.create({
  heading: {
    backgroundColor: '#fff',    
  },
  separator: {
    height: 1,
    backgroundColor: '#DDDDDD'
  },
  image: {
    width: width,
    height: 250
  },
  userView: {
    flexDirection: 'row',
    padding: 20,    
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 50/2,
    marginRight: 15
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 5,
    paddingLeft: 15,
    color: '#1b1b1b',    
  },
  title: {
    fontSize: 18,
    margin: 5,
    paddingLeft: 15,
    color: '#656565',    
  },
  description: {
    fontSize: 14,
    margin: 5,
    color: '#656565'
  },
  descriptionView: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 20
  },
  messageBox: {
    height: 40,
    borderWidth: 1,
    borderColor: '#eee',
    marginRight: 20,
    marginLeft: 20,
    padding: 10
  },
  buyButton: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#dc4e41',
    borderRadius: 30,    
    position: 'absolute',
    bottom: 20,
    left: 100,
    right: 100
  },
  buyText: {
    color: 'white',
    fontSize: 20,
    backgroundColor: 'transparent',    
    textAlign: 'center',
    fontWeight: 'bold'
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
  tableRow: {
    flexDirection: 'row',
    borderColor: '#f7f7f7',
    borderBottomWidth: 1,
  },
  tableHeader: {
    padding: 10,
    paddingLeft: 20,
    width: width * 0.4,
    backgroundColor: '#fdfdfd'
  },
  tableHeaderText: {
    color: '#777',
    fontSize: 12,
    fontWeight: 'bold'
  },
  tableColumn: {
    backgroundColor: 'white',
    padding: 10
  },
  tableColumnText: {
    color: '#333'
  }
});

class ItemView extends Component {
  rowPressed() {
    this.props.navigator.push({
      title: 'Checkout',
      component: PurchaseView
    })
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView style={{flex: 1}}>
          <View style={{marginBottom: 20}}>
            <Image style={styles.image} source={{ uri: 'https://placeholdit.imgix.net/~text?txtsize=14&txt=150%C3%97150&w=150&h=150' }}/>       
            <View style={styles.heading}>
              <Text style={styles.title}>Bike</Text>
              <Text style={styles.price}>$12</Text>          
              <View style={styles.separator}/>
            </View>
            <View style={styles.userView}>
              <Image style={styles.userImage} source={{ uri: 'https://placeholdit.imgix.net/~text?txtsize=14&txt=150%C3%97150&w=150&h=150' }}/>
              <Text style={styles.name}>
                John Doe
              </Text>
            </View>
            <TextInput style={styles.messageBox}
                       placeholder='Message John Doe'/>
          </View>                      

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionHeaderText}>
              DETAILS
            </Text>
          </View>

          <View style={styles.tableRow}>
            <View style={styles.tableHeader}>
              <Text style={styles.tableHeaderText}>
                Category
              </Text>
            </View>

            <View style={styles.tableColumn}>
              <Text style={styles.tableColumnText}>
                Games
              </Text>
            </View>            
          </View>

          <View style={styles.tableRow}>
            <View style={styles.tableHeader}>
              <Text style={styles.tableHeaderText}>
                Condition
              </Text>
            </View>

            <View style={styles.tableColumn}>
              <Text style={styles.tableColumnText}>
                Like New
              </Text>
            </View>            
          </View>

          <View style={styles.tableRow}>
            <View style={styles.tableHeader}>
              <Text style={styles.tableHeaderText}>
                Shipping Fee
              </Text>
            </View>

            <View style={styles.tableColumn}>
              <Text style={styles.tableColumnText}>
                $4
              </Text>
            </View>            
          </View>

          <View style={styles.tableRow}>
            <View style={styles.tableHeader}>
              <Text style={styles.tableHeaderText}>
                Ships from
              </Text>
            </View>

            <View style={styles.tableColumn}>
              <Text style={styles.tableColumnText}>
                Alabama
              </Text>
            </View>            
          </View>

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionHeaderText}>
              DESCRIPTION
            </Text>
          </View>

          <View style={styles.descriptionView}>
            <Text style={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>           
          </View>

          <View style={{marginBottom: 80}} />


        </ScrollView>
        <TouchableHighlight style={styles.buyButton}
                            onPress={() => this.rowPressed()} >
          <Text style={styles.buyText}>
            Buy
          </Text>
        </TouchableHighlight>
      </View>
    )
  }
}

module.exports = ItemView;