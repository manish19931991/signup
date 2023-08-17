import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';
// import { TouchableOpacity } from 'react-native-gesture-handler';

const Home = (props) => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [Homelist, setHomelist] = useState([]);
  useEffect(() => {
    getData()
  }, [isFocused]);
  const getData = async () => {
    const Homes = await AsyncStorage.getItem('HOME');
    // const Password = await AsyncStorage.getItem('Password');
    setHomelist(JSON.parse(Homes))
    // console.log(JSON.parse(Homes))

  };
  const DeleteHome = async index => {
    const tempdata = Homelist;
    const selecteddata = tempdata.filter((item, ind) => {
      return ind != index;
    });
    setHomelist(selecteddata);
    await AsyncStorage.setItem('HOME', JSON.stringify(selecteddata));
  };
  const Logout = async()=>{
    await AsyncStorage.setItem('Email','');
   await AsyncStorage.setItem('Password','');
    navigation.navigate('Login');
  } 

  return (
    <View style={{ alignSelf: 'center' }}>
      <FlatList data={Homelist} renderItem={({ item, index }) => {
        return (
          <View
            style={{
              width: '90%',
              height: 50,
              borderWidth: 1,
              alignSelf: 'center',
              marginTop: 10,
              borderRadius: 10,
              flexDirection: "row",
              alignItems: "center",
              paddingLeft: 10,
              justifyContent: "space-between"
            }}>
            <TouchableOpacity style={{ flexDirection: 'row' }}  onPress={() => { navigation.navigate('Chats') }} >
              <Text>{item.student.toUpperCase()}</Text>
              <Text style={{ marginLeft: 80, }}>{item.studentId}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
              backgroundColor: 'yellow',
              height: 40,
              justifyContent: 'center',
              alignContent: 'center',
              borderRadius: 10,
              marginRight: 20,
              paddingLeft: 10,
              paddingRight: 10,
            }} onPress={() => {
              DeleteHome(index)
            }}>
              <Text>Delete</Text>

            </TouchableOpacity>
          </View>
        )
      }}>
      </FlatList>
      <TouchableOpacity onPress={() => { navigation.navigate('Register') }} style={styles.man}>
        <Text style={{ color: "black" }}>Add New User</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { Logout() }} style={styles.mahi}>
        <Text style={{ color: "black" }}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  man: {
    width: 200,
    height: 50,
    borderRadius: 30,
    backgroundColor: "green",
    position:'absolute',
    bottom: 20,
    right: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
  },
  mahi:{
    width: 100,
    height: 50,
    borderRadius: 30,
    backgroundColor: "green",
    position:'absolute',
    bottom: 20,
    left:20,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default Home