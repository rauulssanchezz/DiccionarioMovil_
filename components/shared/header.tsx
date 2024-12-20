import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";



const books = require('../../assets/books.png');
const userImg = require('../../assets/user.png');

export default function Header({ navigation }: { navigation: any }) {

    return(
        <View style={styles.header}>
            <View style = {{flexDirection: 'row', alignItems: 'center'}}>
                <Text style = {{ fontSize:30 }}>Diccionario</Text>
                <Image source={books} style = {styles.img}/>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('LoginPage')}>
                <Image source={userImg} style = {styles.img}/>
            </TouchableOpacity>
    </View>
    )
    

}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontWeight: 'bold',
    },

    img: {
        width: 40, 
        height: 40,
        resizeMode: 'contain',
    }
})