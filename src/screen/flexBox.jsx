import { use } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
// import React from 'react'

const FlexBox = () => {

  const theme = useColorScheme()
  const isDarkMode = theme ==='dark'

  const backgroundColor = isDarkMode ? 'white' : 'dark'
  const textStyle = isDarkMode ? 'black' : 'white'
  return (
   <SafeAreaView style={{flex:1}}>

     <ScrollView 
     contentContainerStyle={{gap:10}}
     horizontal  // Note: if it's needed vertically just remove the * horizontal * by default it is vertical.
     style={[styles.container,{backgroundColor:backgroundColor}]} 
     >

      <View style={styles.box1}><Text style={[styles.textStyle,{color:textStyle}]}>1box</Text> </View>
      <View style={styles.box2}><Text style={[styles.textStyle,{color:textStyle}]}>2box</Text></View>
      <View style={styles.box3}><Text style={styles.textStyle}>3box</Text></View>
      <View style={styles.box4}><Text style={styles.textStyle}>4box</Text></View>
      <View style={styles.box5}><Text>5box</Text></View>
      <View style={styles.box6}><Text>6box</Text></View>
      <View style={styles.box7}><Text>7box</Text></View>
      <View style={styles.box8}><Text>8box</Text></View>
      


    </ScrollView>
    </SafeAreaView>
   
  );
};

export default FlexBox;

const styles = StyleSheet.create({
  container: {
    // flexDirection:'column', // main-axis
    // justifyContent: 'space-evenly',
    // backgroundColor: 'black',
    // alignItems: 'stretch',
    // flexWrap:"wrap",
    // How flex works . 1+1+3+3 = 8
    //            1/8,  1/8,  3/8,   3/8.
    //          0.125, 0.125, 0.375  0.375.
    // each flex divided by total of flexes the results are  0.20, 0.20, 0.6
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    // color: 'white',

  },
  
  box1: {
    flex: 1,
    justifyContent:"center",
    alignItems:'center',
    borderRadius:50,
    // alignSelf:'flex-start',
    backgroundColor: 'yellow',
    height:'80',
    width: '80',
    
    // NOTE: width: '80%', height:'80%', are different from width: '80', height:'80',  '80%' means 80 percent of screen
    // occupied the rest 20 percent left. EXAMPLE --- we cannot have two box with  width:'80%' or hieght:'80%' 
    
  },
  box2: {
    flex: 1,
    justifyContent:"flex-end",
    alignItems:'center',
    borderRadius:50,
    backgroundColor: 'red',
    height:'80',
    width: '80',
  },
  box3: {
    flex: 1,
    justifyContent:"flex-end",
    alignItems:'center',
    borderRadius:50,
    backgroundColor:'blue',
    height:'80',
    width: '80',
    // height:20,
  },
  box4:{
    flex:1,
    justifyContent:"flex-start",
    alignItems:'center',
    borderRadius:50,
    backgroundColor:'green',
    width:'80',
    height:'80',
  },
  box5:{
    flex:1,
    justifyContent:"flex-start",
    alignItems:'center',
    borderRadius:50,
    backgroundColor:'green',
    width:'80',
    height:'80',

  },
  box6:{
    flex:1,
    justifyContent:"center",
    alignItems:'center',
    borderRadius:50,
    backgroundColor:'green',
    width:'80',
    height:'80',

  },
  box7:{
    flex:1,
    justifyContent:"center",
    alignItems:'center',
    borderRadius:50,
    backgroundColor:'red',
    width:'80',
    height:'80',

  },
  box8:{
    flex:1,
    justifyContent:"center",
    alignItems:'center',
    borderRadius:50,
    backgroundColor:'white',
    width:'80',
    height:'80',
  }
});
