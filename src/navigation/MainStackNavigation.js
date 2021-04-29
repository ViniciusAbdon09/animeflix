import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../Screens/Home';
import Results from '../Screens/Results';
import Details from '../Screens/Details';

const Stack = createStackNavigator();

const MainStackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Results" component={Results} />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{title: 'DETAILS'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const screenOptions = {
  title: 'ANIMEFLIX',
  headerTitleAlign: 'center',
  headerTitleStyle: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  headerStyle: {
    backgroundColor: '#212121',
  },
  headerTintColor: '#ae0027',
};

export default MainStackNavigation;
