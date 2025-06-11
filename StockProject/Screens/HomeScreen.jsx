import { useState } from 'react';
import {Alert, Pressable, StyleSheet, Text, View,} from 'react-native';
// import React from 'react';

const HomeScreen = () => {
  const [view, setview] = useState(0)

  return (
    <View style={styles.container}>
      <Text style={styles.dashBoradTxtStyle}>Dashboard</Text>

      <View style={styles.btnContainer}>
        <Pressable style={styles.button} onPress={()=>setview(0)}>
          <Text style={styles.btnText}>All Items</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={()=>setview(1)}>
          <Text style={styles.btnText}>Low Stock </Text>
        </Pressable>

        <Pressable style={styles.button} onPress={()=>setview(2)}>
          <Text style={styles.btnText}>Create</Text>
        </Pressable>
      </View>

    {view===0 && <AllItems/>}
    {view==1 && <Low Stock/>}
    {view===2 &&<Create />}

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
  },
  btnContainer: {
    flexDirection: 'row',
    gap:10,
    marginVertical:10,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 3,
    borderRadius: 50,
    borderWidth: 0.8,
    borderColor: 'green',
  },
  btnText: {
    fontSize: 15,
    fontWeight:40,
    color:'green'
  },
});