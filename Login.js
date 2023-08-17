import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect, useRef } from "react";
import { ImageBackground, View, Image, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Alert } from "react-native";
const image = require('./google1/cup.png');
import LinearGradient from "react-native-linear-gradient";
const Login = (Props) => {
    const ref_password = useRef()
    const [passwordVisibility, setpaswordVisibality] = useState(false);
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [checkVaildEmail, setcheckVaildEmail] = useState();
    const [Homelist, setHomelist] = useState();
    const [check, setCheck] = useState("");
    const [seePassword, setseePassword] = useState();
    const id = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    const pass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=]).{8,}$/;
    const navigation = useNavigation()
    const saveEmailPass = async () => {
        try {
            await AsyncStorage.setItem('Email', Email)
            await AsyncStorage.setItem('Password', Password)
            navigation.navigate('Home');
        } catch (e) {
            console.log(e);
        }
    };
    const tide = () => {
        if (id.test(Email) != true && Email.length > id) {
            setcheckVaildEmail("Enter valid email address");
        }
        else if (Email.length < 0) {
            setcheckVaildEmail('')
        }

        else {
            setcheckVaildEmail('');
        }
    }
    const type = () => {
        if (Password.length < 6) {
            setseePassword('Enter valid password');
        } else {
            setseePassword("");
        }
    }
    // const submit = () => {
    //     if (id.test(Email) !== true) {
    //         setcheckVaildEmail("Enter valid email address");
    //     } else if (pass.test(Password) === false) {
    //         setseePassword('Enter valid password');
    //     }
    //     if (id.test(Email) == true && pass.test(Password) == true) {
    //         getData()
    //     }
    //     // else {
    //     //     return saveEmailPass();
    //     // }
    // }
    const enter = () => {
        if (id.test(Email) === true && Email.length > 1) {
            ref_password.current.focus()
        }

        else {
            setcheckVaildEmail("Enter vaild email adderss");
        }
    }
    // let temd = []
    const getData = async () => {
        // const Homes = await AsyncStorage.getItem('MANISH');
        // const Password = await AsyncStorage.getItem('Password');
        setHomelist(JSON.parse(await AsyncStorage.getItem('MANISH')))
        // console.log(JSON.parse(Homes))
        // console.log(Homelist);
        // temd = Homelist;
       
        Homelist?.some((item, password) => {
           `email type ${item} in a ${password} password.`
            // console.log(item?.email, 'email');   
            // console.log(item?.password, 'password');
            
            if (Email !== item?.email) {
                setcheckVaildEmail("Enter vaild email adderss")
            }
            else if (Password !== item?.password) {
                setseePassword('Enter valid password');
            }
             else 
            //  if (Email == item?.email && Password == item?.password) 
             {
                saveEmailPass();
               console.log("Successfull")
           }
          });
        }
    return (
        <View style={styles.container}>
            <ImageBackground source={image}>
                <ScrollView>

                    <View style={{
                        marginTop: 50,
                        paddingLeft: 130, position: 'absolute'
                    }}>
                        <Image

                            source={require('./google1/logo.png')}
                        />
                    </View>
                    <View style={styles.kartik}>
                        <Text style={styles.my}>Login</Text>
                        <Text style={styles.have}>Enter your login details to {'\n'}     access your account</Text>
                    </View>

                    <View style={{ padding: 10 }}>


                        <TextInput
                            value={Email}
                            onChangeText={type => {
                                setEmail(type);
                                tide(type);

                            }}
                            style={styles.had}
                            placeholder="Email"
                            placeholderTextColor="black"
                            keyboardType="email-address"
                            onSubmitEditing={() => enter()}


                        />
                        {checkVaildEmail ? <Text style={styles.error1}>{checkVaildEmail}</Text> : null}
                        <View style={{ padding: 10 }}>
                            <TextInput
                                value={Password}
                                onChangeText={mahi => {
                                    setPassword(mahi);
                                    type();
                                }}
                                style={styles.has}
                                placeholder="Password"
                                placeholderTextColor="black"
                                autoCorrect={false}
                                secureTextEntry={!passwordVisibility}
                                ref={ref_password}
                            />
                            <View>{seePassword ? <Text style={styles.error2}>{seePassword}</Text> : null}</View>
                            <View>
                                <TouchableOpacity onPress={() => { setpaswordVisibality(!passwordVisibility) }}>
                                    {passwordVisibility == true ? (<Image style={styles.eye} source={require('./google1/eye.png')}
                                    />) : (<Image style={styles.eye} source={require('./google1/hiddeneye.png')}
                                    />)}</TouchableOpacity></View>

                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity>
                                <View style={{ marginBottom: 20, }}></View>
                                <Text style={styles.this}>Forgot password?</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity onPress={() => getData()} style={styles.loginbottom}
                        >
                            <LinearGradient colors={['#D9DD03', '#D53402']}>
                                <Text style={styles.text}>LOG IN</Text>
                            </LinearGradient>
                        </TouchableOpacity>

                    </View>

                    <View><Text style={styles.that}>Don't have a account? </Text></View>
                    <TouchableOpacity>
                        <View>
                            <Text onPress={() => Props.navigation.navigate('Signup')} style={styles.ok}>create account</Text>
                        </View>
                    </TouchableOpacity>

                </ScrollView>
            </ImageBackground>
        </View>

    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    kartik: {
        width: "100%",
        height: 150,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 180,

    },
    my: {

        borderRadius: 25,
        height: 80,
        alignItems: "center",
        justifyContent: "center",
        color: '#D65D02',
        fontWeight: 'bold',
        fontSize: 30,
        marginTop: 150,
        paddingTop: 20,
    },

    have: {

        height: 80,
        alignItems: "center",
        justifyContent: "center",
        color: 'black',
        fontSize: 11,
        marginBottom: 120,

    },
    had: {
        marginHorizontal: 30,
        backgroundColor: 'white',
        fontSize: 14,
        height: 80,
        borderRadius: 10,
        width: "86%",
        paddingLeft: 40,
        paddingRight: 110,
        textShadowRadius: 10,
        paddingTop: 20,
    },
    has: {
        backgroundColor: 'white',
        marginHorizontal: 20,
        fontSize: 14,
        height: 80,
        borderRadius: 10,
        width: "90%",
        paddingLeft: 40,
        paddingRight: 110,
        textShadowRadius: 10,
        paddingTop: 20,
        marginTop: 3,
    },
    this: {
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        fontSize: 15,
        color: '#D65D02',

    },
    loginbottom: {
        marginHorizontal: 20,
        fontSize: 30,
        height: 100,
        borderRadius: 70,
        width: "100%",
        paddingLeft: 20,
        paddingRight: 60,
        textShadowRadius: 20,
        paddingTop: 40,
    },
    that: {
        color: '#003CB2',
        paddingLeft: 70,
        paddingRight: 50,
        marginTop: 50,
    },
    ok: {
        paddingLeft: 230,
        paddingRight: 50,
        paddingBottom: 40,
        marginTop: -22,
        color: '#205072'
    },
    text: {
        flex: 0,
        height: 50,
        paddingLeft: 130,
        marginTop: 30,
        color: 'white',
        textShadowRadius: 30,
        fontSize: 15,

    },
    error1: {
        paddingRight: 50,
        paddingLeft: 40,
        color: "red",

    },
    error2: {
        paddingRight: 50,
        paddingLeft: 40,
        color: "red",
        position: "absolute"

    },
    eye: {
        position: "absolute",
        height: 35,
        width: 35,
        left: 300,
        top: -55,
    },

})

export default Login;