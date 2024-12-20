import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Footer from "../components/shared/footer";
import SearchBar from "../components/main-page/search-bar";
import WordsView from "../components/main-page/words-view";
import { useState } from "react";
import ResetWords from "../components/main-page/reset-words";


export default function MainPage() {
    const [search, setSearch] = useState('');

    return(
    <View style={theme.container}>
        
            <StatusBar style="auto" />
            <SearchBar setSearch={setSearch}/>
            <ResetWords setSearch={setSearch}/>
            <WordsView search={search}/>
            <Footer/>
       
    </View>
    )
}

const theme = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f0f0f0',
    },
  });