import {Button, StyleSheet, Text, useColorScheme, View} from 'react-native';
import React from 'react';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// const Stack = createNativeStackNavigator();
const Home = ({navigation}) => {

  const theme = useColorScheme();
  const isDarkMode = theme === 'dark';

  const backgroundColor = isDarkMode ? 'white' : 'black';
  const textColor = isDarkMode ? 'black' : 'white';

  return (
    <View style={styles.container} >
      <Text
        style={{
          fontSize: 20,
          fontWeight: '500',
          color: textColor,
          backgroundColor:backgroundColor,
          padding: 20,
        }}>
        
        Welcome to Home page
      </Text>
      <Button  title="Profile" onPress={() =>navigation.navigate ("Profile",{id:1, name:"Ahmad"})} />
      {/* // In react-native by cliking on profile button cannot navigate to profile page. It's needed to create */}
     {/*  const Stack = createNativeStackNavigator(); and import  */}
     {/*  import {createNativeStackNavigator} from '@react-navigation/native-stack'; */}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',

  }
});