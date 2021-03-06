import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';

import Colors from '../constants/colors';

function MainButton({onPress, children}) {
  return (
      <TouchableOpacity activeOpacity={0.6} onPress={() => onPress()}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{children}</Text>
        </View>
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'open-sans',
    fontSize: 18,
  }
});


export default MainButton;
