/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import HomeScreen from './src/Screens/Home';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ResultList from './src/Components/ResultList';
import { ActionSheet } from 'react-native-cross-actionsheet';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

const Stack = createStackNavigator();

const App = () => {



  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions = {{
      headerStyle: {
        backgroundColor: '#009387', 
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{ 
      title: 'Home' , 
      // headerRight : () => (
      //   <Button
      //   onPress = {() => action()}
      //   title = "Menu"
      //   color = "#fff"
      //   />
      // )
    }}
    />
  </Stack.Navigator>
</NavigationContainer>
  );
};


export default App;
