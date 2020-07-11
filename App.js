import React, {useState} from 'react';
import { View, Text, StyleSheet, FlatList, Alert } from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';
import { uuid } from 'uuidv4';

const App = () => {
  const [items, setItems] = useState([
    {id: uuid(), text: 'Bread'},
    {id: uuid(), text: 'Water'},
    {id: uuid(), text: 'Milk'},
    {id: uuid(), text: 'Coffee'},
    {id: uuid(), text: 'Tea'},
  ]);

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  };

  const addItem = text => {
    if (!text) {
      Alert.alert('ERROR', 'Please enter product!', {text: 'OK'});
    } else {
    setItems(prevItems => {
      return [{id: uuid(), text}, ...prevItems];
    });
   }
  };

  return (
    <View style={styles.container}>
      <Header title="Shopping List"/>
      <AddItem addItem={addItem} />
      <FlatList 
        data={items} 
        renderItem={({item}) => (
         <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

 
