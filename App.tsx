
import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import Home from './src/screen/Home';
import Profile from './src/screen/Profile';
import Search from './src/screen/Search';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native'

const Stack = createNativeStackNavigator();
const StackNavigator = ()=>{
  return(
    <Stack.Navigator initialRouteName='Home'>// but if the initialRouteName is Home then it opens Home page not profile page
      <Stack.Screen name='Profile' component={Profile}/>
// If you want a specific page to open first during rendering, place it at the beginning.
// As above profile page 
      <Stack.Screen name='Home' component={Home}/>
      <Stack.Screen name='Search' component={Search}/>

    </Stack.Navigator>
  )
} 
const App = () => {
  const theme = useColorScheme();
  const isDarkMode = theme === 'dark';

  const backgroundColor = isDarkMode ? 'white' : 'black'
  const textColor = isDarkMode ? 'black' : 'white'
  return (
    <NavigationContainer>
      <StackNavigator/>
    
    <View  style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: backgroundColor }}>
      <Text style={[styles.container, { color: textColor }]}></Text>
    </View>
    </NavigationContainer>
    
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    fontWeight: '600',
    fontSize: 20,

  }
})
