import * as React from 'react';
import { Text, View, StyleSheet, Dimensions, Platform, } from 'react-native';
import Constants from 'expo-constants';
import Home from './screens/Home';
import Listview from './screens/Listview';

const webPreviewWidth = 300;
const webPreviewHeight = 550;
const screenWidth =
  Platform.OS === 'web' ? webPreviewWidth : Dimensions.get('screen').width;
const screenHeight =
  Platform.OS === 'web'
    ? webPreviewHeight
    : Dimensions.get('screen').height - Constants.statusBarHeight;

export default class App extends React.Component {
  state = {
    page: 'Home',
  };

  pickPageToRender = () => {
    if (this.state.page === 'Listview') {
      return <Listview goToPage={(page) => this.setState({ page })} />;
    } else {
      return <Home goToPage={(page) => this.setState({ page })} />;
    }
  };

  render() {
    return <View style={styles.container}>{this.pickPageToRender()}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    height: screenHeight,
    width: screenWidth,
    paddingTop: Constants.statusBarHeight,
  },
});
