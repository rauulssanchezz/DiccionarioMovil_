import { StyleSheet, Text, TouchableOpacity, View } from "react-native";




export default function ResetWords({setSearch}:{setSearch: (search: string) => void}) {

    const resetWords = () => {
        setSearch('');
    }

    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={resetWords} style={styles.button}>
                <Text style={styles.text}>Resetear palabras</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#f00',
        padding: 10,
        borderRadius: 10,
    },
    text: {
        color: '#fff',
    }
})