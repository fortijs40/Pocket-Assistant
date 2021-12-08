import * as React from 'react';
import { Text, View, Pressable, StyleSheet, FlatList } from 'react-native';
const johns = [{key: 'John Doe'},{key: 'John Doe 2'},{key: 'John Doe 3'},{key: 'John Doe 4'},{key: 'John Doe 5'}];
export default class Listview extends React.Component {
  render() {
    return (
      <View style={styles.page}>
        <Text style={styles.pageTitle}>This is the Listview page</Text>
          <View style = {styles.box}>
           <Pressable onPress={() => this.props.goToPage('Home')}>
           <Text style={styles.pageButton}> Home Page</Text>
           </Pressable>
          </View>
          <View style={styles.container}>
      <FlatList
        data={johns}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 69,
    textAlign: 'center',
    backgroundColor: 'aqua',
    margin: 3,
  },
  page: {
    flex: 1,
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
    width: 80,
    height: 10,
  },
  pageButton: {
    textAlign: 'center',
    backgroundColor: 'lime',
    borderWidth: 1,
    borderColor: 'red',
  }
});
