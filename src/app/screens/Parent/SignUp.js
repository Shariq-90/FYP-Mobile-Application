import React, {useState} from 'react';
import {
    ScrollView,
    Alert,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    View,
    Button,
    TouchableOpacity,
    Image
} from 'react-native';
import {styles} from '../../styles/style';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';
import baseUrl from '../../baseUrl';

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validateName(name) {
    const re = /^[a-zA-Z][a-zA-Z\s]+$/;
    return re.test(String(name));
}

function validateCnic(cnic) {
    const re = /^[0-9]{5}-[0-9]{7}-[0-9]$/i;
    return re.test(String(cnic));
}

function validatephoneNo(phoneNo) {
    const re = /^((\+92)?(0092)?(92)?(0)?)(3)([0-9]{9})$/i;
    return re.test(String(phoneNo));
}

function validateAddress(addr) {
    const re = /^[a-zA-Z][a-zA-Z0-9\s,.'-]{1,}$/;
    return re.test(String(addr));
}

function validateArea(area) {
    const re = /^[a-zA-Z][a-zA-Z0-9\s,.'-]{1,}$/;
    return re.test(String(area));
}

// function validatePassword(password) {
//     const re = /^(?=.[a-z])(?=.[A-Z])(?=.*[0-9])(?=.{7,})/;
//     return re.test(String(password));
// }

export default function SignUp({navigation, route}) {
    const [parentDetails, setParentDetails] = useState({
        email: null, name: null, cnic: null, password: null, addr: null, area: null,
        city: null, phoneNo: null
    })
    let {phoneNo, email, name, cnic, password, addr, area, city} = parentDetails;

    const ParentSignup = () => {
        if (email && name && cnic && password && addr && area && city
            && phoneNo
        ) {
            if (validateName(name)) {
                if (validateEmail(email)) {
                    if (validateCnic(cnic)) {
                        if (validatephoneNo(phoneNo)) {
                            // if (validatePassword(password)) {
                                if (validateAddress(addr)) {
                                    if (validateArea(area)) {
                                        if (validateArea(city)) {
                                            axios.post(baseUrl + "/users/create", {
                                                email: email,
                                                name: name,
                                                cnic: cnic,
                                                userType: "parent",
                                                password: password,
                                                address: {
                                                    addr: addr,
                                                    area: area,
                                                    city: city
                                                },
                                                phoneNo: phoneNo
                                            }).then(function (response) {
                                                Alert.alert("Sign Up", "User created successfully!");
                                            }).catch(function (error) {
                                                // handle error
                                                Alert.alert("Error", JSON.stringify(error.response.data.message));
                                            }).then(
                                                setParentDetails({
                                                    ...parentDetails,
                                                    email: null,
                                                    name: null,
                                                    cnic: null,
                                                    password: null,
                                                    addr: null,
                                                    area: null,
                                                    city: null,
                                                    phoneNo: null
                                                })
                                            )
                                        } else {
                                            Alert.alert("Area", "Please enter a valid City!(E.g Rawalpindi)");

                                        }

                                    } else {
                                        Alert.alert("Area", "Please enter a valid area!(E.g Raja Bazar)");
                                    }
                                } else {
                                    Alert.alert("Address", "Please enter a valid address!(E.g House 28....)");
                                }

                            // } else {
                            //     Alert.alert("Password", "Please enter a valid password!");
                            //
                            // }
                        } else {
                            Alert.alert("Phone Number", "Please enter a valid Phone Number!(E.g +92xxxxxxxxxx)");

                        }
                    } else {
                        Alert.alert("CNIC", "Please enter a valid CNIC!(E.g xxxxx-xxxxxxx-x)");

                    }
                } else {
                    Alert.alert("Email", "Please enter a valid email!(E.g xx@xxxx.com)");

                }

            } else {
                alert("Please enter a valid name!(E.g Shariq Ahmed)")
            }
        } else {
            Alert.alert("SignUp", "Please fill all the details!")
        }
    }
    return (
        <ScrollView>
            <View style={styles.container, {
                backgroundColor: 'white'
            }}>
                <View style={styles.formsFieldsSection}>
                    <View style={styles.inputView}>
                        <TextInput
                            style={[styles.TextInput,
                                {textAlign: 'left'}]
                            }
                            placeholder="Name"
                            placeholderTextColor="#00000087"
                            value={name}
                            name="name"
                            onChangeText={(e) => {
                                setParentDetails({
                                    ...parentDetails,
                                    name: e
                                })
                            }}
                        />
                    </View>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder="Email Address"
                            placeholderTextColor="#00000087"
                            keyboardType='email-address'
                            value={email}
                            name="email"
                            onChangeText={(e) => {
                                setParentDetails({
                                    ...parentDetails,
                                    email: e
                                })
                            }}
                        />
                    </View>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder="CNIC"
                            placeholderTextColor="#00000087"
                            keyboardType='number-pad'
                            value={cnic}
                            name="cnic"
                            onChangeText={(e) => {
                                setParentDetails({
                                    ...parentDetails,
                                    cnic: e
                                })
                            }}
                        />

                    </View>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder="Phone Number"
                            placeholderTextColor="#00000087"
                            keyboardType='number-pad'
                            value={phoneNo}
                            name="phonenumber"
                            onChangeText={(e) => {
                                setParentDetails({
                                    ...parentDetails,
                                    phoneNo: e
                                })
                            }}
                        />

                    </View>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder="Password"
                            placeholderTextColor="#00000087"
                            value={password}
                            name="password"
                            onChangeText={(e) => {
                                setParentDetails({
                                    ...parentDetails,
                                    password: e
                                })
                            }}
                            secureTextEntry={true}
                        />
                    </View>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder="Address"
                            value={addr}
                            name="addr"
                            onChangeText={(e) => {
                                setParentDetails({
                                    ...parentDetails,
                                    addr: e
                                })
                            }}
                            placeholderTextColor="#00000087"
                        />
                    </View>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder="Area"
                            placeholderTextColor="#00000087"
                            value={area}
                            name="area"
                            onChangeText={(e) => {
                                setParentDetails({
                                    ...parentDetails,
                                    area: e
                                })
                            }}
                        />
                    </View>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder="City"
                            placeholderTextColor="#00000087"
                            value={city}
                            name="city"
                            onChangeText={(e) => {
                                setParentDetails({
                                    ...parentDetails,
                                    city: e
                                })
                            }}
                        />
                    </View>
                </View>
                <View style={styles.button_section}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('SignUp');
                            ParentSignup();
                        }} style={styles.buttonSubmit}>
                        <Text style={styles.buttonTextSubmit}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}