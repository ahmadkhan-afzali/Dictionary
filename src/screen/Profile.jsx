import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';

const Profile = ({navigation,route}) => {
  const {id, name} = route.params
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Text style={styles.textStyle}>Welcome to Profile page</Text>

      <Text style={{fontSize: 20, fontWeight: '500'}}>id:{id} name:{name}</Text>
      <Button title="Search" onPress={() => navigation.replace("Profile",{id:1, name:"Ahmad"})} />
      {/* // if it's needed to don't get back to previous page use "replace" attribute as below
      /navigation.replace("Profile",{id:1, name:"Ahmad"} */}

      // pus
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    fontWeight: '600',
    padding: 10,
  },
});
