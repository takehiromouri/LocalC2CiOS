'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
  Text,
  TextInput,
  View,
  StyleSheet,
} = ReactNative;

class SearchBar extends React.Component {  
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={{height: 60, top: 65, backgroundColor: '#f7f7f7'}}>
        <TextInput style={styles.searchBar}
                   editable = {true}
                   placeholder="What are you looking for?"
                   autoFocus={false}
                   onChangeText={(text) => this.setState({text})}
                   value={this.state.text} />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  searchBar: {
    backgroundColor: '#e7e7e7',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'lightgray',
    fontSize: 14,
    marginRight: 20,
    marginLeft: 20,
    marginTop: 10,
    paddingLeft: 20,    
    height: 40,  
    top: 0
  }
})

module.exports = SearchBar;