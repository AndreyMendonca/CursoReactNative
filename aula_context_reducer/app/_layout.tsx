import { Stack } from "expo-router";
import { AuthProvider } from "../contexts/auth";
import { Providers } from "../contexts/providers";

export default function RootLayout(){
    return (
        <Providers>
            <Stack>
                <Stack.Screen name="index"/>
            </Stack>
        </Providers>
    )
}