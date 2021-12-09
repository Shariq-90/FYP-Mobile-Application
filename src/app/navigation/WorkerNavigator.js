import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import WorkerDashboard from '../screens/Worker/WorkerDashboard';
import Splash from '../screens/Splash';
import CheckPolioSymptoms from '../screens/Worker/CheckPolioSymptoms';
import CheckChildGrowth from '../screens/Parent/CheckChildGrowth';
import EditProfileScreen from '../screens/Parent/EditProfileScreen';
import UnvaccinatedChildrens from '../screens/Worker/UnvaccinatedChildrens';
import axios from 'axios';
import baseUrl from '../baseUrl';

const Drawer = createDrawerNavigator();
const LogoutPrompt = () => {
    axios.delete(baseUrl + '/users/logout').then(function (response) {
        alert("You have been logged out")
    }).catch(function (error) {
        alert("Error: " + JSON.stringify(error))
    })
}
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
            {/* <Drawer.Screen name="Check Child Growth" component={CheckChildGrowth} options={{
                // headerShown: false,
                title: 'Check Child Growth',
                headerStyle: {
                    backgroundColor: '#001027',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                }
            }} /> */}
            <Drawer.Screen name="Un Vaccinated Children" component={UnvaccinatedChildrens} options={{
                // headerShown: false,
                title: 'UnVaccinated Children',
                headerStyle: {
                    backgroundColor: '#001027',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                }
            }} />
            <Drawer.Screen name="Logout" component={Splash}
                listeners={({ navigation, route }) => ({
                    tabPress: (e) => {
                        // Prevent default action
                        e.preventDefault();
                        LogoutPrompt();
                        // Do something with the `navigation` object
                        navigation.navigate('Splash');
                    },
                })}


            />
        </Drawer.Navigator>
    )
}

export default WorkerNavigator