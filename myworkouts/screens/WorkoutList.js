import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, Button, StyleSheet, Picker } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RectButton } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import  Animated  from 'react-native-reanimated';


const WorkoutItem = ({ item, onDelete, onEdit }) => {
  const renderLeftActions = (_, dragX) => {
    const trans = dragX.interpolate({
      inputRange: [0, 50, 100, 101],
      outputRange: [-20, 0, 0, 1],
    });
    return(
      <RectButton style={styles.leftAction} onPress={onEdit}>
        <Animated.Text
          style={[
            styles.actionText,
            {
              transform: [{ translateX: trans}],
            },
          ]}
        >
          Edit
        </Animated.Text>
      </RectButton>
    );
  };

  const renderRightActions = (_, dragX) => {
    const trans = dragX.interpolate({
      inputRange: [-101, -100, -50, 0],
      outputRange: [1, 0, 0, -20],
    });
    return (
      <RectButton style={styles.rightAction} onPress={onDelete}>
        <Animated.Text
          style={[
            styles.actionText,
            {
              transform: [{ translateX: trans }],
            },
          ]}
        >
          Delete
        </Animated.Text>
      </RectButton>
    );
  };

  return(
    <Swipeable renderLeftActions={renderLeftActions} renderRightActions={renderRightActions}>
      <View style={styles.workoutItem}>
        <Text style={styles.workoutName}>{item.name}</Text>
        <Text>Sets: {item.sets}, Reps: {item.reps}, Weight: {item.weight} {item.unit}</Text>
      </View>
    </Swipeable>
  );
};

const WorkoutList = () => {
  const [workouts, setWorkouts] = useState([
    { id: '1', name: 'Bench Press', sets: 3, reps: 10, weight: '50', unit: 'kg' },
    { id: '2', name: 'Dumbbell Flyes', sets: 4, reps: 12, weight: '20', unit: 'kg' },
  ]);
  const [editMode, setEditMode] = useState(false);
  const [newWorkout, setNewWorkout] = useState({
    id: '',
    name: '',
    sets: '',
    reps: '',
    weight: '',
    unit: 'kg',
  });

  const [showNewWorkoutSections, setShowNewWorkoutsSections] = useState(false);

  useEffect(() => {
    loadWorkouts();
  }, []);

  const loadWorkouts = async () => {
    try{
      const storedWorkouts = await AsyncStorage.getItem('userWorkouts');
      if(storedWorkouts) {
        setWorkouts(JSON.parse(storedWorkouts));
      }
    } catch(error) {
      console.error('Error loading workouts:', error);
    }
  };

  const saveWorkouts = async (updatedWorkouts) => {
    try{
      await AsyncStorage.setItem('userWorkouts', JSON.stringify(updatedWorkouts));
    } catch(error) {
      console.error('Error saving workouts:', error);
    }
  };

  const addWorkout = () => {
    if(newWorkout.name && newWorkout.sets && newWorkout.reps && newWorkout.weight) {
      let updatedWorkouts;

      if(editMode) {
        updatedWorkouts = workouts.map((workout) => 
          workout.id === newWorkout.id ? newWorkout : workout
        );
      } else {
        updatedWorkouts = [...workouts, {...newWorkout, id: `${Date.now()}` }];
      }
      setWorkouts(updatedWorkouts);
      setNewWorkout({ id: '', name: '', sets: '', reps: '', weight: '', unit:'kg' });
      setEditMode(false);
      saveWorkouts(updatedWorkouts);
    };
    setShowNewWorkoutsSections(false);
  };

  const handleEdit = (id) => {
    const workoutToEdit = workouts.find((workout) => workout.id === id);
    setNewWorkout(workoutToEdit);
    setEditMode(true);
  };

  const deleteWorkout = (id) => {
    const updatedWorkouts = workouts.filter((workout) => workout.id !== id);
    setWorkouts(updatedWorkouts);
    saveWorkouts(updatedWorkouts);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Workouts</Text>
      <FlatList
        data={workouts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <WorkoutItem item={item} onDelete={() => deleteWorkout(item.id)} onEdit={() => handleEdit(item.id)} />
        )}
      />
  
      <Button 
        title={showNewWorkoutSections ? 'HideForm' : 'Add Exercise'} 
        onPress={() => setShowNewWorkoutsSections(!showNewWorkoutSections)} 
      />

      {showNewWorkoutSections && (
        <View>
          <Text style={styles.header}>Add New Workout:</Text>
          <TextInput
            style={styles.input}
            placeholder='Exercise Name'
            value={newWorkout.name}
            onChangeText={(text) => setNewWorkout({...newWorkout, name: text })}
          />
          <TextInput
            style={styles.input}
            placeholder='Sets'
            value={newWorkout.sets.toString()}
            keyboardType="numeric"
            onChangeText={(text) => setNewWorkout({...newWorkout, sets: parseInt(text) || 0 })}
          />
          <TextInput
            style={styles.input}
            placeholder="Reps"
            value={newWorkout.reps.toString()}
            keyboardType="numeric"
            onChangeText={(text) => setNewWorkout({ ...newWorkout, reps: text || 0 })}
          />
          <TextInput        
            style={styles.input}
            placeholder="Weight"
            value={newWorkout.weight}
            onChangeText={(text) => setNewWorkout({ ...newWorkout, weight: text })}
            keyboardType="numeric"
          />
          <Picker        
            style={styles.input}
            selectedValue={newWorkout.unit}
            onValueChange={(itemValue) => setNewWorkout({ ...newWorkout, unit: itemValue })}
          >
            <Picker.Item label="kg" value="kg" />
            <Picker.Item label="lb" value="lb" />
          </Picker>
          <Button title="Add Workout" onPress={addWorkout} />
        </View>
      )}
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
    marginTop: 5
  },
  workoutItem: {
    marginBottom: 16,        
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  workoutName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: 'blue',
    borderWidth: 1,
    marginBottom: 8,
    paddingHorizontal: 8,
  },
  leftAction: {
    flex: 1,
    backgroundColor: "green",
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 20,
  },
  rightAction: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 20,
  },
  actionText: {
    color: '#fff',
  },
  
})
export default WorkoutList;