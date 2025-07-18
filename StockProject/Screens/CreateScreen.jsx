import {FlatList, Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import { useState } from 'react';
// import React from 'react'
const CreateScreen = (data) => {
const [itemName, setItemName] = useState('')
const [stockAmt, setStockAmt] = useState('')

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter an item name...."
        placeholderTextColor="blue"
        style={styles.Input}
        value={itemName}
        onChange={item => setItemName(item)}
      />
      <TextInput
        placeholder="Enter stock amount...."
        placeholderTextColor="blue"
        style={styles.Input}
        value={stockAmt}
        onChange={item => setStockAmt(item)}
      />
      <Pressable style={styles.addButton}>
        <Text style={styles.btnText}>ADD ITEM</Text>

      </Pressable>
          <View style={{marginTop:20}}>
            <View style={styles.headingContainer}>
              <Text style={styles.headingTxt}>Items</Text>
              <Text style={styles.headingTxt}>Quantity</Text>
            </View>
      
            <FlatList
              data={data}
              keyExtrotor={(item) => item.id}
              renderItem={({item}) => (
                <View style={[styles.itemConatiner,{backgroundColor: item.stock <20 ? "red" : "green"}]}>
                  <Text style={styles.itemTxt}>{item.name}</Text>
                  <Text style={styles.itemTxt}>{item.stock}</Text>
                </View>
              )}
              contentContainerStyle={{gap:10}}
            />
          </View>
    </View>
  );
};

export default CreateScreen;

const styles = StyleSheet.create({
  container: {
    padding: '3%',
    gap:10,
  },
  Input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    fontSize: 20,
    paddingVertical: 15,
    paddingHorizontal: 15,

    
  },
  addButton:{
    backgroundColor:'#959',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    paddingVertical:10,
    paddingHorizontal:10,
  },
  btnText:{
    fontWeight:'bold',
    fontSize:20,

  },
    headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  headingTxt: {
    fontSize: 20,
    fontWeight: '500',
  },
  itemConatiner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    borderRadius:10,
    height:40,
    paddingVertical:10,
  },
  itemTxt: {
    fontSize: 15,
    fontWeight: '400',
  },
  
});
