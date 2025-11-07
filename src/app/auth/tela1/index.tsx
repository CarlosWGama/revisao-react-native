import { Link } from 'expo-router';
import { View, Text, StyleSheet, Alert, Button, Image } from 'react-native';
import * as Location from 'expo-location';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';


export default function Tela1Screen() {

  const [ localization, setLocalization ] = useState<any>(null);
  const [ image, setImage ] = useState<any>(null);
  // -----------------------
  const pickImage = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: 'images',
      allowsEditing: true,
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  // --------------------
  const getCurrentLocation = async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('erro', 'Não foi dado a permissão para acessar a localização');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      console.log(location)
      setLocalization(localization);
    }
  // -----------------------------
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tela 1</Text>
      
      <Button title="Localização"
        onPress={getCurrentLocation}
      />

      <Button title="Buscar da galeria"
        onPress={pickImage}
      />


      { image &&
        <Image source={{uri:image}} style={{width: 200, height: 200}} />
      }

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
