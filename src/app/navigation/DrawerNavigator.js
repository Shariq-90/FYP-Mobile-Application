import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ParentDashboard from '../screens/Parent/ParentDashboard';
import EditProfileScreen from '../screens/Parent/EditProfileScreen';
import Splash from '../screens/Splash';
import VaccinationDashboard from '../screens/Parent/VaccinationDashboard';
import CheckChildGrowth from '../screens/Parent/CheckChildGrowth';
import CheckPolioSymptoms from '../screens/Worker/CheckPolioSymptoms';
const Drawer = createDrawerNavigator();
function DrawerNavigator() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Children Information" component={ParentDashboard} options={{
                title: 'Children Information',
                headerStyle: {
                    backgroundColor: '#001027',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                }
            }} />
            <Drawer.Screen name="My Profile" component={EditProfileScreen} options={{
                title: 'My Profile',
                headerStyle: {
                    backgroundColor: '#001027',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                }
            }} />
            <Drawer.Screen name="Vaccination Details" component={VaccinationDashboard} options={{
                title: 'Vaccination Details',
                headerStyle: {
                    backgroundColor: '#001027',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                }
            }} />
            <Drawer.Screen name="Check Child Growth" component={CheckChildGrowth} options={{
                // headerShown: false,
                title: 'Check Child Growth',
                headerStyle: {
                    backgroundColor: '#001027',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                }
            }} />
            <Drawer.Screen name="Polio Symptoms" component={CheckPolioSymptoms} options={{
                // headerShown: false,
                title: 'Polio Symptoms',
                headerStyle: {
                    backgroundColor: '#001027',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                }
            }} />
            <Drawer.Screen name="Logout" component={Splash} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator
