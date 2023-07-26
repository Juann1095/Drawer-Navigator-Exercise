import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import WelcomeScreen from './WelcomeScreen';
import LoginScreen from './LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Import createDrawerNavigator from the package installed
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();

//Instantiate createDrawerNavigator
const Drawer = createDrawerNavigator();

//Setup Drawer Navigator and Drawer Screens with routes
export default function App() {
  return (
    <>
      <NavigationContainer>
        <View style={styles.container}>
          <LittleLemonHeader />
          <Drawer.Navigator>
          useLegacyImplementation
          <Drawer.Screen name="Welcome" component={WelcomeScreen}/>
          <Drawer.Screen name="Login" component={LoginScreen}/>

          </Drawer.Navigator>

        </View>
        <View style={styles.footerContainer}>
          <LittleLemonFooter />
        </View>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  footerContainer: { backgroundColor: '#333333' },
});

