import { View, Text } from 'react-native'
import React, {useEffect} from 'react'
import { useNavigation } from '@react-navigation/native';
import Login from './Login';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Manish = () => { 
    const navigation = useNavigation();
   
    useEffect(() => {
        setTimeout(() => {
          checkLogin()
        },1000);}, [] );
     const checkLogin=async()=>{
        const Email = await AsyncStorage.getItem('Email');
    const Password = await AsyncStorage.getItem('Password');
    if (Email !== null, Password !== null){
        navigation.navigate("Home")
     }
     else{
        navigation.navigate('Login')
     }
    };   
         
  return (
    <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
      <Text style={{fontSize:50, color:"red"}}>Manish</Text>
    </View>
  )
}

export default Manish