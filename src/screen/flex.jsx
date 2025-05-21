import {
  SafeAreaView,
  SafeAreaViewComponent,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
// import React from 'react'

const flex = () => {
  return (
   
     <SafeAreaView style={styles.container}>
      <Text style={styles.text}>flex</Text>
      <View style={styles.box1}> <Text style={styles.boxText}>box1</Text> </View>
      <View style={styles.box2}> <Text style={styles.boxText}>box2</Text> </View>
      <View style={styles.box3}> <Text style={styles.boxText}>box3</Text> </View>
      <View style={styles.box4}> <Text style={styles.boxText}>box4</Text> </View>
      <View style={styles.box4}> <Text style={styles.boxText}>box4</Text> </View>
      <View style={styles.box4}> <Text style={styles.boxText}>box4</Text> </View>
      <View style={styles.box2}> <Text style={styles.boxText}>box2</Text> </View>
      <View style={styles.box2}> <Text style={styles.boxText}>box2</Text> </View>
      <View style={styles.box1}> <Text style={styles.boxText}>box1</Text> </View>
      <View style={styles.box1}> <Text style={styles.boxText}>box1</Text> </View>
      <View style={styles.box3}> <Text style={styles.boxText}>box3</Text> </View>
      <View style={styles.box3}> <Text style={styles.boxText}>box3</Text> </View>
    </SafeAreaView>
   
  );
};

export default flex;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row', // main-axis
    justifyContent: 'space-evenly',
    backgroundColor: 'black',
    alignItems: 'stretch',
    flexWrap:"wrap",
    // How flex works . 1+1+3+3 = 8
    //            1/8,  1/8,  3/8,   3/8.
    //          0.125, 0.125, 0.375  0.375.
    // each flex divided by total of flexes the results are  0.20, 0.20, 0.6
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',

  },
  boxText:{
    color:'black',
    fontSize:40,
    fontWeight:'bold',
  },
  box1: {
    // flex: 1,
    // justifyContent:"flex-end",
    // alignItems:'center',
    alignSelf:'flex-start',
    backgroundColor: 'yellow',
    height:'20%',
    width: '20%',
    
  },
  box2: {
    // flex: 1,
    // justifyContent:"flex-end",
    // alignItems:'center',
    backgroundColor: 'red',
    height:'20%',
    width: '20%',
  },
  box3: {
    // flex: 3,
    // justifyContent:"flex-end",
    // alignItems:'center',
    backgroundColor:'blue',
    height:'20%',
    width: '20%',
    // height:20,
  },
  box4:{
    // flex:3,
    // justifyContent:"flex-start",
    // alignItems:'center',
    backgroundColor:'green',
    width:'20%',
  },
  box4:{
    // flex:3,
    // justifyContent:"flex-start",
    // alignItems:'center',
    backgroundColor:'green',
    width:'20%',
  },
  box4:{
    // flex:3,
    // justifyContent:"flex-start",
    // alignItems:'center',
    backgroundColor:'green',
    width:'20%',
  },
  box4:{
    // flex:3,
    // justifyContent:"flex-start",
    // alignItems:'center',
    backgroundColor:'green',
    width:'20%',
  },
  box4:{
    // flex:3,
    // justifyContent:"flex-start",
    // alignItems:'center',
    backgroundColor:'green',
    width:'20%',
  }
});
