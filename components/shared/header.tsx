import { Image, StyleSheet, Text, View } from "react-native";



const books = require('../../assets/books.png');
const userImg = require('../../assets/user.png');

export default function Header() {

    return(
        <View style={styles.header}>
            <View style = {{flexDirection: 'row', alignItems: 'center'}}>
                <Text style = {{ fontSize:30 }}>Diccionario</Text>
                <Image source={books} style = {styles.img}/>
            </View>
            <View>
                <Image source={userImg} style = {styles.img}/>
            </View>
    </View>
    )
    

}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        padding: 20,
        alignItems: 'center',
        marginTop: 50,
        justifyContent: 'space-between',
    },

    img: {
        width: 60, 
        height: 60,
        resizeMode: 'contain',
    }
})