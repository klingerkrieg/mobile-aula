import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';
import Constants from 'expo-constants';

export default function CameraScreen({ navigation }) {
  const [cameraPermission, setCameraPermission] = useState(null);
  const [galleryPermission, setGalleryPermission] = useState(null);

  const [camera, setCamera] = useState(null);
  const [imageUri, setImageUri] = useState(null);
  const [type, setType] = useState(Constants.Type.back);

  const permisionFunction = async () => {
    // here is how you can get the camera permission
    const cameraPermission = await Camera.requestCameraPermissionsAsync();

    setCameraPermission(cameraPermission.status === 'granted');

    const imagePermission = await ImagePicker.getMediaLibraryPermissionsAsync();
    console.log(imagePermission.status);

    setGalleryPermission(imagePermission.status === 'granted');

    if (
      imagePermission.status !== 'granted' &&
      cameraPermission.status !== 'granted'
    ) {
      alert('Permission for media access needed.');
    }
  };

  useEffect(() => {
    permisionFunction();
  }, []);

  const takePicture = async () => {
    if (camera) {
      //captura a imagem e salva em um diretório temporário
      const data = await camera.takePictureAsync(null);
      console.log(data);
      setImageUri(data.uri);
      //quebramos a uri para obter somente o nome da imagem
      let name = data.uri.split("/");
      name = name[name.length-1];

      //cria o diretório para guardar as imagens permanentemente
      FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'photos').catch(e => {
        console.log(e, 'Directory exists');
      });

      //cria as variaveis com o caminho final da foto
      let path = FileSystem.documentDirectory+"photos"
      let photoPath = path + `/${name}`

      //move a foto para o path permanente
      FileSystem.moveAsync({
        from: data.uri,
        to: photoPath,
      }).then((resp) => {
        console.log("salvo")
        //move a foto para a galeria do smartphone
        MediaLibrary.saveToLibraryAsync(photoPath);
      });

      //lista todas as fotos que estão no diretório
      console.log("listando")
      console.log(path)
      var fotos = [];
      FileSystem.readDirectoryAsync(path).then((result) => {
        for (var i = 0; i < result.length; i++){
          console.log(result[i])
          fotos.push(path+'photos/'+result[i])
        }
        console.log("imprime a lista de fotos:")
        console.log(fotos)
        //a partir daqui voce poderia exibir todas as fotos salvas em algum ScrollView
      })
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
      presentationStyle: 0
    });

    console.log(result);
    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.cameraContainer}>
        <Camera
          ref={(ref) => setCamera(ref)}
          style={styles.fixedRatio}
          type={type}
          ratio={'1:1'}
        />
      </View>

      <Button title={'Take Picture'} onPress={takePicture} />
      <Button title={'Gallery'} onPress={pickImage} />
      {imageUri && <Image source={{ uri: imageUri }} style={{ flex: 1 }} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cameraContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  fixedRatio: {
    flex: 1,
    aspectRatio: 1,
  },
  button: {
    flex: 0.1,
    padding: 10,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
});

