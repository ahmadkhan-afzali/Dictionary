import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';

const Search = ({navigation, route}) => {
  // id and name data catched by route
  const {id, name} = route.params; // tow properties are there inside route.params : id and name
  // above code is destractured form of console.log(route.params);
  return (
    <View>
      <Text style={{fontSize: 20, fontWeight: '500'}}>
        Welcome to Search page
      </Text>
      <Text style={{fontSize: 20, fontWeight: '500'}}>
        Data passed from Profile page are{'\n'} id {id} name {name}
      </Text>

      <View style={styles.container}>
        <Button title="Home" onPress={() => navigation.navigate('Home')} />
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
