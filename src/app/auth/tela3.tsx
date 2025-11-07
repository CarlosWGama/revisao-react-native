import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, FlatList, Pressable, Alert } from 'react-native';

// https://restful-api.dev/
export default function Tela3Screen() {

  const [ itens, setItens ] = useState<any[]>([]);
  const [ titulo, setTitulo ] = useState<string>('');
  // =======================================
  const buscarItem = async () => {
    setItens([
      {titulo: 'Item A', id:"12312"},
      {titulo: 'Item B', id: '111'},
      {titulo: 'Item C', id: "333"}
    ])
  }
  // ----------------------
  const handleCadastrar = async() => {
    setItens([...itens, {titulo, id: Math.random().toString()}]);
    setTitulo('');
  }
  // ------------------------
  const removeItem = async(item: any) => {
    Alert.alert('Remover item', 'Deseja realmente remover o item?', [
      { text: 'Sim',
        onPress: () => {
          setItens(itens.filter(i => i.id !== item.id));
        }
      },
      { text: 'Não'}
    ])
  }
  // -----------------------
  useEffect(() => {
    buscarItem();
  }, []);
  // =======================================
  return (
    <View style={styles.container}>

        {/* FORMULÁRIO */}
        <View>
          <Text style={{fontSize: 30}}>TITULO</Text>
          <TextInput value={titulo} onChangeText={setTitulo} style={{backgroundColor: 'white'}} placeholder='Digite o titulo do item a ser cadastrado'/>
          <Button title="Cadastrar" onPress={handleCadastrar}/>
        </View>

        {/* ITENS */}
        <View style={{backgroundColor: 'white', marginTop: 20, padding: 10}}>
          <Text style={{fontSize: 20, fontWeight: 'bold', textAlign:'center'}}>Itens</Text>

          <FlatList
            data={itens}
            renderItem={({item}) => 
              <Pressable key={item.id}  onPress={() => removeItem(item)}>
                <Text style={{fontSize: 20, marginBottom: 10}}>{item.titulo}</Text>
              </Pressable>
            } />

        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#afe619',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
