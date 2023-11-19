import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Welcome to Workout Tracker!</Text>
      <Button
        title="Start Workout"
        onPress={() => navigation.navigate('Workout')}
      />
    </View>
  );
};

export default HomeScreen;
