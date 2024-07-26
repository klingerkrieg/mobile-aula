import {Text,View} from 'react-native';
import { useEffect, useState } from 'react';

export function ExampleComp (){

    useEffect(() => {
        console.log("eff de sair")
        return () => {
          alert("saindo");
          console.log("saindo");
        }
      })

  return <View>
            <Text>Componente de exemplo</Text>
          </View>
}
