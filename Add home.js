import { View, Text, TextInput, TouchableOpacity} from 'react-native'
import React from 'react'
import { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
let Homes = [];
const Register = () => {
    const[student, setstudentName] = useState('');
    const[studentId, setstudentId] = useState('');
    const navigation = useNavigation();
    const saveHome = async () => {
        let tempHome = [];
        Homes = [];
        let x = JSON.parse(await AsyncStorage.getItem('HOME'));
        tempHome = x;
       tempHome.map(item => { 
        Homes.push(item);
       });
       Homes.push({student: student, studentId: studentId});
       console.log(Homes);
        await AsyncStorage.setItem('HOME', JSON.stringify(Homes));
        navigation.goBack();
    };
  return (
    <View style={{flex:1}}>
      <TextInput
      placeholder='User name'
      value={student}
      onChangeText={txt => setstudentName(txt)}
      style={{
        width:'90%',
        height:50,
        alignItems:'center',
        marginTop:50,
        borderRadius:10,
        paddingLeft:20,
        backgroundColor:"white",
        left:20,
     }}>
     </TextInput>
     <TextInput
      placeholder='mobile number'
      keyboardType='numeric'
      value={studentId}
      onChangeText={txt => setstudentId(txt)}
      style={{
        width:'90%',
        height:50,
        alignItems:'center',
        marginTop:50,
        borderRadius:10,
        paddingLeft:20,
        backgroundColor:"white",
        left:20,
     }}>
     </TextInput>
     <TouchableOpacity onPress={() => saveHome()} style={{
        backgroundColor:"black",
        height:60,
        borderRadius:20,
        alignSelf:'center',
        width:'90%',
        marginTop:30,
        alignItems: "center",
        justifyContent: "center",
         }}>
         <Text style={{color:'white'}}>Save Data</Text>
         </TouchableOpacity>
    </View>
  )
}

export default Register