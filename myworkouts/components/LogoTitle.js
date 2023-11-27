import * as React from 'react';
import { Image } from 'react-native';


function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require('../assets/favicon.png')}
    />
  );
};

export default LogoTitle;