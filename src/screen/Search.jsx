import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'

const Search = ({navigation,route}) => { // id and name data catched by route
  const {id,name} = route.params; // tow properties are there inside route.params : id and name 
  // above code is destractured form of console.log(route.params);
  return (
    <View>
      <Text style={styles.textStyle}> Welcome to Search page</Text>
      <Text style={styles.textStyle}>Data passed from Profile page are{'\n\n\t'} Id:{id} Name:{name}</Text>
      <Button title='Home' onPress={()=>navigation.navigate("Home")}/>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
    textStyle:{
        fontSize:30,
        fontWeight:20,
    }
})