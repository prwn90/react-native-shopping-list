import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const AddItem = ({addItem}) => {
    const [text, setText] = useState('');
    const onChange = textValue => setText(textValue);
  
    return (
      <View>
        <Image source={{uri: 'https://cdn2.iconfinder.com/data/icons/web-set-1/50/12-512.png'}} style={styles.img} />
        <TextInput
          placeholder="Write product Here"
          style={styles.input}
          onChangeText={onChange}
          value={text}
        />
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            addItem(text);
            setText('');
          }}>
          <Text style={styles.btnText}>
            <Icon name="plus" size={20} color="green" /> Add Product
          </Text>
        </TouchableOpacity>
        
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    input: {
      height: 60,
      padding: 8,
      margin: 5,
    },
    btn: {
      backgroundColor: '#80aeff',
      padding: 9,
      margin: 5,
    },
    btnText: {
      color: 'darkslateblue',
      fontSize: 20,
      textAlign: 'center',
    },
    img: {
        marginTop: 15,
        marginHorizontal: 130,
        width: 90,
        height: 90,
      }
  });
  
  export default AddItem;