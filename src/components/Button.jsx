import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Button = (props) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={props.btnPressHandler}>
        <Text style={styles.buttonText}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 10,
    margin: 10,
    backgroundColor: '#533ebd',
    borderRadius: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});
