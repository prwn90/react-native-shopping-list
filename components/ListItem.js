import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ListItem = ({item, deleteItem}) => {
  return (
    <TouchableOpacity style={styles.listItem}>
        <View style={styles.listItemView}>
            <Text style={styles.listItemText}>{item.text}</Text>
            <Icon 
            name="trash" 
            size={20} 
            color="#a10a0a" 
            onPress={() => deleteItem(item.id)} 
            />
        </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    listItem: {
      padding: 15,
      backgroundColor: '#dbe9ff',
      borderBottomWidth: 2,
      borderColor: '#eee',
    },
    listItemView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    listItemText: {
      fontSize: 18,
      fontWeight: 500,
    },
    
});

export default ListItem;
