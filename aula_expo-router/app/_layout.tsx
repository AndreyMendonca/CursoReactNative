import {Stack} from 'expo-router';

export default function RootLayout(){
    return (
        <Stack screenOptions={{
            headerShown: true
        }}>
            <Stack.Screen name="index" options={{title:"pagina inicial", headerShown:false}}/>
            <Stack.Screen name="about" options={{title:"sobre"}}/>
        </Stack>
    )
}