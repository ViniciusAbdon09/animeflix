import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../Screens/HomeScreen';
import ResultsScreen from '../Screens/ResultsScreen';
import DetailsScreen from '../Screens/DetailsScreen';

const Stack = createStackNavigator();

const MainStackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Results" component={ResultsScreen} />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
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
