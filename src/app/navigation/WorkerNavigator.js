import React from 'react'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem }
    from '@react-navigation/drawer';
import WorkerDashboard from '../screens/Worker/WorkerDashboard';
import Splash from '../screens/Splash';
import CheckPolioSymptoms from '../screens/Worker/CheckPolioSymptoms';
import CheckChildGrowth from '../screens/Parent/CheckChildGrowth';
import EditProfileScreen from '../screens/Parent/EditProfileScreen';
import UnvaccinatedChildrens from '../screens/Worker/UnvaccinatedChildrens';
import axios from 'axios';
import baseUrl from '../baseUrl';
import { Text } from 'react-native';


const Drawer = createDrawerNavigator();
function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem label={() => <Text style={{ color: 'black' }}>Logout</Text>}
                style={{ backgroundColor: 'white' }}
                onPress={() => {
                    axios.delete(baseUrl + '/users/logout').
                        then(function (response) {
                            Alert.alert("Logout", "Logged out Successfully!")
                            props.navigation.navigate('Splash', { name: 'Omer' })
                        })

                }}
            />
        </DrawerContentScrollView>
    );
}
function WorkerNavigator() {
    return (
        <Drawer.Navigator
            drawerContent={props => <CustomDrawerContent {...props} />}>
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
            <Drawer.Screen name="Un Vaccinated Children" component={UnvaccinatedChildrens} options={{
                // headerShown: false,
                title: 'Unvaccinated Children',
                headerStyle: {
                    backgroundColor: '#001027',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                }
            }} />
        </Drawer.Navigator>
    )
}

export default WorkerNavigator