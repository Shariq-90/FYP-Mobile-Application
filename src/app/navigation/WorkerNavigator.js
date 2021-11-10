import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import WorkerDashboard from '../screens/Worker/WorkerDashboard';
import Splash from '../screens/Splash';
import CheckPolioSymptoms from '../screens/Worker/CheckPolioSymptoms';
import CheckChildGrowth from '../screens/Parent/CheckChildGrowth';
import EditProfileScreen from '../screens/Parent/EditProfileScreen';
const Drawer = createDrawerNavigator();
function WorkerNavigator() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Children Information" component={WorkerDashboard} options={{
                // headerShown: false,
                title: 'Children Information',
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
            <Drawer.Screen name="Edit Profile" component={EditProfileScreen} options={{
                // headerShown: false,
                title: 'Edit Profile',
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
            <Drawer.Screen name="Logout" component={Splash} />
        </Drawer.Navigator>
    )
}

export default WorkerNavigator