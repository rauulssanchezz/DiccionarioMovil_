import { useState } from "react";
import { Image, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";


const searchImg = require('../../assets/search.png');

export default function SearchBar({setSearch}:{setSearch: (search: string) => void}) {

    const [searchText, setSearchText] = useState('');

    const handleSearch = (text: string) => {
        setSearch(text.toLowerCase());
        setSearchText('');
    }

    return(
        <View style = {styles.searchBar}>
            <TextInput  placeholder="Buscar..." value={searchText} onChangeText={setSearchText} style = {styles.input} />
            <TouchableOpacity onPress={() => handleSearch(searchText)} style = {styles.button}>
                <Image source={searchImg} style = {styles.img} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    searchBar: {
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        padding: 5,
        alignItems: 'center',
        marginTop: 50,
        borderRadius: 15,
        margin: 30,
    },
    img: {
        width: 30, 
        height: 30,
        resizeMode: 'contain',
    },
    button: {
        borderRadius: 10, 
        overflow: 'hidden', 
        justifyContent: 'center', 
        alignItems: 'center',  
      },
    input: {
        width: '90%',
    }
})