import { Stack } from "expo-router";
import { Screen } from "expo-router/build/views/Screen";

export default function RootLayout(){
    return (
        <Stack>
            <Stack.Screen name="index"/>
        </Stack>
    )
}