import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , TextInput, TouchableOpacity} from 'react-native';
import Cep from './components/cep';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.bloco}>
      <Text style={styles.texto}>Digite seu Cep</Text>

      <TextInput
         placeholder='ex: 11740000'
         keyboardType='numeric'
         style={styles.input}rr
      />

      <TouchableOpacity
      style={styles.botao}
      >
        <Text style={styles.txtBotao}> Buscar</Text>
      </TouchableOpacity>
      <Cep />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#96ECD6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bloco:{
    width:'100%',
    alignItems:'center',
  },
  texto:{
    fontSize:50,
  },
  input:{
    width:'50%',
    marginLeft:'5%',
    borderBottomWidth:2,
    marginTop:30,
    fontSize:30
  },
  botao:{
    width:'100%',
    height:'40%',
    marginTop:40
  },
  txtBotao:{
    fontsize:20,
    textAlign:'center'
  }

  
});
