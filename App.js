import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AdminDrawer from './screens/AdminDrawer';
import FirstScreen from './screens/FirstScreen';
import GradeLevelScreen from './screens/GradeLevelScreen';
import HomeScreen from './screens/HomeScreen';
import ReadingScreen from './screens/ReadingScreen';
import VideoScreen from './screens/VideoScreen';
import VideoListScreen from './screens/VideoListScreen';
import VideoPlayerScreen from './screens/VideoPlayerScreen';
// Stack Navigation for FirstScreen and GradeLevelScreen
const Stack = createNativeStackNavigator();

// Drawer Navigation for HomeScreen, ReadingScreen, and VideoScreen
const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="VideoList">
        <Stack.Screen options={{ headerShown: false }}  name="FirstScreen" component={FirstScreen} />
        <Stack.Screen options={{ headerShown: false }}  name="GradeLevel" component={GradeLevelScreen} />
        <Stack.Screen options={{ headerShown: false }}  name="Drawer" component={DrawerNavigation} />
        <Stack.Screen options={{ headerShown: false }}  name="Admin" component={AdminDrawer} />
        <Stack.Screen name="VideoList" component={VideoListScreen} />
        <Stack.Screen name="VideoPlayer" component={VideoPlayerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Drawer Navigation
const DrawerNavigation = () => {
  return (
    <Drawer.Navigator initialRouteName="HomeScreen">
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
      <Drawer.Screen name="ReadingScreen" component={ReadingScreen} />
      <Drawer.Screen name="VideoScreen" component={VideoScreen} />
    </Drawer.Navigator>
  );
};

export default App;
