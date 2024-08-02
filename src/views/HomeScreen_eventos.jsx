import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {Text,View,Button} from 'react-native';
import { ExampleComp } from './ExampleComp';

export default function HomeScreen() {

  const [valor2, setValor2] = useState(0);


  const alterarValor2 = () => {
    setValor2(valor2+1);
    //alert(valor2);
  }

  useEffect(() => {
    alert(valor2);
  }, [valor2])

  useEffect(() => {
    alert("mounted")
  })

  const [exibe, setExibe] = useState(true);
  function desmonta(){
    setExibe(false);
  }
  
    return <View onLayout={(evt) => console.log('o layout está pronto.')}>
              <Button onPress={() => alterarValor2() } title="Alterar valor 2"></Button>
              <Text>{valor2}</Text>


              {exibe &&
                <ExampleComp></ExampleComp>
              }
              <Button onPress={() => desmonta() } title="Desmonta"></Button>

          </View>
}

