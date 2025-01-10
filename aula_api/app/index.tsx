import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Movie } from "../types/movie";
import { getMovieList } from "../services/movies";
import { MovieItem, MovieItemSkeleton } from "../components/movie-item";

export default function Screen(){
    const [erro, setErro] = useState(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [movies, setMovies] = useState<Movie[]>([])

    const getMovies = async () =>{
        setLoading(true)
        const moviesList = await getMovieList();
        if(moviesList === false){
            setErro(true)
        }else{
            setMovies(moviesList)
        }
        
        setLoading(false)
    }

    useEffect(() => {
        getMovies();
    }, [])

    return (

        <ScrollView style={styles.container}>

            {loading &&
                <>
                    <MovieItemSkeleton/>
                    <MovieItemSkeleton/>
                    <MovieItemSkeleton/>
                </>
            }


            <Text style={styles.h1}>Filmes</Text>
            <Text>Quantidade de filmes: {movies.length}</Text>
            { !loading && movies.map(movie => (
                <MovieItem key={movie.id} movie={movie}/>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    h1:{
        fontSize: 30,
        margin: 20,
        textAlign: 'center'
    }
})