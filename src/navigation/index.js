// In App.js in a new project

import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { CamerasList } from '../screens/CamerasList';
import { CameraScreen } from '../screens/Camera';

const Stack = createStackNavigator();

export const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CamerasList" component={CamerasList} />
      <Stack.Screen
        options={{ gestureEnabled: false }}
        name="CameraScreen"
        component={CameraScreen}
      />
    </Stack.Navigator>
  );
};
