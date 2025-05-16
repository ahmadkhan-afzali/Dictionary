import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import React from 'react';

const login = () => {
  const theme = useColorScheme();
  const isDarkMode = theme === 'dark';

  const backgroundColor = isDarkMode ? 'white' : 'black';
  const textColor = isDarkMode ? 'black' : 'white';
  const viewColor = isDarkMode ? 'yellow' : 'blue';



  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: backgroundColor}]}>
      <Text style={[styles.textColor, {color: textColor}]}>Login</Text>
      <View style={[styles.viewColor, {backgroundColor: viewColor}]} />
    </SafeAreaView>
  );
};

export default login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textColor: {
    color: 'black',
    // justifyContent: 'center',
    // alignItems: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  viewColor: {
    width: '50%',
    height: 200,
  }
});
