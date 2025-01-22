import { Link } from 'expo-router';
import {useColorScheme} from 'nativewind'
import { Button, Text, View } from "react-native";

export default function Index() {

    const {colorScheme, setColorScheme} = useColorScheme();
    

    return (
        <View className="h-min-screen bg-white dark:bg-black">
            <Text className="text-personalizada dark:text-white">Texto editado com nativeWind</Text>

            <Text className="text-black dark:text-white">Color scheme {colorScheme}</Text>

            <Button title="DARK" onPress={() => setColorScheme('dark')}/>
            <Button title="LIGHT" onPress={() => setColorScheme('light')}/>
            <Button title="SYSTEM" onPress={() => setColorScheme('system')}/>

            <Link href={"/tela"}>Acessar layout do zero</Link>
            
        </View>
  );
}
