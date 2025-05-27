import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'

const Profile = ({navigation,route}) => {
  const {id,name} =route.params;
  return (
    <View style={{justifyContent:'center', alignItems:'center'}}>
      <Text style={styles.textStyle}>Welcome to Profile page</Text>
      <Text style={{fontSize:20,fontWeight:'500'}}>Id:{id} Name:{name}</Text>
      <Button title='Search' onPress={()=>navigation.navigate("Search",{id:1, name:'Ahmad'})}/>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  textStyle:{
    fontSize:20,
    fontWeight:'600',
    padding:10,
  }
})