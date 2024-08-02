import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {Text,View ,Button, Pressable, TextInput, Alert, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AntDesign } from '@expo/vector-icons';


export default function HomeScreen() {

  const navigation = useNavigation();

  function testeSalvar(){
    var func = async () => {
        try {
            await AsyncStorage.setItem("nome", "João");
        } catch (error) {
            console.log(error);
        }
    }
    func();
  }

  function testeRecuperar(){
    var func = async () => {
        try {
            let nomeSalvo = await AsyncStorage.getItem("nome");
            Alert.alert('Nome que está salvo',nomeSalvo?.toString());
        } catch (error) {
            console.log(error);
        }
    }
    func();
  }

  function testeCamera(){
    navigation.navigate('Camera');
  }

  return (
    <View>
      <Text>Home!!!</Text>

      <AntDesign name="meh" size={24} color="black" />

      <Image style={{width: 100, height: 100}}
          source={{uri:
            'https://facebook.github.io/react-native/img/tiny_logo.png'}}
       />

      <Button onPress={testeSalvar} title="Teste salvar"/>

      <Button onPress={testeRecuperar} title="Teste recuperar"/>

      <Button onPress={testeCamera} title="Camera"/>

    </View>
  );
}

