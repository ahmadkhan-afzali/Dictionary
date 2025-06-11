
import { StyleSheet, Text, useColorScheme, View } from 'react-native';
import Home from './src/screen/Home';
import Profile from './src/screen/Profile';
import Search from './src/screen/Search';
import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import above library but instead of FontAwesome type your own Icon code from library. As below AntDesign-> is code of icon
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
// these three importation are from 'react-native-ocons' each icon has different category.
// as in above are AntDesign , Feather,Octicons 





const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Home'
      // to apply a global attribute , add that here inside  stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'blue',
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

      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="Profile" component={Profile} options={{headerShadowVisible: false
          //  headerStyle: { backgroundColor: 'blue' } 
          // if the attribute  is written inside the Stack.Screen it means the 
          // outer stack.Navigator attribute does not effect on it.
          // it gives priority to interior attribute.
        }} />
      <Stack.Screen name="Search" component={Search} options={{ title: "Search Screen",
         headerStyle: { backgroundColor: "red" } }} />

    </Stack.Navigator>
  );
};

function TabNavigator(){
  return(
    <Tab.Navigator initialRouteName='Home'
    
    screenOptions={{
      // tabBarActiveTintColor:'blue',
      // tabBarInactiveTintColor:'red',
      tabBarLabelStyle:{
        fontSize:20
      },
      tabBarStyle:{
        height:80,
        justifyContent:'center',
        alignItems:'center'

      }
//          Icon Component
// You can either use one of the bundled icons above or roll your own custom font.
// import Icon from 'react-native-vector-icons/FontAwesome';
// const myIcon = <Icon name="rocket" size={30} color="#900" />;
      
      
    //screenOptions={{}} is used to apply an attribute globaly inside the Tab.Navigator
    //install vector icon library using -> npm install --save react-native-vector-icons. Next step is
//     Android Setup
// Option: With Gradle (recommended)
// To make font management smoother on Android, use this method:
// Edit android/app/build.gradle (NOT android/build.gradle) and add:
  // apply from: file("../../node_modules/react-native-vector-icons/fonts.gradle")
    }}
    >
      <Tab.Screen name='Home' component={Home}
      options={{
        // tabBarActiveTintColor:'blue',
        tabBarIcon:({size,color}) =>(
          <AntDesign name="home" size={size} color={color} />
          // Note: name is home why? bcs in the library was named as home.
        )
      }}/>
      <Tab.Screen name='Profile' component={Profile} 
      options={{
        tabBarActiveTintColor:'yellow',

        //tabBarIcon:() =>(
        tabBarIcon:({size,color}) =>(
          // if you want to give more exact color and size as its original and size then pass through function
          //<Feather name="user" size={30} color="blue"/>
          <Feather name="user" size={size} color={color}/>
          // Note: name is user why? bcs in the library was named user.
        )
      }}
      />
      <Tab.Screen name='Search' component={Search}
      options={{
        tabBarActiveTintColor:'blue',
        // tabBarIcon:()=>(
        //   <Octicons name="search" size={38} color="#900" />
          // Note: name is search why? bcs in the library was named as search.

           tabBarIcon:({size,color})=>(
          <Octicons name="search" size={size} color={color} />
        )
      }}
      />
    </Tab.Navigator>

  )
}

const App = () => {
  // const theme = useColorScheme();
  // const isDarkMode = theme === 'dark';
  // const backgroundColor = isDarkMode ? 'white' : 'black'
  // const textColor = isDarkMode ? 'black' : 'white'

  return (

    <NavigationContainer >
      {/* <StackNavigator /> */}
      <TabNavigator />
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
