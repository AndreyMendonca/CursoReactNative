import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Screen(){
    return (
        <View style={styles.container}>
            <Text>Bem vindo ao sistema</Text>
            <Link href={"about"}>Acesse sobre os sitema</Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})