import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { Form } from './src/components/form';
//https://dontpad.com/carloswgama
//npx expo start --tunnel
//npm start
//https://expo.dev/
export default function App() {

  const [ email, setEmail ] = useState<string>('');
  const [ senha, setSenha ] = useState<string>('');
  const [ error, setError ] = useState<false|string>(false);
  // ------------------------------------------------
  const handleLogin = () => {
    if (email == 'teste@teste.com' && senha == '123456') {
      setError(false);
    } else {
      setError('Email ou senha incorretos!');
    }
      
  }
  // ------------------------------------------------
  return (
    <View style={styles.container}>
      
     
      <Form 
        error={error}
        setEmail={setEmail}
        setSenha={setSenha}
        handleLogin={handleLogin}
      />

      <StatusBar style="auto" />
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0072be',
    alignItems: 'stretch',
    justifyContent: 'center',
    padding: 30
  },
  loginContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 5
  },
  text: {
    color: 'black'
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'lightgrey',
    marginBottom: 10
  }
});
