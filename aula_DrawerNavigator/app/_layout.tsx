import { Stack } from "expo-router";
import { Drawer } from 'expo-router/drawer';
import { StyleSheet, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout(){
    return (
        <GestureHandlerRootView>
            <Drawer screenOptions={{
                //lado que vai abrir
                drawerPosition: 'left',

                //comportamento do elemento
                drawerType: 'front',

                //cor do elemento selecionado, usar Inactive para configurar os que não estão ativos
                drawerActiveTintColor: '#FF0000',
                //cor do background -> drawerActiveBackgroundColor: '#FFFF00'
                
                drawerContentStyle:{
                    backgroundColor: '#FF0000',
                    width: 150
                },
                drawerContentContainerStyle:{
                    backgroundColor: '#FFFF00'
                },
                drawerStyle:{
                    backgroundColor:'#0000FF',
                    width: 300
                }
            }}>
                <Drawer.Screen
                    name="index"
                    options={{
                        drawerLabel: 'Inicio', 
                        headerTitle: 'Home', 
                        drawerIcon: ({color}) => <View style={{            
                            width: 24,
                            height: 24,
                            backgroundColor: {color}
                        }}></View>
                    }}
                />
                <Drawer.Screen
                    name="about"
                    options={{drawerLabel: 'Sobre', headerTitle: 'Autor'}}
                />
            </Drawer>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    opcao:{
        width: 24,
        height: 24,
        backgroundColor: '#FF0000'
    }
})