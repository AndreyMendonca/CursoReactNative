import { Link, Stack, useLocalSearchParams } from 'expo-router'
import {Pressable, StyleSheet, Text, View} from 'react-native'

export default function Screen(){
    const {name} = useLocalSearchParams();

    return (
        <View style={styles.container}>
            <Stack.Screen options={{title:"Ola " + name}}/>
            <Text>Estou na tela do usuario {name} </Text>
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