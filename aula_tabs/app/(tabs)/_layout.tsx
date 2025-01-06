import FontAwesom from '@expo/vector-icons/FontAwesome'
import { Tabs } from "expo-router";

export default function TabLayout(){
    return(
        <Tabs screenOptions={{headerShown: false}}> 
            <Tabs.Screen
                name="index"
                options={{
                    title:"Inicio",
                    tabBarIcon:({color}) => <FontAwesom size={28} name="home" color={color}/>
                }}
            />
            <Tabs.Screen
                name="about"
                options={{
                    title:"Sobre",
                    tabBarIcon:({color}) => <FontAwesom size={28} name="user" color={color}/>
                }}
            />
        </Tabs>
    )
}