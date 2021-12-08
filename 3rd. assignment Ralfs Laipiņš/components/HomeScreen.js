import * as React from 'react';
import { Component } from 'react';
import { useState } from 'react';
import { Button, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  const [count, setCount] = useState(0);
  
  return (
    <View
      style={{
        flex: 2,
        alignItems: 'centre',
        justifyContent: 'centre',
        alignSelf: 'stretch',
      }}>
      <Button
        title="Go to List view"
        onPress={() => navigation.navigate('ListView')}
      />
      <View style={styles.container}>
        <Text>You clicked {count} times</Text>
        <Button onPress={() => setCount(count + 1)} title="Click me to increase count!" />
        <View style={{marginTop:10}}></View>
        <Button onPress={() => setCount(count - 1)} title="Click me to decrease count!" />
        </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
});
