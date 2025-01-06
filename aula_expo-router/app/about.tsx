import { Link } from 'expo-router'
import {Pressable, StyleSheet, Text, View} from 'react-native'

export default function Screen(){
    return (
        <View style={styles.container}>
            <Link href={"/"} asChild>
                <Pressable style={styles.btn}>
                    <Text>Ir para a home</Text>
                </Pressable>
            </Link>
        </View>

    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    btn:{
        width: 200,
        height: 40,
        backgroundColor: '#00FF00',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10
    }
})