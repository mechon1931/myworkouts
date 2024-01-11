import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

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
