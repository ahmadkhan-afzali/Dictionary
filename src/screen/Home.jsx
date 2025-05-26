import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'



const Home = () => {
    
const theme = useColorScheme();
const isDarkMode =theme ==='dark';

const backgroundColor =isDarkMode ? 'white' : 'black'
const textColor = isDarkMode ? 'black' : 'white'

  return (
    <View style={{backgroundColor:backgroundColor}} >
      <Text style={{fontSize:20,fontWeight:'500', color:textColor}}> Welcome to Home page</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})