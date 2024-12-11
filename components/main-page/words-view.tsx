import { ScrollView, StyleSheet, Text, View } from "react-native";
import { ref, get  } from "firebase/database";
import { db } from '../../firebase-config';
import { useEffect, useState } from "react";
import WordsMean from "./words-mean";


export default function WordsView({search}: {search: string}) {
    const [groupedWordsMap, setGroupedWordsMap] = useState<{ [letter: string]: { [word: string]: string } }>({});
    const [show, setShow] = useState(true);

    useEffect(() => {
        loadWords( setShow, search, setGroupedWordsMap);
    }, [search]);

    

        return(
          <ScrollView style={styles.container}>
            {show ? (
                Object.keys(groupedWordsMap).map((letter) => (
                  WordsMean({letter, groupedWordsMap})
                ))
            ) : (
                <View style={styles.error}>
                  <Text>No se encontraron resultados</Text>
                </View>
            )}
          </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      padding: 20,
      backgroundColor: '#fff',
      marginTop: 20,
    },
    error: {
      alignItems: 'center',
      marginTop: 20,
    },
  });

  const loadWords = async ( 
      setShow:(show: boolean) => void,
      search: string,
      setGroupedWordsMap: (groupedWordsMap: { [letter: string]: { [word: string]: string } }) => void
    ) => {

    setShow(true);
    const wordsRef = ref(db, 'words');

    try {
    const snapshot = await get(wordsRef);
    if (snapshot.exists()) {
        const words = snapshot.val();

        organizeWords(words, setShow, setGroupedWordsMap);
        if(search != ''){
            const filteredWords = filterWords(words, search);
  
            if (Object.keys(filteredWords).length > 0) {
              organizeWords(filteredWords, setShow, setGroupedWordsMap);
            } else {
              setShow(false);
              console.log("No se encontraron palabras que coincidan con la búsqueda");
            }
          }
        
    } else {
        setShow(false);
        console.log("No words data available");
    }
    } catch (error) {
    setShow(false);
    console.error("Error getting words: ", error);
    }
};

const organizeWords = (
  words: { [key: string]: { word: string, mean: string } },
  setShow: (show:boolean) => void,
  setGroupedWordsMap: (groupedWordsMap: { [letter: string]: { [word: string]: string } }) => void
) => {

    const tempGroupedWordsMap: { [letter: string]: { [word: string]: string } } = {};

Object.values(words).forEach((wordObj) => {
    const word = wordObj.word;
    const meaning = wordObj.mean;

    if (word && typeof word === 'string' && word.length > 0) {
    const firstLetter = word.charAt(0).toUpperCase();

    if (!tempGroupedWordsMap[firstLetter]) {
        tempGroupedWordsMap[firstLetter] = {};
    }

    tempGroupedWordsMap[firstLetter][word] = meaning;
    } else {
    setShow(false);
    console.warn('Palabra indefinida o vacía:', word);
    }
});

const sortedGroupedWordsMap: { [letter: string]: { [word: string]: string } } = {};
Object.keys(tempGroupedWordsMap)
    .sort((a, b) => a.localeCompare(b))
    .forEach((letter) => {
    sortedGroupedWordsMap[letter] = Object.fromEntries(
        Object.entries(tempGroupedWordsMap[letter]).sort(([a], [b]) => a.localeCompare(b)) 
    );
    });

setGroupedWordsMap(sortedGroupedWordsMap);
};

const filterWords = (words: { [key: string]: { word: string, mean: string } }, searchTerm: string) => {
    const filtered: { [key: string]: { word: string, mean: string } } = {};

    Object.keys(words).forEach(key => {
      const wordObj = words[key];
      const wordText = wordObj.word.toLowerCase().trim(); 
      if (wordText.includes(searchTerm)) { 
        filtered[key] = wordObj;
      }
    });

    return filtered;
  }

  