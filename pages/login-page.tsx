import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import { ref, get } from "firebase/database";
import { db } from "../firebase-config";




export default function LoginPage({ navigation }: { navigation: any }) {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        const login: boolean = await checkUserCredentials({ name, password });
        if(login){
          navigation.navigate('AdminPage');
        }
        
        console.log('Iniciando sesión...', { name, password });
    };

    return (
        <View style={styles.container}>
        <View style={styles.card}>
            <Text style={styles.title}>Iniciar Sesión</Text>

            <TextInput
            style={styles.input}
            placeholder="Introduce tu nombre de usuario"
            value={name}
            onChangeText={setName}
            autoCapitalize="none"
            keyboardType="default"
            />

            <TextInput
            style={styles.input}
            placeholder="Introduce tu contraseña"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            />

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Iniciar Sesión</Text>
            </TouchableOpacity>
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 100,
    backgroundColor: '#f7f7f7', 
  },
  card: {
    width: 400,
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 15,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#007bff',
    borderRadius: 5,
    paddingVertical: 15,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});


const checkUserCredentials = async (
  {
    name, 
    password, 
  }:
  {
    name: string, 
    password: string, 
  }
): 
Promise<boolean> => {
  const userRef = ref(db, 'user/'+'1a');

  try {

    const snapshot = await get(userRef);

    if (snapshot.exists()) {
      const user = snapshot.val();

      if (user.name === name && user.password === password) {
        return true;
      } else {
        console.log('Credenciales incorrectas');
        return false;
      }
    } else {
      console.log('No data available');
      return false;
    }
  } catch (error) {
    console.error('Error al obtener datos de Firebase:', error);
    return false;
  }
}
