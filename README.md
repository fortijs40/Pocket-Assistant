# Pocket-Assistant
Depositojiet savu insaidiņu
Group 8 Ralfs Laipins
Mans hello world Kods:
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        <Image
          source={{uri: "https://memegenerator.net/img/images/14729295/feelsbadman-pepe.jpg"}}
          style={{width:200, height:200}}
        />
        <Text style={styles.texts}>Hello World from Group 8 :
          
          <Text style={{fontWeight: "bold"}}>Ralfs Laipins!{'\n'} </Text>
              This is my Ralfs Laipins{'\n'}

              first React Native application!
        
        </Text>
        <StatusBar style="auto" />
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
  texts:{
    textAlign: "left",
    height:300

  }
});
