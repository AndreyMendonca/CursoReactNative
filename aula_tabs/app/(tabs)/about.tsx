import { StyleSheet, Text, Touchable, View } from "react-native";

export default function Screen(){
    return (
        <View style={styles.container}>
            <Text>Estou na tela about</Text>
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