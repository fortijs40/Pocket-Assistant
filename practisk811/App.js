import * as React from 'react';
import { Button, View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FlatList, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 18, justifyContent: 'center'}}>See a list of names here:</Text>
      <Text> </Text>
      <Button
        title="List"
        onPress={() => navigation.navigate('List')}
      />
      <Image source={require('./pointing.gif')} style= {{
        marginTop: 50, 
      }} />
    </View>
  );
}

function List({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          {key: 'Klāvs'},
          {key: 'Ausma'},
          {key: 'Liepa'},
          {key: 'Emīls'},
          {key: 'Elza'},
          {key: 'Dārta'},
          {key: 'Kristaps'},
          {key: 'Roberts'},
          {key: 'Liene'},
          {key: 'Salvis'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
      <Text> </Text>
      <Button
        title="Go back to homescreen"
        onPress={() => navigation.push('Home')}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="List" component={List} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;