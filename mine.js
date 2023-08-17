import { useState, useEffect, useRef } from "react";
import { ImageBackground, View, Image, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Alert } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
let Homes = [];

const image = require('./google1/cup.png');

const Signup = (Props) => {
    const ref_password = useRef()
    const [frameVisibility, setframeVisibility] = useState(false);
    const [passwordVisibility, setpaswordVisibality] = useState(false);
    const [repasswordVisibility, setrepaswordVisibality] = useState(false);
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [RePassword, setRePassword] = useState("")
    const [seePassword, setseePassword] = useState();
    const [seeRePassword, setseeRePassword] = useState();
    const [checkVaildEmail, setcheckVaildEmail] = useState();
    const navigation = useNavigation()
    const id = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    const pass=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=]).{8,}$/;
    const Repass=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=]).{8,}$/;
    const tide = () => {
        if (id.test(Email) === false && Email.length>id) {
            setcheckVaildEmail("Enter valid email address");
        }
        else if (Email.length < 0){
            setcheckVaildEmail('')
        }
        else {
            setcheckVaildEmail('');
        }
    }
    const y = () =>{
        if (pass.test(Password) === false && Password.length>pass){
       }else if (Password.length < 0){
            setseePassword('')
        }
       else {
            setseePassword('');
        }
    }
    const k = () =>{
         if (Repass.test(RePassword) === false && RePassword.length>Repass){
        }else if (RePassword.length < 0){
            setseeRePassword('')
        }
       else {
            setseeRePassword('')
    }}
    const submit = () => {
        if (id.test(Email) !== true) {
            setcheckVaildEmail("Enter valid email address");
        } else if (pass.test(Password) === false) {
            setseePassword('Enter valid password');
        }
        else if (
            Password != RePassword){
            Alert.alert("password and re-password does not match")
        }
        else{
            return saveData();
        }
        // setTimeout(()=> {
        //     if (id.test(Email) === true && Password == RePassword){
        //         saveData();
        //     }
        // },1000);
        
    }
    const enter = () => {
        if (id.test(Email) === true && Email.length > 1) {
            ref_password.current.focus()
        }
        else {
            setcheckVaildEmail("Enter vaild email adderss");
        }
    }
    const saveData = async() => {
       
        let tempHome = [];
        Homes = [];
        let x = JSON.parse(await AsyncStorage.getItem('MANISH'));
        tempHome = x;
       tempHome?.map(item => { 
        Homes.push(item);
       });
       Homes.push({email: Email, password: Password});
       console.log(Homes);
        await AsyncStorage.setItem('MANISH', JSON.stringify(Homes));
        // navigation.goBack();
        console.log(":yes");
        navigation.navigate('Login');
     }
    return (
        <SafeAreaView style={styles.container}>
        <ScrollView>
            <ImageBackground source={image} resizeMode="cover" style={styles.imageStl}>
                <View style={styles.mine}>
                    {<Image
                        style={styles.image}
                        source={require('./google1/logo.png')}
                    />}
                </View><View>
                    <Text style={styles.logo}>Sign Up</Text>
                    <Text style={styles.text}>Enter your details to {'\n'}create your account</Text>
                </View>
                <View style={{ padding: 10 }}>
                    <TextInput
                        value={Email}
                        onChangeText={type => {
                            setEmail(type);
                            tide(type);}}

                        placeholder="Email"
                        placeholderTextColor="black"
                        keyboardType="email-address"
                        style={styles.email}
                        onSubmitEditing={() => enter()}
                    />
                     {checkVaildEmail ? <Text style={styles.error1}>{checkVaildEmail}</Text> : null}
                     <View style={{padding:0}}>
                    <TextInput
                         value={Password}
                         onChangeText={mahi => {
                            setPassword(mahi);
                            y();}}
                            ref={ref_password}
                        placeholder="Password"
                        placeholderTextColor="black"
                        style={styles.password}
                        secureTextEntry={!passwordVisibility}
                    /></View>
                    <View>{seePassword ? <Text style={styles.error2}>{seePassword}</Text> : null}</View>
                    <View>
                        <TouchableOpacity onPress={() => { setpaswordVisibality(!passwordVisibility) }}>
                            {passwordVisibility == true ? (<Image style={styles.eye} source={require('./google1/eye.png')}
                            />) : (<Image style={styles.eye} source={require('./google1/hiddeneye.png')}
                            />)}</TouchableOpacity></View>

                    <View><View
                    style={{padding: 4}}></View>
                        <TextInput
                            value={RePassword}
                            onChangeText={man => {
                                setRePassword(man);
                               k(); }}
                            placeholder="Re-Enter Password"
                            placeholderTextColor="black"
                            style={styles.Repassword}
                            secureTextEntry={!repasswordVisibility}
                        />
                        <View>{seeRePassword ? <Text style={styles.error3}>{seeRePassword}</Text> : null}</View>

                        <View>
                            <TouchableOpacity onPress={() => { setrepaswordVisibality(!repasswordVisibility) }}>
                                {repasswordVisibility == true ? (<Image style={styles.eye} source={require('./google1/eye.png')}
                                />) : (<Image style={styles.eye} source={require('./google1/hiddeneye.png')}
                                />)}</TouchableOpacity></View></View>
                </View>
                <TouchableOpacity onPress={() => setframeVisibility(!frameVisibility)} style={styles.image1} >
                    <Image source={frameVisibility == true ? require('./google1/frame2.png') : require('./google1/frame1.png')} style={{ width: 23, height: 23 }} />
                </TouchableOpacity>
                <View>
                    <Text style={styles.red}>I agree</Text>
                    <Text style={styles.a}>Terms & conditions</Text>
                    <Text style={styles.b}>and</Text>
                    <Text style={styles.c}>Privacy Policy</Text>
                </View>
                <TouchableOpacity onPress={() => submit()} style={styles.button}>
                    <LinearGradient colors={['#D9DD03', '#D53402']}>
                        <Text style={styles.time}>SIGN UP</Text>
                    </LinearGradient>

                </TouchableOpacity>
                <View>
                    <Text style={styles.I}>Already have an account?</Text>
                    <TouchableOpacity onPress={() => Props.navigation.navigate('Login')} >
                        <Text style={styles.l}>Log in</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </ScrollView>
        </SafeAreaView>

    );
};

const styles = StyleSheet.create({
    container: {
        flex:0,
    },
    imageStl: {
        flex:0,
        width: '100%',
        height: 800,
    },
    image: {
        flex:0,
        marginTop: 30,
    },
    mine: {
        
        paddingLeft: 130,
    },
    logo: {
        fontSize: 40,
        color: "#D65D02",
        marginTop: 8,
        paddingLeft: 130,
    },
    text: {
        marginTop: 10,
        paddingLeft: 134,
        fontSize: 14,
        color: "#000000"
    },
    email: {
        marginTop: 9,
        paddingLeft: 25,
        marginHorizontal: 30,
        backgroundColor: "white",
        height: 80,
        borderRadius: 10,

    },
    password: {
        marginTop: 22,
        paddingLeft: 24,
        marginHorizontal: 30,
        backgroundColor: "white",
        height: 80,
        borderRadius: 10,

    },
    Repassword: {
        marginTop: 14,
        paddingLeft: 23,
        marginHorizontal: 30,
        backgroundColor: "white",
        height: 80,
        borderRadius: 10,
    },
    image1: {
        height: 28,
        width: 28,
        left: 20,
        borderRadius: 5,
        paddingTop: 15,
    },

    red: {
        color: "#D65D02",
        left: 60,
        marginTop: -15,
    },
    a: {
        color: "#000000",
        left: 112,
        marginTop: -21,

    },
    b: {
        color: "#D65D02",
        left: 252,
        marginTop: -21,
    },
    c: {
        color: "#000000",
        left: 285,
        marginTop: -21,
    },
    button: {
        marginTop: 15,
        paddingLeft: 20,
        marginHorizontal: 30,
        left: -12,
    },
    time: {
        flex: 0,
        height: 50,
        paddingLeft: 130,
        marginTop: 30,
        color: 'white',
        textShadowRadius: 30,
        fontSize: 18,
        alignContent: "center",
        justifyContent: "center",
    },
    eye: {
        position: "absolute",
        height: 35,
        width: 35,
        left: 300,
        top: -55,
    },
    I: {
        left: 80,
        marginTop: 10,
        color: "#003CB2"
    },
    l: {
        left: 260,
        marginTop: -21,
        color: "#205072"
    },
    error1:{
        paddingRight: 50,
        marginTop:97,
        paddingLeft: 40,
        color: "red",
        position:"absolute"
         },

    error2:{
        paddingRight: 50,
        paddingLeft: 40,
        color: "red",
        position: "absolute"

    },
    error3:{
        paddingRight: 50,
        paddingLeft: 40,
        color: "red",
        position: "absolute"

    }


})
export default Signup;

