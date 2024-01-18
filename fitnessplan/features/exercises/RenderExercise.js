import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

const RenderExercise = ({ exercise }) => {

  if(exercise) {
    return ( 
      <Card containerStyle={{ padding: 0 }}>
        <Card.Image source={exercise.image}>
          <View style={{ justifyContent: 'center', flex: 1 }}>
            <Text 
              style={{
                color: 'white',
                textAlign: 'center',
                fontSize: 20
              }}
            >
              {exercise.name}
            </Text>
          </View>
        </Card.Image>

        <Text style={{ margin: 20 }}>{exercise.description}</Text>
      </Card>
    );
  };

  return <View />

};

export default RenderExercise;