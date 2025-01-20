import { Button, StyleSheet, Text, View } from "react-native";
import { useCounter } from "../stores/couter";

export default function Screen(){

    const count = useCounter(state => state.count);
    const increaseCount = useCounter(state => state.increaseCount)
    const decreaseCount = useCounter(state => state.decreaseCount)
    const set50 = useCounter(state => state.setCount);

    const handlePlusButton = () =>{
        increaseCount();
    }

    const handleMinusButton = () =>{
        decreaseCount();
    }

    const handle50Button = () =>{
        set50(50)
    }

    return (
        <View style={styles.container}>
           <Text style={styles.h1}>CONTAGEM: {count}</Text>
           <Button title="somar" onPress={handlePlusButton}/>
           <Button title="Diminuir" onPress={handleMinusButton}/>
           <Button title="colocar 50" onPress={handle50Button}/>
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        flex:1
    },
    h1: {
        fontSize: 24,
        textAlign: 'center',
        margin: 20
    },
    btn:{
        margin: 10
    }
})