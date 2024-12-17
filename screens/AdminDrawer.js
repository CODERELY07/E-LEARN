import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ManageVideos from './ManageVideos';
import DisplayMedia from './DisplayMedia';
const Drawer = createDrawerNavigator();

const AdminDrawer = () => {
  return (
    <Drawer.Navigator initialRouteName="ManageVideos">
      <Drawer.Screen name="ManageVideos" component={ManageVideos} />
      <Drawer.Screen name="DisplayMedia" component={DisplayMedia} />
    </Drawer.Navigator>
  );
};

export default AdminDrawer;
