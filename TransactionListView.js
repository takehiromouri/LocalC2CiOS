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
  ActivityIndicator,
} from 'react-native';
import { Dimensions } from 'react-native'; 

var TransactionItem = require('./TransactionItem')
var TabBar = require('./TabBar')

class TransitionListView extends Component {
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource(
      {rowHasChanged: (r1, r2) => r1 !== r2}
    );
    var item = {
      'itemName': 'iPhone 5',
      'price': 200,
      'date': new Date(),
      'coordinate': {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
    }
    var data = []
    for (let i = 0; i < 6; i++) {
      data.push(item)
    }

    this.state = {
      dataSource: ds.cloneWithRows(data)
    }
  }

  componentDidMount() {
    this.setState({ isLoading: false })
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ListView dataSource={this.state.dataSource}
                  renderRow={
                    (rowData) => <TransactionItem item={rowData} navigator={this.props.navigator}/>
                  }
        />        
      </View>
    );
  }
}

module.exports = TransitionListView;