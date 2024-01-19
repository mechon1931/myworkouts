import RenderExercise from '../features/exercises/RenderExercise';

const ExerciseInfoScreen = ({ route }) => {
  const { exercise } = route.params;

  return <RenderExercise exercise={ exercise } />
};

export default ExerciseInfoScreen;