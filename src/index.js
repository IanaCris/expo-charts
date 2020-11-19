import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import GoalsPerformance from './pages/GoalsPerformance';

const { Navigator, Screen } = createStackNavigator();

function Entry() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="home" component={Home} />
        <Screen name="goals-performance" component={GoalsPerformance} />
      </Navigator>
    </NavigationContainer>
  );
}

export default Entry;