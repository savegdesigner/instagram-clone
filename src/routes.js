import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Feed from './pages/Feed';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Feed" component={Feed} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
