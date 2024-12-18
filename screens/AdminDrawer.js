import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ManageVideos from './ManageVideos';
const Drawer = createDrawerNavigator();

const AdminDrawer = () => {
  return (
    <Drawer.Navigator initialRouteName="ManageVideos">
      <Drawer.Screen name="ManageVideos" component={ManageVideos} />
    </Drawer.Navigator>
  );
};

export default AdminDrawer;
