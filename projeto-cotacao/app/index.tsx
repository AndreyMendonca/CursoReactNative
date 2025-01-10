import { Image, StyleSheet, Text, View } from "react-native";
import { Button } from "../components/button";
import { useEffect, useState } from "react";
import { getUSD } from "../services/awesomeapi";
import React from "react";

export default function Screen(){

    const[loading, setLoading] = useState(true);
    const[currentValue, setCurrentValue] = useState<number>(0)

    const updateCurrency = async () =>{
        setLoading(true);
        const dolar = await getUSD();
        setLoading(false)
        setCurrentValue(dolar)
    }

    useEffect( () =>{
        updateCurrency();
    }, []);

    return(
        <View style={styles.container}>
            <Image
                source={require('../assets/dolar.png')}
                resizeMode="contain"
                style={styles.logo}
            />

            {
                loading &&
                <Text style={styles.h2}>Carregando....</Text>
            }
            {
                !loading &&
                <>
                    <Text style={styles.h2}>O dolar americano está:</Text>
                    <Text style={styles.currencyText}>{currentValue.toFixed(2)}</Text>
                    <Button
                        label="Atualizar"
                        onPress={updateCurrency}
                    />
                </>
            }

        </View>
    )
}

const styles = StyleSheet.create({
    container :{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0B1C2D'
    },
    logo:{
        height: 180,
        width: 200
    },
    h2:{
        color: '#CCCCCC',
        fontSize: 24,
        marginTop: 30
    },
    currencyText:{
        color: '#FFFFFF',
        fontSize: 52,
        marginTop: 20,
        marginBottom: 50
    }
})