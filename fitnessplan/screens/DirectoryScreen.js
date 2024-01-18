import { FlatList } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';

const DirectoryScreen = (props) => { 
  
  const renderDirectoryItem = ({ item: exercise }) => {
    return(
      <ListItem onPress={() => props.onPress(exercise.id)}>
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
      data={props.exercises}
      renderItem={renderDirectoryItem}
      keyExtractor={(item) => item.id.toString()}
    />
  )
};

export default DirectoryScreen;