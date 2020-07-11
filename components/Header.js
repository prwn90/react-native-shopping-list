import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';


const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 18,
    backgroundColor: '#37578c',
  },
  text: {
    color: 'snow',
    fontSize: 25,
    fontWeight: 700,
    textAlign: 'center',
  },
});

export default Header;
