import React from 'react';
import {Text, View, Button, TextInput} from 'react-native';
import { Title } from './src/components/Title';
import { Stepper } from './src/components/Stepper';
import { styles } from './src/views/Estilos';

export default function App() {

  const [resultado, onChangeResultado] = React.useState('');
  const [num1, onChangeNum1] = React.useState('');
  const [num2, onChangeNum2] = React.useState('');
  const [operacao, onChangeOperacao] = React.useState('');
  

  const enviar = (val) => {
    if (operacao == ''){
      onChangeNum1(num1+val);
      onChangeResultado(num1+val);
    } else {
      onChangeNum2(num2+val);
      onChangeResultado(num2+val);
    }
    
  }

  const calc = (val) => {
    onChangeResultado("");
    onChangeOperacao(val);
  }

  const acaoBotao = () => {
    alert("Acao definida em App.js");
  }


  /*return  <View style={{
                height: 200,
                flexDirection: 'row',
                flexWrap:'nowrap',
                justifyContent: 'space-around',
                alignItems:'center',
                backgroundColor:'gray',
              }
              }>
              <View style={{width: 150, height: 50, backgroundColor: 'powderblue'}} />
              <View style={{width: 150, height: 50, backgroundColor: 'skyblue'}} />
              <View style={{width: 150, height: 50, backgroundColor: 'steelblue'}} />
        </View>*/

  return <View>

            <Title size={30} >Título do APP</Title>

            <Title bg="gray" hasButton={true} onPressButton={acaoBotao} > Sub Título</Title>

            <Text style={styles.texto}>Hello World</Text>

        
            <TextInput value={resultado}
                onChangeText={onChangeResultado}
                style={{borderWidth:1}}
                />
            <Button title="7"  onPress={() => enviar('7')} />
            <Button title="8"  onPress={() => enviar('8')} />
            <Button title="9"  onPress={() => enviar('9')} />

            <Button title="+"  onPress={() => calc('+')} />

            <Button title="="  onPress={enviar} />


            <Stepper></Stepper> 


        </View>
}
