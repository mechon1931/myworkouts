import { useState } from 'react';
import { FlatList } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';

import { EXERCISES } from '../shared/exercises';

const DirectoryScreen = ({ navigation }) => { 
  const [exercises, setExercises] = useState(EXERCISES);

  const renderDirectoryItem = ({ item: exercise }) => {
    return(
      <ListItem 
        onPress={() => 
          navigation.navigate('ExerciseInfo', { exercise })
        }
        >
        <Avatar 
          source={exercise.image}
          rounded
        />
        <ListItem.Content>
          <ListItem.Title>{exercise.name}</ListItem.Title>
          <ListItem.Subtitle>
            {exercise.description}
          </ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    );
  };

  return(
    <FlatList
      data={exercises}
      renderItem={renderDirectoryItem}
      keyExtractor={(item) => item.id.toString()}
    />
  )
};

export default DirectoryScreen;