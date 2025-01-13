import { Button, StyleSheet, Text, View } from "react-native";
import { Area } from "../components/area1";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/auth";

export default function Screen(){

    const auth = useContext(AuthContext);

    const handleClick = () =>{
        auth?.setData("Andrey")
    }

    return (
        <View style={styles.container}>
            <Text>Estou aqui {auth?.data}</Text>
            <Area/>
            <Button title="Alterar nome" onPress={handleClick}/>
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        flex:1
    }
})