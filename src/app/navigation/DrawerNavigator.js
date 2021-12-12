import * as React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem }
    from '@react-navigation/drawer';
import ParentDashboard from '../screens/Parent/ParentDashboard';
import EditProfileScreen from '../screens/Parent/EditProfileScreen';
import Splash from '../screens/Splash';
import VaccinationDashboard from '../screens/Parent/VaccinationDashboard';
import CheckChildGrowth from '../screens/Parent/CheckChildGrowth';
import CheckPolioSymptoms from '../screens/Worker/CheckPolioSymptoms';
import { StackActions } from '@react-navigation/native';
import { Alert, Text } from 'react-native';
import axios from 'axios';
import baseUrl from '../baseUrl';


const Drawer = createDrawerNavigator();
function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem label={() => <Text style={{ color: 'black' }}>Logout</Text>}
                style={{ backgroundColor: 'white' }}
                onPress={() => {
                    axios.delete(baseUrl + '/users/logout').
                    then(function(response){
                        Alert.alert("Logout","Logged out Successfully!")
                        props.navigation.navigate('Splash', { name: 'Omer' })
                    })
                    
                }}
            />
        </DrawerContentScrollView>
    );
}
function DrawerNavigator() {
    return (
        <Drawer.Navigator
            drawerContent={props => <CustomDrawerContent {...props} />}>
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
            {/* <Drawer.Screen name="Logout" component={Splash}
                // listeners={({ navigation, route }) => ({
                //     tabPress: (e) => {
                //         // Prevent default action
                //         e.preventDefault();
                //         navigation.dispatch(StackActions.popToTop());
                //         // Do something with the `navigation` object
                //         navigation.navigate('Splash');
                //     },
                // })}
                options={{
                    // headerShown: false,
                    title: 'Logout',
                    headerStyle: {
                        backgroundColor: '#001027',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    }
                }}

            /> */}
        </Drawer.Navigator>
    )
}

export default DrawerNavigator
