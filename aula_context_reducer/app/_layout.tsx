import { Stack } from "expo-router";
import { AuthProvider } from "../contexts/auth";

export default function RootLayout(){
    return (
        <AuthProvider>
            <Stack>
                <Stack.Screen name="index"/>
            </Stack>
        </AuthProvider>
    )
}