import * as React from 'react';
import { useState } from 'react';
import { Component } from 'react';
import { Text, View, Pressable, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default class Home extends React.Component {
  state = {count: 0}
  onPress = () => {
    this.setState({count: this.state.count + 1})
  }
  onPress2 = () => {
    this.setState({count: this.state.count - 1})
  }
  render() {
    return (
      <View style={styles.page}>
        <Text style={styles.pageTitle}>This is the Home page.</Text>
          <View style = {styles.box}>
            <Pressable onPress={() => this.props.goToPage('Listview')}>
            <Text style={styles.pageButton}> Go To Listview Page</Text>
            </Pressable>
          </View> 

          <View>
            <TouchableOpacity style={styles.button} onPress={this.onPress}>
            <Text>Increase Count</Text>
            </TouchableOpacity>
            <View>
            <TouchableOpacity style={styles.button} onPress={this.onPress2}>
            <Text>Decrease Count</Text>
            </TouchableOpacity>
             <View style={styles.count}>
                <Text>
                Current count - { this.state.count }
               </Text>
            </View>
            </View>
          </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  count: {
    alignItems: 'center',
    backgroundColor: 'aqua',
    borderWidth: 1,
    borderColor: 'red',
    alignSelf: 'center',
    marginTop: 10,
  },
  button: {
    backgroundColor: 'lime',
    borderWidth: 1,
    borderColor: 'red',
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: 10,
  },
  pageTitle: {
    margin: 10,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  box: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: 135,
    height: 10,
  },
  pageButton: {
    textAlign: 'center',
    backgroundColor: 'lime',
    borderWidth: 1,
    borderColor: 'red',
  }
});
