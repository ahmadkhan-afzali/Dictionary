import { useState } from 'react';
import {Alert, Pressable, StyleSheet, Text, View,} from 'react-native';
import CreateScreen from './CreateScreen';
// import React from 'react';
import AllItems from './AllItems';

const data=[
  {id:1, name: "Wheat", stock :15, unit:"kg"},
  {id:2, name: "Rice", stock :29, unit:"kg"},
  {id:3, name: "Flour", stock :30, unit:"kg"},
  {id:4, name: "Beans", stock :21, unit:"kg"},
  {id:5, name: "Okra", stock :18, unit:"kg"},
]

const HomeScreen = () => {
  const [view, setview] = useState()

  return (
    <View style={styles.container}>
      <Text style={styles.dashBoradTxtStyle}>Dashboard</Text>

      <View style={styles.btnContainer}>
        <Pressable style={[styles.button,view ===0 ? {backgroundColor:'green'} : null]} onPress={()=>setview(0)}>
          <Text style={[styles.btnText,view==0 ? {color:'white'}: null]}>All Items</Text>
        </Pressable>

        <Pressable style={[styles.button,view===1 ? {backgroundColor:'green'}:null]} onPress={()=>setview(1)}>
          <Text style={[styles.btnText,view===1 ? {color:'white'}:null]}>Low Stock </Text>
        </Pressable>

        <Pressable style={[styles.button,view===2 ? {backgroundColor:'green'}:null]} onPress={()=>setview(2)}>
          <Text style={[styles.btnText,view ===2 ?{color:'white'}:null]}>Create</Text>
        </Pressable>
      </View>

    {view===0 && <AllItems data={data}/>}
    {view==1 && <AllItems data={data.filter((item)=>item.stock<20)}/>}
    {view===2 &&<CreateScreen data={data}/>}

    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    padding: '4%',
    width: '100%',
    height: '100%',
    backgroundColor: '#ffffff',
  },
  dashBoradTxtStyle: {
    color: '#333',
    fontSize: 25,
    fontWeight: 25,
    paddingTop:25,
  },
  btnContainer: {
    flexDirection: 'row',
    gap:15,
    marginVertical:10,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'green',
  },
  btnText: {
    fontSize: 15,
    fontWeight:40,
    color:'green'
  },
});