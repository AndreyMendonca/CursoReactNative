import { Link } from 'expo-router'
import {Pressable, StyleSheet, Text, View} from 'react-native'

export default function Screen(){
    return (
        <View style={styles.container}>
            <Text>Estou no screen</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})