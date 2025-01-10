import { GestureHandlerRootView } from "react-native-gesture-handler";
import {Drawer} from 'expo-router/drawer'

export default function RootLayout(){
    return(
        <GestureHandlerRootView>
            <Drawer>
                <Drawer.Screen
                    name="index"
                    options={{title: 'Dolar Americano'}}
                />
                <Drawer.Screen
                    name="euro"
                    options={{title: 'Euro'}}
                />
            </Drawer>
        </GestureHandlerRootView>
    )
}