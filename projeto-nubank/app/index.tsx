import { ButtonAction } from "@/components/button-action";
import { ButtonCard } from "@/components/button-card";
import { ButtonGeneral } from "@/components/button-general";
import { Header } from "@/components/header";
import { Text, ScrollView, View } from "react-native";
import Icon from '@expo/vector-icons/FontAwesome6';

export default function Screen(){
    return (
        <ScrollView className="h-screen bg-white">
            <Header/>
            <ButtonCard title="Conta" onPress={() => {}}>
                <Text className="text-2xl font-semibold">R$ 1.000,00</Text>
            </ButtonCard>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mx-2">
                <ButtonAction icon="pix" label="Pix" onPress={()=>{}} />
                <ButtonAction icon="barcode" label="Pagar" onPress={()=>{}} />
                <ButtonAction icon="hand-holding-dollar" label="Pegar emprestado" badge="R$ 12.300" onPress={()=>{}} />
                <ButtonAction icon="money-bill-transfer" label="Transferir" onPress={()=>{}} />
                <ButtonAction icon="receipt" label="Dinheiro" onPress={()=>{}} />
            </ScrollView>

            <View className="px-4 py-6">
                <ButtonGeneral onPress={() => {}}>
                    <View className="flex-row  items-center">
                        <Icon name="credit-card" size={24} color="black"/>
                        <Text className="ml-4 text-lg font-semibold">Meus cartões</Text>
                    </View>
                </ButtonGeneral>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} className="px-4">
                <View className="w-80 mr-4">
                    <ButtonGeneral onPress={() => {}}>
                        <View className="flex-row flex-wrap gap-x-1">
                            <Text className="text-lg">Você tem </Text>
                            <Text className="font-semibold text-lg">R$ 12.300,00</Text>  
                            <Text className="text-lg">disponíveis para emprestimo</Text>
                        </View>
                    </ButtonGeneral>
                </View>
                <View className="w-72 mr-4">
                    <ButtonGeneral onPress={() => {}}>
                        <View className="flex-row flex-wrap gap-x-1">
                            <Text className="font-semibold text-nubank text-lg">Guarde seu dinheiro aqui</Text>  
                            <Text className="text-lg">disponíveis para emprestimo</Text>
                        </View>
                    </ButtonGeneral>
                </View>
            </ScrollView>

            <View className="h-1 bg-gray-200 mt-7"></View>

            <ButtonCard title="Cartão de credito" onPress={() => {}}>
                <Text className="text-lg text-gray-500">Fatura Atual</Text>
                <Text className="text-2xl font-semibold">R$ 1.094,00</Text>
                <Text className="text-lg text-gray-500">Limite disponivel: R$ 1.094,00</Text>
            </ButtonCard>
        </ScrollView>        
    )
}