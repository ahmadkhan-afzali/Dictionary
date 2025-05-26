import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

// There are three types of navigation
// 1)Stack navigation  2)Tab navigation 3)Drawer navigation

// For navigation ** step 1
// install react-native cli navigation -> npm install @react-navigation/native

// step 2
// install -> npm install react-native-screens react-native-safe-area-context

////////// for creating  stack navigation
//        ** step 1
// install -> npm install @react-navigation/native-stack


// ****** lets build a HomePage component that we call it from main component.
const HomePage = () => {
  return (
    <View>
      <Text style={{fontFamily: 'new roman', fontSize: 25, fontWeight: '500'}}>
        Welcome to home page
      </Text>
    </View>
  );
};

const StackNavigation = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 35, fontWeight: '600'}}>StackNavigation</Text>
      <HomePage />
      // This is calling of component from main component. It can be called as much as needed.
      <HomePage />
      // components also can be created separatly outside the main component in another location 
      // which is prefered way of coding.
    </View>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({});
