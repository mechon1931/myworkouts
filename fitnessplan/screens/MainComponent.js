//import { useState } from 'react';
import { Platform, View } from 'react-native';
import Constants from 'expo-constants';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

//import { EXERCISES } from '../shared/exercises';
import HomeScreen from './HomeScreen';
import DirectoryScreen from './DirectoryScreen';
import ExerciseInfoScreen from './ExerciseInfoScreen';
import AboutScreen from './AboutScreen';
import ContactScreen from './ContactScreen';

const Drawer = createDrawerNavigator();

const screenOptions = {
  headerTintColor: '#fff',
  headerStyle: { backgroundColor: '#ff0000' }
};

const HomeNavigator = () => {
  const Stack = createStackNavigator();

  return(
    <Stack.Navigator
      screenOptions={screenOptions}
    >
      <Stack.Screen 
        name='Home'
        component={HomeScreen}
        options={{ title: 'Home' }}  
      />
    </Stack.Navigator>
  );
};

const DirectoryNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName='Directory'
      screenOptions={screenOptions}
    >
      <Stack.Screen 
        name='Directory'
        component={DirectoryScreen}
        options={{
          title: 'Exercise Directory'
        }}
      />

      <Stack.Screen 
        name='ExerciseInfo'
        component={ExerciseInfoScreen}
        options={({ route }) => ({
          title: route.params.exercise.name
        })}
      />
    </Stack.Navigator>
  );
};

const AboutNavigator = () => {
  const Stack = createStackNavigator();
  return(
    <Stack.Navigator 
      screenOptions={screenOptions}>
        <Stack.Screen
          name='About'
          component={AboutScreen}
        />
      </Stack.Navigator>
  )
};

const ContactNavigator = () => {
  const Stack = createStackNavigator();
  return(
    <Stack.Navigator 
      screenOptions={screenOptions}
    >
      <Stack.Screen
        name='Contact'
        component={ContactScreen}
        options={{ title: 'Contact Us' }}
      />
    </Stack.Navigator>
  )
};

const Main = () => {

  return (
    <View style={{ 
        flex: 1, 
        paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight 
      }}
    >
      <Drawer.Navigator 
        initialRouteName='Home'
        drawerStyle={{ backgroundColor: '#CEC8FF' }}
      >
        <Drawer.Screen
          name='Home'
          component={HomeNavigator}
          options={{ title: 'Home' }}
        />
        <Drawer.Screen 
          name='Directory'
          component={DirectoryNavigator}
          options={{ title: 'Directory' }}
        />
        <Drawer.Screen
          name='About'
          component={AboutNavigator}  
        />
        <Drawer.Screen 
          name='Contact'
          component={ContactNavigator}
          options={{title: 'Contact Us'}}
        />

      </Drawer.Navigator>
    </View>
  );
};

export default Main;