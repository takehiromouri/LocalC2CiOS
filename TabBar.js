'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
  StyleSheet,
  TabBarIOS,
  Text,
  View,
} = ReactNative;
import Icon from 'react-native-vector-icons/FontAwesome';

var NewListing = require('./NewListing');
var TransactionListView = require('./TransactionListView');

var base64Icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAQAAACSR7JhAAADtUlEQVR4Ac3YA2Bj6QLH0XPT1Fzbtm29tW3btm3bfLZtv7e2ObZnms7d8Uw098tuetPzrxv8wiISrtVudrG2JXQZ4VOv+qUfmqCGGl1mqLhoA52oZlb0mrjsnhKpgeUNEs91Z0pd1kvihA3ULGVHiQO2narKSHKkEMulm9VgUyE60s1aWoMQUbpZOWE+kaqs4eLEjdIlZTcFZB0ndc1+lhB1lZrIuk5P2aib1NBpZaL+JaOGIt0ls47SKzLC7CqrlGF6RZ09HGoNy1lYl2aRSWL5GuzqWU1KafRdoRp0iOQEiDzgZPnG6DbldcomadViflnl/cL93tOoVbsOLVM2jylvdWjXolWX1hmfZbGR/wjypDjFLSZIRov09BgYmtUqPQPlQrPapecLgTIy0jMgPKtTeob2zWtrGH3xvjUkPCtNg/tm1rjwrMa+mdUkPd3hWbH0jArPGiU9ufCsNNWFZ40wpwn+62/66R2RUtoso1OB34tnLOcy7YB1fUdc9e0q3yru8PGM773vXsuZ5YIZX+5xmHwHGVvlrGPN6ZSiP1smOsMMde40wKv2VmwPPVXNut4sVpUreZiLBHi0qln/VQeI/LTMYXpsJtFiclUN+5HVZazim+Ky+7sAvxWnvjXrJFneVtLWLyPJu9K3cXLWeOlbMTlrIelbMDlrLenrjEQOtIF+fuI9xRp9ZBFp6+b6WT8RrxEpdK64BuvHgDk+vUy+b5hYk6zfyfs051gRoNO1usU12WWRWL73/MMEy9pMi9qIrR4ZpV16Rrvduxazmy1FSvuFXRkqTnE7m2kdb5U8xGjLw/spRr1uTov4uOgQE+0N/DvFrG/Jt7i/FzwxbA9kDanhf2w+t4V97G8lrT7wc08aA2QNUkuTfW/KimT01wdlfK4yEw030VfT0RtZbzjeMprNq8m8tnSTASrTLti64oBNdpmMQm0eEwvfPwRbUBywG5TzjPCsdwk3IeAXjQblLCoXnDVeoAz6SfJNk5TTzytCNZk/POtTSV40NwOFWzw86wNJRpubpXsn60NJFlHeqlYRbslqZm2jnEZ3qcSKgm0kTli3zZVS7y/iivZTweYXJ26Y+RTbV1zh3hYkgyFGSTKPfRVbRqWWVReaxYeSLarYv1Qqsmh1s95S7G+eEWK0f3jYKTbV6bOwepjfhtafsvUsqrQvrGC8YhmnO9cSCk3yuY984F1vesdHYhWJ5FvASlacshUsajFt2mUM9pqzvKGcyNJW0arTKN1GGGzQlH0tXwLDgQTurS8eIQAAAABJRU5ErkJggg==';

class TabBar extends React.Component {
  static title = '<TabBarIOS>';
  static description = 'Tab-based navigation.';
  static displayName = 'TabBar';

  state = {
    selectedTab: 'homeTab',
    notifCount: 0,
    presses: 0,
  };

  _renderContent = (color: string, pageText: string, num?: number) => {
    return (
      <View style={[styles.tabContent]}>
        <Text style={styles.tabText}>{pageText}</Text>
      </View>
    );
  };

  onSellPress() {
    this.props.navigator.push({
      title: 'Create New Listing',
      component: NewListing,      
    })
  }

  onTransactionPress() {
    this.props.navigator.push({
      title: 'My Transactions',
      component: TransactionListView,
      passProps: {
        navigator: this.props.navigator
      }
    })
  }

  render() {
    return (
      <TabBarIOS
        unselectedTintColor="gray"
        tintColor="#dc4e41"
        unselectedItemTintColor="gray"
        barTintColor="white">
        <TabBarIOS.Item
          title="Home"
          icon={{uri: base64Icon, scale: 3}}
          selected={this.state.selectedTab === 'homeTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'homeTab',
            });
          }}>
          <View>
          </View>
        </TabBarIOS.Item>
        <Icon.TabBarItemIOS
          title="Transactions"
          iconName="list"
          badge={2}
          badgeColor="#dc4e41"
          selected={this.state.selectedTab === 'redTab'}
          onPress={() => {
            this.onTransactionPress()
          }}>
          <View>
          </View>
        </Icon.TabBarItemIOS> 
        <Icon.TabBarItemIOS
          title="Sell"
          iconName="camera"       
          selected={this.state.selectedTab === 'sellTab'}
          onPress={() => {
            this.onSellPress()            
          }}>
          <View>
          </View>
        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS
          title="Chats"
          iconName="comment-o"       
          selected={this.state.selectedTab === 'sellTab'}
          onPress={() => {
                   
          }}>
          <View>
          </View>
        </Icon.TabBarItemIOS>   
        <Icon.TabBarItemIOS
          title="My Page"
          iconName="user"        
          selected={this.state.selectedTab === 'myPageTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'myPageTab',
            });
          }}>
          <View>
          </View>
        </Icon.TabBarItemIOS>     
      </TabBarIOS>
    );
  }
}

var styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
    margin: 50,
  },
});

module.exports = TabBar;