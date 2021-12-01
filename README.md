# Pocket-Assistant
# Depositojiet savu insaidiņu


import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.tekstins}>
        Hello World from Group 8{'\n'} Member: 
        <Text style ={{fontWeight: 'bold'}}>Kristians Zondaks!</Text>
        {'\n'}{'\n'}This is my Kristians Zondaks{'\n'} first React Native application!{'\n'}Nice to see You here!
      </Text>
      <Image
        source={{uri: "https://reactnative.dev/docs/assets/p_cat1.png"}}
        style={{width: 200, height: 200}}
            />
      </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  tekstins: {
    textAlign: 'left',
    height: 169,
  }
});
