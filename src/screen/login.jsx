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

  const backgroundColor = isDarkMode ? 'black' : 'white';
  const textColor = isDarkMode ? 'white' : 'black';

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: backgroundColor}]}>
      <Text style={[styles.textColor, {color: textColor}]}>Login</Text>
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
});
