import { StyleSheet, Text, View } from "react-native";




export default function WordsMean({letter, groupedWordsMap}: {letter: string, groupedWordsMap: { [letter: string]: { [word: string]: string } }}) {
    return(
        <View key={letter} style={styles.section}>
                <Text style={styles.letter}>{letter}</Text>
                {Object.entries(groupedWordsMap[letter]).map(([word, definition]) => (
                <View key={word} style={styles.wordItem}>
                    <Text style={styles.word}>
                        {word}:
                    </Text>
                    <Text>
                        {definition}
                    </Text>
                </View>
                ))}
            </View>
    )
}

const styles = StyleSheet.create({
    section: {
        marginBottom: 20,
      },
      letter: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
      },
      wordItem: {
        marginLeft: 10,
        marginTop: 5,
      },
      word: {
        fontSize: 20,
        fontWeight: 'bold',
      },
})