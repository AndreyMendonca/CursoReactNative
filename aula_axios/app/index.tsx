import axios from "axios";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Screen(){

    const [movieCount, setMovieCount] = useState(0);


    const handleClick = async () =>{
        const response = await axios.get(
            'https://reactnative.dev/movies.json',

        )
        if(response.status === 200){
            setMovieCount(response.data.movies.length)
        }
    }

    const handleClickPost = async () =>{
        const response =  await axios.post(
            'https://jsonplaceholder.typicode.com//posts',
            {
                title: 'Novo Post',
                body: 'Cordo do novo post',
                userId: 99
            },
            {
                headers:{
                    "Authorization" : 'Bearer 123'
                }
            }
        )
        if(response.status === 201){
            console.log(response.data)
        }else{
            console.log("error")
        }
    }

    return(
        <View style={styles.container}>
            <Text style={styles.movieCount}>Filmes: {movieCount} </Text>
            <Button title="Carregar method GET" onPress={handleClick} />
            <Button title="Carregar method POST" onPress={handleClickPost}  />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    movieCount:{
        fontSize: 24,
        textAlign: "center",
        fontWeight: "bold"
    },
    btn:{
        marginBottom: 10
    }
})