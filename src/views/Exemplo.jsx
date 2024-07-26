import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import MaskInput, { Masks } from 'react-native-mask-input';


export default function App() {

  const [cep, setCep] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [complemento, setComplemento] = useState("");
  const [bairro, setbairro] = useState("");
  const [localidade, setLocalidade] = useState("");
  const [uf, setUF] = useState("");

  useEffect(()=>{

    console.log(cep.replace("-","").length);
    if (cep.replace("-","").length == 8){

      //com await para deixar síncrono (criando uma funcao assíncrona)
      const call = async () => {
        let url = "https://viacep.com.br/ws/"+cep.replace("-","")+"/json/";
        let json = await fetch(url).then(data => {
          return data.json();
        });

        console.log(json);
        setLogradouro(json.logradouro);
        setComplemento(json.complemento);
        setbairro(json.bairro);
        setLocalidade(json.localidade);
        setUF(json.uf);
      }
      call()


      /** ou sem await assíncrono */

      /*let url = "https://viacep.com.br/ws/"+cep.replace("-","")+"/json/";
      let json = fetch(url).then(data => {
        return data.json();
      }).then(json => {
        console.log(json);
        setLogradouro(json.logradouro);
        setComplemento(json.complemento);
        setbairro(json.bairro);
        setLocalidade(json.localidade);
        setUF(json.uf);
      });*/

    }

  }, [cep]);
 
  return (
    <View>
        <MaskInput value={cep}
                     onChangeText={setCep}
                     mask={Masks.ZIP_CODE} />

        <Text>{logradouro}</Text>
        <Text>{complemento}</Text>
        <Text>{bairro}</Text>
        <Text>{localidade}</Text>
        <Text>{uf}</Text>
    </View>
  );
}

