import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { router, Stack } from "expo-router";
import { requireNativeModule } from "expo";

export default function Screen(){

    return (
        <SafeAreaView style={styles.container}>
            <Stack.Screen options={{headerShown:false}} />
            <View style={styles.imageBlock}>
                <Image
                    style={styles.img}
                    source={require("../../assets/perfil.jpg")}
                />
            </View>
            <View style={styles.nameBlock}>
                <Text style={styles.name}>Andrey Mendonça</Text>
            </View>
            <View style={styles.descriptionBlock}>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt recusandae reprehenderit tempore quaerat sint placeat quod dignissimos, consectetur sapiente animi consequuntur voluptatum magnam nobis aliquid reiciendis, at voluptatibus neque assumenda?</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    imageBlock:{
        backgroundColor: "#C8C8C8",
        width: "100%",
        alignItems:"center",
        height: 300,
        justifyContent:"center",
    },
    img:{
        width: 300,
        height: 250,
        borderRadius: 100,
        marginBottom: 20
    },
    nameBlock:{
        width: 300,
        height: 40,
        marginTop: -20,
        alignItems:"center",
        alignSelf: "center"
    },
    name:{
        fontSize: 28,
        fontWeight: 'bold',
        backgroundColor: '#808080',
        borderRadius: 10,
        textAlign: "center"
    },
    descriptionBlock:{
        margin: 20,
        padding: 10,
        borderWidth: 1,
    }
})