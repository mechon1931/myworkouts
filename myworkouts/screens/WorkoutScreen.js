import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Button, Modal, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const WorkoutScreen = () => {
  const [workoutData, setWorkoutData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [exerciseName, setExerciseName] = useState('');
  const [sets, setSets] = useState('');
  const [reps, setReps] = useState('');
  const [weight, setWeight] = useState('');

  const modalRef = useRef(null);

  useEffect(() => {
    // Load existing workouts when the component mounts
    const loadWorkouts = async () => {
      try {
        const existingWorkouts = await AsyncStorage.getItem('userWorkouts');
        if (existingWorkouts) {
          setWorkoutData(JSON.parse(existingWorkouts));
        }
      } catch (error) {
        console.error('Error loading user workouts:', error);
      }
    };

    loadWorkouts();
  }, []);

  const saveUserWorkout = async (userWorkout) => {
    try {
      const existingWorkouts = await AsyncStorage.getItem('userWorkouts');
      const parsedExistingWorkouts = existingWorkouts ? JSON.parse(existingWorkouts) : [];
      const updatedWorkouts = [...parsedExistingWorkouts, userWorkout];
      await AsyncStorage.setItem('userWorkouts', JSON.stringify(updatedWorkouts));
    } catch (error) {
      console.error('Error saving user workout:', error);
    }
  };

  const deleteExercise = async (index) => {
    try {
      const updatedWorkouts = workoutData.filter((_, i) => i !== index);
      await AsyncStorage.setItem('userWorkouts', JSON.stringify(updatedWorkouts));
      setWorkoutData(updatedWorkouts);
    } catch (error) {
      console.error('Error deleting user workout:', error);
    }
  };

  const addExercise = () => {
    if (exerciseName && sets && reps && weight) {
      const newExercise = {
        name: exerciseName,
        sets: sets,
        reps: reps,
        weight: weight,
      };

      // Save the new exercise to AsyncStorage
      saveUserWorkout(newExercise);

      // Update the state with the new exercise
      setWorkoutData([...workoutData, newExercise]);

      // Close the modal
      setModalVisible(false);
    }
  };

  return (
    <View>
      <Text>Workout Tracker</Text>
      <Button title="Add Exercise" onPress={() => setModalVisible(true)} />

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        ref={modalRef}
      >
        <View style={styles.container}>
          <View style={styles.containerInput}>
            <Text>Input the Exercise</Text>
            <TextInput
              placeholder="Exercise Name"
              onChangeText={(text) => setExerciseName(text)}
            />
            <TextInput
              placeholder="Sets"
              onChangeText={(text) => setSets(text)}
              keyboardType="numeric"
            />
            <TextInput
              placeholder="Reps"
              onChangeText={(text) => setReps(text)}
              keyboardType="numeric"
            />
            <TextInput
              placeholder="Weight"
              onChangeText={(text) => setWeight(text)}
              keyboardType="numeric"
            />
            <TouchableOpacity onPress={addExercise}>
              <Text>Add</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {workoutData.map((exercise, index) => (
        <View key={index} style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
          <View>
            <Text>{exercise.name}</Text>
            <Text>Sets: {exercise.sets}, Reps: {exercise.reps}, Weight: {exercise.weight}</Text>
          </View>
          <TouchableOpacity onPress={() => deleteExercise(index)}>
            <Text style={{ color: 'red' }}>Delete</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
  },
  containerInput: {
    backgroundColor: 'lightgray', 
    padding: 50, 
    borderRadius: 10,
    color: 'blue'
  },
});

export default WorkoutScreen;
