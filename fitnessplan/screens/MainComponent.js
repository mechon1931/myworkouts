import { useState } from 'react';
import { View } from 'react-native';

import { EXERCISES } from '../shared/exercises';
import DirectoryScreen from './DirectoryScreen';
import ExerciseInfoScreen from './ExerciseInfoScreen';

const Main = () => {
  const [exercises, setExercises] = useState(EXERCISES);
  const [selectedExerciseId, setSelectedExerciseId] = useState();

  return (
    <View style={{ flex: 1 }}>
      <DirectoryScreen 
        exercises={exercises} 
        onPress={(exerciseId) => setSelectedExerciseId(exerciseId)}  
      />

      <ExerciseInfoScreen
        exercise={
          exercises.filter(
            (exercise) => exercise.id === selectedExerciseId
          )[0]
        }
      />
    </View>
  );
};

export default Main;