import React from 'react';
import {GestureResponderEvent, Pressable, StyleSheet, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
type props = {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
};
const Button = (props: props) => {
  return (
    <LinearGradient
      colors={['#3a53fc', '#2c74ff', '#3f90ff', '#62aaff', '#8bc2ff']}
      style={styles.container}>
      <Pressable
        style={({pressed}) => [
          pressed ? {backgroundColor: '#2c74ff'} : null,
          styles.buttonStyle,
        ]}
        onPress={props.onPress}>
        <Text style={styles.text}>{props.title}</Text>
      </Pressable>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  buttonStyle: {
    paddingVertical: 15,
    alignItems: 'center',
  },
  container: {
    width: 120,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
export default Button;
