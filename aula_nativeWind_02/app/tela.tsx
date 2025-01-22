import { CustomButton } from "@/components/custom-button";
import { Logo } from "@/components/logo";
import { Text, View } from "react-native";

export default function Screen(){
    return(
        <View className="h-screen bg-blue-700 justify-center items-center">
            <Logo/>
            <View className="w-full px-5 mt-20">
                <CustomButton label="Cadastre-se" onPress={() => {}}/>
                <CustomButton label="Faça o login" onPress={() => {}}/>
            </View>
        </View>
    )
}