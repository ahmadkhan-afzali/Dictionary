import {Button, StyleSheet, Text, TextInput, useColorScheme, View} from 'react-native';
import React, { useState } from 'react';

const UserInput = () => {
  const theme = useColorScheme();
  const isDarkmode = theme === 'dark';

  const backgroundColor = isDarkmode ? 'white' : 'black';
  const textStyle = isDarkmode ? 'black' : 'white';
  const input = isDarkmode ? 'black' : 'white';
  const border = isDarkmode ? 'black' : 'white';

  // to take a  text input from user which can be changed  every time   and show the text on screen 
  // for that we use state variable as below. 
 const [text, setText] = useState('');
 console.log(text);
 

  return (
    <View style={[styles.container, {backgroundColor: backgroundColor}]}>
      <Text style={[styles.textStyle, {color: textStyle}]}>UserInput</Text>

      <TextInput
        placeholder="Enter text input here..."
        style={[
          styles.input,
          {color: input},
          {backgroundColor: backgroundColor},
          {borderColor:border}
        ]}
        value={text}
        onChangeText={(text)=>setText(text)}
      />
      <Button title='submit'></Button>
      <Text>Result:{'\n'} {text}</Text>
    </View>
  );
};

export default UserInput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap:10,
  },
  textStyle: {
    fontWeight:40,
    fontSize:30,
  },

  input: {
    width:'98%',
    fontSize: 25,
    fontWeight: 30,
    borderWidth:1,
    borderRadius:5,

  },
});
