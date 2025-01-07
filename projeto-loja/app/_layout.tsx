import { Stack } from "expo-router";
import { ScreenStackHeaderConfig } from "react-native-screens";

export default function RootLayout(){
    return (
        <Stack screenOptions={{headerShown: false}}>
            <Stack.Screen name="index" />
            <Stack.Screen name="(tabs)" />
        </Stack>
    )
}