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
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: 'red',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    position: 'absolute',
    bottom: 20, 
    left: 20,
    right: 20
  },
  sellText: {
    color: 'white',
    fontSize: 20,
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
      </View>
    );
  }
}

module.exports = ItemList;