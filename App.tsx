
import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import Home from './src/screen/Home'

const App = () => {
  const theme = useColorScheme();
  const isDarkMode = theme === 'dark';

  const backgroundColor = isDarkMode ? 'white' : 'black'
  const textColor = isDarkMode ? 'black' : 'white'
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: backgroundColor }}>
      <Text style={[styles.container, { color: textColor }]}>App</Text>
      <Home />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    fontWeight: '600',
    fontSize: 20,

  }
})
