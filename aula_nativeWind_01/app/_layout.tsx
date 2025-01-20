import { Stack } from "expo-router";
import '../global.css';

export default function RootScreen(){
    return(
        <Stack>
            <Stack.Screen name="index"/>
        </Stack>
    )
}