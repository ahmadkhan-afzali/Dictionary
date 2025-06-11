import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreen from './HomeScreen'

const App = () => {
  return (
    <View style={styles.container}>
      <HomeScreen />
      {/* <HomeScreen /> why <HomeScreen /> inside view, this is calling HomeScreen.jsx file through App.jsx file */}
    </View>
  )
}

export default App

const styles = StyleSheet.create({

    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#ffffff'
    }
})