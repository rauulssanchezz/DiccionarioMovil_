import { ref, set } from "firebase/database";
import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { db } from "../firebase-config";




export default function AdminPage() {
    const [word, setWord] = useState('');
    const [meaning, setMeaning] = useState('');
    const [invalid, setInvalid] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
  
    const validation = async () => {
        setInvalid(false);
        setWord(word.toLowerCase().trim());
        setMeaning(meaning.trim());
        if(word === '' || meaning === '' || word === ' ' || meaning === ' '){
            setErrorMessage('Por favor, llena todos los campos');
            setInvalid(true);
            return;
        } else {
            await saveWord(word, meaning);
            setWord('');
            setMeaning('');
        }
    };
  
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>Agregar Palabra y Significado</Text>

                <TextInput
                    style={[styles.input, invalid && styles.inputInvalid]}
                    placeholder="Introduce una palabra"
                    value={word}
                    onChangeText={setWord}
                />

                <TextInput
                    style={[styles.input, invalid && styles.inputInvalid]}
                    placeholder="Introduce el significado de la palabra"
                    value={meaning}
                    onChangeText={setMeaning}
                    multiline
                    numberOfLines={4}
                />

                {invalid && (
                    <Text style={styles.errorText}>{errorMessage}</Text>
                )}

                <TouchableOpacity style={styles.button} onPress={validation}>
                    <Text style={styles.buttonText}>Guardar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
  
const styles = StyleSheet.create({
    container: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
    marginHorizontal: 20,
    },
    card: {
    width: '100%',
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
    inputInvalid: {
    borderColor: '#dc3545', 
    },
    errorText: {
    color: '#dc3545',
    textAlign: 'center',
    marginBottom: 10,
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

const saveWord = async(word: string, mean:string ) => {
    const wordRef = ref(db, 'words/'+word);

    try{
      await set(wordRef, {
        word: word,
        mean: mean
      });
      console.log('Data saved successfully');
    } catch(err){
      console.log('Error',err);
    }
  }