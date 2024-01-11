import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Navigation/Navbar';
import Calendars from './Calendar/Calendar';

export default function App() {
  return (
    <SafeAreaProvider>
      <Navbar />
      <Calendars />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
