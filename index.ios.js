/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

'use strict';
var React = require('react')
var ReactNative = require('react-native')
var ItemList = require('./ItemList');

class MercariLocal extends React.Component {
  render() {
    return (
      <ReactNative.NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'MercariLocal',
          component: ItemList,
        }}/>
    );
  }
}

const styles = ReactNative.StyleSheet.create({
  container: {
    flex: 1,
  },
});

ReactNative.AppRegistry.registerComponent('MercariLocal', () => MercariLocal);
