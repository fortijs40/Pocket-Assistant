import * as React from 'react';
import { Image, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import Constants from 'expo-constants';
import AssetExample from './components/AssetExample';
import arrow from './photos/arrow.png';
import penguin from './photos/penguin.gif';
import button from './photos/button.png';


export default function App() {
  return (
    <View style={styles.container}>
       <Image source={penguin} style={{width:310, height:300,}}/>
      <Text style={styles.title}>
        Hello world!
      </Text>
      <Text style={{fontSize: 18, color: '#290166', textAlign: 'center', marginBottom: 30,}}>
        Ieva from Group 8 sends her hello!
      </Text>
      <Text style={styles.paragraph}>
        Also, I dare you to not press{'\n'} The button below!
      </Text>
        <Image source={arrow} style= {styles.arrow} />

      <TouchableOpacity
        onPress={() => alert('Oyy, I told you to not touch it. \n Who let you touch it?')}
        style={{ }}>
        <Image source = {button} style={styles.logo} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 0,
    backgroundColor: '#76889E',
    padding: 5,
  },
  title: {
    margin: 10,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#290166',
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 16,
    color: '#F8F3AB',
    textAlign: 'center',
  },
  arrow: {
    width: 130,
    height: 100,
    marginTop: 50,
    marginLeft: 140,  
  },
  logo: {
    width: 170,
    height: 159,
    marginTop: 5,
    marginBottom: 50,
    marginLeft: 110,
  },
});
