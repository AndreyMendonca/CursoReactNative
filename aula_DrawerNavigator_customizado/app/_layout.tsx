import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from 'expo-router/drawer';
import { CustomDrawer } from "../components/custom-drawer";

export default function RootLayout(){
    return(
        <GestureHandlerRootView>
            <Drawer 
                drawerContent={(props) => <CustomDrawer {...props}/>}
            >
                <Drawer.Screen
                    name="index"
                    options={{
                        drawerLabel: 'Inicio', 
                        headerTitle: 'Home',
                    }}
                />
                <Drawer.Screen
                    name="about"
                    options={{
                        drawerLabel: 'About', 
                        headerTitle: 'Sobre',
                    }}
                />
            </Drawer>
        </GestureHandlerRootView>
    )
}