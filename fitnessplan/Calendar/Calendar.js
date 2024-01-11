import React, {useState} from 'react';
import { Agenda} from 'react-native-calendars';
import { View, Text, StyleSheet } from 'react-native';


const Calendars = () => {
  const [selected, setSelected] = useState('');

  const data = {
    
    // Add more data as needed
  };

  const renderItem = (item) => (
    <View style={styles.item}>
      <Text>{item.text}</Text>
    </View>
  );

  const renderDay = (day, item) => (
    <View style={styles.day}>
      <Text>{day.day}</Text>
    </View>
  );

  const renderEmptyDate = () => (
    <View style={styles.emptyDate}>
      <Text>No events for this date</Text>
    </View>
  );

  return(
            
      <Agenda
        selected={selected}
        items={data}
        renderItem={renderItem}
        renderEmptyData={renderEmptyDate}
        renderDay={renderDay}
        theme={{
          selectedDayBackgroundColor: 'orange',
          dotColor: 'orange',
          selectedDotColor: 'white',
        }}
        onDayPress={(day) => {
          setSelected(day.dateString);
        }}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'lightgray',
    margin: 5,
    padding: 10,
  },
  day: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  emptyDate: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'lightgray',
    margin: 5,
    padding: 10,
  },
});


export default Calendars;