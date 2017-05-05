'use strict';

import React, { Component } from 'react'
import {
  StyleSheet,
  Image,
  ListView,
  TouchableHighlight,
  ScrollView,
  View,
  Text,
  ActivityIndicator
} from 'react-native';
import { Dimensions } from 'react-native'; 
const { width, height } = Dimensions.get('window');
const gutter = 2;

var Item = require('./Item');
var NewListing = require('./NewListing');
var TabBar = require('./TabBar');
var SearchBar = require('./SearchBar');

var styles = StyleSheet.create({

  item: {    
    borderColor: 'white',    
    width: width / 3,    
    flexDirection: 'column',   
  },
  image: {
    height: width / 3,
    width: width / 3
  },
  list: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    paddingHorizontal: gutter,   
  },
  sellButton: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: 'red',
    borderRadius: 30,    
    position: 'absolute',
    bottom: 60,
    left: 70,
    right: 70
  },
  sellText: {
    color: 'white',
    fontSize: 20,
    backgroundColor: 'transparent',    
    textAlign: 'center',
    fontWeight: 'bold' 
  }
})

class ItemList extends Component {
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource(
      {rowHasChanged: (r1, r2) => r1 !== r2}
    );
    var data = []
    for (let i = 0; i < 80; i++) {
      data.push({uri: 'https://placeholdit.imgix.net/~text?txtsize=14&txt=150%C3%97150&w=150&h=150'})
    }    

    this.state = {
      isLoading: true,
      message: '',
      dataSource: ds.cloneWithRows(data)
    }
  }

  componentDidMount() {
    this.setState({ isLoading: false })
  }

  rowPressed() {
    this.props.navigator.push({
      title: 'Create New Listing',
      component: NewListing
    })
  }

  render() {
    var spinner = this.state.isLoading ? (
        <ActivityIndicator size='large' />
      ) : ( <View/> )

    return (
      <View style={{ flex: 1 }}>
        <SearchBar />
        <ListView contentContainerStyle={styles.list}
                dataSource={this.state.dataSource}
                renderRow={
                  (rowData) => <Item uri={rowData.uri} navigator={this.props.navigator}/>
                }
        /> 
        <TouchableHighlight style={styles.sellButton}
                            onPress={() => this.rowPressed()} >
          <Text style={styles.sellText}>
            Make Money
          </Text>
        </TouchableHighlight>
        <TabBar />
      </View>
    );
  }
}

module.exports = ItemList;