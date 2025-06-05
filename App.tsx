
import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import Home from './src/screen/Home';
import Profile from './src/screen/Profile';
import Search from './src/screen/Search';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Home'
      // to apply a global attribute , add that here ins stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'yellow',

        }
      }}
    >
      {/* // but if the initialRouteName is Home then it opens Home page not profile page
      // If you want a specific page to open first during rendering, place it at the beginning.
      // As above profile page */}
      {/* Note: As in the Profile page data is coming from Home page, if you want to render as initial page , it must
       not pass any data otherwise shows error */}
      {/* options={{headerShown:false}} is used to hide header. */}
      {/* options={{title:"Search Screen"}} is used to rename Title of Screen */}
      {/* options={{headerShadowVisible:false}} is used to hide shadow behind Home title */}
      {/* headerStyle:{backgroundColor:"red"} is used to give backgroundColor */}

      <Stack.Screen name="Home" component={Home}
        options={{ headerShown: false }} />
      <Stack.Screen name="Profile" component={Profile}
        options={{
          headerShadowVisible: false,
          //  headerStyle: { backgroundColor: 'blue' } 
          // if the attribute  is written inside the Stack.Screen it means the 
          // outer stack.Navigator attribute does not effect on it.
          // it gives priority to interior attribute.
        }} />
      <Stack.Screen name="Search" component={Search}
       options={{ title: "Search Screen", 
       headerStyle: { backgroundColor: "red" } }} />

    </Stack.Navigator>
  );
};

const App = () => {
  // const theme = useColorScheme();
  // const isDarkMode = theme === 'dark';
  // const backgroundColor = isDarkMode ? 'white' : 'black'
  // const textColor = isDarkMode ? 'black' : 'white'

  return (

    <NavigationContainer >
      <StackNavigator />
    </NavigationContainer>

  )
}

export default App

const styles = StyleSheet.create({
  // container: {
  //   fontWeight: '600',
  //   fontSize: 20, 

  // }
})
