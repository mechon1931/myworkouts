import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';

const Navbar = () => {
  return (
    <SafeAreaView>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Navbar</Text>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => console.log('Home pressed')}>
          <Text style={{ marginRight: 10 }}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Features pressed')}>
          <Text style={{ marginRight: 10 }}>Features</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Pricing pressed')}>
          <Text>Pricing</Text>
        </TouchableOpacity>
      </View>
    </View>
    </SafeAreaView>
  );
};

export default Navbar;
