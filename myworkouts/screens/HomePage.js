import React from 'react';
import { Button, StyleSheet } from 'react-native';
import { ListItem, Card } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import WorkoutList from './WorkoutList';



const HomePage = ({ navigation }) => {

  return(
    <SafeAreaProvider style={styles.container}>
      <Card containerStyle={styles.cardContainer}>
        <Card.Title>Fitness App</Card.Title>
        <Card.Divider />
        <Card.FeaturedSubtitle>Feel the Pump!</Card.FeaturedSubtitle>
        <WorkoutList /> 
      </Card>

  
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    width: '80%',
    borderRadius: 10,
    elevation: 5, // for Android
  },
});

export default HomePage;