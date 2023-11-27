import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import HomePage from './screens/HomePage';
import DetailsScreen from './screens/AnotherScreen';
import LogoTitle from './components/LogoTitle';

const Stack = createNativeStackNavigator();


export default function App() {
  

  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='Home'
        screenOptions={{
          headerStyle: {
          backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomePage}           
          options={{
            title: 'Home',
            headerTitle: (props) => <LogoTitle {...props} />,
            headerShown: true, 
          }}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer> 
      
  );
}





