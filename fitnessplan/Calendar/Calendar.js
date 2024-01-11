import React, {useState} from 'react';
import { Agenda} from 'react-native-calendars';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const Calendars = () => {
  const [selected, setSelected] = useState('');

  const renderItem = (item) => (
    <View>
      <Text>{item.text}</Text>
    </View>
  );

  const renderDay = (day, item) => (
    <View>
      <Text>{day.day}</Text>
    </View>
  );

  const renderEmptyDate = () => (
    <View>
      <Text>No events for this date</Text>
    </View>
  );

  const customHeader = ({ year, month }) => {
    <View style={styles.header}>
      <TouchableOpacity onPress={() => console.log('Go Back')}>
        <Text>{'<'} Back</Text>
      </TouchableOpacity>
      <Text>{`${year}-${month}`}</Text>
      <TouchableOpacity onPress={() => console.log('Go Forward')}>
        <Text>Forward {'>'}</Text>
      </TouchableOpacity>
    </View>
  };

  return(
    <Agenda
      items={{
        '2024-01-11': [{text: 'Item 1'}],
        '2024-01-12': [],
        '2024-01-13': [{ text: 'Item 2' }]
      }}
      selected={selected}
      renderItem={renderItem}
      renderEmptyData={renderEmptyDate}
      renderDay={renderDay}
      theme={{
        selectedDayBackgroundColor: 'orange',
        dotColor: 'orange',
        selectedDotColor: 'white',
      }}
      ListHeaderComponent={customHeader}
      onDayPress={(day) => {
        setSelected(day.dateString);
      }}
      >
      
    </Agenda>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    backgroundColor: 'lightgray',
  },
});


export default Calendars;