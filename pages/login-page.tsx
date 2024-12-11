import { StyleSheet, Text, View } from "react-native";
import Header from "../components/shared/header";




export default function LoginPage({ navigation }: { navigation: any }) {
    return(
        <View style={theme.container}>
            <Text>Login Page</Text>
        </View>
    )
}

const theme = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f0f0f0',
    },
  });