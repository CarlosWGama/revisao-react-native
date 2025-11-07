import { View, Text, StyleSheet, Button, Share, Vibration, Alert, ActivityIndicator } from 'react-native';
import * as Speech from 'expo-speech';
import MapView, { Marker } from 'react-native-maps';
import { useState } from 'react';
import * as Location from 'expo-location';

export default function Tela2Screen() {
  const [ localization, setLocalization ] = useState({latitude: -9.6465403, longitude: -35.7154325});
  const [ markLocation, setMarcaLocation] = useState<any>(false);
  const [ loading, setLoading ] = useState<any>(false);
  // ------------------------
  const buscarLocalização = async () => {
        setLoading(true);
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          Alert.alert('erro', 'Não foi dado a permissão para acessar a localização');
          setLoading(false);
          return;
        }
  
        let location = await Location.getCurrentPositionAsync({});
        
        setLocalization({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude
        });
        setMarcaLocation({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude
        });
        setLoading(false);
  }
  // ----------------------------------------
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tela 2</Text>

      <MapView
        style={{width:300, height:400}}
        onRegionChange={(regio) => {
          setLocalization({
            latitude: regio.latitude,
            longitude: regio.longitude
          })
        }}
        region={{
          latitude: localization.latitude,
          longitude: localization.longitude,
          latitudeDelta: 0.09,
          longitudeDelta: 0.04
        }}
      >
        {markLocation && <Marker
          coordinate={markLocation}
          draggable={true}
          onDragEnd={(e) => {
            setLocalization(e.nativeEvent.coordinate);
          }}
        />}
      </MapView>

      {loading && <ActivityIndicator size={30} color={'blue'}/>}

      <Button
        title="COMPARTILHAR"
        onPress={buscarLocalização}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e20f0f',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
