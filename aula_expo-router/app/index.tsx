import { Link, router } from 'expo-router'
import { useState } from 'react'
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native'

export default function Screen(){

    const [name, setName] = useState('');

    const handleClick = () =>{
        router.navigate('photos')
    }

    const handlePress = () =>{
        setName("");
    }

    return (
        <View style={styles.container}>
            <Text>
                Estou na pagina de index
            </Text>

            <TextInput
                style={styles.input}
                value={name}
                onChangeText={ x => setName(x)} 
                placeholder='adicone o seu nome'  
            />
            <Link href={"profile/"+ name } onPress={handlePress}>Ir para a pagina de profile</Link>

            <Link href={"/about"} asChild>
                <Pressable style={styles.btn}>
                    <Text>Ir para o sobre</Text>
                </Pressable>
            </Link>
            <Link href={"/termos"}>Ir ver os termos de uso</Link>
            <Link push href={"auth/login"}>Ir para login</Link>

            <Pressable onPress={handleClick} style={styles.btn}>
                <Text>Ir para photos</Text>
            </Pressable>
            <Link href={"photos"}>Ir para phtos</Link>
            
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
    },
    input:{
        borderWidth: 5,
        width: 200,
        borderRadius: 5,
        paddingLeft: 15,
        marginBottom: 10
    }
})