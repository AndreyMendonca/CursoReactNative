import { StyleSheet, Text, View } from "react-native";
import { Movie} from "../types/movie"

type Props = {
    movie: Movie;
}

export const MovieItem = ({movie} : Props) =>{
    return (
        <View style={styles.container}>
            <Text style={styles.h2}>Nome: {movie.title} </Text>
            <Text style={styles.launchDate}>Data de lançamento: {movie.releaseYear} </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#DDDDDD',
        padding: 20,
        margin: 10,
        borderRadius: 10
    },
    h2:{
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold'
    },
    launchDate:{
        marginTop: 10,
        textAlign: 'center'
    },
    skeletonH2:{
        backgroundColor: '#CCCCCC',
        height: 30,
        borderRadius: 10,
        marginBottom: 10
    },
    skeletonLauchDate:{
        backgroundColor: '#CCCCCC',
        height: 15,
        borderRadius: 10
    }
})

export const MovieItemSkeleton = () => {
    return (
        <View style={styles.container}>
            <View style={styles.skeletonH2}></View>
            <View style={styles.skeletonLauchDate}></View>
        </View>
    )
}