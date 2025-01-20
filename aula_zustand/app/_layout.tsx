import { Stack } from "expo-router";
import { ScreenStack } from "react-native-screens";

export default function RootLayout(){
    return (
        <Stack>
            <Stack.Screen name="index"/>
        </Stack>
    )
}