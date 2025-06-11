import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HomeScreen from './HomeScreen';

const App = () => {
  return (
    <View >
      <HomeScreen />
      {/* <HomeScreen /> why <HomeScreen /> inside view, this is calling HomeScreen.jsx file through App.jsx file */}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
 
});