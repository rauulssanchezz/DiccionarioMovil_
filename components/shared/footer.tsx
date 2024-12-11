import { Linking, StyleSheet, Text, View } from "react-native";

export default function Footer() {

    const openLinkSearch = () => {
        Linking.openURL('https://icons8.com/icon/82712/search')
        .catch(err => console.error('An error occurred', err));
    }

    const openLinkIcons8 = () => {
        Linking.openURL('https://icons8.com')
        .catch(err => console.error('An error occurred', err));
    }

    return (
        <View style={styles.footer}>
            <Text onPress={openLinkSearch} style = {styles.link}>
                Search
            </Text>
            <Text>
                icon from
            </Text>
            <Text onPress={openLinkIcons8} style = {styles.link}>
                Icons8
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        padding: 30,
        backgroundColor: '#f0f0f0',
        alignItems: 'center',
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        bottom: 0,
    },
    link: {
        color: 'blue',
        textDecorationLine: 'underline',
        margin: 5
      }
})