import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ParentDashboard from '../screens/Parent/ParentDashboard';
import EditProfileScreen from '../screens/Parent/EditProfileScreen';
import Splash from '../screens/Splash';
import VaccinationDashboard from '../screens/Parent/VaccinationDashboard';
import CheckChildGrowth from '../screens/Parent/CheckChildGrowth';
const Drawer = createDrawerNavigator();
function DrawerNavigator() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={ParentDashboard} />
            <Drawer.Screen name="My Profile" component={EditProfileScreen} />
            <Drawer.Screen name="Vaccination Details" component={VaccinationDashboard} />
            <Drawer.Screen name="Child Growth" component={CheckChildGrowth} />
            <Drawer.Screen name="Logout" component={Splash} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator
