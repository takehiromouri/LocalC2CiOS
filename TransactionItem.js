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
  Alert
} from 'react-native';
import { Dimensions } from 'react-native'; 
const { width, height } = Dimensions.get('window');

var SelectLocationView = require('./SelectLocationView')
var ConfirmDetailsView = require('./ConfirmDetailsView')
var TransactionMapView = require('./TransactionMapView')

var styles = StyleSheet.create({
  heading: {
    flexDirection: 'row',
    padding: 10, 
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
    fontSize: 12,   
    margin: 10, 
    color: '#333',
  },
  date: {
    color: '#999',
    marginLeft: 10
  },
  title: {
    fontSize: 16,
    marginLeft: 10,
    color: '#333'
  },
  confirmButton: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#dc4e41',
    borderRadius: 30,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 30,
    marginBottom: 10
  },
  confirmButtonText: {
    color: 'white',
    fontSize: 14,
    backgroundColor: 'transparent',    
    textAlign: 'center',
    fontWeight: 'bold' 
  },
  confirmedButton: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#aaa',
    borderRadius: 30,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 30,
    marginBottom: 10
  },
  requestChangeButton: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#aaa',
    borderRadius: 30,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 10,
    marginBottom: 30
  },
  requestChangeButtonText: {
    color: 'white',
    fontSize: 14,
    backgroundColor: 'transparent',    
    textAlign: 'center',
    fontWeight: 'bold' 
  }

})

class TransactionItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      confirmed: false
    }
  }

  onCoordinateChange = (coordinate) => {
    this.setState({ coordinate: coordinate })
  }

  onDateChange = (date) => {
    this.setState({ date: date })
  }

  componentDidMount() {
    this.setState({ isLoading: false })
  }

  rowPressed() {
    Alert.alert(
      'Confirm Details',
      'Are you sure?',
      [        
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},        
        {text: 'Yes', onPress: () => this.setState({confirmed: true})},
      ],     
    )
  }

  onRequestChange() {
    this.props.navigator.push({
      title: 'Request Changes',
      component: ConfirmDetailsView,
      passProps: {
        date: this.props.item.date,
        coordinate: {
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        },
        onCoordinateChange: this.onCoordinateChange,
        onDateChange: this.onDateChange,
      }
    })
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.heading}>
          <Image style={styles.image}
            source={{uri: 'https://placeholdit.imgix.net/~text?txtsize=14&txt=150%C3%97150&w=150&h=150'}} />
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.title}>{this.props.item.itemName}</Text>  
            <Text style={styles.price}>${this.props.item.price}</Text>

            <Text style={styles.date}>
              {this.props.item.date.toDateString()}        
            </Text> 
          </View>                
        </View>

        <TransactionMapView coordinate={this.props.item.coordinate} />

        <TouchableHighlight style={this.state.confirmed ? styles.confirmedButton : styles.confirmButton} 
          onPress={() => {
            this.rowPressed()
          }}
        >
          <Text style={styles.confirmButtonText}>
            {this.state.confirmed ? "Confirmed" : "Confirm"}
          </Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.requestChangeButton} 
          onPress={() => {
            this.onRequestChange()
          }}
        >
          <Text style={styles.requestChangeButtonText}>
            Request Change
          </Text>
        </TouchableHighlight>

        <View style={styles.separator} />
      </View>
    );
  }
}

module.exports = TransactionItem;