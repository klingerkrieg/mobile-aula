import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../views/HomeScreen';
import ProfileScreen from '../views/ProfileScreen';
import CameraScreen from '../views/CameraScreen';

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Profile" component={ProfileScreen} />
      <HomeStack.Screen name="Camera" component={CameraScreen} />
    </HomeStack.Navigator>
  );
};
export default HomeStackNavigator;

