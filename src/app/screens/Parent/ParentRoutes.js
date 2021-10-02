import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ParentDashboard from './ParentDashboard';
import ParentProfile from './ParentProfile';

const Drawer = createDrawerNavigator();

export default function ParentRoutes() {
    return (
        <Drawer.Navigator initialRouteName="ParentDashboard">
            <Drawer.Screen name="ParentDashboard" component={ParentDashboard} />
            <Drawer.Screen name="Parent Profile" component={ParentProfile} />
        </Drawer.Navigator>
    );
}