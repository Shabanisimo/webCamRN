import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { MainStack } from './src/navigation';
import { CamerasProvider } from './src/providers/CamerasProvider';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <CamerasProvider>
          <MainStack />
        </CamerasProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
