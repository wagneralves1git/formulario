import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSignIn(){
    if(username === '' || email === '' || password === ''){
      alert("Preencha os campos que faltaram!!")
      return;
    }

    const data = {
      username,
      email,
      password,      
    }

    console.log(data);

  }

  return (
    <View style={styles.container}>

      <Text sttyle ={styles.title}>Bem vindo(a)</Text>

      <TextInput
        style={styles.input}
        onChangeText={setUsername}
        value={username}
        placeholder="Seu Username"
      />

      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Digite seu email"
      />

      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Sua Senha"
        secureTextEntry={true}
      />

      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Acessar</Text>
      </TouchableOpacity>
    </View>
  );
}

  const styles = StyleSheet.create({
    container:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F0F4FF',
      paddingHorizontal: 18
    },
    title:{
      fontsize: 64,
      marginBottom: 54,
      color: '#121212', 
      fontWeight: 'bold'
    },
    input:{
      width: '100%',
      height: 40,
      backgroundColor: '#FFF',
      marginBottom: 10

    }
  }
  )