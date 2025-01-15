import { Button, StyleSheet, Text, View } from "react-native";
import { Area } from "../components/area1";
import { useContext, useReducer, useState } from "react";
import { AuthContext } from "../contexts/auth";
import { ageReducer } from "../reducers/age";

export default function Screen(){

    const [ageReducerState, ageReducerDispatch] = useReducer(ageReducer, 10);

    const auth = useContext(AuthContext);

    const handleClick = () =>{
        auth?.setData("Andrey")
    }

    const handleIncreaseAge = () =>{
        ageReducerDispatch({
            type: 'INCREASE'
        })
    }

    return (
        <View style={styles.container}>
            <Text>Eu tenho {ageReducerState} anos</Text>
            <Button title="Aumentar idade reducer" onPress={handleIncreaseAge}/>
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