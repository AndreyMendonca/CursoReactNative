import {Stack} from 'expo-router';

export default function RootLayout(){
    return (
        <Stack screenOptions={{
            headerShown: true
        }}>
            <Stack.Screen name="index" options={{title:"pagina inicial", headerShown:false}}/>
            <Stack.Screen name="about" options={{title:"sobre"}}/>
            <Stack.Screen name="(aux)/termos" options={{title:"termos de uso"}} />
            <Stack.Screen name="auth/login" options={{title:"login"}}/>
            <Stack.Screen name="photos" options={{title:"FOTOS"}} />
            <Stack.Screen name="profile/[name]" />
        </Stack>
    )
}