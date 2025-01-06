import { Link } from 'expo-router'
import {Pressable, StyleSheet, Text, View} from 'react-native'

export default function Screen(){
    return (
        <View style={styles.container}>
            <Text>
                Olá estou aqui functionando
            </Text>

            <Link href={"/about"} asChild>
                <Pressable style={styles.btn}>
                    <Text>Ir para o sobre</Text>
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
        backgroundColor: '#FF0000',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10
    }
})