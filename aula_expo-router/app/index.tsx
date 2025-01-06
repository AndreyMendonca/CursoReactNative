import { Link, router } from 'expo-router'
import {Pressable, StyleSheet, Text, View} from 'react-native'

export default function Screen(){

    const handleClick = () =>{
        router.navigate('photos')
    }

    return (
        <View style={styles.container}>
            <Text>
                Estou na pagina de index
            </Text>

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
    }
})